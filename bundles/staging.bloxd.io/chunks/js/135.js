export const id = 135;
export const ids = [135];
export const modules = {
  40578: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      compilePagePack: () => FT,
      prefetchCompiler: () => XT,
      reconcileHint: () => BT
    });
    var iT = IT(6114),
      zT = IT(6154),
      kT = IT(6138),
      WT = IT(6146);

    function XT() {
      (0, iT.loadPageShaderPackCompiler)()
    }
    async function BT() {
      const TT = await (0, iT.loadPageShaderPackCompiler)();
      await (TT ? (0, zT.reconcileStoredShaderPackHint)(TT) : (0, zT.forgetShaderPackActiveHint)())
    }
    async function FT(TT) {
      const oT = await (0, iT.loadPageShaderPackCompiler)();
      if (!oT) return {
        status: "none"
      };
      const IT = await (0, WT.b)(TT, oT),
        XT = (0, zT.storedPackOutcome)(IT, oT);
      if ("none" === XT.kind) return {
        status: "none"
      };
      const BT = oT.v_((0, zT.storedShaderPackFiles)(IT), (0, kT.shaderPackTextures)());
      if ("blocked" === XT.kind) return {
        status: "blocked",
        messageKey: XT.messageKey,
        variants: 0 === BT.errors.length ? BT.variants : null
      };
      if (BT.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", BT.errors), {
        status: "none"
      };
      const {
        name: FT,
        keepCircleShadows: ST
      } = IT.manifest;
      return {
        status: "active",
        pack: {
          name: FT,
          variants: BT.variants,
          keepCircleShadows: !0 === ST
        }
      }
    }
  },
  6154: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      forgetShaderPackActiveHint: () => fT,
      isOtherApiVersion: () => RT,
      isShaderPackActive: () => hT,
      isShaderPackChangePending: () => eT,
      markShaderPackChangePending: () => mT,
      pageShaderPackValidationVersion: () => uT,
      reconcileStoredShaderPackHint: () => ET,
      removeShaderPack: () => gT,
      replaceShaderPack: () => MT,
      saveShaderPack: () => KT,
      shaderPackNeedsCheck: () => vT,
      storedPackOutcome: () => wT,
      storedShaderPackFiles: () => LT,
      toStoredShaderPack: () => DT
    });
    var iT = IT(6092),
      zT = IT(6103),
      kT = IT(26),
      WT = IT(3012),
      XT = IT(6158),
      BT = IT(6138);
    const FT = "shaderPackChangePending";
    let ST = null;

    function DT(TT, oT, IT) {
      return {
        manifest: TT.manifest,
        files: (0, iT.t)(TT.files),
        validation: oT,
        ...IT && {
          listing: IT
        }
      }
    }

    function LT(TT) {
      return Object.keys(TT.files).map((oT => ({
        path: oT,
        source: TT.files[oT]
      })))
    }
    let xT = Promise.resolve();

    function cT(TT) {
      const oT = xT.then(TT);
      return xT = oT.catch((() => {})), oT
    }

    function KT(TT, oT) {
      return cT((() => rT(TT, oT)))
    }

    function MT(TT, oT, IT) {
      return cT((async () => JSON.stringify(await (0, XT.e)()) === JSON.stringify(TT) && (null === oT ? (await AT(), !0) : rT(oT, IT))))
    }
    async function rT(TT, oT) {
      const IT = await kT.c.setItem(XT.d, TT);
      return IT && CT(TT, oT), IT
    }
    async function AT() {
      await kT.c.removeItem(XT.d), kT.e.removeItem(WT.e)
    }

    function gT() {
      return cT(AT)
    }

    function hT(TT, oT) {
      return "active" === wT(TT, oT).kind
    }

    function wT(TT, oT) {
      var IT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : RT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (IT = TT.validation) || void 0 === IT ? void 0 : IT.ok) || TT.validation.fromRecheck ? null === oT ? {
        kind: "none",
        reason: "noCompiler"
      } : vT(TT, oT) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : TT.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function mT() {
      kT.h.setItem(FT, performance.timeOrigin)
    }

    function eT() {
      return kT.h.getItem(FT) === performance.timeOrigin
    }

    function RT(TT) {
      return !(0, zT.h)(TT.manifest.apiVersion)
    }

    function uT(TT) {
      return ST ??= TT.ZC((0, BT.shaderPackTextures)()), ST
    }

    function vT(TT, oT) {
      var IT;
      return (null === (IT = TT.validation) || void 0 === IT ? void 0 : IT.headerVersion) !== uT(oT)
    }

    function ET(TT) {
      return cT((async () => {
        CT(await (0, XT.e)(!0), TT)
      }))
    }

    function fT() {
      return cT((async () => {
        kT.e.removeItem(WT.e)
      }))
    }

    function CT(TT, oT) {
      hT(TT, oT) ? kT.e.setItem(WT.e, !0) : kT.e.removeItem(WT.e)
    }
  },
  6146: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT,
      c: () => XT
    });
    var iT = IT(6154),
      zT = IT(6138),
      kT = IT(120);
    const WT = 100;
    async function XT(TT, oT) {
      var IT;
      let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (IT = navigator.gpu) && void 0 !== IT ? IT : null;
      const WT = TT.v_(oT, (0, zT.shaderPackTextures)());
      if (WT.errors.length > 0) return FT(TT, WT.errors, WT.offInStrict);
      const XT = await async function(TT) {
        if (!TT) return null;
        try {
          const oT = await (0, kT.u)(TT);
          return oT ? await oT.requestDevice() : null
        } catch (oT) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", oT), null
        }
      }(iT);
      if (!XT) return null;
      let BT = !1;
      XT.lost.then((() => {
        BT = !0
      }));
      try {
        const oT = await Promise.all(WT.validationModules.map((oT => async function(TT, oT, IT) {
          oT.pushErrorScope("validation");
          const iT = oT.createShaderModule({
              code: IT.code
            }),
            zT = oT.popErrorScope(),
            {
              messages: kT
            } = await iT.getCompilationInfo(),
            WT = kT.filter((TT => "error" === TT.type)).map((oT => TT.mapValidationMessage(IT, oT))),
            XT = await zT;
          XT && 0 === WT.length && WT.push({
            file: null,
            line: 0,
            message: XT.message,
            variants: [IT.key]
          });
          return WT
        }(TT, XT, oT))));
        return BT ? null : FT(TT, TT.EIT(oT.flat()), WT.offInStrict)
      } catch (ST) {
        return console.error("Couldn't validate the shader pack on WebGPU.", ST), null
      } finally {
        XT.destroy()
      }
    }
    async function BT(TT, oT) {
      var IT;
      if (!(0, iT.shaderPackNeedsCheck)(TT, oT) || (0, iT.isOtherApiVersion)(TT)) return TT;
      const zT = await XT(oT, (0, iT.storedShaderPackFiles)(TT));
      if (!zT) return TT;
      const kT = !1 === (null === (IT = TT.validation) || void 0 === IT ? void 0 : IT.ok) && !TT.validation.fromRecheck,
        WT = {
          ...TT,
          validation: kT ? zT : {
            ...zT,
            fromRecheck: !0
          }
        };
      return await (0, iT.replaceShaderPack)(TT, WT, oT) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), WT
    }

    function FT(TT, oT, IT) {
      return {
        headerVersion: (0, iT.pageShaderPackValidationVersion)(TT),
        ok: 0 === oT.length,
        errors: oT.slice(0, WT),
        moreErrors: Math.max(0, oT.length - WT),
        offInStrict: IT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);