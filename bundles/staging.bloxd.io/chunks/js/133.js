export const id = 133;
export const ids = [133];
export const modules = {
  42202: (GG, bG, ZG) => {
    ZG.d(bG, {
      startHarnessShaderPack: () => pG
    });
    var wG = ZG(6561),
      SG = ZG(5062),
      LG = ZG(6636),
      yG = ZG(6608),
      kG = ZG(5055),
      UG = ZG(39633),
      YG = ZG(6627),
      VG = ZG(6645);
    async function pG(GG, bG) {
      const {
        stored: ZG,
        info: pG
      } = await async function(GG, bG) {
        const ZG = await async function(GG) {
          const bG = await fetch(GG);
          if (!bG.ok) throw new Error(`Couldn't fetch the shader pack at ${GG}: HTTP ${bG.status}`);
          const ZG = await bG.json();
          if (!(0, wG.h)(ZG)) throw new Error(`The shader pack at ${GG} isn't a shader pack listing source`);
          return ZG
        }(GG);
        if (!(0, kG.g)(ZG.apiVersion)) throw new Error(`The pack is for shader pack API version ${ZG.apiVersion}; this build runs version ${kG.e}`);
        const UG = {
            manifest: {
              apiVersion: ZG.apiVersion,
              name: ZG.name,
              author: ZG.author,
              description: null,
              keepCircleShadows: !0 === ZG.keepCircleShadows
            },
            files: ZG.files,
            validation: null
          },
          pG = {
            url: GG,
            name: ZG.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          fG = (0, SG.u)(ZG.files);
        if ("string" === typeof fG) return pG.errors = [{
          file: null,
          line: 0,
          message: fG
        }], {
          stored: UG,
          info: pG
        };
        const QG = await (0, yG.loadPageShaderPackCompiler)();
        if (!QG) throw new Error("The shader pack compiler couldn't load");
        const KG = await (0, VG.g)(QG, fG);
        if (!KG) throw new Error("No WebGPU device could validate the shader pack");
        if (pG.errors = [...KG.errors], KG.ok) {
          const GG = QG.EGG(fG, (0, YG.shaderPackTextures)());
          pG.features = (0, SG.s)(GG), pG.runsInMode = (0, LG.m)(GG.variants, bG)
        }
        return {
          stored: {
            ...UG,
            validation: KG
          },
          info: pG
        }
      }(GG, bG), [fG] = pG.errors;
      if (fG) {
        const GG = null === fG.file ? "" : `${fG.file}:${fG.line}: `,
          bG = pG.errors.length > 1 ? ` (${pG.errors.length-1} more)` : "";
        return {
          info: pG,
          problem: `The shader pack doesn't compile: ${GG}${fG.message}${bG}`
        }
      }
      return pG.runsInMode ? ((0, UG.setHarnessUrlShaderPack)(ZG, bG), {
        info: pG,
        problem: null
      }) : {
        info: pG,
        problem: `The shader pack runs nothing in ${bG} mode`
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
  },
  6561: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => kG,
      C: () => yG,
      F: () => wG,
      G: () => fG,
      K: () => VG,
      O: () => EG,
      S: () => pG,
      T: () => YG,
      b: () => KG,
      c: () => dG,
      e: () => hG,
      h: () => QG,
      l: () => zG,
      n: () => XG,
      q: () => UG,
      u: () => SG,
      v: () => oG,
      z: () => LG
    });
    const wG = ["forest", "desert", "water", "night", "cave"];
    const SG = {
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
      LG = ["popular", "updated", "newest"],
      yG = 3,
      kG = 32,
      UG = 300;

    function YG(GG, bG) {
      return GG.slice(0, bG).replace(/[\uD800-\uDBFF]$/, "")
    }
    const VG = 64,
      pG = 512,
      fG = 18e5;

    function QG(GG) {
      const bG = GG,
        ZG = null === bG || void 0 === bG ? void 0 : bG.files;
      return "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.apiVersion) && "string" === typeof bG.name && (null === bG.author || "string" === typeof bG.author) && (void 0 === bG.keepCircleShadows || "boolean" === typeof bG.keepCircleShadows) && "object" === typeof ZG && null !== ZG && Object.values(ZG).every((GG => "string" === typeof GG))
    }
    const KG = "Bloxdhub",
      hG = "https://bloxdhub.com/shaders";

    function dG(GG) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(GG)}`
    }
    const JG = "Screenshot generation failed.",
      rG = "Its screenshots couldn't be generated:";

    function zG(GG) {
      var bG;
      return GG === JG || null !== (bG = null === GG || void 0 === GG ? void 0 : GG.startsWith(rG)) && void 0 !== bG && bG
    }

    function EG(GG, bG) {
      return `shaderPacks/${GG}/${bG}.json`
    }

    function oG(GG, bG, ZG, wG) {
      return null === bG.renderId ? XG(GG, bG.baselineVersion, ZG, wG) : `${GG}/${function(GG,bG,ZG,wG){return`shaderPacks/${GG}/${bG}/${ZG}-${wG}.webp`}(bG.packId,bG.renderId,ZG,wG)}`
    }

    function XG(GG, bG, ZG, wG) {
      return `${GG}/${function(GG,bG,ZG){return`shaderPacks/baseline/${GG}/${bG}-${ZG}.webp`}(bG,ZG,wG)}`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);