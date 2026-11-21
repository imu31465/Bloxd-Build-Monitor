export const id = 135;
export const ids = [135];
export const modules = {
  41149: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      compilePagePack: () => mQ,
      prefetchCompiler: () => kQ,
      reconcileHint: () => vQ
    });
    var LQ = wQ(6438),
      qQ = wQ(6481),
      oQ = wQ(6460),
      DQ = wQ(6476);

    function kQ() {
      (0, LQ.loadPageShaderPackCompiler)()
    }
    async function vQ() {
      const QQ = await (0, LQ.loadPageShaderPackCompiler)();
      await (QQ ? (0, qQ.reconcileStoredShaderPackHint)(QQ) : (0, qQ.forgetShaderPackActiveHint)())
    }
    async function mQ(QQ) {
      const FQ = await (0, LQ.loadPageShaderPackCompiler)();
      if (!FQ) return {
        status: "none"
      };
      const wQ = await (0, DQ.e)(QQ, FQ),
        kQ = (0, qQ.storedPackOutcome)(wQ, FQ);
      if ("none" === kQ.kind) return {
        status: "none"
      };
      const vQ = FQ.tQQ((0, qQ.storedShaderPackFiles)(wQ), (0, oQ.shaderPackTextures)());
      if ("blocked" === kQ.kind) return {
        status: "blocked",
        messageKey: kQ.messageKey,
        variants: 0 === vQ.errors.length ? vQ.variants : null
      };
      if (vQ.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", vQ.errors), {
        status: "none"
      };
      const {
        name: mQ,
        keepCircleShadows: uQ
      } = wQ.manifest;
      return {
        status: "active",
        pack: {
          name: mQ,
          variants: vQ.variants,
          keepCircleShadows: !0 === uQ
        }
      }
    }
  },
  6481: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      forgetShaderPackActiveHint: () => sQ,
      isOtherApiVersion: () => iQ,
      isShaderPackActive: () => pQ,
      isShaderPackChangePending: () => SQ,
      markShaderPackChangePending: () => CQ,
      pageShaderPackValidationVersion: () => WQ,
      reconcileStoredShaderPackHint: () => OQ,
      removeShaderPack: () => GQ,
      replaceShaderPack: () => tQ,
      saveShaderPack: () => AQ,
      shaderPackNeedsCheck: () => RQ,
      storedPackOutcome: () => cQ,
      storedShaderPackFiles: () => bQ,
      toStoredShaderPack: () => HQ
    });
    var LQ = wQ(6414),
      qQ = wQ(6429),
      oQ = wQ(27),
      DQ = wQ(3318),
      kQ = wQ(6485),
      vQ = wQ(6460);
    const mQ = "shaderPackChangePending";
    let uQ = null;

    function HQ(QQ, FQ, wQ) {
      return {
        manifest: QQ.manifest,
        files: (0, LQ.r)(QQ.files),
        validation: FQ,
        ...wQ && {
          listing: wQ
        }
      }
    }

    function bQ(QQ) {
      return Object.keys(QQ.files).map((FQ => ({
        path: FQ,
        source: QQ.files[FQ]
      })))
    }
    let YQ = Promise.resolve();

    function xQ(QQ) {
      const FQ = YQ.then(QQ);
      return YQ = FQ.catch((() => {})), FQ
    }

    function AQ(QQ, FQ) {
      return xQ((() => eQ(QQ, FQ)))
    }

    function tQ(QQ, FQ, wQ) {
      return xQ((async () => JSON.stringify(await (0, kQ.f)()) === JSON.stringify(QQ) && (null === FQ ? (await MQ(), !0) : eQ(FQ, wQ))))
    }
    async function eQ(QQ, FQ) {
      const wQ = await oQ.h.setItem(kQ.d, QQ);
      return wQ && rQ(QQ, FQ), wQ
    }
    async function MQ() {
      await oQ.h.removeItem(kQ.d), oQ.i.removeItem(DQ.d)
    }

    function GQ() {
      return xQ(MQ)
    }

    function pQ(QQ, FQ) {
      return "active" === cQ(QQ, FQ).kind
    }

    function cQ(QQ, FQ) {
      var wQ;
      return null === QQ ? {
        kind: "none",
        reason: "nothingStored"
      } : iQ(QQ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.ok) || QQ.validation.fromRecheck ? null === FQ ? {
        kind: "none",
        reason: "noCompiler"
      } : RQ(QQ, FQ) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : QQ.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function CQ() {
      oQ.m.setItem(mQ, performance.timeOrigin)
    }

    function SQ() {
      return oQ.m.getItem(mQ) === performance.timeOrigin
    }

    function iQ(QQ) {
      return !(0, qQ.m)(QQ.manifest.apiVersion)
    }

    function WQ(QQ) {
      return uQ ??= QQ.kN((0, vQ.shaderPackTextures)()), uQ
    }

    function RQ(QQ, FQ) {
      var wQ;
      return (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.headerVersion) !== WQ(FQ)
    }

    function OQ(QQ) {
      return xQ((async () => {
        rQ(await (0, kQ.f)(!0), QQ)
      }))
    }

    function sQ() {
      return xQ((async () => {
        oQ.i.removeItem(DQ.d)
      }))
    }

    function rQ(QQ, FQ) {
      pQ(QQ, FQ) ? oQ.i.setItem(DQ.d, !0) : oQ.i.removeItem(DQ.d)
    }
  },
  6476: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      f: () => kQ
    });
    var LQ = wQ(6481),
      qQ = wQ(6460),
      oQ = wQ(118);
    const DQ = 100;
    async function kQ(QQ, FQ) {
      var wQ;
      let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wQ = navigator.gpu) && void 0 !== wQ ? wQ : null;
      const DQ = QQ.tQQ(FQ, (0, qQ.shaderPackTextures)());
      if (DQ.errors.length > 0) return mQ(QQ, DQ.errors, DQ.offInStrict);
      const kQ = await async function(QQ) {
        if (!QQ) return null;
        try {
          const FQ = await (0, oQ.w)(QQ);
          return FQ ? await FQ.requestDevice() : null
        } catch (FQ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", FQ), null
        }
      }(LQ);
      if (!kQ) return null;
      let vQ = !1;
      kQ.lost.then((() => {
        vQ = !0
      }));
      try {
        const FQ = await Promise.all(DQ.validationModules.map((FQ => async function(QQ, FQ, wQ) {
          FQ.pushErrorScope("validation");
          const LQ = FQ.createShaderModule({
              code: wQ.code
            }),
            qQ = FQ.popErrorScope(),
            {
              messages: oQ
            } = await LQ.getCompilationInfo(),
            DQ = oQ.filter((QQ => "error" === QQ.type)).map((FQ => QQ.mapValidationMessage(wQ, FQ))),
            kQ = await qQ;
          kQ && 0 === DQ.length && DQ.push({
            file: null,
            line: 0,
            message: kQ.message,
            variants: [wQ.key]
          });
          return DQ
        }(QQ, kQ, FQ))));
        return vQ ? null : mQ(QQ, QQ.uLQ(FQ.flat()), DQ.offInStrict)
      } catch (uQ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", uQ), null
      } finally {
        kQ.destroy()
      }
    }
    async function vQ(QQ, FQ) {
      var wQ;
      if (!(0, LQ.shaderPackNeedsCheck)(QQ, FQ) || (0, LQ.isOtherApiVersion)(QQ)) return QQ;
      const qQ = await kQ(FQ, (0, LQ.storedShaderPackFiles)(QQ));
      if (!qQ) return QQ;
      const oQ = !1 === (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.ok) && !QQ.validation.fromRecheck,
        DQ = {
          ...QQ,
          validation: oQ ? qQ : {
            ...qQ,
            fromRecheck: !0
          }
        };
      return await (0, LQ.replaceShaderPack)(QQ, DQ, FQ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), DQ
    }

    function mQ(QQ, FQ, wQ) {
      return {
        headerVersion: (0, LQ.pageShaderPackValidationVersion)(QQ),
        ok: 0 === FQ.length,
        errors: FQ.slice(0, DQ),
        moreErrors: Math.max(0, FQ.length - DQ),
        offInStrict: wQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);