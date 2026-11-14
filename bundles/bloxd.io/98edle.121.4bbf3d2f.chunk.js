export const id = 121;
export const ids = [121];
export const modules = {
  39212: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      compilePagePack: () => NW,
      prefetchCompiler: () => bR,
      reconcileHint: () => yR
    });
    var wW = MW(5621),
      CW = MW(5656),
      zR = MW(5638),
      AW = MW(5653);

    function bR() {
      (0, wW.loadPageShaderPackCompiler)()
    }
    async function yR() {
      const WW = await (0, wW.loadPageShaderPackCompiler)();
      await (WW ? (0, CW.reconcileStoredShaderPackHint)(WW) : (0, CW.forgetShaderPackActiveHint)())
    }
    async function NW(WW) {
      const RW = await (0, wW.loadPageShaderPackCompiler)();
      if (!RW) return {
        status: "none"
      };
      const MW = await (0, AW.e)(WW, RW),
        bR = (0, CW.storedPackOutcome)(MW, RW);
      if ("none" === bR.kind) return {
        status: "none"
      };
      const yR = RW.wAW((0, CW.storedShaderPackFiles)(MW), (0, zR.shaderPackTextures)());
      if ("blocked" === bR.kind) return {
        status: "blocked",
        messageKey: bR.messageKey,
        variants: 0 === yR.errors.length ? yR.variants : null
      };
      if (yR.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", yR.errors), {
        status: "none"
      };
      const {
        name: NW,
        keepCircleShadows: eW
      } = MW.manifest;
      return {
        status: "active",
        pack: {
          name: NW,
          variants: yR.variants,
          keepCircleShadows: !0 === eW
        }
      }
    }
  },
  5656: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      forgetShaderPackActiveHint: () => jR,
      isOtherApiVersion: () => QW,
      isShaderPackActive: () => oW,
      isShaderPackChangePending: () => fW,
      markShaderPackChangePending: () => FW,
      pageShaderPackValidationVersion: () => rR,
      reconcileStoredShaderPackHint: () => XW,
      removeShaderPack: () => IW,
      replaceShaderPack: () => YW,
      saveShaderPack: () => iR,
      shaderPackNeedsCheck: () => cR,
      storedPackOutcome: () => lW,
      storedShaderPackFiles: () => tR,
      toStoredShaderPack: () => BW
    });
    var wW = MW(5596),
      CW = MW(5615),
      zR = MW(50),
      AW = MW(2518),
      bR = MW(5661),
      yR = MW(5638);
    const NW = "shaderPackChangePending";
    let eW = null;

    function BW(WW, RW, MW) {
      return {
        manifest: WW.manifest,
        files: (0, wW.r)(WW.files),
        validation: RW,
        ...MW && {
          listing: MW
        }
      }
    }

    function tR(WW) {
      return Object.keys(WW.files).map((RW => ({
        path: RW,
        source: WW.files[RW]
      })))
    }
    let TW = Promise.resolve();

    function gR(WW) {
      const RW = TW.then(WW);
      return TW = RW.catch((() => {})), RW
    }

    function iR(WW, RW) {
      return gR((() => JW(WW, RW)))
    }

    function YW(WW, RW, MW) {
      return gR((async () => JSON.stringify(await (0, bR.h)()) === JSON.stringify(WW) && (null === RW ? (await PW(), !0) : JW(RW, MW))))
    }
    async function JW(WW, RW) {
      const MW = await zR.e.setItem(bR.e, WW);
      return MW && kR(WW, RW), MW
    }
    async function PW() {
      await zR.e.removeItem(bR.e), zR.g.removeItem(AW.c)
    }

    function IW() {
      return gR(PW)
    }

    function oW(WW, RW) {
      return "active" === lW(WW, RW).kind
    }

    function lW(WW, RW) {
      var MW;
      return null === WW ? {
        kind: "none",
        reason: "nothingStored"
      } : QW(WW) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.ok) || WW.validation.fromRecheck ? null === RW ? {
        kind: "none",
        reason: "noCompiler"
      } : cR(WW, RW) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : WW.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function FW() {
      zR.j.setItem(NW, performance.timeOrigin)
    }

    function fW() {
      return zR.j.getItem(NW) === performance.timeOrigin
    }

    function QW(WW) {
      return !(0, CW.j)(WW.manifest.apiVersion)
    }

    function rR(WW) {
      return eW ??= WW.oRW((0, yR.shaderPackTextures)()), eW
    }

    function cR(WW, RW) {
      var MW;
      return (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.headerVersion) !== rR(RW)
    }

    function XW(WW) {
      return gR((async () => {
        kR(await (0, bR.h)(!0), WW)
      }))
    }

    function jR() {
      return gR((async () => {
        zR.g.removeItem(AW.c)
      }))
    }

    function kR(WW, RW) {
      oW(WW, RW) ? zR.g.setItem(AW.c, !0) : zR.g.removeItem(AW.c)
    }
  },
  5653: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR,
      f: () => bR
    });
    var wW = MW(5656),
      CW = MW(5638),
      zR = MW(137);
    const AW = 100;
    async function bR(WW, RW) {
      var MW;
      let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (MW = navigator.gpu) && void 0 !== MW ? MW : null;
      const AW = WW.wAW(RW, (0, CW.shaderPackTextures)());
      if (AW.errors.length > 0) return NW(WW, AW.errors, AW.offInStrict);
      const bR = await async function(WW) {
        if (!WW) return null;
        try {
          const RW = await (0, zR.p)(WW);
          return RW ? await RW.requestDevice() : null
        } catch (RW) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", RW), null
        }
      }(wW);
      if (!bR) return null;
      let yR = !1;
      bR.lost.then((() => {
        yR = !0
      }));
      try {
        const RW = await Promise.all(AW.validationModules.map((RW => async function(WW, RW, MW) {
          RW.pushErrorScope("validation");
          const wW = RW.createShaderModule({
              code: MW.code
            }),
            CW = RW.popErrorScope(),
            {
              messages: zR
            } = await wW.getCompilationInfo(),
            AW = zR.filter((WW => "error" === WW.type)).map((RW => WW.mapValidationMessage(MW, RW))),
            bR = await CW;
          bR && 0 === AW.length && AW.push({
            file: null,
            line: 0,
            message: bR.message,
            variants: [MW.key]
          });
          return AW
        }(WW, bR, RW))));
        return yR ? null : NW(WW, WW.ZyW(RW.flat()), AW.offInStrict)
      } catch (eW) {
        return console.error("Couldn't validate the shader pack on WebGPU.", eW), null
      } finally {
        bR.destroy()
      }
    }
    async function yR(WW, RW) {
      var MW;
      if (!(0, wW.shaderPackNeedsCheck)(WW, RW) || (0, wW.isOtherApiVersion)(WW)) return WW;
      const CW = await bR(RW, (0, wW.storedShaderPackFiles)(WW));
      if (!CW) return WW;
      const zR = !1 === (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.ok) && !WW.validation.fromRecheck,
        AW = {
          ...WW,
          validation: zR ? CW : {
            ...CW,
            fromRecheck: !0
          }
        };
      return await (0, wW.replaceShaderPack)(WW, AW, RW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), AW
    }

    function NW(WW, RW, MW) {
      return {
        headerVersion: (0, wW.pageShaderPackValidationVersion)(WW),
        ok: 0 === RW.length,
        errors: RW.slice(0, AW),
        moreErrors: Math.max(0, RW.length - AW),
        offInStrict: MW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);