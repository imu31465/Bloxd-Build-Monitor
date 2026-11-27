export const id = 155;
export const ids = [155];
export const modules = {
  53928: (WW, iW, OW) => {
    OW.d(iW, {
      startHarnessShaderPack: () => ZW
    });
    var mW = OW(7570),
      EW = OW(5970),
      NW = OW(7646),
      PW = OW(7621),
      LW = OW(5961),
      cW = OW(40448),
      wW = OW(7637),
      tW = OW(7648);
    async function ZW(WW, iW) {
      const {
        stored: OW,
        info: ZW
      } = await async function(WW, iW) {
        const OW = await async function(WW) {
          const iW = await fetch(WW);
          if (!iW.ok) throw new Error(`Couldn't fetch the shader pack at ${WW}: HTTP ${iW.status}`);
          const OW = await iW.json();
          if (!(0, mW.f)(OW)) throw new Error(`The shader pack at ${WW} isn't a shader pack listing source`);
          return OW
        }(WW);
        if (!(0, LW.g)(OW.apiVersion)) throw new Error(`The pack is for shader pack API version ${OW.apiVersion}; this build runs version ${LW.b}`);
        const cW = {
            manifest: {
              apiVersion: OW.apiVersion,
              name: OW.name,
              author: OW.author,
              description: null,
              keepCircleShadows: !0 === OW.keepCircleShadows
            },
            files: OW.files,
            validation: null
          },
          ZW = {
            url: WW,
            name: OW.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          xW = (0, EW.x)(OW.files);
        if ("string" === typeof xW) return ZW.errors = [{
          file: null,
          line: 0,
          message: xW
        }], {
          stored: cW,
          info: ZW
        };
        const lW = await (0, PW.loadPageShaderPackCompiler)();
        if (!lW) throw new Error("The shader pack compiler couldn't load");
        const AW = await (0, tW.g)(lW, xW);
        if (!AW) throw new Error("No WebGPU device could validate the shader pack");
        if (ZW.errors = [...AW.errors], AW.ok) {
          const WW = lW.dWW(xW, (0, wW.shaderPackTextures)());
          ZW.features = (0, EW.v)(WW), ZW.runsInMode = (0, NW.j)(WW.variants, iW)
        }
        return {
          stored: {
            ...cW,
            validation: AW
          },
          info: ZW
        }
      }(WW, iW), [xW] = ZW.errors;
      if (xW) {
        const WW = null === xW.file ? "" : `${xW.file}:${xW.line}: `,
          iW = ZW.errors.length > 1 ? ` (${ZW.errors.length-1} more)` : "";
        return {
          info: ZW,
          problem: `The shader pack doesn't compile: ${WW}${xW.message}${iW}`
        }
      }
      return ZW.runsInMode ? ((0, cW.setHarnessUrlShaderPack)(OW, iW), {
        info: ZW,
        problem: null
      }) : {
        info: ZW,
        problem: `The shader pack runs nothing in ${iW} mode`
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
  },
  7570: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => PW,
      F: () => mW,
      G: () => xW,
      K: () => tW,
      L: () => MW,
      M: () => ZW,
      N: () => wW,
      c: () => AW,
      d: () => jW,
      e: () => bW,
      f: () => lW,
      g: () => sW,
      i: () => SW,
      j: () => cW,
      n: () => EW,
      q: () => KW,
      u: () => NW,
      x: () => LW
    });
    const mW = ["forest", "desert", "water", "night", "cave"];
    const EW = {
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
      NW = ["popular", "updated", "newest"],
      PW = 3,
      LW = 32,
      cW = 300;

    function wW(WW, iW) {
      return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
    }
    const tW = 64,
      ZW = 512,
      xW = 18e5;

    function lW(WW) {
      const iW = WW,
        OW = null === iW || void 0 === iW ? void 0 : iW.files;
      return "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.apiVersion) && "string" === typeof iW.name && (null === iW.author || "string" === typeof iW.author) && (void 0 === iW.keepCircleShadows || "boolean" === typeof iW.keepCircleShadows) && "object" === typeof OW && null !== OW && Object.values(OW).every((WW => "string" === typeof WW))
    }
    const AW = "Bloxdhub",
      bW = "https://bloxdhub.com/shaders";

    function jW(WW) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
    }
    const UW = "Screenshot generation failed.",
      kW = "Its screenshots couldn't be generated:";

    function sW(WW) {
      var iW;
      return WW === UW || null !== (iW = null === WW || void 0 === WW ? void 0 : WW.startsWith(kW)) && void 0 !== iW && iW
    }

    function MW(WW, iW) {
      return `shaderPacks/${WW}/${iW}.json`
    }

    function KW(WW, iW, OW, mW) {
      return null === iW.renderId ? SW(WW, iW.baselineVersion, OW, mW) : `${WW}/${function(WW,iW,OW,mW){return`shaderPacks/${WW}/${iW}/${OW}-${mW}.webp`}(iW.packId,iW.renderId,OW,mW)}`
    }

    function SW(WW, iW, OW, mW) {
      return `${WW}/${function(WW,iW,OW){return`shaderPacks/baseline/${WW}/${iW}-${OW}.webp`}(iW,OW,mW)}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);