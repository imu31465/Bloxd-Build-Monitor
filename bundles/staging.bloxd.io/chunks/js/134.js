export const id = 134;
export const ids = [134];
export const modules = {
  41315: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      compilePagePack: () => xT,
      prefetchCompiler: () => yT,
      reconcileHint: () => fT
    });
    var lT = cT(6607),
      MT = cT(6641),
      KT = cT(6623),
      OT = cT(6636);

    function yT() {
      (0, lT.loadPageShaderPackCompiler)()
    }
    async function fT() {
      const TT = await (0, lT.loadPageShaderPackCompiler)();
      await (TT ? (0, MT.reconcileStoredShaderPackHint)(TT) : (0, MT.forgetShaderPackActiveHint)())
    }
    async function xT(TT) {
      const kT = await (0, lT.loadPageShaderPackCompiler)();
      if (!kT) return {
        status: "none"
      };
      const cT = await (0, OT.e)(TT, kT),
        yT = (0, MT.storedPackOutcome)(cT, kT);
      if ("none" === yT.kind) return {
        status: "none"
      };
      const fT = kT.k_((0, MT.storedShaderPackFiles)(cT), (0, KT.shaderPackTextures)());
      if ("blocked" === yT.kind) return {
        status: "blocked",
        messageKey: yT.messageKey,
        variants: 0 === fT.errors.length ? fT.variants : null
      };
      if (fT.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", fT.errors), {
        status: "none"
      };
      const {
        name: xT,
        keepCircleShadows: IT
      } = cT.manifest;
      return {
        status: "active",
        pack: {
          name: xT,
          variants: fT.variants,
          keepCircleShadows: !0 === IT
        }
      }
    }
  },
  6641: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      forgetShaderPackActiveHint: () => zT,
      isOtherApiVersion: () => PT,
      isShaderPackActive: () => DT,
      isShaderPackChangePending: () => rT,
      markShaderPackChangePending: () => FT,
      pageShaderPackValidationVersion: () => wT,
      reconcileStoredShaderPackHint: () => bT,
      removeShaderPack: () => ST,
      replaceShaderPack: () => hT,
      saveShaderPack: () => tT,
      shaderPackNeedsCheck: () => mT,
      storedPackOutcome: () => aT,
      storedShaderPackFiles: () => CT,
      toStoredShaderPack: () => AT
    });
    var lT = cT(6581),
      MT = cT(6597),
      KT = cT(47),
      OT = cT(3383),
      yT = cT(6647),
      fT = cT(6623);
    const xT = "shaderPackChangePending";
    let IT = null;

    function AT(TT, kT, cT) {
      return {
        manifest: TT.manifest,
        files: (0, lT.s)(TT.files),
        validation: kT,
        ...cT && {
          listing: cT
        }
      }
    }

    function CT(TT) {
      return Object.keys(TT.files).map((kT => ({
        path: kT,
        source: TT.files[kT]
      })))
    }
    let jT = Promise.resolve();

    function vT(TT) {
      const kT = jT.then(TT);
      return jT = kT.catch((() => {})), kT
    }

    function tT(TT, kT) {
      return vT((() => NT(TT, kT)))
    }

    function hT(TT, kT, cT) {
      return vT((async () => JSON.stringify(await (0, yT.e)()) === JSON.stringify(TT) && (null === kT ? (await QT(), !0) : NT(kT, cT))))
    }
    async function NT(TT, kT) {
      const cT = await KT.d.setItem(yT.b, TT);
      return cT && JT(TT, kT), cT
    }
    async function QT() {
      await KT.d.removeItem(yT.b), KT.e.removeItem(OT.d)
    }

    function ST() {
      return vT(QT)
    }

    function DT(TT, kT) {
      return "active" === aT(TT, kT).kind
    }

    function aT(TT, kT) {
      var cT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : PT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.ok) || TT.validation.fromRecheck ? null === kT ? {
        kind: "none",
        reason: "noCompiler"
      } : mT(TT, kT) ? {
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

    function FT() {
      KT.g.setItem(xT, performance.timeOrigin)
    }

    function rT() {
      return KT.g.getItem(xT) === performance.timeOrigin
    }

    function PT(TT) {
      return !(0, MT.f)(TT.manifest.apiVersion)
    }

    function wT(TT) {
      return IT ??= TT.OJ((0, fT.shaderPackTextures)()), IT
    }

    function mT(TT, kT) {
      var cT;
      return (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.headerVersion) !== wT(kT)
    }

    function bT(TT) {
      return vT((async () => {
        JT(await (0, yT.e)(!0), TT)
      }))
    }

    function zT() {
      return vT((async () => {
        KT.e.removeItem(OT.d)
      }))
    }

    function JT(TT, kT) {
      DT(TT, kT) ? KT.e.setItem(OT.d, !0) : KT.e.removeItem(OT.d)
    }
  },
  6636: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT,
      h: () => yT
    });
    var lT = cT(6641),
      MT = cT(6623),
      KT = cT(141);
    const OT = 100;
    async function yT(TT, kT) {
      var cT;
      let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cT = navigator.gpu) && void 0 !== cT ? cT : null;
      const OT = TT.k_(kT, (0, MT.shaderPackTextures)());
      if (OT.errors.length > 0) return xT(TT, OT.errors, OT.offInStrict);
      const yT = await async function(TT) {
        if (!TT) return null;
        try {
          const kT = await (0, KT.w)(TT);
          return kT ? await kT.requestDevice() : null
        } catch (kT) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", kT), null
        }
      }(lT);
      if (!yT) return null;
      let fT = !1;
      yT.lost.then((() => {
        fT = !0
      }));
      try {
        const kT = await Promise.all(OT.validationModules.map((kT => async function(TT, kT, cT) {
          kT.pushErrorScope("validation");
          const lT = kT.createShaderModule({
              code: cT.code
            }),
            MT = kT.popErrorScope(),
            {
              messages: KT
            } = await lT.getCompilationInfo(),
            OT = KT.filter((TT => "error" === TT.type)).map((kT => TT.mapValidationMessage(cT, kT))),
            yT = await MT;
          yT && 0 === OT.length && OT.push({
            file: null,
            line: 0,
            message: yT.message,
            variants: [cT.key]
          });
          return OT
        }(TT, yT, kT))));
        return fT ? null : xT(TT, TT.OcT(kT.flat()), OT.offInStrict)
      } catch (IT) {
        return console.error("Couldn't validate the shader pack on WebGPU.", IT), null
      } finally {
        yT.destroy()
      }
    }
    async function fT(TT, kT) {
      var cT;
      if (!(0, lT.shaderPackNeedsCheck)(TT, kT) || (0, lT.isOtherApiVersion)(TT)) return TT;
      const MT = await yT(kT, (0, lT.storedShaderPackFiles)(TT));
      if (!MT) return TT;
      const KT = !1 === (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.ok) && !TT.validation.fromRecheck,
        OT = {
          ...TT,
          validation: KT ? MT : {
            ...MT,
            fromRecheck: !0
          }
        };
      return await (0, lT.replaceShaderPack)(TT, OT, kT) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), OT
    }

    function xT(TT, kT, cT) {
      return {
        headerVersion: (0, lT.pageShaderPackValidationVersion)(TT),
        ok: 0 === kT.length,
        errors: kT.slice(0, OT),
        moreErrors: Math.max(0, kT.length - OT),
        offInStrict: cT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);