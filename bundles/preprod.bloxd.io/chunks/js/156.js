export const id = 156;
export const ids = [156];
export const modules = {
  45221: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      compilePagePack: () => CH,
      prefetchCompiler: () => tH,
      reconcileHint: () => zH
    });
    var AH = LH(7165),
      rH = LH(7201),
      SH = LH(7179),
      hH = LH(7196);

    function tH() {
      (0, AH.loadPageShaderPackCompiler)()
    }
    async function zH() {
      const HH = await (0, AH.loadPageShaderPackCompiler)();
      await (HH ? (0, rH.reconcileStoredShaderPackHint)(HH) : (0, rH.forgetShaderPackActiveHint)())
    }
    async function CH(HH) {
      const BH = await (0, AH.loadPageShaderPackCompiler)();
      if (!BH) return {
        status: "none"
      };
      const LH = await (0, hH.b)(HH, BH),
        tH = (0, rH.storedPackOutcome)(LH, BH);
      if ("none" === tH.kind) return {
        status: "none"
      };
      const zH = BH.YBH((0, rH.storedShaderPackFiles)(LH), (0, SH.shaderPackTextures)());
      if ("blocked" === tH.kind) return {
        status: "blocked",
        messageKey: tH.messageKey,
        variants: 0 === zH.errors.length ? zH.variants : null
      };
      if (zH.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", zH.errors), {
        status: "none"
      };
      const {
        name: CH,
        keepCircleShadows: EH
      } = LH.manifest;
      return {
        status: "active",
        pack: {
          name: CH,
          variants: zH.variants,
          keepCircleShadows: !0 === EH
        }
      }
    }
  },
  7201: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      forgetShaderPackActiveHint: () => oH,
      isOtherApiVersion: () => OH,
      isShaderPackActive: () => PH,
      isShaderPackChangePending: () => VH,
      markShaderPackChangePending: () => UH,
      pageShaderPackValidationVersion: () => bH,
      reconcileStoredShaderPackHint: () => mH,
      removeShaderPack: () => vH,
      replaceShaderPack: () => WH,
      saveShaderPack: () => QH,
      shaderPackNeedsCheck: () => kH,
      storedPackOutcome: () => TH,
      storedShaderPackFiles: () => GH,
      toStoredShaderPack: () => XH
    });
    var AH = LH(5531),
      rH = LH(5523),
      SH = LH(30),
      hH = LH(3831),
      tH = LH(7209),
      zH = LH(7179);
    const CH = "shaderPackChangePending";
    let EH = null;

    function XH(HH, BH, LH) {
      return {
        manifest: HH.manifest,
        files: (0, AH.t)(HH.files),
        validation: BH,
        ...LH && {
          listing: LH
        }
      }
    }

    function GH(HH) {
      return Object.keys(HH.files).map((BH => ({
        path: BH,
        source: HH.files[BH]
      })))
    }
    let YH = Promise.resolve();

    function uH(HH) {
      const BH = YH.then(HH);
      return YH = BH.catch((() => {})), BH
    }

    function QH(HH, BH) {
      return uH((() => MH(HH, BH)))
    }

    function WH(HH, BH, LH) {
      return uH((async () => JSON.stringify(await (0, tH.e)()) === JSON.stringify(HH) && (null === BH ? (await xH(), !0) : MH(BH, LH))))
    }
    async function MH(HH, BH) {
      const LH = await SH.c.setItem(tH.c, HH);
      return LH && IH(HH, BH), LH
    }
    async function xH() {
      await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
    }

    function vH() {
      return uH(xH)
    }

    function PH(HH, BH) {
      return "active" === TH(HH, BH).kind
    }

    function TH(HH, BH) {
      var LH;
      return null === HH ? {
        kind: "none",
        reason: "nothingStored"
      } : OH(HH) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) || HH.validation.fromRecheck ? null === BH ? {
        kind: "none",
        reason: "noCompiler"
      } : kH(HH, BH) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : HH.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function UH() {
      SH.f.setItem(CH, performance.timeOrigin)
    }

    function VH() {
      return SH.f.getItem(CH) === performance.timeOrigin
    }

    function OH(HH) {
      return !(0, rH.g)(HH.manifest.apiVersion)
    }

    function bH(HH) {
      return EH ??= HH.kN((0, zH.shaderPackTextures)()), EH
    }

    function kH(HH, BH) {
      var LH;
      return (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.headerVersion) !== bH(BH)
    }

    function mH(HH) {
      return uH((async () => {
        IH(await (0, tH.e)(!0), HH)
      }))
    }

    function oH() {
      return uH((async () => {
        SH.e.removeItem(hH.d)
      }))
    }

    function IH(HH, BH) {
      PH(HH, BH) ? SH.e.setItem(hH.d, !0) : SH.e.removeItem(hH.d)
    }
  },
  7196: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      d: () => tH
    });
    var AH = LH(7201),
      rH = LH(7179),
      SH = LH(105);
    const hH = 100;
    async function tH(HH, BH) {
      var LH;
      let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (LH = navigator.gpu) && void 0 !== LH ? LH : null;
      const hH = HH.YBH(BH, (0, rH.shaderPackTextures)());
      if (hH.errors.length > 0) return CH(HH, hH.errors, hH.offInStrict);
      const tH = await async function(HH) {
        if (!HH) return null;
        try {
          const BH = await (0, SH.y)(HH);
          return BH ? await BH.requestDevice() : null
        } catch (BH) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", BH), null
        }
      }(AH);
      if (!tH) return null;
      let zH = !1;
      tH.lost.then((() => {
        zH = !0
      }));
      try {
        const BH = await Promise.all(hH.validationModules.map((BH => async function(HH, BH, LH) {
          BH.pushErrorScope("validation");
          const AH = BH.createShaderModule({
              code: LH.code
            }),
            rH = BH.popErrorScope(),
            {
              messages: SH
            } = await AH.getCompilationInfo(),
            hH = SH.filter((HH => "error" === HH.type)).map((BH => HH.mapValidationMessage(LH, BH))),
            tH = await rH;
          tH && 0 === hH.length && hH.push({
            file: null,
            line: 0,
            message: tH.message,
            variants: [LH.key]
          });
          return hH
        }(HH, tH, BH))));
        return zH ? null : CH(HH, HH.rrH(BH.flat()), hH.offInStrict)
      } catch (EH) {
        return console.error("Couldn't validate the shader pack on WebGPU.", EH), null
      } finally {
        tH.destroy()
      }
    }
    async function zH(HH, BH) {
      var LH;
      if (!(0, AH.shaderPackNeedsCheck)(HH, BH) || (0, AH.isOtherApiVersion)(HH)) return HH;
      const rH = await tH(BH, (0, AH.storedShaderPackFiles)(HH));
      if (!rH) return HH;
      const SH = !1 === (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) && !HH.validation.fromRecheck,
        hH = {
          ...HH,
          validation: SH ? rH : {
            ...rH,
            fromRecheck: !0
          }
        };
      return await (0, AH.replaceShaderPack)(HH, hH, BH) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), hH
    }

    function CH(HH, BH, LH) {
      return {
        headerVersion: (0, AH.pageShaderPackValidationVersion)(HH),
        ok: 0 === BH.length,
        errors: BH.slice(0, hH),
        moreErrors: Math.max(0, BH.length - hH),
        offInStrict: LH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);