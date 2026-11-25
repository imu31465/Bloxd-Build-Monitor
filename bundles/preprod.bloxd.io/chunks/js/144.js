export const id = 144;
export const ids = [144];
export const modules = {
  41988: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      compilePagePack: () => PQ,
      prefetchCompiler: () => sQ,
      reconcileHint: () => FQ
    });
    var wQ = XQ(6984),
      qQ = XQ(7024),
      TQ = XQ(7002),
      zQ = XQ(7018);

    function sQ() {
      (0, wQ.loadPageShaderPackCompiler)()
    }
    async function FQ() {
      const QQ = await (0, wQ.loadPageShaderPackCompiler)();
      await (QQ ? (0, qQ.reconcileStoredShaderPackHint)(QQ) : (0, qQ.forgetShaderPackActiveHint)())
    }
    async function PQ(QQ) {
      const WQ = await (0, wQ.loadPageShaderPackCompiler)();
      if (!WQ) return {
        status: "none"
      };
      const XQ = await (0, zQ.e)(QQ, WQ),
        sQ = (0, qQ.storedPackOutcome)(XQ, WQ);
      if ("none" === sQ.kind) return {
        status: "none"
      };
      const FQ = WQ.JQQ((0, qQ.storedShaderPackFiles)(XQ), (0, TQ.shaderPackTextures)());
      if ("blocked" === sQ.kind) return {
        status: "blocked",
        messageKey: sQ.messageKey,
        variants: 0 === FQ.errors.length ? FQ.variants : null
      };
      if (FQ.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", FQ.errors), {
        status: "none"
      };
      const {
        name: PQ,
        keepCircleShadows: gQ
      } = XQ.manifest;
      return {
        status: "active",
        pack: {
          name: PQ,
          variants: FQ.variants,
          keepCircleShadows: !0 === gQ
        }
      }
    }
  },
  7024: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      forgetShaderPackActiveHint: () => hQ,
      isOtherApiVersion: () => dQ,
      isShaderPackActive: () => GQ,
      isShaderPackChangePending: () => vQ,
      markShaderPackChangePending: () => bQ,
      pageShaderPackValidationVersion: () => HQ,
      reconcileStoredShaderPackHint: () => lQ,
      removeShaderPack: () => pQ,
      replaceShaderPack: () => yQ,
      saveShaderPack: () => BQ,
      shaderPackNeedsCheck: () => aQ,
      storedPackOutcome: () => UQ,
      storedShaderPackFiles: () => rQ,
      toStoredShaderPack: () => JQ
    });
    var wQ = XQ(5396),
      qQ = XQ(5394),
      TQ = XQ(43),
      zQ = XQ(3716),
      sQ = XQ(7026),
      FQ = XQ(7002);
    const PQ = "shaderPackChangePending";
    let gQ = null;

    function JQ(QQ, WQ, XQ) {
      return {
        manifest: QQ.manifest,
        files: (0, wQ.w)(QQ.files),
        validation: WQ,
        ...XQ && {
          listing: XQ
        }
      }
    }

    function rQ(QQ) {
      return Object.keys(QQ.files).map((WQ => ({
        path: WQ,
        source: QQ.files[WQ]
      })))
    }
    let IQ = Promise.resolve();

    function jQ(QQ) {
      const WQ = IQ.then(QQ);
      return IQ = WQ.catch((() => {})), WQ
    }

    function BQ(QQ, WQ) {
      return jQ((() => VQ(QQ, WQ)))
    }

    function yQ(QQ, WQ, XQ) {
      return jQ((async () => JSON.stringify(await (0, sQ.f)()) === JSON.stringify(QQ) && (null === WQ ? (await DQ(), !0) : VQ(WQ, XQ))))
    }
    async function VQ(QQ, WQ) {
      const XQ = await TQ.f.setItem(sQ.b, QQ);
      return XQ && iQ(QQ, WQ), XQ
    }
    async function DQ() {
      await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
    }

    function pQ() {
      return jQ(DQ)
    }

    function GQ(QQ, WQ) {
      return "active" === UQ(QQ, WQ).kind
    }

    function UQ(QQ, WQ) {
      var XQ;
      return null === QQ ? {
        kind: "none",
        reason: "nothingStored"
      } : dQ(QQ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
        kind: "none",
        reason: "noCompiler"
      } : aQ(QQ, WQ) ? {
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

    function bQ() {
      TQ.m.setItem(PQ, performance.timeOrigin)
    }

    function vQ() {
      return TQ.m.getItem(PQ) === performance.timeOrigin
    }

    function dQ(QQ) {
      return !(0, qQ.g)(QQ.manifest.apiVersion)
    }

    function HQ(QQ) {
      return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
    }

    function aQ(QQ, WQ) {
      var XQ;
      return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
    }

    function lQ(QQ) {
      return jQ((async () => {
        iQ(await (0, sQ.f)(!0), QQ)
      }))
    }

    function hQ() {
      return jQ((async () => {
        TQ.i.removeItem(zQ.c)
      }))
    }

    function iQ(QQ, WQ) {
      GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
    }
  },
  7018: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      g: () => sQ
    });
    var wQ = XQ(7024),
      qQ = XQ(7002),
      TQ = XQ(134);
    const zQ = 100;
    async function sQ(QQ, WQ) {
      var XQ;
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (XQ = navigator.gpu) && void 0 !== XQ ? XQ : null;
      const zQ = QQ.JQQ(WQ, (0, qQ.shaderPackTextures)());
      if (zQ.errors.length > 0) return PQ(QQ, zQ.errors, zQ.offInStrict);
      const sQ = await async function(QQ) {
        if (!QQ) return null;
        try {
          const WQ = await (0, TQ.q)(QQ);
          return WQ ? await WQ.requestDevice() : null
        } catch (WQ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", WQ), null
        }
      }(wQ);
      if (!sQ) return null;
      let FQ = !1;
      sQ.lost.then((() => {
        FQ = !0
      }));
      try {
        const WQ = await Promise.all(zQ.validationModules.map((WQ => async function(QQ, WQ, XQ) {
          WQ.pushErrorScope("validation");
          const wQ = WQ.createShaderModule({
              code: XQ.code
            }),
            qQ = WQ.popErrorScope(),
            {
              messages: TQ
            } = await wQ.getCompilationInfo(),
            zQ = TQ.filter((QQ => "error" === QQ.type)).map((WQ => QQ.mapValidationMessage(XQ, WQ))),
            sQ = await qQ;
          sQ && 0 === zQ.length && zQ.push({
            file: null,
            line: 0,
            message: sQ.message,
            variants: [XQ.key]
          });
          return zQ
        }(QQ, sQ, WQ))));
        return FQ ? null : PQ(QQ, QQ.gwQ(WQ.flat()), zQ.offInStrict)
      } catch (gQ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", gQ), null
      } finally {
        sQ.destroy()
      }
    }
    async function FQ(QQ, WQ) {
      var XQ;
      if (!(0, wQ.shaderPackNeedsCheck)(QQ, WQ) || (0, wQ.isOtherApiVersion)(QQ)) return QQ;
      const qQ = await sQ(WQ, (0, wQ.storedShaderPackFiles)(QQ));
      if (!qQ) return QQ;
      const TQ = !1 === (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) && !QQ.validation.fromRecheck,
        zQ = {
          ...QQ,
          validation: TQ ? qQ : {
            ...qQ,
            fromRecheck: !0
          }
        };
      return await (0, wQ.replaceShaderPack)(QQ, zQ, WQ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), zQ
    }

    function PQ(QQ, WQ, XQ) {
      return {
        headerVersion: (0, wQ.pageShaderPackValidationVersion)(QQ),
        ok: 0 === WQ.length,
        errors: WQ.slice(0, zQ),
        moreErrors: Math.max(0, WQ.length - zQ),
        offInStrict: XQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);