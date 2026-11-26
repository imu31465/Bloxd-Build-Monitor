export const id = 146;
export const ids = [146];
export const modules = {
  45234: (HH, BH, LH) => {
    LH.d(BH, {
      startHarnessShaderPack: () => XH
    });
    var AH = LH(7114),
      rH = LH(5531),
      SH = LH(7189),
      hH = LH(7165),
      tH = LH(5523),
      zH = LH(40182),
      CH = LH(7179),
      EH = LH(7196);
    async function XH(HH, BH) {
      const {
        stored: LH,
        info: XH
      } = await async function(HH, BH) {
        const LH = await async function(HH) {
          const BH = await fetch(HH);
          if (!BH.ok) throw new Error(`Couldn't fetch the shader pack at ${HH}: HTTP ${BH.status}`);
          const LH = await BH.json();
          if (!(0, AH.m)(LH)) throw new Error(`The shader pack at ${HH} isn't a shader pack listing source`);
          return LH
        }(HH);
        if (!(0, tH.g)(LH.apiVersion)) throw new Error(`The pack is for shader pack API version ${LH.apiVersion}; this build runs version ${tH.b}`);
        const zH = {
            manifest: {
              apiVersion: LH.apiVersion,
              name: LH.name,
              author: LH.author,
              description: null,
              keepCircleShadows: !0 === LH.keepCircleShadows
            },
            files: LH.files,
            validation: null
          },
          XH = {
            url: HH,
            name: LH.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          GH = (0, rH.q)(LH.files);
        if ("string" === typeof GH) return XH.errors = [{
          file: null,
          line: 0,
          message: GH
        }], {
          stored: zH,
          info: XH
        };
        const YH = await (0, hH.loadPageShaderPackCompiler)();
        if (!YH) throw new Error("The shader pack compiler couldn't load");
        const uH = await (0, EH.d)(YH, GH);
        if (!uH) throw new Error("No WebGPU device could validate the shader pack");
        if (XH.errors = [...uH.errors], uH.ok) {
          const HH = YH.YBH(GH, (0, CH.shaderPackTextures)());
          XH.features = (0, rH.n)(HH), XH.runsInMode = (0, SH.i)(HH.variants, BH)
        }
        return {
          stored: {
            ...zH,
            validation: uH
          },
          info: XH
        }
      }(HH, BH), [GH] = XH.errors;
      if (GH) {
        const HH = null === GH.file ? "" : `${GH.file}:${GH.line}: `,
          BH = XH.errors.length > 1 ? ` (${XH.errors.length-1} more)` : "";
        return {
          info: XH,
          problem: `The shader pack doesn't compile: ${HH}${GH.message}${BH}`
        }
      }
      return XH.runsInMode ? ((0, zH.setHarnessUrlShaderPack)(LH, BH), {
        info: XH,
        problem: null
      }) : {
        info: XH,
        problem: `The shader pack runs nothing in ${BH} mode`
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
  },
  7114: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => SH,
      F: () => tH,
      H: () => hH,
      L: () => AH,
      M: () => GH,
      P: () => EH,
      Q: () => PH,
      R: () => XH,
      V: () => CH,
      d: () => uH,
      g: () => WH,
      i: () => QH,
      m: () => YH,
      o: () => vH,
      s: () => UH,
      v: () => zH,
      w: () => rH,
      x: () => TH
    });
    const AH = ["forest", "desert", "water", "night", "cave"];
    const rH = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      SH = ["popular", "updated", "newest"],
      hH = 3,
      tH = 32,
      zH = 300;

    function CH(HH, BH) {
      return HH.slice(0, BH).replace(/[\uD800-\uDBFF]$/, "")
    }
    const EH = 64,
      XH = 512,
      GH = 18e5;

    function YH(HH) {
      const BH = HH,
        LH = null === BH || void 0 === BH ? void 0 : BH.files;
      return "number" === typeof(null === BH || void 0 === BH ? void 0 : BH.apiVersion) && "string" === typeof BH.name && (null === BH.author || "string" === typeof BH.author) && (void 0 === BH.keepCircleShadows || "boolean" === typeof BH.keepCircleShadows) && "object" === typeof LH && null !== LH && Object.values(LH).every((HH => "string" === typeof HH))
    }
    const uH = "Bloxdhub",
      QH = "https://bloxdhub.com/shaders";

    function WH(HH) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(HH)}`
    }
    const MH = "Screenshot generation failed.",
      xH = "Its screenshots couldn't be generated:";

    function vH(HH) {
      var BH;
      return HH === MH || null !== (BH = null === HH || void 0 === HH ? void 0 : HH.startsWith(xH)) && void 0 !== BH && BH
    }

    function PH(HH, BH) {
      return `shaderPacks/${HH}/${BH}.json`
    }

    function TH(HH, BH, LH, AH) {
      return null === BH.renderId ? UH(HH, BH.baselineVersion, LH, AH) : `${HH}/${function(HH,BH,LH,AH){return`shaderPacks/${HH}/${BH}/${LH}-${AH}.webp`}(BH.packId,BH.renderId,LH,AH)}`
    }

    function UH(HH, BH, LH, AH) {
      return `${HH}/${function(HH,BH,LH){return`shaderPacks/baseline/${HH}/${BH}-${LH}.webp`}(BH,LH,AH)}`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);