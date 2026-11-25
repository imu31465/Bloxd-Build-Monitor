export const id = 146;
export const ids = [146];
export const modules = {
  44398: (MM, rM, iM) => {
    iM.d(rM, {
      startHarnessShaderPack: () => LM
    });
    var OM = iM(7054),
      SM = iM(5442),
      jM = iM(7131),
      aM = iM(7111),
      PM = iM(5435),
      nM = iM(40300),
      QM = iM(7120),
      zM = iM(7134);
    async function LM(MM, rM) {
      const {
        stored: iM,
        info: LM
      } = await async function(MM, rM) {
        const iM = await async function(MM) {
          const rM = await fetch(MM);
          if (!rM.ok) throw new Error(`Couldn't fetch the shader pack at ${MM}: HTTP ${rM.status}`);
          const iM = await rM.json();
          if (!(0, OM.k)(iM)) throw new Error(`The shader pack at ${MM} isn't a shader pack listing source`);
          return iM
        }(MM);
        if (!(0, PM.k)(iM.apiVersion)) throw new Error(`The pack is for shader pack API version ${iM.apiVersion}; this build runs version ${PM.e}`);
        const nM = {
            manifest: {
              apiVersion: iM.apiVersion,
              name: iM.name,
              author: iM.author,
              description: null,
              keepCircleShadows: !0 === iM.keepCircleShadows
            },
            files: iM.files,
            validation: null
          },
          LM = {
            url: MM,
            name: iM.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          mM = (0, SM.t)(iM.files);
        if ("string" === typeof mM) return LM.errors = [{
          file: null,
          line: 0,
          message: mM
        }], {
          stored: nM,
          info: LM
        };
        const HM = await (0, aM.loadPageShaderPackCompiler)();
        if (!HM) throw new Error("The shader pack compiler couldn't load");
        const hM = await (0, zM.f)(HM, mM);
        if (!hM) throw new Error("No WebGPU device could validate the shader pack");
        if (LM.errors = [...hM.errors], hM.ok) {
          const MM = HM.zMM(mM, (0, QM.shaderPackTextures)());
          LM.features = (0, SM.q)(MM), LM.runsInMode = (0, jM.l)(MM.variants, rM)
        }
        return {
          stored: {
            ...nM,
            validation: hM
          },
          info: LM
        }
      }(MM, rM), [mM] = LM.errors;
      if (mM) {
        const MM = null === mM.file ? "" : `${mM.file}:${mM.line}: `,
          rM = LM.errors.length > 1 ? ` (${LM.errors.length-1} more)` : "";
        return {
          info: LM,
          problem: `The shader pack doesn't compile: ${MM}${mM.message}${rM}`
        }
      }
      return LM.runsInMode ? ((0, nM.setHarnessUrlShaderPack)(iM, rM), {
        info: LM,
        problem: null
      }) : {
        info: LM,
        problem: `The shader pack runs nothing in ${rM} mode`
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
  },
  7054: (MM, rM, iM) => {
    iM.d(rM, {
      D: () => aM,
      E: () => OM,
      I: () => mM,
      M: () => zM,
      Q: () => UM,
      U: () => LM,
      V: () => QM,
      b: () => hM,
      e: () => dM,
      g: () => JM,
      k: () => HM,
      m: () => EM,
      q: () => CM,
      t: () => nM,
      v: () => SM,
      w: () => GM,
      y: () => jM,
      z: () => PM
    });
    const OM = ["forest", "desert", "water", "night", "cave"];
    const SM = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      jM = ["popular", "updated", "newest"],
      aM = 3,
      PM = 32,
      nM = 300;

    function QM(MM, rM) {
      return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
    }
    const zM = 64,
      LM = 512,
      mM = 18e5;

    function HM(MM) {
      const rM = MM,
        iM = null === rM || void 0 === rM ? void 0 : rM.files;
      return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof iM && null !== iM && Object.values(iM).every((MM => "string" === typeof MM))
    }
    const hM = "Bloxdhub",
      JM = "https://bloxdhub.com/shaders";

    function dM(MM) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
    }
    const yM = "Screenshot generation failed.",
      lM = "Its screenshots couldn't be generated:";

    function EM(MM) {
      var rM;
      return MM === yM || null !== (rM = null === MM || void 0 === MM ? void 0 : MM.startsWith(lM)) && void 0 !== rM && rM
    }

    function UM(MM, rM) {
      return `shaderPacks/${MM}/${rM}.json`
    }

    function GM(MM, rM, iM, OM) {
      return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
    }

    function CM(MM, rM, iM, OM) {
      return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);