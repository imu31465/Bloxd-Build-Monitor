export const id = 139;
export const ids = [139];
export const modules = {
  40476: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      d: () => FC,
      e: () => nC,
      h: () => wC,
      k: () => fC,
      m: () => qC
    });
    class QC extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function wC(CC) {
      return CC instanceof RangeError && /call stack/i.test(CC.message) || CC instanceof Error && "InternalError" === CC.name && /recursion/i.test(CC.message)
    }
    const bC = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function nC(CC) {
      var zC;
      return CC instanceof WebAssembly.RuntimeError || CC instanceof QC || wC(CC) && bC.test(null !== (zC = CC.stack) && void 0 !== zC ? zC : "")
    }

    function fC(CC, zC) {
      if (nC(CC)) throw CC;
      console.error(zC, CC)
    }

    function oC(CC, zC, ZC, wC, bC) {
      if (zC % wC !== 0 || zC + ZC > CC.byteLength) throw new QC(`${bC}: ${ZC} bytes at ${zC}, ${wC}-aligned, outside ${CC.byteLength} bytes of memory`)
    }

    function qC(CC, zC, ZC, QC, wC) {
      return 0 === ZC ? null : (oC(zC, ZC, QC * CC.BYTES_PER_ELEMENT, CC.BYTES_PER_ELEMENT, wC), new CC(zC, ZC, QC))
    }

    function FC(CC, zC, ZC, QC, wC) {
      return 0 === zC ? null : (oC(CC, zC, ZC, QC, wC), new DataView(CC, zC, ZC))
    }
  },
  40542: (CC, zC, ZC) => {
    ZC.d(zC, {
      $: () => VC,
      A: () => rC,
      C: () => tC,
      E: () => aC,
      H: () => sC,
      K: () => jC,
      O: () => Qz,
      Q: () => DC,
      R: () => TC,
      T: () => yC,
      W: () => BC,
      Z: () => bz,
      d: () => wz,
      db: () => KC,
      h: () => qz,
      l: () => kC,
      o: () => Zz,
      q: () => UC,
      t: () => zz,
      w: () => Cz,
      y: () => oz
    });
    var QC = ZC(310),
      wC = ZC(249),
      bC = ZC(253),
      nC = ZC(20),
      fC = ZC(2800),
      oC = ZC(644),
      qC = ZC(4453),
      FC = ZC(2776),
      WC = ZC(3432),
      NC = ZC(77),
      MC = ZC(304),
      gC = ZC(38),
      SC = ZC(296),
      pC = ZC(94),
      PC = ZC(607),
      GC = ZC(107),
      RC = ZC(102),
      AC = ZC(4733),
      xC = ZC(40549),
      JC = ZC(1724),
      IC = ZC(40552),
      iC = ZC(40561);
    const vC = "bloxd-webgpuOffAfterLoss",
      eC = "context:webgl",
      hC = "probe:threw";

    function KC(CC) {
      let zC;
      try {
        zC = CC.getContext("webgl", {
          powerPreference: GC.b
        })
      } catch {
        zC = null
      }
      if (null === zC) return null;
      let ZC = null;
      try {
        const CC = zC.getParameter(zC.MAX_TEXTURE_SIZE);
        ZC = "number" === typeof CC && CC > 0 ? CC : null
      } catch {
        ZC = null
      }
      try {
        var QC;
        null === (QC = zC.getExtension("WEBGL_lose_context")) || void 0 === QC || QC.loseContext()
      } catch {}
      return ZC
    }
    const YC = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      dC = "mali_valhall",
      mC = new Set(["nvidia_pre_turing"]);

    function HC(CC) {
      return function(CC) {
        try {
          return CC()
        } catch {
          return null
        }
      }((() => {
        var zC, ZC, QC, nC;
        const fC = null !== (zC = null === (ZC = CC.info) || void 0 === ZC ? void 0 : ZC.vendor) && void 0 !== zC ? zC : "";
        return "windows" === (0, NC.getOperatingSystem)() && "" !== fC && "intel" !== (0, NC.normaliseGpuVendor)(fC) ? null : ((0, NC.seedGpuVendor)(fC), oC = (0, wC.k)(), qC = (0, bC.f)(fC, null !== (QC = null === (nC = CC.info) || void 0 === nC ? void 0 : nC.architecture) && void 0 !== QC ? QC : ""), YC.has(oC) ? "android_arm" === oC && qC === dC ? "webgpu_default" : "webgl_default" : null);
        var oC, qC
      }))
    }

    function EC() {
      var CC;
      return {
        gpu: null !== (CC = navigator.gpu) && void 0 !== CC ? CC : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(CC) {
          let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xC.b;
          try {
            zC = CC.getContext("webgl")
          } catch {
            zC = null
          }
          if (null === zC) return [eC];
          const QC = [];
          try {
            for (const wC of ZC.extensions) null === zC.getExtension(wC) && QC.push(wC);
            for (const [wC, bC] of Object.entries(ZC.limits)) {
              const CC = zC[wC],
                ZC = "number" === typeof CC ? zC.getParameter(CC) : null;
              ("number" !== typeof ZC || ZC < bC) && QC.push(`limit:${wC}`)
            }
            const CC = zC.getShaderPrecisionFormat(zC.VERTEX_SHADER, zC.HIGH_FLOAT);
            (null === CC || CC.precision < ZC.vertexHighFloatBits) && QC.push("precision:vertex_high_float")
          } catch {
            QC.push(hC)
          }
          try {
            var wC;
            null === (wC = zC.getExtension("WEBGL_lose_context")) || void 0 === wC || wC.loseContext()
          } catch {}
          return QC
        }(document.createElement("canvas")),
        offAfterLoss: CC => lC((() => CC ? (0, SC.H)() : nC.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: CC => lC((() => (0, pC.g)(CC))),
        intelGen9: CC => lC((() => (0, pC.r)(CC))),
        storeIntelGen9Verdict: CC => {
          gC.i.setItem(pC.I, CC)
        },
        gpuClassWebGlArm: HC,
        storeGpuClassVerdict: CC => {
          gC.i.setItem(pC.G, CC)
        },
        gpuClassOnWebGl: CC => (0, PC.e)(CC),
        wasmArmOnWebGl: iC.h,
        storeWasmArmVerdict: CC => {
          gC.i.setItem(pC.P, CC)
        },
        override: () => function() {
          if ((0, fC.k)("render") && "webgl1" === (0, fC.j)("renderer")) return "webgl1";
          const CC = [() => new URLSearchParams(window.location.search).get(FC.b), () => gC.i.getItem(FC.e), () => {
            const CC = localStorage.getItem(vC);
            return null !== CC && localStorage.removeItem(vC), "1" === CC ? "webgl2" : null
          }];
          for (const zC of CC) {
            let CC = null;
            try {
              CC = XC(zC())
            } catch {}
            if (null !== CC) return CC
          }
          return null
        }(),
        claimed: () => XC((0, oC.h)()),
        webGpuSetting: () => {
          const CC = gC.i.getItem(QC.hc);
          return "boolean" === typeof CC ? CC : null
        },
        heldBack: () => PC.h,
        storeHoldbackSpared: CC => {
          gC.i.setItem(pC.F, CC)
        },
        intelGen9OnWebGl: () => PC.k,
        zg: () => lC((() => (0, WC.e)(NC.featureFlags.settings.canUseShaderPacks))),
        windows: () => lC((() => "windows" === (0, NC.getOperatingSystem)()))
      }
    }

    function lC(CC) {
      try {
        return CC()
      } catch {
        return !1
      }
    }

    function XC(CC) {
      return "lite" === CC ? "webgpu" : "webgl2" === CC || "babylon" === CC ? "webgl" : null
    }
    async function cC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EC();
      const zC = await async function(CC) {
        const zC = function(CC) {
            const zC = CC.override(),
              ZC = CC.webGpuSetting(),
              QC = null === zC && !0 !== ZC && CC.zg(),
              wC = null !== zC || null !== ZC || QC ? null : CC.claimed(),
              bC = null !== zC ? "override" : !0 === ZC ? "setting" : QC ? "pack" : !1 === ZC ? "setting" : null !== wC ? "claim" : "default",
              nC = function(CC) {
                return "override" === CC || "setting" === CC
              }(bC);
            if ("webgl" === zC || "webgl1" === zC || "webgl" === wC || "setting" === bC && !1 === ZC) return {
              source: bC,
              asked: nC,
              refused: "not_requested"
            };
            if (!CC.gpu) return {
              source: bC,
              asked: nC,
              refused: "no_webgpu_api"
            };
            const fC = "default" === bC && CC.heldBack();
            if (fC && !CC.windows()) return {
              source: bC,
              asked: nC,
              refused: "webgl_holdback"
            };
            if (!nC && CC.offAfterLoss("pack" === bC)) return {
              source: bC,
              asked: nC,
              refused: fC ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: bC,
              asked: nC,
              heldBack: fC,
              gpu: CC.gpu
            }
          }(CC),
          {
            source: ZC
          } = zC,
          QC = !zC.asked,
          wC = "gpu" in zC && zC.heldBack,
          nC = function(CC) {
            return wC && "none" !== CC ? {
              reason: "webgl_holdback",
              adapter: null,
              source: ZC
            } : {
              reason: CC,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: ZC
            }
          };
        if (!("gpu" in zC)) return nC(zC.refused);
        let fC;
        try {
          fC = await (0, JC.n)((0, RC.n)(zC.gpu, {
            compatibility: zC.asked
          }), nz, `requestAdapter didn't settle in ${nz/1e3} s`)
        } catch {
          return nC("adapter_error")
        }
        if ("string" === typeof fC) return nC(fC);
        const oC = (0, RC.e)(fC);
        if ((0, RC.j)(fC)) return nC("software_adapter", oC);
        const qC = CC.windows() && function(CC) {
          return mC.has((0, bC.f)(CC.vendor, CC.architecture))
        }(oC);
        if (CC.storeHoldbackSpared(qC), wC && !qC) return nC("webgl_holdback");
        const FC = CC.intelGen9(fC);
        CC.storeIntelGen9Verdict(FC);
        const WC = FC ? null : CC.gpuClassWebGlArm(fC);
        CC.storeGpuClassVerdict(null !== WC && void 0 !== WC && WC);
        const NC = CC.wasmArmOnWebGl(oC);
        if (CC.storeWasmArmVerdict(NC), QC && CC.oldIntelDriver(fC)) return nC("old_intel_driver", oC);
        if ("default" === ZC && FC && CC.intelGen9OnWebGl()) return nC("intel_gen9", oC);
        if ("default" === ZC && null !== WC && CC.gpuClassOnWebGl(WC)) return nC("gpu_class_webgl", oC);
        if ("default" === ZC && NC) return nC("gpu_wasm_arm", oC);
        return nC("none", oC)
      }(CC);
      if ("none" === zC.reason) return {
        backend: "webgpu",
        ...zC
      };
      if ("webgl1" !== CC.override() && CC.webgl2()) return {
        backend: "webgl",
        ...zC
      };
      const ZC = CC.webgl1();
      return 0 === ZC.length ? {
        backend: "webgl1",
        ...zC
      } : {
        missing: ZC
      }
    }
    let uC = !1;
    async function rC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EC();
      if (null === CC) return null;
      const ZC = await cC(zC);
      return uC = !("missing" in ZC) && "webgpu" === ZC.backend && "claim" === ZC.source, "missing" in ZC ? ZC : {
        ...ZC,
        load: CC[ZC.backend]
      }
    }
    async function sC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EC().gpu,
        QC = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== CC.backend) return !1;
      const wC = LC(CC, zC, "indirectDraws", "off", "on");
      if (null !== wC) return wC;
      if (null !== CC.adapter && (0, pC.t)(CC.adapter, QC)) return !0;
      if (null === ZC) return !1;
      try {
        var bC;
        const CC = await (0, JC.n)(ZC.requestAdapter({
          powerPreference: "low-power"
        }).then((async CC => (null !== CC && await (0, RC.f)(CC), CC))), nz, `the low-power requestAdapter didn't settle in ${nz/1e3} s`);
        return (0, pC.t)(null !== (bC = null === CC || void 0 === CC ? void 0 : CC.info) && void 0 !== bC ? bC : {}, QC)
      } catch (nC) {
        return nC instanceof JC.g
      }
    }

    function TC(CC, zC, ZC) {
      if ("webgpu" !== CC.backend) return !1;
      const QC = LC(CC, zC, "terrainFetch", "texture", "storage");
      return null !== QC ? QC : null !== CC.adapter && (0, pC.k)(CC.adapter, ZC)
    }

    function aC(CC, zC) {
      if ("webgpu" !== CC.backend) return !1;
      const ZC = LC(CC, zC, "skyOrder", "early", "last");
      return null !== ZC ? ZC : null !== CC.adapter && (0, bC.f)(CC.adapter.vendor, CC.adapter.architecture) === dC
    }

    function tC(CC, zC) {
      if ("webgpu" !== CC.backend) return !1;
      const ZC = LC(CC, zC, "uploadCopies", "off", "on");
      return null !== ZC ? ZC : null !== CC.adapter && "powervr_rogue" === (0, bC.f)(CC.adapter.vendor, CC.adapter.architecture)
    }

    function DC(CC, zC, ZC) {
      if ("webgpu" !== CC.backend) return !1;
      const QC = LC(CC, zC, "sceneDepth", "off", "on");
      return null !== QC ? QC : null !== CC.adapter && (0, pC.n)(CC.adapter, ZC)
    }

    function jC(CC, zC) {
      return "webgl" === CC.backend ? LC(CC, zC, "instancedTerrain", "1", "0") : null
    }

    function yC(CC) {
      return "webgpu" !== CC.backend || null === CC.adapter || !(0, SC.I)(CC.adapter)
    }

    function LC(CC, zC, ZC, QC, wC) {
      const bC = new URLSearchParams(zC).get(ZC),
        nC = null !== bC && void 0 !== bC ? bC : (0, oC.e)(ZC);
      return nC !== QC && nC !== wC ? null : (uC ||= null === bC && "webgpu" === CC.backend, nC === QC)
    }

    function UC(CC) {
      return null !== CC && "missing" in CC
    }

    function BC(CC) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !VC()) ? function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC.b;
        try {
          const ZC = "start_failed" === CC || "pipeline_failed" === CC,
            QC = zC.turnOffWebGpuAfterDeviceLoss(ZC ? "visible" : (0, SC.n)((0, MC.g)()), ZC);
          return uC && (0, oC.v)("webgpuLoss"), zC.isWebGpuOffAfterLoss() && "webgpu" === XC(gC.i.getItem(FC.e)) && gC.i.removeItem(FC.e), (0, fC.k)("webgpuloss") && (0, qC.d)((zC => {
            zC.noteWebGpuLoss("wasm", QC ? CC : `${CC}, which storage didn't keep`, null)
          })), QC
        } catch {
          return !1
        }
      }(CC) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const OC = "framePacing";

    function kC(CC) {
      const zC = new URLSearchParams(CC).get(OC);
      return null !== zC && /^\d{1,9}$/.test(zC) ? Number(zC) : void 0
    }

    function VC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === XC(new URLSearchParams(CC).get(FC.b))
      } catch {
        return !1
      }
    }

    function Cz(CC) {
      return !!zz(CC) || CC instanceof Error && !(CC instanceof WebAssembly.RuntimeError) && CC.message.startsWith(`${AC.o.RenderSurfaceUnusable}:`)
    }

    function zz(CC) {
      const {
        name: zC,
        message: ZC
      } = null !== CC && void 0 !== CC ? CC : {};
      return "InvalidStateError" === zC && "string" === typeof ZC && ZC.startsWith("GPUDevice.")
    }

    function Zz(CC) {
      const zC = CC;
      return "function" === typeof zC.TZC && "function" === typeof zC.aZC ? zC : null
    }

    function Qz(CC) {
      return "function" === typeof CC.ap ? CC : null
    }
    const wz = "openRenderer";

    function bz(CC) {
      const zC = null === CC || void 0 === CC ? void 0 : CC.NbC();
      return void 0 === zC ? void 0 : new Error(zC)
    }
    const nz = 5e3,
      fz = 15e3;

    function oz(CC, zC, ZC, QC, wC, bC) {
      return (0, JC.n)(function(CC, zC, ZC, QC, wC, bC) {
        return (0, IC.f)(CC, zC, (() => CC.ap(ZC, QC, wC, bC.indirectHangs, bC.storagePullBreaks, bC.splitPassBreaks, bC.earlySky, bC.instancedTerrain, bC.cellLight, bC.framesAhead, bC.webGpuRestores, bC.bufferCopiesCrash)))
      }(CC, zC, ZC, QC, wC, bC), fz, `${AC.o.RenderSurfaceUnusable}: the renderer didn't open in ${fz/1e3} s`, Fz)
    }
    async function qz(CC, zC, ZC, QC, wC, bC) {
      if ("function" !== typeof CC.VbC) throw new Error("this core has no set_renderer");
      const nC = await oz(zC, wz, ZC, wC, QC, bC);
      try {
        CC.VbC(nC)
      } catch (fC) {
        throw Fz(nC), fC
      }
    }

    function Fz(CC) {
      try {
        CC.free()
      } catch {}
    }
  },
  40659: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    const QC = {
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
  40576: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => gC,
      g: () => SC,
      k: () => NC,
      n: () => WC
    });
    const QC = 2e3,
      wC = "unavailable";
    let bC = () => Promise.resolve().then((() => ZC(2932))),
      nC = null,
      fC = null,
      oC = qC();

    function qC() {
      let CC = () => {};
      return {
        promise: new Promise((zC => {
          CC = () => {
            zC(null)
          }
        })),
        resolve: CC
      }
    }

    function FC() {
      if (null === nC) {
        const CC = bC();
        nC = CC, CC.then((zC => {
          nC === CC && (fC = zC)
        }), (() => {
          nC === CC && (nC = null)
        }))
      }
      return nC
    }

    function WC() {
      FC().catch((() => {}))
    }

    function NC() {
      oC.resolve()
    }

    function MC(CC, zC, ZC, QC) {
      if (null === CC) return {
        errorKind: zC,
        fingerprint: wC,
        dedupe: `${zC}|${QC}`
      };
      const {
        fingerprint: bC
      } = CC.clientErrorKey(zC, ZC, QC);
      return {
        errorKind: zC,
        fingerprint: bC,
        dedupe: bC
      }
    }

    function gC(CC, zC, ZC, QC) {
      return null === fC ? QC ? (WC(), MC(null, CC, zC, ZC)) : null : MC(fC, CC, zC, ZC)
    }
    async function SC(CC, zC, ZC) {
      let wC;
      const bC = new Promise((CC => {
        wC = setTimeout((() => {
          CC(null)
        }), QC)
      }));
      try {
        return MC(await Promise.race([FC(), bC, oC.promise]), CC, zC, ZC)
      } catch {
        return MC(null, CC, zC, ZC)
      } finally {
        clearTimeout(wC)
      }
    }
  },
  40574: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BUILT_IN_ANIMATIONS_SITE: () => yC,
      CORE_ERRORS_SITE: () => XC,
      EVENT_OVERFLOW_SITE: () => jC,
      FIRST_VIEW_SITE: () => BC,
      JOIN_SITE: () => uC,
      LEAVE_SITE: () => rC,
      MAIN_THREAD_SITE: () => OC,
      MODEL_FEED_SITE: () => sC,
      MODEL_POOL_SITE: () => TC,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => zz,
      NON_FATAL_REPORTS_PER_SESSION: () => Rz,
      PREVIEW_ANIMATIONS_SITE: () => DC,
      RENDER_RELOAD_SITE: () => tC,
      REQUEST_DEVICE_SITE: () => kC,
      TEXTURE_NAMES_SITE: () => aC,
      TEXTURE_PACK_FEED_SITE: () => LC,
      TEXTURE_PACK_SWAP_SITE: () => UC,
      TurnstilePageError: () => zZ,
      WASM_LOAD_SITE: () => cC,
      countRenderLost: () => dZ,
      crashError: () => vz,
      crashReportsSettled: () => Ez,
      flushCrashReports: () => mz,
      joinFailureCode: () => ZZ,
      lokiTransport: () => wz,
      modelFailureCode: () => qZ,
      readTrap: () => sz,
      renderLoss: () => YZ,
      renderReloadMessage: () => hZ,
      reportCoreErrors: () => cz,
      reportCountedLoadFallback: () => Vz,
      reportCrash: () => ez,
      reportDataLoadFailure: () => XZ,
      reportDisconnect: () => fZ,
      reportDracoDecoderFailure: () => MZ,
      reportDroppedRequiredLimits: () => Oz,
      reportEventOverflow: () => PZ,
      reportFirstViewNoTerrain: () => JZ,
      reportGpuFallback: () => Bz,
      reportGpuWasmPopulation: () => kz,
      reportLightFault: () => RZ,
      reportMainStall: () => IZ,
      reportMemoryShed: () => xZ,
      reportModelFailure: () => FZ,
      reportModelPoolFailure: () => WZ,
      reportModelsModuleRetry: () => NZ,
      reportPageJoinFailure: () => wZ,
      reportReconnectGaveUp: () => oZ,
      reportRenderReload: () => HZ,
      reportReplayFault: () => vZ,
      reportStaleBuildReload: () => uZ,
      reportStoppedCore: () => Dz,
      reportTerrainTextureFailure: () => EZ,
      reportTexturePackFeedLoadFailure: () => SZ,
      reportTexturePackKeptOut: () => pZ,
      reportUnstreamedCoreLoad: () => CZ,
      reportUnsupportedFallback: () => Lz,
      reportUnusedSeat: () => nZ,
      reportWorkerLost: () => GZ,
      reportWorkerStartTimeout: () => iZ,
      reportWorldgenGaveUp: () => AZ,
      reportWorldgenLoadFailure: () => gZ,
      resetCrashReports: () => lz,
      setCrashAdPreload: () => Mz,
      setCrashBackend: () => Nz,
      setCrashScreen: () => qz,
      setCrashTransport: () => fz,
      showCrash: () => tz,
      showJoinFailure: () => QZ,
      showUnsupported: () => yz,
      unknownSkyWords: () => Xz
    });
    var QC = ZC(1029),
      wC = ZC(253),
      bC = ZC(2939),
      nC = ZC(4242),
      fC = ZC(40576),
      oC = ZC(4727),
      qC = ZC(40580),
      FC = ZC(2957),
      WC = ZC(38592),
      NC = ZC(113),
      MC = ZC(659),
      gC = ZC(107),
      SC = ZC(2966),
      pC = ZC(36369),
      PC = ZC(1724),
      GC = ZC(40590),
      RC = ZC(40423),
      AC = ZC(40521),
      xC = ZC(40525),
      JC = ZC(36360),
      IC = ZC(2848),
      iC = ZC(2856),
      vC = ZC(40617),
      eC = ZC(40638),
      hC = ZC(40647),
      KC = ZC(36712),
      YC = ZC(3217),
      dC = ZC(36172),
      mC = ZC(40552),
      HC = ZC(36180),
      EC = ZC(40662);
    const lC = "[bloxd-wasm-client]",
      XC = "coreErrors",
      cC = "wasmLoad",
      uC = "join",
      rC = "leave",
      sC = "modelFeed",
      TC = "modelWorkerPool",
      aC = "textureNames",
      tC = "renderReload",
      DC = "previewAnimations",
      jC = "eventOverflow",
      yC = "builtInAnimations",
      LC = "texturePackFeed",
      UC = "texturePackSwap",
      BC = "firstView",
      OC = "mainThread",
      kC = "requestDevice",
      VC = 300,
      Cz = 64,
      zz = 8;
    let Zz = 0;
    const Qz = new Set,
      wz = (CC, zC) => {
        const ZC = gz[CC.kind],
          QC = {
            backend: Fz,
            adPreload: Wz
          };
        if (null === ZC) return void bz(CC, zC, QC, null);
        const wC = (0, fC.d)(ZC, CC.message, CC.code, CC.fatal);
        null === wC ? dz("Loki", (async () => {
          bz(CC, zC, QC, await (0, fC.g)(ZC, CC.message, CC.code))
        })) : bz(CC, zC, QC, wC)
      };

    function bz(CC, zC, ZC, wC) {
      let {
        backend: nC,
        adPreload: fC
      } = ZC;
      const {
        kind: oC,
        code: qC,
        site: FC,
        fatal: WC,
        details: NC
      } = CC;
      if (!WC)
        if (null === wC || (0, bC.c)(wC.errorKind) || Qz.has(wC.dedupe)) {
          if (Zz >= zz) return;
          Zz++
        } else Qz.add(wC.dedupe);
      const MC = {
        ...NC,
        kind: oC,
        code: qC,
        site: FC,
        fatal: String(WC),
        backend: nC
      };
      fC && (MC.adPreload = "true"), null !== wC && (MC.errorKind = wC.errorKind, MC.fingerprint = wC.fingerprint), zC instanceof Error && "string" === typeof zC.stack && (MC.causeStack = zC.stack.slice(0, 2e3)), (0, QC.IS)(vz(CC, zC), MC)
    }
    let nz = wz;

    function fz(CC) {
      const zC = nz;
      return nz = CC, zC
    }
    let oz = () => {};

    function qz(CC) {
      const zC = oz;
      return oz = CC, zC
    }
    let Fz = "unpicked",
      Wz = !1;

    function Nz(CC) {
      Fz = CC
    }

    function Mz(CC) {
      Wz = CC
    }
    const gz = {
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
      Sz = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      pz = new Set(["unstreamedLoad"]),
      Pz = new Set(["linkCensus", "linksReadAfterView"]);
    let Gz = !1;
    const Rz = 20,
      Az = new Map;
    let xz = 0,
      Jz = 0;
    const Iz = new Set,
      iz = new Set;

    function vz(CC, zC) {
      const ZC = Object.assign(new Error(`${CC.code}: ${CC.message}`), {
        name: "WasmClientCrash",
        cause: null !== zC && void 0 !== zC ? zC : void 0
      });
      return zC instanceof Error && zC.stack && (ZC.stack = zC.stack), ZC
    }

    function ez(CC) {
      var zC, QC;
      const {
        kind: wC,
        code: bC,
        site: nC,
        fatal: fC,
        message: oC,
        error: qC
      } = CC, FC = !1 !== CC.toTransport && !pz.has(wC), WC = !fC && FC && !Pz.has(wC), NC = {
        kind: wC,
        code: bC,
        site: nC,
        fatal: fC,
        message: oC,
        details: null !== (zC = CC.details) && void 0 !== zC ? zC : {}
      }, MC = `${bC}@${nC}${void 0===CC.instance?"":`#${CC.instance}`}${fC?"!":""}`, gC = (null !== (QC = Az.get(MC)) && void 0 !== QC ? QC : 0) + 1;
      if (Az.set(MC, gC), void 0 !== CC.countAs && 1 === gC && Kz(CC.countAs), gC > 1 ? 0 === (gC & gC - 1) && Yz((() => {
          console.warn(`${lC} ${bC} at ${nC} reported ${gC} times`)
        })) : WC && xz >= Rz ? Yz((() => {
          console.warn(`${lC} ${wC} ${bC} at ${nC}: ${oC} (not sent: the session's ${Rz} went)`, NC.details, null !== qC && void 0 !== qC ? qC : "")
        })) : (WC && xz++, function(CC, zC, QC, wC) {
          var bC, nC;
          const {
            kind: fC,
            code: oC,
            site: qC,
            fatal: FC,
            message: WC,
            details: NC
          } = CC;
          Yz((() => {
            (FC ? console.error : console.warn)(`${lC} ${fC} ${oC} at ${qC}: ${WC}`, NC, null !== zC && void 0 !== zC ? zC : "")
          }));
          const MC = Sz[fC],
            gC = null !== (bC = null !== (nC = gz[fC]) && void 0 !== nC ? nC : MC) && void 0 !== bC ? bC : null;
          wC || null === gC || hz((async () => {
            const {
              reportCappedWasmFailure: CC,
              reportUncappedWasmFailure: zC,
              reportWasmFailure: QC
            } = await ZC.e(209).then((() => ZC(36167)));
            (Pz.has(fC) ? zC : void 0 === MC ? QC : CC)(gC, WC, oC)
          }));
          QC && Yz((() => {
            nz(CC, zC)
          }))
        }(NC, qC, FC, void 0 !== CC.countAs)), fC) {
        var SC;
        const zC = null !== (SC = CC.screen) && void 0 !== SC ? SC : {
          text: (0, KC.c)(NC, !0),
          reload: !0
        };
        Yz((() => {
          oz(zC)
        }))
      }
      return NC
    }

    function hz(CC) {
      dz("counts", (async () => {
        const {
          peekVisitSessionId: zC
        } = await Promise.resolve().then((() => ZC(625)));
        null !== zC() && (await CC(), Gz = !0)
      }))
    }

    function Kz(CC) {
      Iz.has(CC.errorKind) || (Iz.add(CC.errorKind), hz((async () => {
        const {
          reportClientError: zC
        } = await Promise.resolve().then((() => ZC(2927)));
        zC(CC.errorKind, CC.error, CC.code, !0, void 0, CC.fields)
      })))
    }

    function Yz(CC) {
      try {
        CC()
      } catch (zC) {
        try {
          console.warn(`${lC} could not send a report`, zC)
        } catch {}
      }
    }

    function dz(CC, zC) {
      try {
        const ZC = zC().catch((zC => {
          console.warn(`${lC} could not send the report to ${CC}`, zC)
        })).finally((() => {
          iz.delete(ZC)
        }));
        iz.add(ZC)
      } catch (ZC) {
        console.warn(`${lC} could not send the report to ${CC}`, ZC)
      }
    }
    async function mz(CC) {
      let zC;
      (0, fC.k)();
      const ZC = new Promise((ZC => {
        zC = setTimeout(ZC, CC)
      }));
      await Promise.race([Hz(), ZC]), clearTimeout(zC)
    }
    async function Hz() {
      if (await Promise.allSettled([...iz]), Gz) try {
        const {
          flushClientAnalyticsEvents: CC
        } = await Promise.resolve().then((() => ZC(1434)));
        await CC()
      } catch (CC) {
        console.warn(`${lC} could not send the counts`, CC)
      }
    }
    async function Ez() {
      for (; iz.size > 0;) await Promise.allSettled([...iz])
    }

    function lz() {
      Az.clear(), xz = 0, Gz = !1, Zz = 0, Qz.clear(), Jz = 0, Iz.clear(), (0, qC.s)()
    }

    function Xz(CC) {
      const zC = "object" === typeof CC && null !== CC ? CC.type : CC;
      return "string" !== typeof zC ? "sky not named" : `sky ${JSON.stringify(Array.from(zC).slice(0,Cz).join(""))}`
    }

    function cz(CC, zC, ZC, QC) {
      Jz += zC;
      for (const {
          code: fC,
          detail: FC
        }
        of CC) {
        var wC, bC, nC;
        const CC = (0, oC.$d)(fC),
          zC = (0, qC.e)(fC, FC),
          WC = null === QC || void 0 === QC ? void 0 : QC(fC, FC),
          NC = void 0 !== (null === zC || void 0 === zC ? void 0 : zC.gpuDetails),
          MC = NC ? null === (wC = (0, gC.n)()) || void 0 === wC ? void 0 : wC.renderer : void 0,
          SC = NC ? ` ${(0,qC.k)()}` : "",
          pC = Array.from([MC && `gpu ${(0,qC.u)(MC)}`, WC].filter(Boolean).join("; ")).slice(0, VC).join(""),
          PC = `core error ${CC}${null!==(bC=null===zC||void 0===zC?void 0:zC.words)&&void 0!==bC?bC:""}${SC}${pC?`: ${pC}`:""}`,
          GC = {
            errorCode: String(fC),
            detail: String(FC),
            droppedBefore: String(Jz),
            wasmBuild: ZC.wasm,
            clientVersion: ZC.client,
            ...null === zC || void 0 === zC ? void 0 : zC.gpuDetails
          };
        null !== zC && (0, qC.o)(zC) ? Yz((() => {
          console.warn(`${lC} coreError CORE-${CC}: ${PC} (not sent: the session's render warnings of its kind went)`, GC)
        })) : ez({
          kind: rz(fC, FC),
          code: `CORE-${CC}`,
          site: XC,
          fatal: !1,
          message: PC,
          details: GC,
          instance: null !== (nC = null === zC || void 0 === zC ? void 0 : zC.instance) && void 0 !== nC ? nC : uz(fC, FC)
        })
      }
    }

    function uz(CC, zC) {
      return CC === oC.N.RenderDeviceLost && 0 !== (zC & oC.W.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function rz(CC, zC) {
      return CC === oC.N.JobsHeapGaveUp ? "meshHeap" : (0, qC.j)(CC, zC) ? "linksReadAfterView" : (0, qC.f)(CC, zC) ? "linkCensus" : "coreError"
    }

    function sz(CC) {
      return (0, dC.n)(CC instanceof mC.e ? CC.trap : CC, IC.D, IC.Z)
    }
    const Tz = "declined=js";

    function az(CC) {
      return CC ? {
        labels: [Tz],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function tz(CC, zC, ZC) {
      return jz(CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Dz(CC, zC, ZC) {
      return jz(CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function jz(CC, zC, ZC, QC, wC) {
      let {
        memoryDetails: bC = {},
        declined: nC = !1
      } = QC;
      const {
        code: fC,
        details: oC,
        message: qC
      } = (0, GC.I)(CC, zC), FC = [];
      Object.assign(oC, (0, HC.f)(CC.error)), null !== ZC && (oC.trapKind = ZC.kind, null !== ZC.panic && (oC.panic = (0, dC.m)(ZC.panic)), ZC.refusedBytes > 0 && (oC.refusedAllocation = String(ZC.refusedBytes)), FC.push((0, dC.p)(ZC.kind, ZC.refusedBytes)));
      const WC = az(nC);
      return ez({
        kind: "crash",
        code: fC,
        site: CC.site,
        fatal: wC,
        message: [...FC, ...WC.labels, qC].join("; "),
        details: {
          ...oC,
          ...WC.details,
          ...bC
        },
        error: CC.error
      })
    }

    function yz(CC, zC, ZC) {
      return ez({
        kind: "unsupported",
        code: zC,
        site: cC,
        fatal: !0,
        message: ZC,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: CC,
          status: zC
        },
        screen: {
          text: (0, KC.p)(CC),
          reload: "download" === CC
        }
      })
    }

    function Lz(CC, zC, ZC) {
      return ez({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === zC ? "blocked_after_loss" : "unsupported_js_fallback",
        site: cC,
        fatal: !1,
        message: ZC,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: CC,
          status: "unsupported",
          decline: zC,
          fallback: "js"
        }
      })
    }
    const Uz = "misdrawn_gpu_js_fallback";

    function Bz(CC, zC) {
      return ez({
        kind: "gpuFallback",
        code: Uz,
        site: cC,
        fatal: !1,
        message: `the renderer plays ${CC} on ${zC} worse than the JS client`,
        details: {
          gpuFamily: CC,
          backend: zC,
          fallback: "js"
        }
      })
    }

    function Oz(CC) {
      return ez({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: kC,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: CC.join(",")
        }
      })
    }

    function kz(CC) {
      dz("counts", (async () => {
        await (0, MC.e)(CC), Gz = !0
      }))
    }

    function Vz(CC, zC, ZC, QC) {
      const wC = az(QC);
      return ez({
        kind: "unsupported",
        code: zC,
        site: cC,
        fatal: !1,
        message: [...wC.labels, ZC].join("; "),
        details: {
          cause: CC,
          status: zC,
          fallback: "js",
          ...wC.details
        }
      })
    }

    function CZ() {
      const {
        code: CC,
        message: zC
      } = YC.d;
      return ez({
        kind: "unstreamedLoad",
        code: CC,
        site: cC,
        fatal: !1,
        message: zC
      })
    }
    class zZ extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function ZZ(CC) {
      return CC instanceof AC.q ? 0 === CC.code ? "JOIN-matchmake" : `JOIN-${CC.code}` : CC instanceof AC.d ? 0 === CC.code ? `JOIN-${CC.stage}` : `JOIN-${CC.stage}-${CC.code}` : CC instanceof RC.c ? "JOIN-gameCode" : CC instanceof zZ ? "JOIN-turnstilePage" : CC instanceof AC.A ? "JOIN-trafficCheck" : CC instanceof pC.f ? "JOIN-timeout" : "JOIN-network"
    }

    function QZ(CC, zC) {
      const ZC = (0, HC.m)(CC),
        QC = {
          wasmBuild: zC.wasm,
          clientVersion: zC.client
        },
        wC = CC instanceof zZ ? {
          text: (0, KC.j)(),
          reload: !1
        } : void 0,
        bC = (0, xC.g)(CC),
        nC = "expected" !== bC;
      return ez({
        kind: "join",
        code: ZZ(CC),
        site: uC,
        fatal: !0,
        message: ZC,
        details: QC,
        error: CC,
        screen: wC,
        toTransport: nC,
        instance: bC
      })
    }

    function wZ(CC, zC, ZC) {
      var QC;
      const wC = (0, xC.g)(CC),
        bC = {
          cause: (CC instanceof AC.d || CC instanceof AC.q) && null !== (QC = CC.serverText) && void 0 !== QC ? QC : "",
          sinceJoinStart: (0, SC.d)(ZC.sinceJoinStartMs),
          game: ZC.game,
          ...(0, SC.m)(),
          wasmBuild: zC.wasm,
          clientVersion: zC.client
        };
      return ez({
        kind: "pageJoin",
        code: ZZ(CC),
        site: uC,
        fatal: !1,
        message: (0, HC.m)(CC),
        details: bC,
        error: CC,
        toTransport: "unrecognised" === wC,
        instance: wC
      })
    }
    const bZ = {
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

    function nZ(CC, zC) {
      let {
        unused: ZC,
        answered: QC,
        heldMs: wC
      } = CC;
      const {
        code: bC,
        message: nC
      } = bZ[ZC], fC = {
        unused: ZC,
        answered: String(QC),
        heldMs: String(wC),
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return ez({
        kind: "seat",
        code: bC,
        site: uC,
        fatal: !1,
        message: nC,
        details: fC
      })
    }

    function fZ(CC, zC, ZC) {
      var QC;
      let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (QC = CC.name) && void 0 !== QC ? QC : String(CC.code);
      const bC = {
          closeCode: String(CC.code),
          recognised: String(null !== CC.name),
          closeReason: ZC.closeReason,
          sinceJoined: (0, SC.d)(ZC.sinceJoinedMs),
          game: ZC.game,
          ...(0, SC.m)(),
          wasmBuild: zC.wasm,
          clientVersion: zC.client
        },
        nC = null === CC.name && !(0, SC.h)(CC.code);
      return ez({
        kind: "disconnect",
        code: wC,
        site: rC,
        fatal: !1,
        message: "Left room",
        details: bC,
        toTransport: nC
      })
    }

    function oZ(CC, zC) {
      const ZC = {
        ...(0, FC.l)(CC),
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return ez({
        kind: "disconnect",
        code: `reconnect-${CC.reason}`,
        site: uC,
        fatal: !1,
        message: "Reconnect failed",
        details: ZC
      })
    }

    function qZ(CC) {
      return CC.error instanceof iC.d ? `MODEL-${CC.error.status}` : CC.error instanceof vC.l ? "MODEL-ring" : "MODEL-network"
    }

    function FZ(CC, zC) {
      const ZC = qZ(CC),
        QC = `model file ${CC.file} ${CC.startup?"(startup) ":""}could not load`,
        wC = {
          file: String(CC.file),
          url: CC.url,
          wasmBuild: zC.wasm,
          clientVersion: zC.client
        };
      return ez({
        kind: CC.startup ? "model" : "modelLate",
        code: ZC,
        site: sC,
        fatal: CC.startup,
        message: QC,
        details: wC,
        error: CC.error
      })
    }

    function WZ(CC, zC) {
      const ZC = {
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return ez({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: TC,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: ZC,
        error: CC
      })
    }

    function NZ(CC, zC, ZC) {
      const QC = {
        delayMs: String(zC),
        wasmBuild: ZC.wasm,
        clientVersion: ZC.client
      };
      CC instanceof iC.d && (QC.status = String(CC.status));
      return ez({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: TC,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: QC,
        error: CC
      })
    }

    function MZ(CC, zC) {
      const ZC = {
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return ez({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: TC,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: ZC,
        error: CC
      })
    }

    function gZ(CC, zC) {
      const ZC = {
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return ez({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: GC.B,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: ZC,
        error: CC
      })
    }

    function SZ(CC, zC) {
      const ZC = {
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return ez({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: LC,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: ZC,
        error: CC
      })
    }

    function pZ(CC, zC, ZC, QC) {
      const wC = {
        wasmBuild: QC.wasm,
        clientVersion: QC.client
      };
      return ez({
        kind: "texturePackKeptOut",
        code: (0, nC.d)("wasm", CC, zC),
        site: UC,
        fatal: !1,
        message: zC.detail,
        details: wC,
        error: ZC
      })
    }

    function PZ(CC, zC) {
      const {
        frames: ZC,
        acks: QC,
        mask: wC,
        outcome: bC
      } = CC, nC = {
        frames: String(ZC),
        acks: String(QC),
        mask: String(wC),
        outcome: null !== bC && void 0 !== bC ? bC : "resynced",
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return ez({
        kind: "recovered",
        code: "rejoined" === bC ? "CORE-eventOverflowRejoin" : "failed" === bC ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: jC,
        fatal: !1,
        message: `the event buffer refused records in ${ZC} frames`,
        details: nC
      })
    }

    function GZ(CC, zC, ZC) {
      return ez({
        kind: "recovered",
        code: "CORE-workerLost",
        site: CC,
        fatal: !1,
        message: `a ${CC} worker was lost`,
        details: {
          reason: zC,
          wasmBuild: ZC.wasm,
          clientVersion: ZC.client
        }
      })
    }

    function RZ(CC, zC, ZC) {
      const QC = {
        wasmBuild: ZC.wasm,
        clientVersion: ZC.client
      };
      return ez({
        kind: "recovered",
        code: CC,
        site: GC.m,
        fatal: !1,
        message: zC,
        details: QC
      })
    }

    function AZ(CC, zC) {
      const ZC = {
        lastReason: CC,
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return ez({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: GC.B,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: ZC
      })
    }

    function xZ(CC, zC, ZC) {
      return ez({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: GC.i,
        fatal: !1,
        message: (0, JC.l)(CC) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: CC,
          ...zC,
          wasmBuild: ZC.wasm,
          clientVersion: ZC.client
        }
      })
    }

    function JZ(CC, zC, ZC, QC) {
      var wC, bC;
      const nC = (0, qC.m)(),
        fC = {
          game: CC,
          cause: zC,
          census: null === ZC ? "none" : JSON.stringify(ZC),
          gpu: null !== (wC = null === (bC = (0, gC.n)()) || void 0 === bC ? void 0 : bC.renderer) && void 0 !== wC ? wC : "",
          renderWarned: String(nC),
          browser: (0, qC.k)(),
          wasmBuild: QC.wasm,
          clientVersion: QC.client
        },
        oC = `first view drew no whole terrain in ${eC.e/1e3} s, ${zC}${nC?", render warned":""}`;
      return ez({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: BC,
        fatal: !1,
        message: oC,
        details: fC
      })
    }

    function IZ(CC, zC, ZC, QC) {
      var bC, nC, fC;
      const oC = null !== (bC = (0, wC.h)(null !== (nC = null === (fC = (0, gC.i)()) || void 0 === fC ? void 0 : fC.renderer) && void 0 !== nC ? nC : null, (0, gC.h)())) && void 0 !== bC ? bC : "unknown",
        FC = null === zC ? "untimed" : `${Math.round(zC)} ms`,
        WC = `frames stalled, ${ZC}, gpu ${(0,qC.u)(oC)}, blocking ${FC}, drawn ${Math.round(CC)} ms apart`,
        NC = {
          gpuModel: oC,
          wasmBuild: QC.wasm,
          clientVersion: QC.client
        };
      return ez({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: OC,
        fatal: !1,
        message: WC,
        details: NC
      })
    }

    function iZ(CC, zC, ZC) {
      return ez({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: CC,
        fatal: !1,
        message: `a ${CC} worker did not start`,
        details: {
          waitedMs: String(Math.round(zC)),
          wasmBuild: ZC.wasm,
          clientVersion: ZC.client
        }
      })
    }

    function vZ(CC, zC, ZC) {
      return ez({
        kind: "recovered",
        code: "CORE-replayFault",
        site: CC,
        fatal: !1,
        message: `the replay's ${CC} failed`,
        details: {
          wasmBuild: ZC.wasm,
          clientVersion: ZC.client
        },
        error: zC
      })
    }
    const eZ = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function hZ(CC, zC, ZC) {
      const QC = "lost" === zC && void 0 !== ZC ? ` (${ZC})` : "";
      return `the ${CC} ${eZ[zC]}${QC}`
    }
    const KZ = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function YZ(CC, zC, ZC, QC) {
      var wC;
      let {
        restoreLost: bC = !1,
        adapterRemembered: nC = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, fC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const oC = null === ZC || void 0 === ZC ? void 0 : ZC.message,
        qC = "pipeline_failed" === zC ? zC : ZC instanceof PC.g ? "timeout" : (0, WC.r)("frames_refused" === zC, "string" === typeof oC ? oC : ""),
        FC = null === QC.boundAtMs ? "unbound" : `up${(0,WC.g)(fC-QC.boundAtMs)}`,
        NC = null === QC.adapter ? "no adapter" : (0, WC.o)(QC.adapter),
        MC = `${!0===QC.indirectHangs?" ih":""}${!0===QC.restoresSkipped?" nr":""}${bC?" rl":""}${nC?" ar":""}`,
        gC = `${qC} ${(0,PC.j)()?"hidden":"visible"} ${FC}${MC} ${NC}`;
      if ("webgpu" !== CC || "lost" !== zC && "frames_refused" !== zC) return {
        detail: gC,
        count: void 0
      };
      return {
        detail: gC,
        count: {
          errorKind: "render_lost",
          error: new Error(gC),
          code: (0, WC.u)(qC, null !== (wC = QC.boundAtMs) && void 0 !== wC ? wC : fC, fC).code,
          fields: {
            renderBackend: EC.d.webgpu
          }
        }
      }
    }

    function dZ(CC, zC, ZC) {
      const {
        count: QC
      } = YZ("webgpu", CC, zC, ZC);
      void 0 !== QC && Kz(QC)
    }
    const mZ = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function HZ(CC, zC, QC) {
      var bC, nC, fC, oC, FC;
      let {
        cause: MC = "lost",
        restoreLost: gC = !1,
        adapterRemembered: SC = !1,
        error: pC,
        context: PC = KZ,
        session: GC = mZ
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        detail: RC,
        count: AC
      } = YZ(CC, MC, pC, PC, {
        restoreLost: gC,
        adapterRemembered: SC
      }), xC = {
        losses: String(zC),
        cause: MC,
        detail: RC,
        vendor: null !== (bC = null === (nC = PC.adapter) || void 0 === nC ? void 0 : nC.vendor) && void 0 !== bC ? bC : "",
        architecture: null !== (fC = null === (oC = PC.adapter) || void 0 === oC ? void 0 : oC.architecture) && void 0 !== fC ? fC : "",
        indirectHangs: String(PC.indirectHangs),
        restoresSkipped: String(PC.restoresSkipped),
        restoreLost: String(gC),
        adapterRemembered: String(SC),
        samples: String(GC.samples),
        sunShadows: String(GC.sunShadows),
        renderDistance: String(GC.renderDistance),
        gpuFamily: null !== (FC = (0, wC.b)()) && void 0 !== FC ? FC : "",
        browser: (0, qC.k)(),
        siteUsed: NC.y,
        wasmBuild: QC.wasm,
        clientVersion: QC.client
      }, JC = hZ(CC, MC), IC = ez({
        kind: "recovered",
        code: "CORE-renderLost",
        site: tC,
        fatal: !1,
        message: JC,
        details: xC,
        error: pC,
        countAs: AC
      });
      return dz("ga", (async () => {
        const {
          logError: zC
        } = await Promise.resolve().then((() => ZC(2909))), QC = `${WC.c["webgpu"===CC?"WebGPU":"WebGL2"]}\n Error: ${RC}`;
        zC("warning", QC), zC("error", QC)
      })), IC
    }

    function EZ(CC, zC) {
      var ZC, QC;
      const wC = null === CC.name ? "TEXTURE-sources" : null === CC.url ? "TEXTURE-nourl" : CC.error instanceof hC.b ? `TEXTURE-${CC.error.status}` : "TEXTURE-network",
        bC = null === CC.name ? "terrain textures could not load" : `terrain texture ${CC.name} could not load`,
        nC = {
          texture: null !== (ZC = CC.name) && void 0 !== ZC ? ZC : "",
          url: null !== (QC = CC.url) && void 0 !== QC ? QC : "",
          wasmBuild: zC.wasm,
          clientVersion: zC.client
        };
      return ez({
        kind: "terrainTexture",
        code: wC,
        site: GC.A,
        fatal: !1,
        message: bC,
        details: nC,
        error: CC.error
      })
    }
    const lZ = {
      previewAnimations: {
        site: DC,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: yC,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function XZ(CC, zC, ZC, QC) {
      const {
        site: wC,
        prefix: bC,
        name: nC
      } = lZ[CC], {
        stage: fC,
        error: oC
      } = ZC;
      return ez({
        kind: CC,
        code: "decode" === fC ? null === oC ? `${bC}-decode` : `${bC}-trap` : oC instanceof iC.d ? `${bC}-${oC.status}` : `${bC}-network`,
        site: wC,
        fatal: !1,
        message: "decode" === fC ? `${nC} did not decode` : `${nC} could not load`,
        details: {
          url: zC,
          wasmBuild: QC.wasm,
          clientVersion: QC.client
        },
        error: oC
      })
    }
    const cZ = "staleBuild";

    function uZ(CC, zC, ZC) {
      const QC = {
          failedSite: CC.site,
          url: CC.url,
          from: CC.from,
          sameBuild: String(CC.from === zC),
          reloadMs: String(Math.max(0, Date.now() - CC.at)),
          wasmBuild: ZC.wasm,
          clientVersion: ZC.client
        },
        wC = `reloaded into a newer build after ${CC.site} failed to load: ${CC.error}`;
      return ez({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: cZ,
        fatal: !1,
        message: wC,
        details: QC
      })
    }
  },
  40638: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      e: () => wC,
      h: () => nC
    });
    var QC = ZC(4733);
    const wC = 3e4;
    class bC {
      constructor(CC) {
        this.Cg = CC, this.waitedMs = 0, this.lastMs = null
      }
      frame(CC, zC) {
        if (zC) return !0;
        const ZC = null === this.lastMs ? 0 : CC - this.lastMs;
        return this.lastMs = CC, ZC <= 900 && (this.waitedMs += ZC), !(this.waitedMs < wC) && (this.Cg(), !0)
      }
    }

    function nC(CC, zC) {
      return 0 === (CC & QC.eb.ChunkRequested) ? "no_chunk_request" : 0 === (CC & QC.eb.ChunkStored) ? "chunk_not_stored" : 0 === (CC & QC.eb.MeshLanded) ? "not_meshed" : null === zC ? "no_frame_drawn" : 0 === zC.terrainParts ? "no_terrain_parts" : zC.terrainCompiling > 0 ? "terrain_compiling" : zC.terrainOpaque + zC.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  40423: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => gC,
      c: () => QC,
      g: () => PC,
      k: () => SC,
      l: () => pC,
      n: () => NC,
      r: () => MC,
      u: () => FC,
      y: () => WC
    });
    class QC extends Error {
      constructor(CC) {
        super(`the join's code did not load: ${CC instanceof Error?CC.message:String(CC)}`, {
          cause: CC
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === CC || void 0 === CC ? void 0 : CC.request
      }
    }
    let wC = null,
      bC = null,
      nC = null;
    const fC = [];
    let oC = null;

    function qC(CC, zC) {
      try {
        CC(zC)
      } catch (ZC) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ZC)
      }
    }

    function FC() {
      return oC
    }

    function WC(CC) {
      fC.push(CC), null !== oC && qC(CC, oC)
    }

    function NC(CC) {
      return wC ??= Promise.all([ZC.e(72), ZC.e(96), ZC.e(221), ZC.e(77), ZC.e(222), ZC.e(198), ZC.e(95), ZC.e(240), ZC.e(269), ZC.e(197), ZC.e(210), ZC.e(189), ZC.e(196), ZC.e(191), ZC.e(142), ZC.e(87), ZC.e(121), ZC.e(247), ZC.e(56)]).then((() => ZC(42374))).then((zC => {
        zC.loadAudio(CC), oC = zC;
        for (const CC of fC) qC(CC, zC);
        return zC
      })).catch((CC => {
        throw wC = null, CC
      })), wC
    }
    async function MC(CC, zC) {
      try {
        const ZC = await NC(CC);
        await ZC.loadClientGame(zC)
      } catch (ZC) {
        throw new QC(ZC)
      }
    }

    function gC(CC, zC) {
      bC = {
        running: CC,
        shell: zC
      }
    }

    function SC() {
      return nC
    }
    async function pC(CC) {
      const zC = bC;
      if ((null === zC || void 0 === zC ? void 0 : zC.running) !== CC) throw new Error("the core's session has ended");
      const ZC = await NC(zC.shell.audio).catch((CC => {
        throw new QC(CC)
      }));
      if (null !== nC) return nC;
      if (bC !== zC || CC.isStopped) throw new Error("the core stopped while the game code loaded");
      if (nC = ZC.startGameHost(CC, zC.shell), null === nC) throw new Error("the core's shared tables didn't read, so the game can't start");
      return nC
    }

    function PC() {
      null !== nC && (null !== oC ? oC.endGameHost(nC) : nC.closeGame()), nC = null, bC = null
    }
  },
  40549: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    const QC = {
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
  40521: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => WC,
      D: () => fC,
      d: () => qC,
      g: () => bC,
      i: () => nC,
      m: () => wC,
      q: () => MC,
      r: () => FC,
      t: () => oC,
      x: () => NC
    });
    var QC = ZC(1728);
    const wC = new Uint8Array([12]),
      bC = 2e3,
      nC = 257;

    function fC(CC) {
      const zC = new Uint8Array(4);
      return new DataView(zC.buffer).setUint32(0, CC, !0), zC
    }
    class oC extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class qC extends Error {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(CC), this.stage = zC, this.code = ZC, this.serverText = QC, this.socketOpened = wC, this.name = "JoinError"
      }
    }
    class FC extends Error {
      constructor(CC) {
        super(CC), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class WC extends Error {
      constructor(CC) {
        super((0, QC.h)(CC), {
          cause: CC
        }), this.name = "TrafficCheckError"
      }
    }
    class NC extends Error {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(CC, {
          cause: ZC
        }), this.networkLost = zC, this.httpStatus = QC, this.name = "SeatRequestError"
      }
    }
    class MC extends Error {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(CC), this.code = zC, this.serverText = ZC, this.name = "MatchmakeError"
      }
    }
  },
  40525: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => MC,
      g: () => NC,
      k: () => gC
    });
    var QC = ZC(2604),
      wC = ZC(2966),
      bC = ZC(38898),
      nC = ZC(36369),
      fC = ZC(38907),
      oC = ZC(40521),
      qC = ZC(40529);
    const FC = "seat reservation expired.",
      WC = "early_leave";

    function NC(CC) {
      if (CC instanceof nC.f) return "expected";
      if (CC instanceof oC.x) return CC.networkLost ? "expected" : "unrecognised";
      if (CC instanceof oC.d) {
        if ("closed" === CC.stage && (0 === CC.code || (0, wC.h)(CC.code))) return "expected";
        if ("roomError" === CC.stage && (CC.serverText === FC || CC.serverText === WC)) return "expected"
      }
      return CC instanceof oC.d || CC instanceof oC.q ? null === (0, fC.j)(CC.code).name ? "unrecognised" : "known" : (0, QC.g)(CC) ? "expected" : CC instanceof oC.A || CC instanceof qC.b ? "known" : "unrecognised"
    }

    function MC(CC) {
      return CC instanceof nC.f ? "timedOut" : "expected" !== NC(CC) || (0, QC.g)(CC) || CC instanceof oC.d && 1001 === CC.code ? void 0 : "failed"
    }

    function gC(CC) {
      return CC instanceof oC.d && "attach" !== CC.stage ? (0, bC.d)(CC, "closed" !== CC.stage || CC.socketOpened ? "socket" : "socket_unopened") : CC instanceof oC.x ? {
        at: "seat_lost",
        code: CC.httpStatus
      } : CC instanceof oC.q || CC instanceof nC.f ? (0, bC.d)(CC, CC instanceof nC.f ? CC.leg : "seat") : void 0
    }
  },
  40561: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      g: () => fC,
      h: () => qC
    });
    var QC = ZC(655),
      wC = ZC(659);

    function bC(CC, zC) {
      const ZC = null === zC ? void 0 : QC.b.get(zC);
      return "all" === ZC || "webgl" === ZC && "webgpu" !== CC.backend ? zC : null
    }

    function nC(CC) {
      return "software_adapter" === CC.reason ? null : CC.adapter
    }

    function fC(CC) {
      const zC = (0, QC.r)();
      return null === zC ? null : (0, QC.e)(nC(CC), zC, QC.i)
    }

    function oC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.j;
      const QC = bC(CC, zC);
      return null !== QC && "webgl" === CC.backend && ZC(QC) ? null : QC
    }

    function qC(CC) {
      const zC = (0, QC.r)();
      return null !== zC && (0, QC.z)((0, QC.e)(CC, zC, QC.m))
    }
  },
  40617: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => oC,
      e: () => qC,
      h: () => MC,
      l: () => WC
    });
    var QC = ZC(2856),
      wC = ZC(4727),
      bC = ZC(40624),
      nC = ZC(40633),
      fC = ZC(36180);
    const oC = 395,
      qC = 2147483648,
      FC = new Uint8Array(0);
    class WC extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class NC extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class MC {
      constructor(CC, zC, ZC) {
        var QC, wC, nC, fC;
        let oC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = CC, this.build = zC, this.onFailure = ZC, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.lM = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (QC = oC.fetchFile) && void 0 !== QC ? QC : CC => (0, bC.j)(CC), this.onWritten = null !== (wC = oC.onWritten) && void 0 !== wC ? wC : null, this.onTaken = null !== (nC = oC.onTaken) && void 0 !== nC ? nC : null, this.onPackFileFailed = null !== (fC = oC.onPackFileFailed) && void 0 !== fC ? fC : null, this.startupLeft = new Set(CC.startup);
        for (const bC of CC.startup) this.request(bC)
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
      drawnUrl(CC) {
        return this.drawn.get(CC)
      }
      request(CC) {
        const zC = this.pending.get(CC);
        if (!0 === (null === zC || void 0 === zC ? void 0 : zC.ask)) return;
        const ZC = this.RM(CC, !0);
        ZC.recheck = void 0 !== zC;
        const QC = this.drawn.get(CC);
        if (void 0 !== QC) return ZC.vq = !0, ZC.recheck = !0, void this.fetch(CC, ZC, QC);
        this.fetchWanted(CC, ZC)
      }
      async refresh() {
        const CC = ++this.refreshes,
          zC = new Set;
        for (const nC of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const CC of nC) 0 === (CC & bC.f) && zC.add(CC);
        const ZC = [...zC];
        let QC;
        try {
          QC = await Promise.all(ZC.map((CC => this.wanted(CC))))
        } catch {
          return null
        }
        if (CC !== this.refreshes) return null;
        const wC = {
          resent: 0,
          refetched: 0,
          delivered: ZC.filter((CC => this.drawn.has(CC))).length
        };
        return ZC.forEach(((CC, zC) => {
          const {
            url: ZC,
            inPlaceOf: bC
          } = QC[zC], nC = this.pending.get(CC);
          if (void 0 !== nC) {
            if (nC.vq || void 0 === nC.url) return void(nC.recheck = !0);
            if (nC.url === ZC) return;
            wC.refetched++;
            const zC = this.RM(CC, nC.ask);
            return zC.recheck = nC.recheck, void this.fetch(CC, zC, ZC, bC)
          }
          const fC = this.written.get(CC);
          void 0 === fC ? this.drawn.get(CC) !== (null !== ZC && void 0 !== ZC ? ZC : void 0) && (wC.resent++, this.fetch(CC, this.RM(CC, !1), ZC, bC)) : fC.url !== (null !== ZC && void 0 !== ZC ? ZC : "") && (fC.attempt.recheck = !0)
        })), wC
      }
      taken(CC, zC) {
        const ZC = new Set,
          QC = new Set;
        for (const wC of Array.from(zC)) 0 === (wC & qC) ? ZC.add(wC) : QC.add((wC & ~qC) >>> 0);
        for (const [wC, bC] of this.written) bC.seq > CC || (this.written.delete(wC), ZC.has(bC.seq) ? this.refusedFile(wC, bC) : this.takenFile(wC, bC, !bC.empty && !QC.has(bC.seq)))
      }
      takenFile(CC, zC, ZC) {
        const {
          attempt: QC
        } = zC;
        if (ZC) {
          var wC;
          this.drawn.set(CC, zC.url), this.undrawn.delete(CC), void 0 !== QC.inPlaceOf ? this.refusedPack.set(CC, QC.inPlaceOf) : QC.vq || this.refusedPack.delete(CC), null === (wC = this.onTaken) || void 0 === wC || wC.call(this, CC, !0);
          const ZC = this.pending.get(CC);
          if (!0 === (null === ZC || void 0 === ZC ? void 0 : ZC.vq) && ZC.url !== zC.url) {
            const ZC = this.RM(CC, !0);
            ZC.vq = !0, ZC.recheck = !0, this.fetch(CC, ZC, zC.url)
          }
        } else {
          var bC;
          this.drawn.has(CC) || this.undrawn.add(CC), null === (bC = this.onTaken) || void 0 === bC || bC.call(this, CC, !1)
        }
        QC.recheck && this.resendIfChanged(CC)
      }
      refusedFile(CC, zC) {
        var ZC, QC;
        if (null === (ZC = this.onTaken) || void 0 === ZC || ZC.call(this, CC, !1), this.refusedPack.set(CC, zC.url), this.pending.has(CC)) return void(null === (QC = this.onPackFileFailed) || void 0 === QC || QC.call(this, CC, gC(zC.url)));
        const wC = this.RM(CC, zC.attempt.ask);
        wC.recheck = zC.attempt.recheck, this.afterRefusal(CC, wC, zC.url)
      }
      async afterRefusal(CC, zC, ZC) {
        var QC;
        let wC;
        try {
          wC = await this.wanted(CC)
        } catch (bC) {
          return void(this.pending.get(CC) === zC && this.giveUp(CC, zC, ZC, bC))
        }
        this.pending.get(CC) === zC && (wC.inPlaceOf !== ZC ? zC.ask || (null !== (QC = wC.url) && void 0 !== QC ? QC : void 0) !== this.drawn.get(CC) ? this.fetch(CC, zC, wC.url, wC.inPlaceOf) : this.pending.delete(CC) : this.fallBack(CC, zC, ZC, gC(ZC)))
      }
      RM(CC, zC) {
        const ZC = {
          url: void 0,
          ask: zC,
          vq: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(CC, ZC);
        for (let QC = this.ready.length - 1; QC >= 0; QC--) this.ready[QC].file === CC && this.ready.splice(QC, 1);
        return ZC
      }
      async wanted(CC) {
        const zC = await this.files.url(CC);
        return null !== zC && this.refusedPack.get(CC) === zC ? {
          url: await this.files.shippedUrl(CC),
          inPlaceOf: zC
        } : {
          url: zC,
          inPlaceOf: void 0
        }
      }
      fetchWanted(CC, zC) {
        const ZC = this.files.url(CC);
        ZC instanceof Promise ? ZC.then((ZC => {
          this.fetchFound(CC, zC, ZC)
        }), (ZC => {
          this.pending.get(CC) === zC && this.giveUp(CC, zC, "", ZC)
        })) : this.fetchFound(CC, zC, ZC)
      }
      fetchFound(CC, zC, ZC) {
        null !== ZC && this.refusedPack.get(CC) === ZC ? Promise.resolve(this.files.shippedUrl(CC)).then((QC => {
          this.fetch(CC, zC, QC, ZC)
        }), (QC => {
          this.pending.get(CC) === zC && this.giveUp(CC, zC, ZC, QC)
        })) : this.fetch(CC, zC, ZC)
      }
      fetch(CC, zC, ZC, QC) {
        this.pending.get(CC) === zC && (zC.url = ZC, zC.inPlaceOf = QC, null !== ZC ? this.load(CC, zC, ZC) : this.buildFile(CC, zC, "", FC))
      }
      load(CC, zC, ZC) {
        const QC = this.lM.get(CC);
        (null === QC || void 0 === QC ? void 0 : QC.url) !== ZC ? this.fetchFile(ZC).then((QC => {
          var wC, bC;
          this.pending.get(CC) === zC && (this.keptTotal += QC.byteLength - (null !== (wC = null === (bC = this.lM.get(CC)) || void 0 === bC ? void 0 : bC.glb.byteLength) && void 0 !== wC ? wC : 0), this.lM.set(CC, {
            url: ZC,
            glb: QC
          }), this.buildFile(CC, zC, ZC, QC))
        }), (QC => {
          this.pending.get(CC) === zC && this.fallBack(CC, zC, ZC, QC)
        })) : this.buildFile(CC, zC, ZC, QC.glb)
      }
      buildFile(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const nC = QC.byteLength > 0 && (0, bC.l)(ZC) ? (CC | bC.d) >>> 0 : CC;
        this.queueRecord(CC, zC, ZC, QC, this.build(nC, QC), wC)
      }
      queueRecord(CC, zC, ZC, QC, bC, fC) {
        bC.then((bC => {
          if (this.pending.get(CC) !== zC) return;
          if (wC.v + (0, wC.pe)(bC.byteLength) > wC.Hc) return void this.ringRefused(CC, zC, ZC, new WC(`${SC(ZC)}'s record is ${bC.byteLength-nC.c} bytes, past the cmd ring's ${wC.Hc}`), fC);
          const oC = {
            file: CC,
            url: ZC,
            payload: bC,
            glb: QC,
            attempt: zC
          };
          fC ? this.ready.unshift(oC) : this.ready.push(oC)
        }))
      }
      async fallBack(CC, zC, ZC, QC) {
        var wC;
        let bC = null,
          nC = QC;
        try {
          bC = await this.files.shippedUrl(CC)
        } catch (fC) {
          nC = fC
        }
        this.pending.get(CC) === zC && (null !== bC && bC !== ZC ? (null === (wC = this.onPackFileFailed) || void 0 === wC || wC.call(this, CC, QC), zC.ask || this.drawn.get(CC) !== bC ? (zC.url = bC, zC.inPlaceOf = ZC, this.load(CC, zC, bC)) : this.pending.delete(CC)) : this.giveUp(CC, zC, ZC, nC))
      }
      ringRefused(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, bC.l)(ZC) ? this.fallBack(CC, zC, ZC, QC): this.giveUp(CC, zC, ZC, QC, wC)
      }
      giveUp(CC, zC, ZC, wC) {
        let bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: CC,
          url: SC(ZC),
          error: wC,
          startup: this.startupLeft.has(CC)
        }), zC.ask || !this.drawn.has(CC) ? (0, QC.W)(wC) ? this.queueRecord(CC, zC, ZC, FC, Promise.resolve((0, nC.q)(CC, (0, fC.m)(wC))), bC) : this.buildFile(CC, zC, ZC, FC, bC) : this.pending.delete(CC)
      }
      async resendIfChanged(CC) {
        var zC;
        if (0 !== (CC & bC.f)) return;
        let ZC;
        try {
          ZC = await this.wanted(CC)
        } catch {
          return
        }(null !== (zC = ZC.url) && void 0 !== zC ? zC : void 0) === this.drawn.get(CC) || this.pending.has(CC) || this.written.has(CC) || this.fetch(CC, this.RM(CC, !1), ZC.url, ZC.inPlaceOf)
      }
      drain(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === CC) return;
        let ZC = 0,
          QC = 0;
        for (; QC < this.ready.length && ZC < 262144;) {
          const fC = this.ready[QC];
          if (this.written.has(fC.file)) {
            QC++;
            continue
          }
          const FC = this.nextSeq;
          new DataView(fC.payload.buffer, fC.payload.byteOffset, fC.payload.byteLength).setUint32(nC.f, FC, !0);
          const NC = fC.attempt.vq && fC.glb.byteLength > 0 && this.drawn.get(fC.file) === fC.url;
          if (CC(oC, NC ? 1 : 0, fC.payload)) {
            if (this.nextSeq = FC >= qC - 1 ? 1 : FC + 1, this.ready.splice(QC, 1), ZC += fC.payload.byteLength, this.pending.delete(fC.file), this.startupLeft.delete(fC.file), this.written.set(fC.file, {
                seq: FC,
                url: fC.url,
                empty: 0 === fC.glb.byteLength,
                attempt: fC.attempt
              }), fC.glb.byteLength > 0) try {
              var wC;
              null === (wC = this.onWritten) || void 0 === wC || wC.call(this, fC.file, fC.glb)
            } catch (bC) {
              console.warn("ModelFeed: reading the file's images failed", bC)
            }
          } else {
            if (null === zC || 0 === fC.glb.byteLength || zC(fC.payload.byteLength)) return;
            this.ready.splice(QC, 1);
            const CC = new WC(`${SC(fC.url)}'s record is ${fC.payload.byteLength-nC.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(fC.file, fC.attempt, fC.url, CC, !0)
          }
        }
      }
    }

    function gC(CC) {
      return new NC(`presentation refused ${SC(CC)}`)
    }

    function SC(CC) {
      return CC.startsWith("data:") ? `${CC.slice(0,Math.min(Math.max(CC.indexOf(","),5),64))},...` : CC
    }
  },
  40624: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      f: () => bC,
      j: () => FC,
      l: () => fC,
      m: () => qC,
      p: () => oC
    });
    var QC = ZC(2856),
      wC = ZC(3188);
    const bC = 2147483648,
      nC = 1073741824;

    function fC(CC) {
      return CC.startsWith("data:")
    }

    function oC(CC) {
      let {
        onTableFailed: zC,
        packUrl: ZC
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const QC = qC();
      QC.catch((CC => {
        null === zC || void 0 === zC || zC(CC)
      }));
      const wC = async zC => (await QC).fileUrl((zC & ~bC) >>> 0, CC);
      return {
        startup: [],
        url: async CC => {
          if (ZC && 0 === (CC & bC)) {
            const zC = await QC,
              wC = zC.filePackName(CC),
              bC = null === wC || "lifeform" === zC.fileSource(CC) ? null : ZC(wC);
            if (null !== bC) return bC
          }
          return wC(CC)
        },
        shippedUrl: wC
      }
    }

    function qC() {
      return ZC.e(41).then((() => ZC(42437)))
    }
    async function FC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return CC.startsWith("data:") ? (0, wC.c)(CC.slice(CC.indexOf(",") + 1), zC) : (0, QC.M)(CC, {
        spare: zC
      })
    }
  },
  40633: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => qC,
      f: () => FC,
      j: () => MC,
      n: () => pC,
      q: () => gC,
      t: () => NC,
      u: () => SC
    });
    const QC = 826427981,
      wC = 1,
      bC = 2,
      nC = 44,
      fC = 46,
      oC = 58,
      qC = 8,
      FC = 4;

    function WC(CC, zC, ZC) {
      const wC = (new TextEncoder).encode(ZC),
        bC = qC + 4 * (zC.length + 2),
        nC = new Uint8Array(bC + (wC.byteLength + 3 & -4)),
        fC = new DataView(nC.buffer);
      return fC.setUint32(0, CC, !0), fC.setUint32(qC, QC, !0), zC.forEach(((CC, zC) => {
        fC.setUint32(qC + 4 * (zC + 1), CC, !0)
      })), fC.setUint32(bC - 4, wC.byteLength, !0), nC.set(wC, bC), nC
    }

    function NC(CC, zC) {
      return WC(CC, [bC], zC)
    }

    function MC(CC, zC) {
      return WC(CC, [wC, fC], zC)
    }

    function gC(CC, zC) {
      return WC(CC, [wC, oC], zC)
    }

    function SC(CC, zC) {
      return WC(CC, [wC, nC], zC)
    }

    function pC(CC) {
      const zC = qC;
      if (CC.byteLength < zC + 12) return !1;
      const ZC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
      return ZC.getUint32(zC, !0) === QC && ZC.getUint32(zC + 4, !0) === wC && ZC.getUint32(zC + 8, !0) === nC
    }
  },
  40552: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      f: () => FC,
      j: () => nC,
      k: () => oC
    });
    var QC = ZC(36180);
    class wC extends Error {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${CC}: the module trapped${ZC?" in an earlier call":""}: ${String(zC)}`, {
          cause: zC
        }), this.site = CC, this.trap = zC, this.earlier = ZC, this.name = "ModuleTrapError", zC instanceof Error && void 0 !== zC.stack && (this.stack = `${this.name}: ${this.message}\n${zC.stack}`)
      }
    }
    const bC = new WeakMap;

    function nC(CC) {
      return bC.has(CC)
    }

    function fC(CC, zC) {
      bC.has(CC) || bC.set(CC, zC)
    }

    function oC(CC, zC) {
      return !!(0, QC.j)(zC) && (fC(CC, zC), !0)
    }
    const qC = [
      ["error", CC => CC.error],
      ["unhandledrejection", CC => CC.reason]
    ];

    function FC(CC, zC, ZC) {
      let nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return bC.has(CC) ? Promise.reject(new wC(zC, bC.get(CC), !0)) : new Promise(((bC, oC) => {
        const FC = ZC => {
            fC(CC, ZC), MC(), oC(new wC(zC, ZC))
          },
          WC = CC => {
            CC instanceof WebAssembly.RuntimeError ? FC(CC) : (MC(), oC(CC))
          },
          NC = qC.map((CC => {
            let [zC, ZC] = CC;
            return [zC, CC => {
              const zC = ZC(CC);
              (0, QC.j)(zC) && FC(zC)
            }]
          })),
          MC = () => {
            for (const [CC, zC] of NC) null === nC || void 0 === nC || nC.removeEventListener(CC, zC)
          };
        for (const [CC, zC] of NC) null === nC || void 0 === nC || nC.addEventListener(CC, zC);
        let gC;
        try {
          gC = ZC()
        } catch (SC) {
          return void WC(SC)
        }
        gC.then((CC => {
          MC(), bC(CC)
        }), WC)
      }))
    }
  },
  40540: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => sC,
      E: () => rC,
      G: () => mC,
      K: () => IC,
      L: () => YC,
      M: () => TC,
      P: () => dC,
      S: () => EC,
      V: () => KC,
      b: () => JC,
      d: () => RC,
      h: () => lC,
      l: () => HC,
      m: () => GC,
      o: () => xC,
      r: () => pC,
      v: () => vC,
      z: () => hC
    });
    var QC = ZC(191),
      wC = ZC(20),
      bC = ZC(3514),
      nC = ZC(304),
      fC = ZC(38),
      oC = ZC(40542),
      qC = ZC(40570),
      FC = (ZC(40598), ZC(40662)),
      WC = ZC(40585);
    const NC = "wasmJoinBuild";
    let MC = null,
      gC = null,
      SC = null;

    function pC(CC) {
      SC = CC
    }
    let PC = !1;

    function GC() {
      PC = !0
    }

    function RC() {
      return PC
    }
    let AC = !1;

    function xC() {
      AC = !0
    }

    function JC() {
      return AC
    }

    function IC() {
      return SC
    }
    let iC = null;

    function vC(CC) {
      iC = CC, (0, nC.b)(CC)
    }
    const eC = "wasmClientRenderLost";

    function hC() {
      fC.k.setItem(eC, !0)
    }

    function KC() {
      return !0 === fC.k.getItem(eC)
    }

    function YC() {
      return iC
    }

    function dC() {
      return null === MC && (fC.i.removeItem("wasmLastPick"), fC.i.removeItem("wasmGuessVerdict"), (0, nC.i)(), MC = (0, oC.A)(qC.i).then((CC => (null === CC || (0, oC.q)(CC) || (gC = FC.d[CC.backend], wC.b.followGameGpu("webgpu" === CC.backend ? CC.adapter : null), "webgpu" === CC.backend && (0, WC.e)()), CC)))), MC
    }

    function mC() {
      return gC
    }

    function HC(CC) {
      return CC ? CC.load() : Promise.resolve().then((function() {
        var CC = new Error("Cannot find module '@bloxd/wasm/client'");
        throw CC.code = "MODULE_NOT_FOUND", CC
      })).then((CC => CC.bloxdWasmClient))
    }

    function EC(CC) {
      fC.i.setItem(NC, CC)
    }
    async function lC() {
      if (null === qC.i) return HC(null);
      const CC = fC.i.getItem(NC);
      let zC = "none" === CC ? null : "webgl";
      return null !== CC && "none" !== CC && ("string" === typeof CC && void 0 !== (0, QC.d)(qC.i, CC) ? zC = CC : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(CC)}, is none of this client's: guessing WebGL2's`)), null === zC ? null : qC.i[zC]()
    }
    let XC = null,
      cC = null,
      uC = null;

    function rC() {
      return XC ??= dC().then((async CC => {
        const zC = null !== CC && !(0, oC.q)(CC),
          ZC = {
            indirectHangs: zC && await (0, oC.H)(CC, window.location.search),
            storagePullBreaks: zC && (0, oC.R)(CC, window.location.search),
            splitPassBreaks: zC && (0, oC.Q)(CC, window.location.search),
            earlySky: zC && (0, oC.E)(CC, window.location.search),
            instancedTerrain: zC ? (0, oC.K)(CC, window.location.search) : null,
            cellLight: zC && await (0, bC.d)("cellLight"),
            framesAhead: (0, oC.l)(window.location.search),
            webGpuRestores: !zC || (0, oC.T)(CC),
            bufferCopiesCrash: zC && (0, oC.C)(CC, window.location.search)
          };
        return cC = ZC.indirectHangs, uC = !ZC.webGpuRestores, ZC
      })), XC
    }

    function sC() {
      return cC
    }

    function TC() {
      return uC
    }
  },
  40810: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(36201),
      wC = ZC(40697),
      bC = ZC(36348);

    function nC(CC, zC) {
      return (0, QC.h)(CC, wC.e, {
        ...zC,
        memoryMaximumBytes: (0, bC.h)()
      })
    }
  },
  40580: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => IC,
      f: () => GC,
      j: () => PC,
      k: () => JC,
      m: () => hC,
      o: () => eC,
      s: () => KC,
      u: () => AC
    });
    var QC = ZC(4733),
      wC = ZC(40585);
    const bC = 1,
      nC = 18,
      fC = 19,
      oC = 20,
      qC = {
        [bC]: "link",
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
        [nC]: "retry linked",
        [fC]: "fallback linked",
        [oC]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function FC(CC, zC, ZC) {
      return CC === nC ? "program retry" : CC === bC ? "program link" : CC === fC || CC === oC ? `program ${zC} ${ZC}` : "program"
    }
    const WC = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      NC = {
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
      MC = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      gC = {
        11: "none read after view",
        12: "some read after view"
      },
      SC = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...gC
      },
      pC = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function PC(CC, zC) {
      return CC === QC.o.RenderSerialLinks && void 0 !== gC[zC]
    }

    function GC(CC, zC) {
      return CC === QC.o.RenderSerialLinks && void 0 !== pC[15 & zC]
    }
    const RC = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function AC(CC) {
      return String(CC).replace(/\d/g, (CC => String.fromCharCode(97 + Number(CC))))
    }

    function xC(CC, zC) {
      var ZC;
      return null !== (ZC = CC[zC]) && void 0 !== ZC ? ZC : AC(zC)
    }

    function JC() {
      return AC((0, wC.c)())
    }

    function IC(CC, zC) {
      switch (CC) {
        case QC.o.RenderSceneRowNotDrawn:
          return {
            words: ` ${xC(NC,zC)}`, instance: String(zC), group: String(CC)
          };
        case QC.o.RenderChunkMeshNotDrawn: {
          const ZC = 0 === (128 & zC) ? "" : " shortage",
            QC = zC >>> 8;
          return {
            words: ` ${xC(MC,127&zC)}${ZC}${0===QC?"":` kind ${AC(QC)}`}`,
            instance: String(zC),
            group: String(CC)
          }
        }
        case QC.o.RenderInternal: {
          const ZC = xC(WC, 255 & zC),
            QC = zC >>> 8 & 255;
          if (0 === QC) return {
            words: ` ${ZC}`,
            instance: String(zC),
            group: String(CC)
          };
          const wC = xC(qC, QC),
            bC = zC >>> 16;
          return {
            words: ` ${ZC} ${wC} program ${AC(bC)}`,
            instance: `${ZC} ${wC} ${bC}`,
            group: FC(QC, wC, ZC),
            gpuDetails: {
              programFailure: wC,
              program: String(bC)
            }
          }
        }
        case QC.o.RenderSerialLinks: {
          if (GC(CC, zC)) {
            const CC = function(CC) {
              const zC = (zC, ZC) => AC(CC >>> zC & (1 << ZC) - 1),
                ZC = CC >>> 30 & 1 ? " restored" : "";
              return `link census ${pC[15&CC]} linked ${zC(22,8)} failed ${zC(4,6)} retried ${zC(10,6)} fallback ${zC(16,6)}${ZC}`
            }(zC);
            return {
              words: ` ${CC}`,
              instance: String(15 & zC),
              group: "link census",
              gpuDetails: {
                linkCensus: CC
              }
            }
          }
          const ZC = xC(SC, zC);
          return {
            words: ` ${ZC}`,
            instance: String(zC),
            group: String(CC),
            gpuDetails: {
              serialLinks: ZC
            }
          }
        }
        case QC.o.RenderGlErrorAfterRestore: {
          const ZC = xC(RC, 65535 & zC),
            QC = zC >>> 16,
            wC = 65535 !== QC;
          return {
            words: ` ${ZC}${wC?` program ${AC(QC)}`:""}`,
            instance: String(zC),
            group: String(CC),
            gpuDetails: wC ? {
              glError: ZC,
              program: String(QC)
            } : {
              glError: ZC
            }
          }
        }
        default:
          return null
      }
    }
    const iC = 2,
      vC = new Map;

    function eC(CC) {
      let {
        group: zC,
        instance: ZC
      } = CC, QC = vC.get(zC);
      return void 0 === QC && (QC = [], vC.set(zC, QC)), !QC.includes(ZC) && (QC.length >= iC || (QC.push(ZC), !1))
    }

    function hC() {
      return vC.size > 0
    }

    function KC() {
      vC.clear()
    }
  },
  40570: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      i: () => bC
    });
    var QC = ZC(40574);
    const wC = new WeakSet;
    const bC = {
        webgpu: async () => (function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === CC || wC.has(CC.prototype)) return;
          wC.add(CC.prototype);
          const zC = CC.prototype.requestDevice;
          CC.prototype.requestDevice = function(CC) {
            var ZC;
            const wC = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.requiredLimits) && void 0 !== ZC ? ZC : {},
              bC = Object.keys(wC).filter((CC => !(CC in this.limits)));
            if (0 === bC.length) return zC.call(this, CC);
            const nC = Object.fromEntries(Object.entries(wC).filter((CC => {
              let [zC] = CC;
              return zC in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${bC.join(", ")}`), (0, QC.reportDroppedRequiredLimits)(bC), zC.call(this, {
              ...CC,
              requiredLimits: nC
            })
          }
        }(), (await ZC.e(8).then((() => ZC(42405)))).bloxdWasmWebgpu),
        webgl: async () => (await ZC.e(6).then((() => ZC(42411)))).bloxdWasmWebgl,
        webgl1: async () => (await ZC.e(7).then((() => ZC(42418)))).bloxdWasmWebgl1
      },
      nC = async () => (await ZC.e(5).then((() => ZC(42432)))).compileAnimationPackInWasm
  },
  40529: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => PC,
      e: () => pC,
      i: () => xC
    });
    var QC = ZC(6646),
      wC = ZC(28),
      bC = ZC(4238),
      nC = ZC(4733),
      fC = ZC(6639),
      oC = ZC(40534);

    function qC(CC, zC) {
      const ZC = (0, fC.b)(zC.variants);
      return CC.setShaderPack(ZC.variantFlags, ZC.hooks, ZC.moduleCodes, (0, oC.D)(zC.layers), oC.r[zC.Zq], zC.keepCircleShadows)
    }
    const FC = 0,
      WC = 1,
      NC = 2,
      MC = "shaderPack:failedToCompile",
      gC = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      SC = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function pC(CC, zC) {
      var ZC;
      const QC = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.reason) && void 0 !== ZC ? ZC : "none";
      return gC.has(QC) ? {
        messageKey: zC ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === QC && "override" === (null === CC || void 0 === CC ? void 0 : CC.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: SC.has(QC) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class PC extends Error {
      constructor(CC) {
        super(`the shader pack can't run in this game: ${CC}`), this.messageKey = CC, this.name = "ShaderPackJoinError"
      }
    }
    const GC = "strict";
    class RC {
      constructor(CC) {
        this.deps = CC, this.pagePack = void 0, this.loaded = null, this.Zq = GC, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = CC.load().catch((zC => (CC.warn("the shader pack could not load: the game draws without it", zC), {
          status: "none"
        }))).then((CC => (this.loaded = CC, "active" === CC.status && (this.handOverToPreviews(CC), null !== CC.harnessPolicy && (this.Zq = CC.harnessPolicy, this.handOver())), CC)))
      }
      async join(CC) {
        this.leave();
        const zC = this.game,
          [ZC, wC] = await Promise.all([this.pagePack, this.policyOf(CC)]);
        if (zC !== this.game || "none" === ZC.status) return null;
        const bC = "active" === ZC.status ? ZC.pack.variants : ZC.variants,
          nC = (0, QC.m)(bC, wC);
        if (nC && "active" === ZC.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (nC) {
          const CC = this.cantRun(ZC, wC);
          if (null !== CC) return CC
        } else if ("blocked" === ZC.status || null === this.deps.core) return null;
        return this.Zq = wC, this.handOver(), nC && this.refused ? MC : (this.joined = !0, this.offInThisGame = !nC, null)
      }
      async replay(CC) {
        const zC = await this.join(CC);
        null === zC ? this.playable() : this.deps.failInGame(zC)
      }
      cantRun(CC, zC) {
        const {
          core: ZC,
          noWebGpu: QC
        } = this.deps;
        if ("blocked" === CC.status) {
          return "shaderPack:failedUnchecked" === CC.messageKey && null === ZC && QC.noAdapter ? QC.messageKey : CC.messageKey
        }
        return this.refused || this.failedPolicies.has(zC) ? MC : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var CC;
        return this.runsInJoinedGame() && "active" === (null === (CC = this.loaded) || void 0 === CC ? void 0 : CC.status) ? function(CC, zC) {
          const ZC = CC.filter((CC => (0, QC.m)([CC], zC))),
            wC = CC => ZC.some((zC => zC[CC]));
          return {
            sceneDepth: wC("sceneDepth"),
            sunShadow: wC("sunShadow"),
            airShadow: wC("airShadow")
          }
        }(this.loaded.pack.variants, this.Zq) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(MC) : (null !== this.couldntRun ? this.notify(bC.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Zq) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(CC) {
        for (const {
            code: zC,
            detail: ZC
          }
          of CC)
          if (zC === nC.o.RenderShaderPackNotRun) switch (255 & ZC) {
            case FC:
              this.refused = !0, this.failed();
              break;
            case WC:
              this.failedPolicies.add(this.Zq), this.failed();
              break;
            case NC:
              this.failedModelPolicies.add(this.Zq), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(MC) : this.failedWhileJoining = !0)
      }
      fail(CC) {
        this.leave(), this.deps.failInGame(CC)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(CC, zC) {
        const ZC = this.game;
        this.deps.notify(CC, (() => ZC === this.game && this.joined), zC)
      }
      handOver() {
        var CC;
        const {
          core: zC
        } = this.deps;
        null !== zC && "active" === (null === (CC = this.loaded) || void 0 === CC ? void 0 : CC.status) && (qC(zC, {
          ...this.loaded.pack,
          Zq: this.Zq
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(CC) {
        let {
          pack: zC,
          harnessPolicy: ZC
        } = CC;
        const {
          previews: QC
        } = this.deps;
        null !== QC && qC(QC, {
          ...zC,
          Zq: null !== ZC && void 0 !== ZC ? ZC : GC
        })
      }
      policyOf(CC) {
        return this.deps.policyOf(CC).catch((CC => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", CC), GC)))
      }
    }
    const AC = "wasmShaderPackNotice";

    function xC(CC, zC, ZC, QC) {
      return wC.o.subscribe(AC, (CC => {
        let {
          translationKey: zC,
          stillCurrent: ZC,
          reasonKey: QC
        } = CC;
        ZC() && wC.o.bp("chat", (0, bC.j)(zC, QC))
      })), new RC({
        load: JC,
        policyOf: IC,
        core: CC,
        previews: zC,
        noWebGpu: ZC,
        notify: (CC, zC, ZC) => {
          const QC = {
            translationKey: CC,
            stillCurrent: zC,
            reasonKey: ZC
          };
          wC.o.bp(AC, QC, !0)
        },
        failInGame: CC => {
          wC.o.bp(bC.f, CC)
        },
        warn: QC
      })
    }
    async function JC() {
      const [{
        shaderPackPage: CC,
        harnessShaderPackMode: zC
      }, {
        shaderPackTextures: QC
      }] = await Promise.all([ZC.e(115).then((() => ZC(39051))), ZC.e(116).then((() => ZC(6630)))]), wC = await CC.load();
      return "active" !== wC.status ? wC : {
        status: "active",
        pack: {
          variants: wC.pack.variants,
          layers: QC().layers,
          keepCircleShadows: wC.pack.keepCircleShadows
        },
        harnessPolicy: zC()
      }
    }
    async function IC(CC) {
      var zC;
      const [{
        shaderPackPage: QC,
        harnessShaderPackMode: wC
      }, {
        getShaderPackPolicy: bC
      }] = await Promise.all([ZC.e(115).then((() => ZC(39051))), ZC.e(91).then((() => ZC(41087)))]);
      return await QC.load(), null !== (zC = wC()) && void 0 !== zC ? zC : bC(CC)
    }
  },
  40647: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC,
      c: () => pC,
      d: () => oC,
      f: () => qC,
      j: () => FC,
      l: () => NC
    });
    var QC = ZC(40652),
      wC = ZC(40659);
    const bC = "atlas:",
      nC = 3e4;
    class fC extends Error {
      constructor(CC, zC) {
        super(`fetching ${CC} answered HTTP ${zC}`), this.url = CC, this.status = zC, this.name = "TerrainTextureFetchError"
      }
    }

    function oC(CC) {
      if (!CC.startsWith(bC)) return null;
      const zC = Number(CC.slice(bC.length));
      return Number.isInteger(zC) && zC >= 0 ? zC : null
    }
    async function qC() {
      const CC = await ZC.e(204).then((() => ZC(34243)));
      return {
        atlasSheets: CC.blockAtlasUrls,
        texture: zC => {
          var ZC, QC, bC;
          return null !== (ZC = null !== (QC = null !== (bC = CC.animatedBlockTextures[zC]) && void 0 !== bC ? bC : CC.rotatedBlockTextures[zC]) && void 0 !== QC ? QC : wC.e[zC]) && void 0 !== ZC ? ZC : null
        }
      }
    }
    async function FC(CC) {
      const zC = new AbortController,
        ZC = setTimeout((() => {
          zC.abort(new DOMException(`${CC} took over ${nC} ms`, "TimeoutError"))
        }), nC);
      let QC;
      try {
        const ZC = await fetch(CC, {
          signal: zC.signal
        });
        if (!ZC.ok) throw new fC(CC, ZC.status);
        QC = await ZC.blob()
      } finally {
        clearTimeout(ZC)
      }
      const wC = await createImageBitmap(QC, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return NC(wC)
      } finally {
        wC.close()
      }
    }
    const WC = 8192;

    function NC(CC) {
      const {
        width: zC,
        height: ZC
      } = CC, wC = Math.max(1, Math.min(ZC, WC)), bC = (0, QC.f)(zC, wC, {
        willReadFrequently: !0
      });
      if (!bC) throw new Error("no 2D context to read the texture back");
      bC.globalCompositeOperation = "copy";
      const nC = new Uint8Array(zC * ZC * 4);
      for (let QC = 0; QC < ZC; QC += wC) {
        const fC = Math.min(wC, ZC - QC);
        bC.drawImage(CC, 0, QC, zC, fC, 0, 0, zC, fC), nC.set(bC.getImageData(0, 0, zC, fC).data, QC * zC * 4)
      }
      return {
        width: zC,
        height: ZC,
        pixels: nC
      }
    }
    async function MC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FC;
      const QC = [],
        wC = await Promise.all(CC.map((async CC => {
          var wC, nC;
          const fC = null !== (wC = null === (nC = zC.decoded) || void 0 === nC ? void 0 : nC.call(zC, CC)) && void 0 !== wC ? wC : null,
            qC = null === fC ? function(CC, zC) {
              if (CC.startsWith(bC)) {
                var ZC;
                const QC = oC(CC);
                return null === QC ? null : null !== (ZC = zC.atlasSheets[QC]) && void 0 !== ZC ? ZC : null
              }
              return zC.texture(CC)
            }(CC, zC) : null,
            FC = null !== fC && void 0 !== fC ? fC : null === qC ? null : ZC(qC);
          if (null === FC) return QC.push({
            name: CC,
            url: qC,
            error: new Error(`no URL for terrain texture ${CC}`)
          }), null;
          try {
            const zC = await FC;
            if (zC.pixels.byteLength !== zC.width * zC.height * 4) throw new Error(`decoded ${zC.pixels.byteLength} bytes for ${zC.width}x${zC.height} texels`);
            return {
              name: CC,
              texture: zC
            }
          } catch (WC) {
            return QC.push({
              name: CC,
              url: qC,
              error: WC
            }), null
          }
        }))),
        nC = wC.filter((CC => null !== CC)),
        fC = new Uint32Array(2 * nC.length);
      nC.forEach(((CC, zC) => {
        let {
          texture: ZC
        } = CC;
        fC[2 * zC] = ZC.width, fC[2 * zC + 1] = ZC.height
      }));
      return {
        handOver: {
          names: nC.map((CC => {
            let {
              name: zC
            } = CC;
            return zC
          })),
          textures: nC.map((CC => {
            let {
              texture: zC
            } = CC;
            return zC.pixels
          })),
          sizes: fC
        },
        failures: QC
      }
    }
    const gC = [2e3, 1e4, 3e4, 6e4, 12e4];

    function SC() {}
    class pC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gC,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = CC, this.retryMs = zC, this.keepBelow = ZC, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qC,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const QC = ++this.started,
          wC = {
            decode: ZC.decode,
            wholeAtlas: ZC.wholeAtlas
          };
        return this.loadAndHandOver(zC, wC, CC, (() => {
          var CC;
          return QC < this.landed || !1 === (null === (CC = ZC.wanted) || void 0 === CC ? void 0 : CC.call(ZC))
        }), {
          onTaken: (CC, ZC) => {
            this.landed = QC, this.current = {
              mine: QC,
              sources: zC,
              load: wC,
              lM: CC,
              failed: ZC
            }
          }
        })
      }
      restore(CC) {
        var zC;
        const ZC = this.current;
        if (null === ZC) return Promise.resolve(null);
        if ((null === (zC = this.restoring) || void 0 === zC ? void 0 : zC.mine) === ZC.mine) return this.restoring.done;
        const QC = {
          mine: ZC.mine,
          done: this.restoreLanded(ZC, CC).finally((() => {
            this.restoring === QC && (this.restoring = null)
          }))
        };
        return this.restoring = QC, QC.done
      }
      async restoreLanded(CC, zC) {
        const ZC = () => this.landed !== CC.mine,
          {
            lM: QC
          } = CC;
        if (null !== QC) return this.stopped() ? null : this.core.setTerrainTextures(QC.names, QC.textures, QC.sizes);
        let wC = zC;
        for (let bC = 0;; bC++) {
          const zC = this.retryMs.at(bC),
            QC = {
              allOrNothingExcept: void 0 === zC ? void 0 : CC.failed
            },
            nC = await this.loadAndHandOver(CC.sources, CC.load, wC, ZC, QC);
          if (!1 !== nC || void 0 === zC || this.stopped()) return nC;
          if (wC = SC, await new Promise((CC => {
              setTimeout(CC, zC)
            })), ZC()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const bC = this.core.terrainTextureNames();
        var nC;
        if (0 === bC.length) return null === (nC = wC.onTaken) || void 0 === nC || nC.call(wC, null, new Set), !0;
        let fC, qC;
        try {
          fC = await CC(), qC = await MC(bC, fC, zC.decode)
        } catch (pC) {
          return QC() ? null : (ZC({
            name: null,
            url: null,
            error: pC
          }), !1)
        }
        if (QC() || this.stopped()) return null;
        for (const oC of qC.failures) ZC(oC);
        const FC = wC.allOrNothingExcept;
        if (void 0 !== FC && qC.failures.some((CC => {
            let {
              name: zC
            } = CC;
            return null === zC || !FC.has(zC)
          })) || !0 === zC.wholeAtlas && qC.failures.some((CC => {
            let {
              name: zC
            } = CC;
            return null === zC || null !== oC(zC)
          }))) return !1;
        const {
          handOver: WC
        } = qC, NC = function(CC) {
          return CC.textures.reduce(((CC, zC) => CC + zC.byteLength), 0)
        }(WC) < this.keepBelow, gC = this.core.setTerrainTextures(WC.names, WC.textures, WC.sizes, NC ? void 0 : () => {
          !async function(CC, zC) {
            await zC;
            for (const {
                buffer: QC
              }
              of CC) {
              const CC = QC;
              var ZC;
              if (!CC.detached) null === (ZC = CC.transfer) || void 0 === ZC || ZC.call(CC, 0)
            }
          }(WC.textures, fC.heldUntil)
        });
        if (gC) {
          var SC;
          const CC = new Set(qC.failures.flatMap((CC => {
            let {
              name: zC
            } = CC;
            return null === zC ? [] : [zC]
          })));
          null === (SC = wC.onTaken) || void 0 === SC || SC.call(wC, NC ? WC : null, CC)
        }
        return gC
      }
    }
  },
  40585: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      e: () => oC
    });
    var QC = ZC(77);
    const wC = "webgpuPipeline";

    function bC(CC) {
      return CC.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let nC = null;

    function fC() {
      if (null === nC) try {
        CC = (0, QC.getBrowserName)(), zC = (0, QC.getBrowserVersion)(), ZC = (0, QC.getOperatingSystem)(), wC = (0, QC.getOperatingSystemVersion)(), nC = `${CC.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===zC?"unknown":bC(zC)}-${ZC}${void 0===wC?"":`_${bC(wC)}`}`
      } catch (fC) {
        console.warn("The user agent couldn't be read for its browser code", fC), nC = "unknown"
      }
      var CC, zC, ZC, wC;
      return nC
    }

    function oC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const zC = `WGPU-${fC()}`,
        QC = (CC, QC) => {
          const {
            reason: bC,
            message: nC
          } = QC, fC = {
            pipeline: null !== CC && void 0 !== CC ? CC : "",
            reason: String(bC),
            browserMessage: String(nC)
          };
          Promise.resolve().then((() => ZC(40574))).then((CC => {
            let {
              reportCrash: ZC
            } = CC;
            ZC({
              kind: "coreError",
              code: zC,
              site: wC,
              fatal: !1,
              message: `${fC.pipeline} ${fC.reason}: ${fC.browserMessage}`,
              details: fC,
              error: QC
            })
          })).catch((CC => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", CC)
          }))
        },
        bC = CC.createRenderPipelineAsync;
      CC.createRenderPipelineAsync = function(CC) {
        return bC.call(this, CC).catch((zC => {
          throw QC(CC.label, zC), zC
        }))
      };
      const nC = CC.createComputePipelineAsync;
      CC.createComputePipelineAsync = function(CC) {
        return nC.call(this, CC).catch((zC => {
          throw QC(CC.label, zC), zC
        }))
      }
    }
  },
  40708: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bloxd_wasm_models_bg.c50b815f44c89104b7b3.wasm"
  },
  40703: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bloxd_wasm_workers_bg.52f9e3d91bd15b14deeb.wasm"
  },
  40697: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      e: () => QC
    });
    const QC = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new ZC.U(ZC(40703))
      }
    };
    const wC = {
      name: "bloxd_wasm_models",
      url: function() {
        return new ZC.U(ZC(40708))
      }
    }
  },
  6639: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => AC,
      f: () => xC,
      g: () => GC,
      h: () => PC
    });
    var QC = ZC(6646);
    const wC = 6,
      bC = 3,
      nC = 1,
      fC = 2,
      oC = 4,
      qC = 8,
      FC = 16,
      WC = 32,
      NC = 64,
      MC = 128,
      gC = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function SC(CC) {
      if (!CC) return 0;
      const zC = gC.indexOf(CC);
      if (zC <= 0) throw new Error(`"${CC}" is not a shader pack hook function`);
      return zC
    }

    function pC(CC) {
      if (0 === CC) return null;
      const zC = gC[CC];
      if (void 0 === zC) throw new Error(`${CC} is not a shader pack hook function id`);
      return zC
    }

    function PC(CC) {
      const zC = QC.e.length;
      return {
        strict: CC >= zC,
        program: QC.e[CC % zC]
      }
    }

    function GC(CC) {
      return Number(CC.strict) * QC.e.length + QC.e.indexOf(CC.program)
    }

    function RC(CC) {
      return "" === CC ? [] : CC.split(" ")
    }

    function AC(CC) {
      const zC = {
        variantFlags: new Uint8Array(wC),
        hooks: new Uint8Array(wC * bC),
        moduleCodes: Array(wC).fill(""),
        reads: Array(2 * wC).fill("")
      };
      for (const ZC of CC) {
        const CC = GC(ZC.key),
          QC = (CC, zC) => null === ZC.hooks.surface || ZC.reads.fragment.includes(CC) ? 0 : zC;
        zC.variantFlags[CC] = (ZC.sceneDepth ? nC : 0) | (ZC.movesVertices ? fC : 0) | (ZC.sunShadow ? oC : 0) | (ZC.airShadow ? qC : 0) | (ZC.discards ? FC : 0) | QC("localPosition", WC) | QC("enchantSpeed", NC) | QC("enchantTier", MC), zC.hooks[CC * bC] = SC(ZC.hooks.vertex), zC.hooks[CC * bC + 1] = SC(ZC.hooks.surface), zC.hooks[CC * bC + 2] = SC(ZC.hooks.light), zC.moduleCodes[CC] = ZC.moduleCode, zC.reads[2 * CC] = ZC.reads.vertex.join(" "), zC.reads[2 * CC + 1] = ZC.reads.fragment.join(" ")
      }
      return zC
    }

    function xC(CC) {
      const {
        hooks: zC,
        moduleCodes: ZC,
        reads: QC
      } = CC;
      return Array.from(CC.variantFlags, ((CC, wC) => {
        const WC = wC * bC;
        return {
          key: PC(wC),
          hooks: {
            vertex: pC(zC[WC]),
            surface: pC(zC[WC + 1]),
            light: pC(zC[WC + 2])
          },
          moduleCode: ZC[wC],
          sceneDepth: 0 !== (CC & nC),
          sunShadow: 0 !== (CC & oC),
          airShadow: 0 !== (CC & qC),
          movesVertices: 0 !== (CC & fC),
          discards: 0 !== (CC & FC),
          reads: {
            vertex: RC(QC[2 * wC]),
            fragment: RC(QC[2 * wC + 1])
          }
        }
      }))
    }
  },
  40534: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => nC,
      D: () => SC,
      E: () => MC,
      F: () => gC,
      d: () => wC,
      g: () => QC,
      k: () => NC,
      n: () => FC,
      r: () => pC,
      u: () => bC,
      w: () => fC,
      x: () => oC
    });
    const QC = 3,
      wC = 0,
      bC = 1,
      nC = 2,
      fC = {
        uniform: 3,
        lN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      oC = 10,
      qC = "BloxdPackInputs",
      FC = "bloxdPackInputs",
      WC = [{
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
      NC = 80;

    function MC() {
      const CC = WC.map((CC => {
        let {
          name: zC,
          type: ZC
        } = CC;
        return `    ${zC}: ${ZC},\n`
      })).join("");
      return `struct ${qC} {\n${CC}}\n@group(${QC}) @binding(${wC}) var<uniform> ${FC}: ${qC};\n`
    }

    function gC(CC, zC) {
      const ZC = new DataView(CC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, NC),
        [QC, wC, bC, nC, fC, oC] = WC;
      ZC.setFloat32(QC.offset, zC.seconds, !0), ZC.setUint32(wC.offset, zC.lit ? 1 : 0, !0);
      for (let qC = 0; qC < 3; qC++) ZC.setInt32(bC.offset + 4 * qC, zC.renderOffset[qC], !0), ZC.setFloat32(nC.offset + 4 * qC, zC.B3[qC], !0), ZC.setFloat32(fC.offset + 4 * qC, zC.eyePosition[qC], !0), ZC.setFloat32(oC.offset + 4 * qC, zC.shadowDirection[qC], !0)
    }

    function SC(CC) {
      const zC = new Uint32Array(Math.max(1, CC.length));
      return CC.forEach(((CC, ZC) => {
        let {
          id: QC,
          rotation: wC
        } = CC;
        zC[ZC] = 65535 & QC | (3 & wC) << 16
      })), zC
    }
    const pC = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);