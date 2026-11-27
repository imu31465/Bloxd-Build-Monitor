export const id = 163;
export const ids = [163];
export const modules = {
  53916: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      compilePagePack: () => wW,
      prefetchCompiler: () => LW,
      reconcileHint: () => cW
    });
    var mW = OW(7621),
      EW = OW(7656),
      NW = OW(7637),
      PW = OW(7648);

    function LW() {
      (0, mW.loadPageShaderPackCompiler)()
    }
    async function cW() {
      const WW = await (0, mW.loadPageShaderPackCompiler)();
      await (WW ? (0, EW.reconcileStoredShaderPackHint)(WW) : (0, EW.forgetShaderPackActiveHint)())
    }
    async function wW(WW) {
      const iW = await (0, mW.loadPageShaderPackCompiler)();
      if (!iW) return {
        status: "none"
      };
      const OW = await (0, PW.c)(WW, iW),
        LW = (0, EW.storedPackOutcome)(OW, iW);
      if ("none" === LW.kind) return {
        status: "none"
      };
      const cW = iW.dWW((0, EW.storedShaderPackFiles)(OW), (0, NW.shaderPackTextures)());
      if ("blocked" === LW.kind) return {
        status: "blocked",
        messageKey: LW.messageKey,
        variants: 0 === cW.errors.length ? cW.variants : null
      };
      if (cW.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", cW.errors), {
        status: "none"
      };
      const {
        name: wW,
        keepCircleShadows: tW
      } = OW.manifest;
      return {
        status: "active",
        pack: {
          name: wW,
          variants: cW.variants,
          keepCircleShadows: !0 === tW
        }
      }
    }
  },
  7656: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      forgetShaderPackActiveHint: () => HW,
      isOtherApiVersion: () => yW,
      isShaderPackActive: () => MW,
      isShaderPackChangePending: () => YW,
      markShaderPackChangePending: () => SW,
      pageShaderPackValidationVersion: () => TW,
      reconcileStoredShaderPackHint: () => hW,
      removeShaderPack: () => sW,
      replaceShaderPack: () => jW,
      saveShaderPack: () => bW,
      shaderPackNeedsCheck: () => JW,
      storedPackOutcome: () => KW,
      storedShaderPackFiles: () => xW,
      toStoredShaderPack: () => ZW
    });
    var mW = OW(5970),
      EW = OW(5961),
      NW = OW(39),
      PW = OW(4666),
      LW = OW(7659),
      cW = OW(7637);
    const wW = "shaderPackChangePending";
    let tW = null;

    function ZW(WW, iW, OW) {
      return {
        manifest: WW.manifest,
        files: (0, mW.A)(WW.files),
        validation: iW,
        ...OW && {
          listing: OW
        }
      }
    }

    function xW(WW) {
      return Object.keys(WW.files).map((iW => ({
        path: iW,
        source: WW.files[iW]
      })))
    }
    let lW = Promise.resolve();

    function AW(WW) {
      const iW = lW.then(WW);
      return lW = iW.catch((() => {})), iW
    }

    function bW(WW, iW) {
      return AW((() => UW(WW, iW)))
    }

    function jW(WW, iW, OW) {
      return AW((async () => JSON.stringify(await (0, LW.g)()) === JSON.stringify(WW) && (null === iW ? (await kW(), !0) : UW(iW, OW))))
    }
    async function UW(WW, iW) {
      const OW = await NW.f.setItem(LW.c, WW);
      return OW && nW(WW, iW), OW
    }
    async function kW() {
      await NW.f.removeItem(LW.c), NW.i.removeItem(PW.b)
    }

    function sW() {
      return AW(kW)
    }

    function MW(WW, iW) {
      return "active" === KW(WW, iW).kind
    }

    function KW(WW, iW) {
      var OW;
      return null === WW ? {
        kind: "none",
        reason: "nothingStored"
      } : yW(WW) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) || WW.validation.fromRecheck ? null === iW ? {
        kind: "none",
        reason: "noCompiler"
      } : JW(WW, iW) ? {
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

    function SW() {
      NW.j.setItem(wW, performance.timeOrigin)
    }

    function YW() {
      return NW.j.getItem(wW) === performance.timeOrigin
    }

    function yW(WW) {
      return !(0, EW.g)(WW.manifest.apiVersion)
    }

    function TW(WW) {
      return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
    }

    function JW(WW, iW) {
      var OW;
      return (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.headerVersion) !== TW(iW)
    }

    function hW(WW) {
      return AW((async () => {
        nW(await (0, LW.g)(!0), WW)
      }))
    }

    function HW() {
      return AW((async () => {
        NW.i.removeItem(PW.b)
      }))
    }

    function nW(WW, iW) {
      MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
    }
  },
  7648: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      g: () => LW
    });
    var mW = OW(7656),
      EW = OW(7637),
      NW = OW(119);
    const PW = 100;
    async function LW(WW, iW) {
      var OW;
      let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = navigator.gpu) && void 0 !== OW ? OW : null;
      const PW = WW.dWW(iW, (0, EW.shaderPackTextures)());
      if (PW.errors.length > 0) return wW(WW, PW.errors, PW.offInStrict);
      const LW = await async function(WW) {
        if (!WW) return null;
        try {
          const iW = await (0, NW.r)(WW);
          return iW ? await iW.requestDevice() : null
        } catch (iW) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", iW), null
        }
      }(mW);
      if (!LW) return null;
      let cW = !1;
      LW.lost.then((() => {
        cW = !0
      }));
      try {
        const iW = await Promise.all(PW.validationModules.map((iW => async function(WW, iW, OW) {
          iW.pushErrorScope("validation");
          const mW = iW.createShaderModule({
              code: OW.code
            }),
            EW = iW.popErrorScope(),
            {
              messages: NW
            } = await mW.getCompilationInfo(),
            PW = NW.filter((WW => "error" === WW.type)).map((iW => WW.mapValidationMessage(OW, iW))),
            LW = await EW;
          LW && 0 === PW.length && PW.push({
            file: null,
            line: 0,
            message: LW.message,
            variants: [OW.key]
          });
          return PW
        }(WW, LW, iW))));
        return cW ? null : wW(WW, WW.smW(iW.flat()), PW.offInStrict)
      } catch (tW) {
        return console.error("Couldn't validate the shader pack on WebGPU.", tW), null
      } finally {
        LW.destroy()
      }
    }
    async function cW(WW, iW) {
      var OW;
      if (!(0, mW.shaderPackNeedsCheck)(WW, iW) || (0, mW.isOtherApiVersion)(WW)) return WW;
      const EW = await LW(iW, (0, mW.storedShaderPackFiles)(WW));
      if (!EW) return WW;
      const NW = !1 === (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) && !WW.validation.fromRecheck,
        PW = {
          ...WW,
          validation: NW ? EW : {
            ...EW,
            fromRecheck: !0
          }
        };
      return await (0, mW.replaceShaderPack)(WW, PW, iW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), PW
    }

    function wW(WW, iW, OW) {
      return {
        headerVersion: (0, mW.pageShaderPackValidationVersion)(WW),
        ok: 0 === iW.length,
        errors: iW.slice(0, PW),
        moreErrors: Math.max(0, iW.length - PW),
        offInStrict: OW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);