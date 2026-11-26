export const id = 144;
export const ids = [144];
export const modules = {
  44448: (UU, XU, zU) => {
    zU.d(XU, {
      startHarnessShaderPack: () => YU
    });
    var cU = zU(7158),
      yU = zU(5608),
      QU = zU(7233),
      AU = zU(7209),
      FU = zU(5603),
      oU = zU(40071),
      DU = zU(7219),
      EU = zU(7242);
    async function YU(UU, XU) {
      const {
        stored: zU,
        info: YU
      } = await async function(UU, XU) {
        const zU = await async function(UU) {
          const XU = await fetch(UU);
          if (!XU.ok) throw new Error(`Couldn't fetch the shader pack at ${UU}: HTTP ${XU.status}`);
          const zU = await XU.json();
          if (!(0, cU.i)(zU)) throw new Error(`The shader pack at ${UU} isn't a shader pack listing source`);
          return zU
        }(UU);
        if (!(0, FU.i)(zU.apiVersion)) throw new Error(`The pack is for shader pack API version ${zU.apiVersion}; this build runs version ${FU.d}`);
        const oU = {
            manifest: {
              apiVersion: zU.apiVersion,
              name: zU.name,
              author: zU.author,
              description: null,
              keepCircleShadows: !0 === zU.keepCircleShadows
            },
            files: zU.files,
            validation: null
          },
          YU = {
            url: UU,
            name: zU.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          NU = (0, yU.r)(zU.files);
        if ("string" === typeof NU) return YU.errors = [{
          file: null,
          line: 0,
          message: NU
        }], {
          stored: oU,
          info: YU
        };
        const IU = await (0, AU.loadPageShaderPackCompiler)();
        if (!IU) throw new Error("The shader pack compiler couldn't load");
        const pU = await (0, EU.h)(IU, NU);
        if (!pU) throw new Error("No WebGPU device could validate the shader pack");
        if (YU.errors = [...pU.errors], pU.ok) {
          const UU = IU.bUU(NU, (0, DU.shaderPackTextures)());
          YU.features = (0, yU.q)(UU), YU.runsInMode = (0, QU.j)(UU.variants, XU)
        }
        return {
          stored: {
            ...oU,
            validation: pU
          },
          info: YU
        }
      }(UU, XU), [NU] = YU.errors;
      if (NU) {
        const UU = null === NU.file ? "" : `${NU.file}:${NU.line}: `,
          XU = YU.errors.length > 1 ? ` (${YU.errors.length-1} more)` : "";
        return {
          info: YU,
          problem: `The shader pack doesn't compile: ${UU}${NU.message}${XU}`
        }
      }
      return YU.runsInMode ? ((0, oU.setHarnessUrlShaderPack)(zU, XU), {
        info: YU,
        problem: null
      }) : {
        info: YU,
        problem: `The shader pack runs nothing in ${XU} mode`
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
  },
  7158: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => FU,
      C: () => AU,
      E: () => cU,
      H: () => NU,
      I: () => EU,
      M: () => BU,
      N: () => YU,
      O: () => DU,
      c: () => pU,
      f: () => tU,
      h: () => aU,
      i: () => IU,
      l: () => GU,
      o: () => RU,
      r: () => oU,
      s: () => yU,
      v: () => ZU,
      z: () => QU
    });
    const cU = ["forest", "desert", "water", "night", "cave"];
    const yU = {
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
      QU = ["popular", "updated", "newest"],
      AU = 3,
      FU = 32,
      oU = 300;

    function DU(UU, XU) {
      return UU.slice(0, XU).replace(/[\uD800-\uDBFF]$/, "")
    }
    const EU = 64,
      YU = 512,
      NU = 18e5;

    function IU(UU) {
      const XU = UU,
        zU = null === XU || void 0 === XU ? void 0 : XU.files;
      return "number" === typeof(null === XU || void 0 === XU ? void 0 : XU.apiVersion) && "string" === typeof XU.name && (null === XU.author || "string" === typeof XU.author) && (void 0 === XU.keepCircleShadows || "boolean" === typeof XU.keepCircleShadows) && "object" === typeof zU && null !== zU && Object.values(zU).every((UU => "string" === typeof UU))
    }
    const pU = "Bloxdhub",
      aU = "https://bloxdhub.com/shaders";

    function tU(UU) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
    }
    const gU = "Screenshot generation failed.",
      kU = "Its screenshots couldn't be generated:";

    function GU(UU) {
      var XU;
      return UU === gU || null !== (XU = null === UU || void 0 === UU ? void 0 : UU.startsWith(kU)) && void 0 !== XU && XU
    }

    function BU(UU, XU) {
      return `shaderPacks/${UU}/${XU}.json`
    }

    function ZU(UU, XU, zU, cU) {
      return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
    }

    function RU(UU, XU, zU, cU) {
      return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);