export const id = 142;
export const ids = [142];
export const modules = {
  42184: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      compilePagePack: () => YG,
      prefetchCompiler: () => kG,
      reconcileHint: () => UG
    });
    var wG = ZG(6608),
      SG = ZG(6653),
      LG = ZG(6627),
      yG = ZG(6645);

    function kG() {
      (0, wG.loadPageShaderPackCompiler)()
    }
    async function UG() {
      const GG = await (0, wG.loadPageShaderPackCompiler)();
      await (GG ? (0, SG.reconcileStoredShaderPackHint)(GG) : (0, SG.forgetShaderPackActiveHint)())
    }
    async function YG(GG) {
      const bG = await (0, wG.loadPageShaderPackCompiler)();
      if (!bG) return {
        status: "none"
      };
      const ZG = await (0, yG.e)(GG, bG),
        kG = (0, SG.storedPackOutcome)(ZG, bG);
      if ("none" === kG.kind) return {
        status: "none"
      };
      const UG = bG.EGG((0, SG.storedShaderPackFiles)(ZG), (0, LG.shaderPackTextures)());
      if ("blocked" === kG.kind) return {
        status: "blocked",
        messageKey: kG.messageKey,
        variants: 0 === UG.errors.length ? UG.variants : null
      };
      if (UG.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", UG.errors), {
        status: "none"
      };
      const {
        name: YG,
        keepCircleShadows: VG
      } = ZG.manifest;
      return {
        status: "active",
        pack: {
          name: YG,
          variants: UG.variants,
          keepCircleShadows: !0 === VG
        }
      }
    }
  },
  6653: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      forgetShaderPackActiveHint: () => IG,
      isOtherApiVersion: () => iG,
      isShaderPackActive: () => EG,
      isShaderPackChangePending: () => uG,
      markShaderPackChangePending: () => XG,
      pageShaderPackValidationVersion: () => CG,
      reconcileStoredShaderPackHint: () => mG,
      removeShaderPack: () => zG,
      replaceShaderPack: () => dG,
      saveShaderPack: () => hG,
      shaderPackNeedsCheck: () => WG,
      storedPackOutcome: () => oG,
      storedShaderPackFiles: () => fG,
      toStoredShaderPack: () => pG
    });
    var wG = ZG(5062),
      SG = ZG(5055),
      LG = ZG(29),
      yG = ZG(3441),
      kG = ZG(6661),
      UG = ZG(6627);
    const YG = "shaderPackChangePending";
    let VG = null;

    function pG(GG, bG, ZG) {
      return {
        manifest: GG.manifest,
        files: (0, wG.y)(GG.files),
        validation: bG,
        ...ZG && {
          listing: ZG
        }
      }
    }

    function fG(GG) {
      return Object.keys(GG.files).map((bG => ({
        path: bG,
        source: GG.files[bG]
      })))
    }
    let QG = Promise.resolve();

    function KG(GG) {
      const bG = QG.then(GG);
      return QG = bG.catch((() => {})), bG
    }

    function hG(GG, bG) {
      return KG((() => JG(GG, bG)))
    }

    function dG(GG, bG, ZG) {
      return KG((async () => JSON.stringify(await (0, kG.e)()) === JSON.stringify(GG) && (null === bG ? (await rG(), !0) : JG(bG, ZG))))
    }
    async function JG(GG, bG) {
      const ZG = await LG.e.setItem(kG.b, GG);
      return ZG && FG(GG, bG), ZG
    }
    async function rG() {
      await LG.e.removeItem(kG.b), LG.h.removeItem(yG.d)
    }

    function zG() {
      return KG(rG)
    }

    function EG(GG, bG) {
      return "active" === oG(GG, bG).kind
    }

    function oG(GG, bG) {
      var ZG;
      return null === GG ? {
        kind: "none",
        reason: "nothingStored"
      } : iG(GG) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) || GG.validation.fromRecheck ? null === bG ? {
        kind: "none",
        reason: "noCompiler"
      } : WG(GG, bG) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : GG.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function XG() {
      LG.l.setItem(YG, performance.timeOrigin)
    }

    function uG() {
      return LG.l.getItem(YG) === performance.timeOrigin
    }

    function iG(GG) {
      return !(0, SG.g)(GG.manifest.apiVersion)
    }

    function CG(GG) {
      return VG ??= GG.sF((0, UG.shaderPackTextures)()), VG
    }

    function WG(GG, bG) {
      var ZG;
      return (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.headerVersion) !== CG(bG)
    }

    function mG(GG) {
      return KG((async () => {
        FG(await (0, kG.e)(!0), GG)
      }))
    }

    function IG() {
      return KG((async () => {
        LG.h.removeItem(yG.d)
      }))
    }

    function FG(GG, bG) {
      EG(GG, bG) ? LG.h.setItem(yG.d, !0) : LG.h.removeItem(yG.d)
    }
  },
  6645: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG,
      g: () => kG
    });
    var wG = ZG(6653),
      SG = ZG(6627),
      LG = ZG(101);
    const yG = 100;
    async function kG(GG, bG) {
      var ZG;
      let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZG = navigator.gpu) && void 0 !== ZG ? ZG : null;
      const yG = GG.EGG(bG, (0, SG.shaderPackTextures)());
      if (yG.errors.length > 0) return YG(GG, yG.errors, yG.offInStrict);
      const kG = await async function(GG) {
        if (!GG) return null;
        try {
          const bG = await (0, LG.r)(GG);
          return bG ? await bG.requestDevice() : null
        } catch (bG) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", bG), null
        }
      }(wG);
      if (!kG) return null;
      let UG = !1;
      kG.lost.then((() => {
        UG = !0
      }));
      try {
        const bG = await Promise.all(yG.validationModules.map((bG => async function(GG, bG, ZG) {
          bG.pushErrorScope("validation");
          const wG = bG.createShaderModule({
              code: ZG.code
            }),
            SG = bG.popErrorScope(),
            {
              messages: LG
            } = await wG.getCompilationInfo(),
            yG = LG.filter((GG => "error" === GG.type)).map((bG => GG.mapValidationMessage(ZG, bG))),
            kG = await SG;
          kG && 0 === yG.length && yG.push({
            file: null,
            line: 0,
            message: kG.message,
            variants: [ZG.key]
          });
          return yG
        }(GG, kG, bG))));
        return UG ? null : YG(GG, GG.QwG(bG.flat()), yG.offInStrict)
      } catch (VG) {
        return console.error("Couldn't validate the shader pack on WebGPU.", VG), null
      } finally {
        kG.destroy()
      }
    }
    async function UG(GG, bG) {
      var ZG;
      if (!(0, wG.shaderPackNeedsCheck)(GG, bG) || (0, wG.isOtherApiVersion)(GG)) return GG;
      const SG = await kG(bG, (0, wG.storedShaderPackFiles)(GG));
      if (!SG) return GG;
      const LG = !1 === (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) && !GG.validation.fromRecheck,
        yG = {
          ...GG,
          validation: LG ? SG : {
            ...SG,
            fromRecheck: !0
          }
        };
      return await (0, wG.replaceShaderPack)(GG, yG, bG) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yG
    }

    function YG(GG, bG, ZG) {
      return {
        headerVersion: (0, wG.pageShaderPackValidationVersion)(GG),
        ok: 0 === bG.length,
        errors: bG.slice(0, yG),
        moreErrors: Math.max(0, bG.length - yG),
        offInStrict: ZG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);