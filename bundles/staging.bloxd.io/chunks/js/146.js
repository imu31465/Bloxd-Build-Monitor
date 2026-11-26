export const id = 146;
export const ids = [146];
export const modules = {
  44641: (VV, eV, xV) => {
    xV.d(eV, {
      startHarnessShaderPack: () => ZV
    });
    var JV = xV(7132),
      YV = xV(5561),
      UV = xV(7201),
      yV = xV(7176),
      pV = xV(5556),
      QV = xV(40443),
      nV = xV(7191),
      wV = xV(7208);
    async function ZV(VV, eV) {
      const {
        stored: xV,
        info: ZV
      } = await async function(VV, eV) {
        const xV = await async function(VV) {
          const eV = await fetch(VV);
          if (!eV.ok) throw new Error(`Couldn't fetch the shader pack at ${VV}: HTTP ${eV.status}`);
          const xV = await eV.json();
          if (!(0, JV.k)(xV)) throw new Error(`The shader pack at ${VV} isn't a shader pack listing source`);
          return xV
        }(VV);
        if (!(0, pV.j)(xV.apiVersion)) throw new Error(`The pack is for shader pack API version ${xV.apiVersion}; this build runs version ${pV.d}`);
        const QV = {
            manifest: {
              apiVersion: xV.apiVersion,
              name: xV.name,
              author: xV.author,
              description: null,
              keepCircleShadows: !0 === xV.keepCircleShadows
            },
            files: xV.files,
            validation: null
          },
          ZV = {
            url: VV,
            name: xV.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          vV = (0, YV.s)(xV.files);
        if ("string" === typeof vV) return ZV.errors = [{
          file: null,
          line: 0,
          message: vV
        }], {
          stored: QV,
          info: ZV
        };
        const rV = await (0, yV.loadPageShaderPackCompiler)();
        if (!rV) throw new Error("The shader pack compiler couldn't load");
        const kV = await (0, wV.d)(rV, vV);
        if (!kV) throw new Error("No WebGPU device could validate the shader pack");
        if (ZV.errors = [...kV.errors], kV.ok) {
          const VV = rV.GeV(vV, (0, nV.shaderPackTextures)());
          ZV.features = (0, YV.p)(VV), ZV.runsInMode = (0, UV.h)(VV.variants, eV)
        }
        return {
          stored: {
            ...QV,
            validation: kV
          },
          info: ZV
        }
      }(VV, eV), [vV] = ZV.errors;
      if (vV) {
        const VV = null === vV.file ? "" : `${vV.file}:${vV.line}: `,
          eV = ZV.errors.length > 1 ? ` (${ZV.errors.length-1} more)` : "";
        return {
          info: ZV,
          problem: `The shader pack doesn't compile: ${VV}${vV.message}${eV}`
        }
      }
      return ZV.runsInMode ? ((0, QV.setHarnessUrlShaderPack)(xV, eV), {
        info: ZV,
        problem: null
      }) : {
        info: ZV,
        problem: `The shader pack runs nothing in ${eV} mode`
      }
    }
  },
  7212: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      forgetShaderPackActiveHint: () => zV,
      isOtherApiVersion: () => AV,
      isShaderPackActive: () => tV,
      isShaderPackChangePending: () => PV,
      markShaderPackChangePending: () => TV,
      pageShaderPackValidationVersion: () => NV,
      reconcileStoredShaderPackHint: () => MV,
      removeShaderPack: () => qV,
      replaceShaderPack: () => EV,
      saveShaderPack: () => bV,
      shaderPackNeedsCheck: () => XV,
      storedPackOutcome: () => FV,
      storedShaderPackFiles: () => vV,
      toStoredShaderPack: () => ZV
    });
    var JV = xV(5561),
      YV = xV(5556),
      UV = xV(40),
      yV = xV(3907),
      pV = xV(7216),
      QV = xV(7191);
    const nV = "shaderPackChangePending";
    let wV = null;

    function ZV(VV, eV, xV) {
      return {
        manifest: VV.manifest,
        files: (0, JV.t)(VV.files),
        validation: eV,
        ...xV && {
          listing: xV
        }
      }
    }

    function vV(VV) {
      return Object.keys(VV.files).map((eV => ({
        path: eV,
        source: VV.files[eV]
      })))
    }
    let rV = Promise.resolve();

    function kV(VV) {
      const eV = rV.then(VV);
      return rV = eV.catch((() => {})), eV
    }

    function bV(VV, eV) {
      return kV((() => BV(VV, eV)))
    }

    function EV(VV, eV, xV) {
      return kV((async () => JSON.stringify(await (0, pV.f)()) === JSON.stringify(VV) && (null === eV ? (await jV(), !0) : BV(eV, xV))))
    }
    async function BV(VV, eV) {
      const xV = await UV.i.setItem(pV.d, VV);
      return xV && GV(VV, eV), xV
    }
    async function jV() {
      await UV.i.removeItem(pV.d), UV.m.removeItem(yV.d)
    }

    function qV() {
      return kV(jV)
    }

    function tV(VV, eV) {
      return "active" === FV(VV, eV).kind
    }

    function FV(VV, eV) {
      var xV;
      return null === VV ? {
        kind: "none",
        reason: "nothingStored"
      } : AV(VV) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.ok) || VV.validation.fromRecheck ? null === eV ? {
        kind: "none",
        reason: "noCompiler"
      } : XV(VV, eV) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : VV.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function TV() {
      UV.q.setItem(nV, performance.timeOrigin)
    }

    function PV() {
      return UV.q.getItem(nV) === performance.timeOrigin
    }

    function AV(VV) {
      return !(0, YV.j)(VV.manifest.apiVersion)
    }

    function NV(VV) {
      return wV ??= VV.lD((0, QV.shaderPackTextures)()), wV
    }

    function XV(VV, eV) {
      var xV;
      return (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.headerVersion) !== NV(eV)
    }

    function MV(VV) {
      return kV((async () => {
        GV(await (0, pV.f)(!0), VV)
      }))
    }

    function zV() {
      return kV((async () => {
        UV.m.removeItem(yV.d)
      }))
    }

    function GV(VV, eV) {
      tV(VV, eV) ? UV.m.setItem(yV.d, !0) : UV.m.removeItem(yV.d)
    }
  },
  7208: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV,
      d: () => pV
    });
    var JV = xV(7212),
      YV = xV(7191),
      UV = xV(124);
    const yV = 100;
    async function pV(VV, eV) {
      var xV;
      let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (xV = navigator.gpu) && void 0 !== xV ? xV : null;
      const yV = VV.GeV(eV, (0, YV.shaderPackTextures)());
      if (yV.errors.length > 0) return nV(VV, yV.errors, yV.offInStrict);
      const pV = await async function(VV) {
        if (!VV) return null;
        try {
          const eV = await (0, UV.w)(VV);
          return eV ? await eV.requestDevice() : null
        } catch (eV) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", eV), null
        }
      }(JV);
      if (!pV) return null;
      let QV = !1;
      pV.lost.then((() => {
        QV = !0
      }));
      try {
        const eV = await Promise.all(yV.validationModules.map((eV => async function(VV, eV, xV) {
          eV.pushErrorScope("validation");
          const JV = eV.createShaderModule({
              code: xV.code
            }),
            YV = eV.popErrorScope(),
            {
              messages: UV
            } = await JV.getCompilationInfo(),
            yV = UV.filter((VV => "error" === VV.type)).map((eV => VV.mapValidationMessage(xV, eV))),
            pV = await YV;
          pV && 0 === yV.length && yV.push({
            file: null,
            line: 0,
            message: pV.message,
            variants: [xV.key]
          });
          return yV
        }(VV, pV, eV))));
        return QV ? null : nV(VV, VV.BYV(eV.flat()), yV.offInStrict)
      } catch (wV) {
        return console.error("Couldn't validate the shader pack on WebGPU.", wV), null
      } finally {
        pV.destroy()
      }
    }
    async function QV(VV, eV) {
      var xV;
      if (!(0, JV.shaderPackNeedsCheck)(VV, eV) || (0, JV.isOtherApiVersion)(VV)) return VV;
      const YV = await pV(eV, (0, JV.storedShaderPackFiles)(VV));
      if (!YV) return VV;
      const UV = !1 === (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.ok) && !VV.validation.fromRecheck,
        yV = {
          ...VV,
          validation: UV ? YV : {
            ...YV,
            fromRecheck: !0
          }
        };
      return await (0, JV.replaceShaderPack)(VV, yV, eV) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yV
    }

    function nV(VV, eV, xV) {
      return {
        headerVersion: (0, JV.pageShaderPackValidationVersion)(VV),
        ok: 0 === eV.length,
        errors: eV.slice(0, yV),
        moreErrors: Math.max(0, eV.length - yV),
        offInStrict: xV
      }
    }
  },
  7132: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => UV,
      D: () => pV,
      H: () => yV,
      L: () => JV,
      O: () => vV,
      P: () => wV,
      S: () => tV,
      V: () => ZV,
      X: () => nV,
      d: () => kV,
      g: () => EV,
      h: () => bV,
      k: () => rV,
      n: () => qV,
      q: () => TV,
      s: () => QV,
      w: () => YV,
      x: () => FV
    });
    const JV = ["forest", "desert", "water", "night", "cave"];
    const YV = {
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
      UV = ["popular", "updated", "newest"],
      yV = 3,
      pV = 32,
      QV = 300;

    function nV(VV, eV) {
      return VV.slice(0, eV).replace(/[\uD800-\uDBFF]$/, "")
    }
    const wV = 64,
      ZV = 512,
      vV = 18e5;

    function rV(VV) {
      const eV = VV,
        xV = null === eV || void 0 === eV ? void 0 : eV.files;
      return "number" === typeof(null === eV || void 0 === eV ? void 0 : eV.apiVersion) && "string" === typeof eV.name && (null === eV.author || "string" === typeof eV.author) && (void 0 === eV.keepCircleShadows || "boolean" === typeof eV.keepCircleShadows) && "object" === typeof xV && null !== xV && Object.values(xV).every((VV => "string" === typeof VV))
    }
    const kV = "Bloxdhub",
      bV = "https://bloxdhub.com/shaders";

    function EV(VV) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(VV)}`
    }
    const BV = "Screenshot generation failed.",
      jV = "Its screenshots couldn't be generated:";

    function qV(VV) {
      var eV;
      return VV === BV || null !== (eV = null === VV || void 0 === VV ? void 0 : VV.startsWith(jV)) && void 0 !== eV && eV
    }

    function tV(VV, eV) {
      return `shaderPacks/${VV}/${eV}.json`
    }

    function FV(VV, eV, xV, JV) {
      return null === eV.renderId ? TV(VV, eV.baselineVersion, xV, JV) : `${VV}/${function(VV,eV,xV,JV){return`shaderPacks/${VV}/${eV}/${xV}-${JV}.webp`}(eV.packId,eV.renderId,xV,JV)}`
    }

    function TV(VV, eV, xV, JV) {
      return `${VV}/${function(VV,eV,xV){return`shaderPacks/baseline/${VV}/${eV}-${xV}.webp`}(eV,xV,JV)}`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);