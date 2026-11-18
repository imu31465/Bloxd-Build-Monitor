export const id = 127;
export const ids = [127];
export const modules = {
  40452: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      compilePagePack: () => gB,
      prefetchCompiler: () => JB,
      reconcileHint: () => YB
    });
    var VB = dB(5949),
      yB = dB(5987),
      pB = dB(5973),
      lB = dB(5985);

    function JB() {
      (0, VB.loadPageShaderPackCompiler)()
    }
    async function YB() {
      const BB = await (0, VB.loadPageShaderPackCompiler)();
      await (BB ? (0, yB.reconcileStoredShaderPackHint)(BB) : (0, yB.forgetShaderPackActiveHint)())
    }
    async function gB(BB) {
      const TB = await (0, VB.loadPageShaderPackCompiler)();
      if (!TB) return {
        status: "none"
      };
      const dB = await (0, lB.c)(BB, TB),
        JB = (0, yB.storedPackOutcome)(dB, TB);
      if ("none" === JB.kind) return {
        status: "none"
      };
      const YB = TB.iBB((0, yB.storedShaderPackFiles)(dB), (0, pB.shaderPackTextures)());
      if ("blocked" === JB.kind) return {
        status: "blocked",
        messageKey: JB.messageKey,
        variants: 0 === YB.errors.length ? YB.variants : null
      };
      if (YB.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", YB.errors), {
        status: "none"
      };
      const {
        name: gB,
        keepCircleShadows: oB
      } = dB.manifest;
      return {
        status: "active",
        pack: {
          name: gB,
          variants: YB.variants,
          keepCircleShadows: !0 === oB
        }
      }
    }
  },
  5987: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      forgetShaderPackActiveHint: () => UB,
      isOtherApiVersion: () => sB,
      isShaderPackActive: () => iB,
      isShaderPackChangePending: () => fB,
      markShaderPackChangePending: () => tB,
      pageShaderPackValidationVersion: () => MB,
      reconcileStoredShaderPackHint: () => wB,
      removeShaderPack: () => mB,
      replaceShaderPack: () => HB,
      saveShaderPack: () => uB,
      shaderPackNeedsCheck: () => zB,
      storedPackOutcome: () => NB,
      storedShaderPackFiles: () => LB,
      toStoredShaderPack: () => kB
    });
    var VB = dB(5924),
      yB = dB(5940),
      pB = dB(33),
      lB = dB(2939),
      JB = dB(5994),
      YB = dB(5973);
    const gB = "shaderPackChangePending";
    let oB = null;

    function kB(BB, TB, dB) {
      return {
        manifest: BB.manifest,
        files: (0, VB.u)(BB.files),
        validation: TB,
        ...dB && {
          listing: dB
        }
      }
    }

    function LB(BB) {
      return Object.keys(BB.files).map((TB => ({
        path: TB,
        source: BB.files[TB]
      })))
    }
    let OB = Promise.resolve();

    function DB(BB) {
      const TB = OB.then(BB);
      return OB = TB.catch((() => {})), TB
    }

    function uB(BB, TB) {
      return DB((() => EB(BB, TB)))
    }

    function HB(BB, TB, dB) {
      return DB((async () => JSON.stringify(await (0, JB.d)()) === JSON.stringify(BB) && (null === TB ? (await vB(), !0) : EB(TB, dB))))
    }
    async function EB(BB, TB) {
      const dB = await pB.f.setItem(JB.b, BB);
      return dB && FB(BB, TB), dB
    }
    async function vB() {
      await pB.f.removeItem(JB.b), pB.j.removeItem(lB.d)
    }

    function mB() {
      return DB(vB)
    }

    function iB(BB, TB) {
      return "active" === NB(BB, TB).kind
    }

    function NB(BB, TB) {
      var dB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : sB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.ok) || BB.validation.fromRecheck ? null === TB ? {
        kind: "none",
        reason: "noCompiler"
      } : zB(BB, TB) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : BB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function tB() {
      pB.m.setItem(gB, performance.timeOrigin)
    }

    function fB() {
      return pB.m.getItem(gB) === performance.timeOrigin
    }

    function sB(BB) {
      return !(0, yB.l)(BB.manifest.apiVersion)
    }

    function MB(BB) {
      return oB ??= BB.PU((0, YB.shaderPackTextures)()), oB
    }

    function zB(BB, TB) {
      var dB;
      return (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.headerVersion) !== MB(TB)
    }

    function wB(BB) {
      return DB((async () => {
        FB(await (0, JB.d)(!0), BB)
      }))
    }

    function UB() {
      return DB((async () => {
        pB.j.removeItem(lB.d)
      }))
    }

    function FB(BB, TB) {
      iB(BB, TB) ? pB.j.setItem(lB.d, !0) : pB.j.removeItem(lB.d)
    }
  },
  5985: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => YB,
      f: () => JB
    });
    var VB = dB(5987),
      yB = dB(5973),
      pB = dB(113);
    const lB = 100;
    async function JB(BB, TB) {
      var dB;
      let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (dB = navigator.gpu) && void 0 !== dB ? dB : null;
      const lB = BB.iBB(TB, (0, yB.shaderPackTextures)());
      if (lB.errors.length > 0) return gB(BB, lB.errors, lB.offInStrict);
      const JB = await async function(BB) {
        if (!BB) return null;
        try {
          const TB = await (0, pB.q)(BB);
          return TB ? await TB.requestDevice() : null
        } catch (TB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", TB), null
        }
      }(VB);
      if (!JB) return null;
      let YB = !1;
      JB.lost.then((() => {
        YB = !0
      }));
      try {
        const TB = await Promise.all(lB.validationModules.map((TB => async function(BB, TB, dB) {
          TB.pushErrorScope("validation");
          const VB = TB.createShaderModule({
              code: dB.code
            }),
            yB = TB.popErrorScope(),
            {
              messages: pB
            } = await VB.getCompilationInfo(),
            lB = pB.filter((BB => "error" === BB.type)).map((TB => BB.mapValidationMessage(dB, TB))),
            JB = await yB;
          JB && 0 === lB.length && lB.push({
            file: null,
            line: 0,
            message: JB.message,
            variants: [dB.key]
          });
          return lB
        }(BB, JB, TB))));
        return YB ? null : gB(BB, BB.LVB(TB.flat()), lB.offInStrict)
      } catch (oB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", oB), null
      } finally {
        JB.destroy()
      }
    }
    async function YB(BB, TB) {
      var dB;
      if (!(0, VB.shaderPackNeedsCheck)(BB, TB) || (0, VB.isOtherApiVersion)(BB)) return BB;
      const yB = await JB(TB, (0, VB.storedShaderPackFiles)(BB));
      if (!yB) return BB;
      const pB = !1 === (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.ok) && !BB.validation.fromRecheck,
        lB = {
          ...BB,
          validation: pB ? yB : {
            ...yB,
            fromRecheck: !0
          }
        };
      return await (0, VB.replaceShaderPack)(BB, lB, TB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), lB
    }

    function gB(BB, TB, dB) {
      return {
        headerVersion: (0, VB.pageShaderPackValidationVersion)(BB),
        ok: 0 === TB.length,
        errors: TB.slice(0, lB),
        moreErrors: Math.max(0, TB.length - lB),
        offInStrict: dB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);