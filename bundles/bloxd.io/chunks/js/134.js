export const id = 134;
export const ids = [134];
export const modules = {
  41104: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      compilePagePack: () => KU,
      prefetchCompiler: () => TU,
      reconcileHint: () => qU
    });
    var tU = gU(6295),
      pU = gU(6330),
      EU = gU(6306),
      PU = gU(6321);

    function TU() {
      (0, tU.loadPageShaderPackCompiler)()
    }
    async function qU() {
      const UU = await (0, tU.loadPageShaderPackCompiler)();
      await (UU ? (0, pU.reconcileStoredShaderPackHint)(UU) : (0, pU.forgetShaderPackActiveHint)())
    }
    async function KU(UU) {
      const RU = await (0, tU.loadPageShaderPackCompiler)();
      if (!RU) return {
        status: "none"
      };
      const gU = await (0, PU.c)(UU, RU),
        TU = (0, pU.storedPackOutcome)(gU, RU);
      if ("none" === TU.kind) return {
        status: "none"
      };
      const qU = RU.i_((0, pU.storedShaderPackFiles)(gU), (0, EU.shaderPackTextures)());
      if ("blocked" === TU.kind) return {
        status: "blocked",
        messageKey: TU.messageKey,
        variants: 0 === qU.errors.length ? qU.variants : null
      };
      if (qU.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", qU.errors), {
        status: "none"
      };
      const {
        name: KU,
        keepCircleShadows: cU
      } = gU.manifest;
      return {
        status: "active",
        pack: {
          name: KU,
          variants: qU.variants,
          keepCircleShadows: !0 === cU
        }
      }
    }
  },
  6330: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      forgetShaderPackActiveHint: () => ZU,
      isOtherApiVersion: () => wU,
      isShaderPackActive: () => xU,
      isShaderPackChangePending: () => JU,
      markShaderPackChangePending: () => IU,
      pageShaderPackValidationVersion: () => nU,
      reconcileStoredShaderPackHint: () => oU,
      removeShaderPack: () => fU,
      replaceShaderPack: () => QU,
      saveShaderPack: () => hU,
      shaderPackNeedsCheck: () => bU,
      storedPackOutcome: () => mU,
      storedShaderPackFiles: () => jU,
      toStoredShaderPack: () => GU
    });
    var tU = gU(6265),
      pU = gU(6284),
      EU = gU(34),
      PU = gU(3151),
      TU = gU(6339),
      qU = gU(6306);
    const KU = "shaderPackChangePending";
    let cU = null;

    function GU(UU, RU, gU) {
      return {
        manifest: UU.manifest,
        files: (0, tU.t)(UU.files),
        validation: RU,
        ...gU && {
          listing: gU
        }
      }
    }

    function jU(UU) {
      return Object.keys(UU.files).map((RU => ({
        path: RU,
        source: UU.files[RU]
      })))
    }
    let uU = Promise.resolve();

    function CU(UU) {
      const RU = uU.then(UU);
      return uU = RU.catch((() => {})), RU
    }

    function hU(UU, RU) {
      return CU((() => eU(UU, RU)))
    }

    function QU(UU, RU, gU) {
      return CU((async () => JSON.stringify(await (0, TU.e)()) === JSON.stringify(UU) && (null === RU ? (await WU(), !0) : eU(RU, gU))))
    }
    async function eU(UU, RU) {
      const gU = await EU.g.setItem(TU.b, UU);
      return gU && aU(UU, RU), gU
    }
    async function WU() {
      await EU.g.removeItem(TU.b), EU.k.removeItem(PU.b)
    }

    function fU() {
      return CU(WU)
    }

    function xU(UU, RU) {
      return "active" === mU(UU, RU).kind
    }

    function mU(UU, RU) {
      var gU;
      return null === UU ? {
        kind: "none",
        reason: "nothingStored"
      } : wU(UU) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gU = UU.validation) || void 0 === gU ? void 0 : gU.ok) || UU.validation.fromRecheck ? null === RU ? {
        kind: "none",
        reason: "noCompiler"
      } : bU(UU, RU) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : UU.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function IU() {
      EU.l.setItem(KU, performance.timeOrigin)
    }

    function JU() {
      return EU.l.getItem(KU) === performance.timeOrigin
    }

    function wU(UU) {
      return !(0, pU.i)(UU.manifest.apiVersion)
    }

    function nU(UU) {
      return cU ??= UU.xZ((0, qU.shaderPackTextures)()), cU
    }

    function bU(UU, RU) {
      var gU;
      return (null === (gU = UU.validation) || void 0 === gU ? void 0 : gU.headerVersion) !== nU(RU)
    }

    function oU(UU) {
      return CU((async () => {
        aU(await (0, TU.e)(!0), UU)
      }))
    }

    function ZU() {
      return CU((async () => {
        EU.k.removeItem(PU.b)
      }))
    }

    function aU(UU, RU) {
      xU(UU, RU) ? EU.k.setItem(PU.b, !0) : EU.k.removeItem(PU.b)
    }
  },
  6321: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      f: () => TU
    });
    var tU = gU(6330),
      pU = gU(6306),
      EU = gU(122);
    const PU = 100;
    async function TU(UU, RU) {
      var gU;
      let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gU = navigator.gpu) && void 0 !== gU ? gU : null;
      const PU = UU.i_(RU, (0, pU.shaderPackTextures)());
      if (PU.errors.length > 0) return KU(UU, PU.errors, PU.offInStrict);
      const TU = await async function(UU) {
        if (!UU) return null;
        try {
          const RU = await (0, EU.v)(UU);
          return RU ? await RU.requestDevice() : null
        } catch (RU) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", RU), null
        }
      }(tU);
      if (!TU) return null;
      let qU = !1;
      TU.lost.then((() => {
        qU = !0
      }));
      try {
        const RU = await Promise.all(PU.validationModules.map((RU => async function(UU, RU, gU) {
          RU.pushErrorScope("validation");
          const tU = RU.createShaderModule({
              code: gU.code
            }),
            pU = RU.popErrorScope(),
            {
              messages: EU
            } = await tU.getCompilationInfo(),
            PU = EU.filter((UU => "error" === UU.type)).map((RU => UU.mapValidationMessage(gU, RU))),
            TU = await pU;
          TU && 0 === PU.length && PU.push({
            file: null,
            line: 0,
            message: TU.message,
            variants: [gU.key]
          });
          return PU
        }(UU, TU, RU))));
        return qU ? null : KU(UU, UU.mgU(RU.flat()), PU.offInStrict)
      } catch (cU) {
        return console.error("Couldn't validate the shader pack on WebGPU.", cU), null
      } finally {
        TU.destroy()
      }
    }
    async function qU(UU, RU) {
      var gU;
      if (!(0, tU.shaderPackNeedsCheck)(UU, RU) || (0, tU.isOtherApiVersion)(UU)) return UU;
      const pU = await TU(RU, (0, tU.storedShaderPackFiles)(UU));
      if (!pU) return UU;
      const EU = !1 === (null === (gU = UU.validation) || void 0 === gU ? void 0 : gU.ok) && !UU.validation.fromRecheck,
        PU = {
          ...UU,
          validation: EU ? pU : {
            ...pU,
            fromRecheck: !0
          }
        };
      return await (0, tU.replaceShaderPack)(UU, PU, RU) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), PU
    }

    function KU(UU, RU, gU) {
      return {
        headerVersion: (0, tU.pageShaderPackValidationVersion)(UU),
        ok: 0 === RU.length,
        errors: RU.slice(0, PU),
        moreErrors: Math.max(0, RU.length - PU),
        offInStrict: gU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);