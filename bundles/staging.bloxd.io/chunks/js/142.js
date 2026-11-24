export const id = 142;
export const ids = [142];
export const modules = {
  41880: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      compilePagePack: () => kT,
      prefetchCompiler: () => nT,
      reconcileHint: () => HT
    });
    var WT = mT(6682),
      zT = mT(6719),
      MT = mT(6698),
      gT = mT(6716);

    function nT() {
      (0, WT.loadPageShaderPackCompiler)()
    }
    async function HT() {
      const TT = await (0, WT.loadPageShaderPackCompiler)();
      await (TT ? (0, zT.reconcileStoredShaderPackHint)(TT) : (0, zT.forgetShaderPackActiveHint)())
    }
    async function kT(TT) {
      const UT = await (0, WT.loadPageShaderPackCompiler)();
      if (!UT) return {
        status: "none"
      };
      const mT = await (0, gT.e)(TT, UT),
        nT = (0, zT.storedPackOutcome)(mT, UT);
      if ("none" === nT.kind) return {
        status: "none"
      };
      const HT = UT.mTT((0, zT.storedShaderPackFiles)(mT), (0, MT.shaderPackTextures)());
      if ("blocked" === nT.kind) return {
        status: "blocked",
        messageKey: nT.messageKey,
        variants: 0 === HT.errors.length ? HT.variants : null
      };
      if (HT.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", HT.errors), {
        status: "none"
      };
      const {
        name: kT,
        keepCircleShadows: jT
      } = mT.manifest;
      return {
        status: "active",
        pack: {
          name: kT,
          variants: HT.variants,
          keepCircleShadows: !0 === jT
        }
      }
    }
  },
  6719: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      forgetShaderPackActiveHint: () => wT,
      isOtherApiVersion: () => YT,
      isShaderPackActive: () => iT,
      isShaderPackChangePending: () => eT,
      markShaderPackChangePending: () => OT,
      pageShaderPackValidationVersion: () => JT,
      reconcileStoredShaderPackHint: () => dT,
      removeShaderPack: () => qT,
      replaceShaderPack: () => cT,
      saveShaderPack: () => ZT,
      shaderPackNeedsCheck: () => xT,
      storedPackOutcome: () => bT,
      storedShaderPackFiles: () => LT,
      toStoredShaderPack: () => lT
    });
    var WT = mT(5142),
      zT = mT(5139),
      MT = mT(44),
      gT = mT(3551),
      nT = mT(6723),
      HT = mT(6698);
    const kT = "shaderPackChangePending";
    let jT = null;

    function lT(TT, UT, mT) {
      return {
        manifest: TT.manifest,
        files: (0, WT.w)(TT.files),
        validation: UT,
        ...mT && {
          listing: mT
        }
      }
    }

    function LT(TT) {
      return Object.keys(TT.files).map((UT => ({
        path: UT,
        source: TT.files[UT]
      })))
    }
    let pT = Promise.resolve();

    function BT(TT) {
      const UT = pT.then(TT);
      return pT = UT.catch((() => {})), UT
    }

    function ZT(TT, UT) {
      return BT((() => vT(TT, UT)))
    }

    function cT(TT, UT, mT) {
      return BT((async () => JSON.stringify(await (0, nT.h)()) === JSON.stringify(TT) && (null === UT ? (await fT(), !0) : vT(UT, mT))))
    }
    async function vT(TT, UT) {
      const mT = await MT.h.setItem(nT.d, TT);
      return mT && tT(TT, UT), mT
    }
    async function fT() {
      await MT.h.removeItem(nT.d), MT.l.removeItem(gT.e)
    }

    function qT() {
      return BT(fT)
    }

    function iT(TT, UT) {
      return "active" === bT(TT, UT).kind
    }

    function bT(TT, UT) {
      var mT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : YT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.ok) || TT.validation.fromRecheck ? null === UT ? {
        kind: "none",
        reason: "noCompiler"
      } : xT(TT, UT) ? {
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

    function OT() {
      MT.m.setItem(kT, performance.timeOrigin)
    }

    function eT() {
      return MT.m.getItem(kT) === performance.timeOrigin
    }

    function YT(TT) {
      return !(0, zT.f)(TT.manifest.apiVersion)
    }

    function JT(TT) {
      return jT ??= TT.JF((0, HT.shaderPackTextures)()), jT
    }

    function xT(TT, UT) {
      var mT;
      return (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.headerVersion) !== JT(UT)
    }

    function dT(TT) {
      return BT((async () => {
        tT(await (0, nT.h)(!0), TT)
      }))
    }

    function wT() {
      return BT((async () => {
        MT.l.removeItem(gT.e)
      }))
    }

    function tT(TT, UT) {
      iT(TT, UT) ? MT.l.setItem(gT.e, !0) : MT.l.removeItem(gT.e)
    }
  },
  6716: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => HT,
      f: () => nT
    });
    var WT = mT(6719),
      zT = mT(6698),
      MT = mT(117);
    const gT = 100;
    async function nT(TT, UT) {
      var mT;
      let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (mT = navigator.gpu) && void 0 !== mT ? mT : null;
      const gT = TT.mTT(UT, (0, zT.shaderPackTextures)());
      if (gT.errors.length > 0) return kT(TT, gT.errors, gT.offInStrict);
      const nT = await async function(TT) {
        if (!TT) return null;
        try {
          const UT = await (0, MT.s)(TT);
          return UT ? await UT.requestDevice() : null
        } catch (UT) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", UT), null
        }
      }(WT);
      if (!nT) return null;
      let HT = !1;
      nT.lost.then((() => {
        HT = !0
      }));
      try {
        const UT = await Promise.all(gT.validationModules.map((UT => async function(TT, UT, mT) {
          UT.pushErrorScope("validation");
          const WT = UT.createShaderModule({
              code: mT.code
            }),
            zT = UT.popErrorScope(),
            {
              messages: MT
            } = await WT.getCompilationInfo(),
            gT = MT.filter((TT => "error" === TT.type)).map((UT => TT.mapValidationMessage(mT, UT))),
            nT = await zT;
          nT && 0 === gT.length && gT.push({
            file: null,
            line: 0,
            message: nT.message,
            variants: [mT.key]
          });
          return gT
        }(TT, nT, UT))));
        return HT ? null : kT(TT, TT.mWT(UT.flat()), gT.offInStrict)
      } catch (jT) {
        return console.error("Couldn't validate the shader pack on WebGPU.", jT), null
      } finally {
        nT.destroy()
      }
    }
    async function HT(TT, UT) {
      var mT;
      if (!(0, WT.shaderPackNeedsCheck)(TT, UT) || (0, WT.isOtherApiVersion)(TT)) return TT;
      const zT = await nT(UT, (0, WT.storedShaderPackFiles)(TT));
      if (!zT) return TT;
      const MT = !1 === (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.ok) && !TT.validation.fromRecheck,
        gT = {
          ...TT,
          validation: MT ? zT : {
            ...zT,
            fromRecheck: !0
          }
        };
      return await (0, WT.replaceShaderPack)(TT, gT, UT) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), gT
    }

    function kT(TT, UT, mT) {
      return {
        headerVersion: (0, WT.pageShaderPackValidationVersion)(TT),
        ok: 0 === UT.length,
        errors: UT.slice(0, gT),
        moreErrors: Math.max(0, UT.length - gT),
        offInStrict: mT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);