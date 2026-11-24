export const id = 140;
export const ids = [140];
export const modules = {
  41763: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      compilePagePack: () => uS,
      prefetchCompiler: () => NS,
      reconcileHint: () => qS
    });
    var tS = gS(6810),
      bS = gS(6844),
      XS = gS(6824),
      xS = gS(6839);

    function NS() {
      (0, tS.loadPageShaderPackCompiler)()
    }
    async function qS() {
      const SS = await (0, tS.loadPageShaderPackCompiler)();
      await (SS ? (0, bS.reconcileStoredShaderPackHint)(SS) : (0, bS.forgetShaderPackActiveHint)())
    }
    async function uS(SS) {
      const HS = await (0, tS.loadPageShaderPackCompiler)();
      if (!HS) return {
        status: "none"
      };
      const gS = await (0, xS.c)(SS, HS),
        NS = (0, bS.storedPackOutcome)(gS, HS);
      if ("none" === NS.kind) return {
        status: "none"
      };
      const qS = HS.f6((0, bS.storedShaderPackFiles)(gS), (0, XS.shaderPackTextures)());
      if ("blocked" === NS.kind) return {
        status: "blocked",
        messageKey: NS.messageKey,
        variants: 0 === qS.errors.length ? qS.variants : null
      };
      if (qS.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", qS.errors), {
        status: "none"
      };
      const {
        name: uS,
        keepCircleShadows: IS
      } = gS.manifest;
      return {
        status: "active",
        pack: {
          name: uS,
          variants: qS.variants,
          keepCircleShadows: !0 === IS
        }
      }
    }
  },
  6844: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      forgetShaderPackActiveHint: () => cS,
      isOtherApiVersion: () => ZS,
      isShaderPackActive: () => QS,
      isShaderPackChangePending: () => hS,
      markShaderPackChangePending: () => wS,
      pageShaderPackValidationVersion: () => JS,
      reconcileStoredShaderPackHint: () => dS,
      removeShaderPack: () => PS,
      replaceShaderPack: () => GS,
      saveShaderPack: () => jS,
      shaderPackNeedsCheck: () => OS,
      storedPackOutcome: () => DS,
      storedShaderPackFiles: () => kS,
      toStoredShaderPack: () => fS
    });
    var tS = gS(5221),
      bS = gS(5212),
      XS = gS(45),
      xS = gS(3591),
      NS = gS(6848),
      qS = gS(6824);
    const uS = "shaderPackChangePending";
    let IS = null;

    function fS(SS, HS, gS) {
      return {
        manifest: SS.manifest,
        files: (0, tS.v)(SS.files),
        validation: HS,
        ...gS && {
          listing: gS
        }
      }
    }

    function kS(SS) {
      return Object.keys(SS.files).map((HS => ({
        path: HS,
        source: SS.files[HS]
      })))
    }
    let aS = Promise.resolve();

    function KS(SS) {
      const HS = aS.then(SS);
      return aS = HS.catch((() => {})), HS
    }

    function jS(SS, HS) {
      return KS((() => CS(SS, HS)))
    }

    function GS(SS, HS, gS) {
      return KS((async () => JSON.stringify(await (0, NS.f)()) === JSON.stringify(SS) && (null === HS ? (await nS(), !0) : CS(HS, gS))))
    }
    async function CS(SS, HS) {
      const gS = await XS.e.setItem(NS.d, SS);
      return gS && vS(SS, HS), gS
    }
    async function nS() {
      await XS.e.removeItem(NS.d), XS.g.removeItem(xS.d)
    }

    function PS() {
      return KS(nS)
    }

    function QS(SS, HS) {
      return "active" === DS(SS, HS).kind
    }

    function DS(SS, HS) {
      var gS;
      return null === SS ? {
        kind: "none",
        reason: "nothingStored"
      } : ZS(SS) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) || SS.validation.fromRecheck ? null === HS ? {
        kind: "none",
        reason: "noCompiler"
      } : OS(SS, HS) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : SS.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wS() {
      XS.h.setItem(uS, performance.timeOrigin)
    }

    function hS() {
      return XS.h.getItem(uS) === performance.timeOrigin
    }

    function ZS(SS) {
      return !(0, bS.j)(SS.manifest.apiVersion)
    }

    function JS(SS) {
      return IS ??= SS.dL((0, qS.shaderPackTextures)()), IS
    }

    function OS(SS, HS) {
      var gS;
      return (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.headerVersion) !== JS(HS)
    }

    function dS(SS) {
      return KS((async () => {
        vS(await (0, NS.f)(!0), SS)
      }))
    }

    function cS() {
      return KS((async () => {
        XS.g.removeItem(xS.d)
      }))
    }

    function vS(SS, HS) {
      QS(SS, HS) ? XS.g.setItem(xS.d, !0) : XS.g.removeItem(xS.d)
    }
  },
  6839: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS,
      g: () => NS
    });
    var tS = gS(6844),
      bS = gS(6824),
      XS = gS(122);
    const xS = 100;
    async function NS(SS, HS) {
      var gS;
      let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gS = navigator.gpu) && void 0 !== gS ? gS : null;
      const xS = SS.f6(HS, (0, bS.shaderPackTextures)());
      if (xS.errors.length > 0) return uS(SS, xS.errors, xS.offInStrict);
      const NS = await async function(SS) {
        if (!SS) return null;
        try {
          const HS = await (0, XS.x)(SS);
          return HS ? await HS.requestDevice() : null
        } catch (HS) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", HS), null
        }
      }(tS);
      if (!NS) return null;
      let qS = !1;
      NS.lost.then((() => {
        qS = !0
      }));
      try {
        const HS = await Promise.all(xS.validationModules.map((HS => async function(SS, HS, gS) {
          HS.pushErrorScope("validation");
          const tS = HS.createShaderModule({
              code: gS.code
            }),
            bS = HS.popErrorScope(),
            {
              messages: XS
            } = await tS.getCompilationInfo(),
            xS = XS.filter((SS => "error" === SS.type)).map((HS => SS.mapValidationMessage(gS, HS))),
            NS = await bS;
          NS && 0 === xS.length && xS.push({
            file: null,
            line: 0,
            message: NS.message,
            variants: [gS.key]
          });
          return xS
        }(SS, NS, HS))));
        return qS ? null : uS(SS, SS.VgS(HS.flat()), xS.offInStrict)
      } catch (IS) {
        return console.error("Couldn't validate the shader pack on WebGPU.", IS), null
      } finally {
        NS.destroy()
      }
    }
    async function qS(SS, HS) {
      var gS;
      if (!(0, tS.shaderPackNeedsCheck)(SS, HS) || (0, tS.isOtherApiVersion)(SS)) return SS;
      const bS = await NS(HS, (0, tS.storedShaderPackFiles)(SS));
      if (!bS) return SS;
      const XS = !1 === (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) && !SS.validation.fromRecheck,
        xS = {
          ...SS,
          validation: XS ? bS : {
            ...bS,
            fromRecheck: !0
          }
        };
      return await (0, tS.replaceShaderPack)(SS, xS, HS) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), xS
    }

    function uS(SS, HS, gS) {
      return {
        headerVersion: (0, tS.pageShaderPackValidationVersion)(SS),
        ok: 0 === HS.length,
        errors: HS.slice(0, xS),
        moreErrors: Math.max(0, HS.length - xS),
        offInStrict: gS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);