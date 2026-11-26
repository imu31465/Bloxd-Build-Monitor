export const id = 154;
export const ids = [154];
export const modules = {
  44434: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      compilePagePack: () => DU,
      prefetchCompiler: () => FU,
      reconcileHint: () => oU
    });
    var cU = zU(7209),
      yU = zU(7251),
      QU = zU(7219),
      AU = zU(7242);

    function FU() {
      (0, cU.loadPageShaderPackCompiler)()
    }
    async function oU() {
      const UU = await (0, cU.loadPageShaderPackCompiler)();
      await (UU ? (0, yU.reconcileStoredShaderPackHint)(UU) : (0, yU.forgetShaderPackActiveHint)())
    }
    async function DU(UU) {
      const XU = await (0, cU.loadPageShaderPackCompiler)();
      if (!XU) return {
        status: "none"
      };
      const zU = await (0, AU.d)(UU, XU),
        FU = (0, yU.storedPackOutcome)(zU, XU);
      if ("none" === FU.kind) return {
        status: "none"
      };
      const oU = XU.bUU((0, yU.storedShaderPackFiles)(zU), (0, QU.shaderPackTextures)());
      if ("blocked" === FU.kind) return {
        status: "blocked",
        messageKey: FU.messageKey,
        variants: 0 === oU.errors.length ? oU.variants : null
      };
      if (oU.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", oU.errors), {
        status: "none"
      };
      const {
        name: DU,
        keepCircleShadows: EU
      } = zU.manifest;
      return {
        status: "active",
        pack: {
          name: DU,
          variants: oU.variants,
          keepCircleShadows: !0 === EU
        }
      }
    }
  },
  7251: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      forgetShaderPackActiveHint: () => CU,
      isOtherApiVersion: () => WU,
      isShaderPackActive: () => BU,
      isShaderPackChangePending: () => PU,
      markShaderPackChangePending: () => RU,
      pageShaderPackValidationVersion: () => dU,
      reconcileStoredShaderPackHint: () => eU,
      removeShaderPack: () => GU,
      replaceShaderPack: () => tU,
      saveShaderPack: () => aU,
      shaderPackNeedsCheck: () => LU,
      storedPackOutcome: () => ZU,
      storedShaderPackFiles: () => NU,
      toStoredShaderPack: () => YU
    });
    var cU = zU(5608),
      yU = zU(5603),
      QU = zU(42),
      AU = zU(3849),
      FU = zU(7253),
      oU = zU(7219);
    const DU = "shaderPackChangePending";
    let EU = null;

    function YU(UU, XU, zU) {
      return {
        manifest: UU.manifest,
        files: (0, cU.u)(UU.files),
        validation: XU,
        ...zU && {
          listing: zU
        }
      }
    }

    function NU(UU) {
      return Object.keys(UU.files).map((XU => ({
        path: XU,
        source: UU.files[XU]
      })))
    }
    let IU = Promise.resolve();

    function pU(UU) {
      const XU = IU.then(UU);
      return IU = XU.catch((() => {})), XU
    }

    function aU(UU, XU) {
      return pU((() => gU(UU, XU)))
    }

    function tU(UU, XU, zU) {
      return pU((async () => JSON.stringify(await (0, FU.f)()) === JSON.stringify(UU) && (null === XU ? (await kU(), !0) : gU(XU, zU))))
    }
    async function gU(UU, XU) {
      const zU = await QU.g.setItem(FU.e, UU);
      return zU && wU(UU, XU), zU
    }
    async function kU() {
      await QU.g.removeItem(FU.e), QU.k.removeItem(AU.b)
    }

    function GU() {
      return pU(kU)
    }

    function BU(UU, XU) {
      return "active" === ZU(UU, XU).kind
    }

    function ZU(UU, XU) {
      var zU;
      return null === UU ? {
        kind: "none",
        reason: "nothingStored"
      } : WU(UU) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) || UU.validation.fromRecheck ? null === XU ? {
        kind: "none",
        reason: "noCompiler"
      } : LU(UU, XU) ? {
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

    function RU() {
      QU.n.setItem(DU, performance.timeOrigin)
    }

    function PU() {
      return QU.n.getItem(DU) === performance.timeOrigin
    }

    function WU(UU) {
      return !(0, yU.i)(UU.manifest.apiVersion)
    }

    function dU(UU) {
      return EU ??= UU.mq((0, oU.shaderPackTextures)()), EU
    }

    function LU(UU, XU) {
      var zU;
      return (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.headerVersion) !== dU(XU)
    }

    function eU(UU) {
      return pU((async () => {
        wU(await (0, FU.f)(!0), UU)
      }))
    }

    function CU() {
      return pU((async () => {
        QU.k.removeItem(AU.b)
      }))
    }

    function wU(UU, XU) {
      BU(UU, XU) ? QU.k.setItem(AU.b, !0) : QU.k.removeItem(AU.b)
    }
  },
  7242: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      h: () => FU
    });
    var cU = zU(7251),
      yU = zU(7219),
      QU = zU(123);
    const AU = 100;
    async function FU(UU, XU) {
      var zU;
      let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zU = navigator.gpu) && void 0 !== zU ? zU : null;
      const AU = UU.bUU(XU, (0, yU.shaderPackTextures)());
      if (AU.errors.length > 0) return DU(UU, AU.errors, AU.offInStrict);
      const FU = await async function(UU) {
        if (!UU) return null;
        try {
          const XU = await (0, QU.q)(UU);
          return XU ? await XU.requestDevice() : null
        } catch (XU) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", XU), null
        }
      }(cU);
      if (!FU) return null;
      let oU = !1;
      FU.lost.then((() => {
        oU = !0
      }));
      try {
        const XU = await Promise.all(AU.validationModules.map((XU => async function(UU, XU, zU) {
          XU.pushErrorScope("validation");
          const cU = XU.createShaderModule({
              code: zU.code
            }),
            yU = XU.popErrorScope(),
            {
              messages: QU
            } = await cU.getCompilationInfo(),
            AU = QU.filter((UU => "error" === UU.type)).map((XU => UU.mapValidationMessage(zU, XU))),
            FU = await yU;
          FU && 0 === AU.length && AU.push({
            file: null,
            line: 0,
            message: FU.message,
            variants: [zU.key]
          });
          return AU
        }(UU, FU, XU))));
        return oU ? null : DU(UU, UU.scU(XU.flat()), AU.offInStrict)
      } catch (EU) {
        return console.error("Couldn't validate the shader pack on WebGPU.", EU), null
      } finally {
        FU.destroy()
      }
    }
    async function oU(UU, XU) {
      var zU;
      if (!(0, cU.shaderPackNeedsCheck)(UU, XU) || (0, cU.isOtherApiVersion)(UU)) return UU;
      const yU = await FU(XU, (0, cU.storedShaderPackFiles)(UU));
      if (!yU) return UU;
      const QU = !1 === (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) && !UU.validation.fromRecheck,
        AU = {
          ...UU,
          validation: QU ? yU : {
            ...yU,
            fromRecheck: !0
          }
        };
      return await (0, cU.replaceShaderPack)(UU, AU, XU) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), AU
    }

    function DU(UU, XU, zU) {
      return {
        headerVersion: (0, cU.pageShaderPackValidationVersion)(UU),
        ok: 0 === XU.length,
        errors: XU.slice(0, AU),
        moreErrors: Math.max(0, XU.length - AU),
        offInStrict: zU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);