export const id = 155;
export const ids = [155];
export const modules = {
  44389: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      compilePagePack: () => QM,
      prefetchCompiler: () => PM,
      reconcileHint: () => nM
    });
    var OM = iM(7111),
      SM = iM(7142),
      jM = iM(7120),
      aM = iM(7134);

    function PM() {
      (0, OM.loadPageShaderPackCompiler)()
    }
    async function nM() {
      const MM = await (0, OM.loadPageShaderPackCompiler)();
      await (MM ? (0, SM.reconcileStoredShaderPackHint)(MM) : (0, SM.forgetShaderPackActiveHint)())
    }
    async function QM(MM) {
      const rM = await (0, OM.loadPageShaderPackCompiler)();
      if (!rM) return {
        status: "none"
      };
      const iM = await (0, aM.e)(MM, rM),
        PM = (0, SM.storedPackOutcome)(iM, rM);
      if ("none" === PM.kind) return {
        status: "none"
      };
      const nM = rM.zMM((0, SM.storedShaderPackFiles)(iM), (0, jM.shaderPackTextures)());
      if ("blocked" === PM.kind) return {
        status: "blocked",
        messageKey: PM.messageKey,
        variants: 0 === nM.errors.length ? nM.variants : null
      };
      if (nM.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", nM.errors), {
        status: "none"
      };
      const {
        name: QM,
        keepCircleShadows: zM
      } = iM.manifest;
      return {
        status: "active",
        pack: {
          name: QM,
          variants: nM.variants,
          keepCircleShadows: !0 === zM
        }
      }
    }
  },
  7142: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      forgetShaderPackActiveHint: () => uM,
      isOtherApiVersion: () => bM,
      isShaderPackActive: () => UM,
      isShaderPackChangePending: () => eM,
      markShaderPackChangePending: () => CM,
      pageShaderPackValidationVersion: () => wM,
      reconcileStoredShaderPackHint: () => gM,
      removeShaderPack: () => EM,
      replaceShaderPack: () => dM,
      saveShaderPack: () => JM,
      shaderPackNeedsCheck: () => tM,
      storedPackOutcome: () => GM,
      storedShaderPackFiles: () => mM,
      toStoredShaderPack: () => LM
    });
    var OM = iM(5442),
      SM = iM(5435),
      jM = iM(30),
      aM = iM(3855),
      PM = iM(7148),
      nM = iM(7120);
    const QM = "shaderPackChangePending";
    let zM = null;

    function LM(MM, rM, iM) {
      return {
        manifest: MM.manifest,
        files: (0, OM.w)(MM.files),
        validation: rM,
        ...iM && {
          listing: iM
        }
      }
    }

    function mM(MM) {
      return Object.keys(MM.files).map((rM => ({
        path: rM,
        source: MM.files[rM]
      })))
    }
    let HM = Promise.resolve();

    function hM(MM) {
      const rM = HM.then(MM);
      return HM = rM.catch((() => {})), rM
    }

    function JM(MM, rM) {
      return hM((() => yM(MM, rM)))
    }

    function dM(MM, rM, iM) {
      return hM((async () => JSON.stringify(await (0, PM.d)()) === JSON.stringify(MM) && (null === rM ? (await lM(), !0) : yM(rM, iM))))
    }
    async function yM(MM, rM) {
      const iM = await jM.f.setItem(PM.b, MM);
      return iM && RM(MM, rM), iM
    }
    async function lM() {
      await jM.f.removeItem(PM.b), jM.g.removeItem(aM.c)
    }

    function EM() {
      return hM(lM)
    }

    function UM(MM, rM) {
      return "active" === GM(MM, rM).kind
    }

    function GM(MM, rM) {
      var iM;
      return null === MM ? {
        kind: "none",
        reason: "nothingStored"
      } : bM(MM) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) || MM.validation.fromRecheck ? null === rM ? {
        kind: "none",
        reason: "noCompiler"
      } : tM(MM, rM) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : MM.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function CM() {
      jM.k.setItem(QM, performance.timeOrigin)
    }

    function eM() {
      return jM.k.getItem(QM) === performance.timeOrigin
    }

    function bM(MM) {
      return !(0, SM.k)(MM.manifest.apiVersion)
    }

    function wM(MM) {
      return zM ??= MM.KD((0, nM.shaderPackTextures)()), zM
    }

    function tM(MM, rM) {
      var iM;
      return (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.headerVersion) !== wM(rM)
    }

    function gM(MM) {
      return hM((async () => {
        RM(await (0, PM.d)(!0), MM)
      }))
    }

    function uM() {
      return hM((async () => {
        jM.g.removeItem(aM.c)
      }))
    }

    function RM(MM, rM) {
      UM(MM, rM) ? jM.g.setItem(aM.c, !0) : jM.g.removeItem(aM.c)
    }
  },
  7134: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      f: () => PM
    });
    var OM = iM(7142),
      SM = iM(7120),
      jM = iM(106);
    const aM = 100;
    async function PM(MM, rM) {
      var iM;
      let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (iM = navigator.gpu) && void 0 !== iM ? iM : null;
      const aM = MM.zMM(rM, (0, SM.shaderPackTextures)());
      if (aM.errors.length > 0) return QM(MM, aM.errors, aM.offInStrict);
      const PM = await async function(MM) {
        if (!MM) return null;
        try {
          const rM = await (0, jM.z)(MM);
          return rM ? await rM.requestDevice() : null
        } catch (rM) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", rM), null
        }
      }(OM);
      if (!PM) return null;
      let nM = !1;
      PM.lost.then((() => {
        nM = !0
      }));
      try {
        const rM = await Promise.all(aM.validationModules.map((rM => async function(MM, rM, iM) {
          rM.pushErrorScope("validation");
          const OM = rM.createShaderModule({
              code: iM.code
            }),
            SM = rM.popErrorScope(),
            {
              messages: jM
            } = await OM.getCompilationInfo(),
            aM = jM.filter((MM => "error" === MM.type)).map((rM => MM.mapValidationMessage(iM, rM))),
            PM = await SM;
          PM && 0 === aM.length && aM.push({
            file: null,
            line: 0,
            message: PM.message,
            variants: [iM.key]
          });
          return aM
        }(MM, PM, rM))));
        return nM ? null : QM(MM, MM.ciM(rM.flat()), aM.offInStrict)
      } catch (zM) {
        return console.error("Couldn't validate the shader pack on WebGPU.", zM), null
      } finally {
        PM.destroy()
      }
    }
    async function nM(MM, rM) {
      var iM;
      if (!(0, OM.shaderPackNeedsCheck)(MM, rM) || (0, OM.isOtherApiVersion)(MM)) return MM;
      const SM = await PM(rM, (0, OM.storedShaderPackFiles)(MM));
      if (!SM) return MM;
      const jM = !1 === (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) && !MM.validation.fromRecheck,
        aM = {
          ...MM,
          validation: jM ? SM : {
            ...SM,
            fromRecheck: !0
          }
        };
      return await (0, OM.replaceShaderPack)(MM, aM, rM) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), aM
    }

    function QM(MM, rM, iM) {
      return {
        headerVersion: (0, OM.pageShaderPackValidationVersion)(MM),
        ok: 0 === rM.length,
        errors: rM.slice(0, aM),
        moreErrors: Math.max(0, rM.length - aM),
        offInStrict: iM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);