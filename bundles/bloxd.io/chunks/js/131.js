export const id = 131;
export const ids = [131];
export const modules = {
  41654: (DD, zD, wD) => {
    wD.d(zD, {
      startHarnessShaderPack: () => AD
    });
    var pD = wD(6594),
      sD = wD(5084),
      KD = wD(6678),
      rD = wD(6645),
      LD = wD(5076),
      cD = wD(39186),
      gD = wD(6664),
      RD = wD(6682);
    async function AD(DD, zD) {
      const {
        stored: wD,
        info: AD
      } = await async function(DD, zD) {
        const wD = await async function(DD) {
          const zD = await fetch(DD);
          if (!zD.ok) throw new Error(`Couldn't fetch the shader pack at ${DD}: HTTP ${zD.status}`);
          const wD = await zD.json();
          if (!(0, pD.i)(wD)) throw new Error(`The shader pack at ${DD} isn't a shader pack listing source`);
          return wD
        }(DD);
        if (!(0, LD.h)(wD.apiVersion)) throw new Error(`The pack is for shader pack API version ${wD.apiVersion}; this build runs version ${LD.b}`);
        const cD = {
            manifest: {
              apiVersion: wD.apiVersion,
              name: wD.name,
              author: wD.author,
              description: null,
              keepCircleShadows: !0 === wD.keepCircleShadows
            },
            files: wD.files,
            validation: null
          },
          AD = {
            url: DD,
            name: wD.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          UD = (0, sD.v)(wD.files);
        if ("string" === typeof UD) return AD.errors = [{
          file: null,
          line: 0,
          message: UD
        }], {
          stored: cD,
          info: AD
        };
        const fD = await (0, rD.loadPageShaderPackCompiler)();
        if (!fD) throw new Error("The shader pack compiler couldn't load");
        const ID = await (0, RD.h)(fD, UD);
        if (!ID) throw new Error("No WebGPU device could validate the shader pack");
        if (AD.errors = [...ID.errors], ID.ok) {
          const DD = fD.LDD(UD, (0, gD.shaderPackTextures)());
          AD.features = (0, sD.r)(DD), AD.runsInMode = (0, KD.f)(DD.variants, zD)
        }
        return {
          stored: {
            ...cD,
            validation: ID
          },
          info: AD
        }
      }(DD, zD), [UD] = AD.errors;
      if (UD) {
        const DD = null === UD.file ? "" : `${UD.file}:${UD.line}: `,
          zD = AD.errors.length > 1 ? ` (${AD.errors.length-1} more)` : "";
        return {
          info: AD,
          problem: `The shader pack doesn't compile: ${DD}${UD.message}${zD}`
        }
      }
      return AD.runsInMode ? ((0, cD.setHarnessUrlShaderPack)(wD, zD), {
        info: AD,
        problem: null
      }) : {
        info: AD,
        problem: `The shader pack runs nothing in ${zD} mode`
      }
    }
  },
  6691: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      forgetShaderPackActiveHint: () => xD,
      isOtherApiVersion: () => XD,
      isShaderPackActive: () => OD,
      isShaderPackChangePending: () => QD,
      markShaderPackChangePending: () => ED,
      pageShaderPackValidationVersion: () => VD,
      reconcileStoredShaderPackHint: () => CD,
      removeShaderPack: () => MD,
      replaceShaderPack: () => GD,
      saveShaderPack: () => BD,
      shaderPackNeedsCheck: () => PD,
      storedPackOutcome: () => JD,
      storedShaderPackFiles: () => UD,
      toStoredShaderPack: () => AD
    });
    var pD = wD(5084),
      sD = wD(5076),
      KD = wD(35),
      rD = wD(3462),
      LD = wD(6693),
      cD = wD(6664);
    const gD = "shaderPackChangePending";
    let RD = null;

    function AD(DD, zD, wD) {
      return {
        manifest: DD.manifest,
        files: (0, pD.z)(DD.files),
        validation: zD,
        ...wD && {
          listing: wD
        }
      }
    }

    function UD(DD) {
      return Object.keys(DD.files).map((zD => ({
        path: zD,
        source: DD.files[zD]
      })))
    }
    let fD = Promise.resolve();

    function ID(DD) {
      const zD = fD.then(DD);
      return fD = zD.catch((() => {})), zD
    }

    function BD(DD, zD) {
      return ID((() => hD(DD, zD)))
    }

    function GD(DD, zD, wD) {
      return ID((async () => JSON.stringify(await (0, LD.c)()) === JSON.stringify(DD) && (null === zD ? (await nD(), !0) : hD(zD, wD))))
    }
    async function hD(DD, zD) {
      const wD = await KD.g.setItem(LD.b, DD);
      return wD && TD(DD, zD), wD
    }
    async function nD() {
      await KD.g.removeItem(LD.b), KD.h.removeItem(rD.e)
    }

    function MD() {
      return ID(nD)
    }

    function OD(DD, zD) {
      return "active" === JD(DD, zD).kind
    }

    function JD(DD, zD) {
      var wD;
      return null === DD ? {
        kind: "none",
        reason: "nothingStored"
      } : XD(DD) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) || DD.validation.fromRecheck ? null === zD ? {
        kind: "none",
        reason: "noCompiler"
      } : PD(DD, zD) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : DD.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function ED() {
      KD.k.setItem(gD, performance.timeOrigin)
    }

    function QD() {
      return KD.k.getItem(gD) === performance.timeOrigin
    }

    function XD(DD) {
      return !(0, sD.h)(DD.manifest.apiVersion)
    }

    function VD(DD) {
      return RD ??= DD.qS((0, cD.shaderPackTextures)()), RD
    }

    function PD(DD, zD) {
      var wD;
      return (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.headerVersion) !== VD(zD)
    }

    function CD(DD) {
      return ID((async () => {
        TD(await (0, LD.c)(!0), DD)
      }))
    }

    function xD() {
      return ID((async () => {
        KD.h.removeItem(rD.e)
      }))
    }

    function TD(DD, zD) {
      OD(DD, zD) ? KD.h.setItem(rD.e, !0) : KD.h.removeItem(rD.e)
    }
  },
  6682: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => cD,
      h: () => LD
    });
    var pD = wD(6691),
      sD = wD(6664),
      KD = wD(119);
    const rD = 100;
    async function LD(DD, zD) {
      var wD;
      let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wD = navigator.gpu) && void 0 !== wD ? wD : null;
      const rD = DD.LDD(zD, (0, sD.shaderPackTextures)());
      if (rD.errors.length > 0) return gD(DD, rD.errors, rD.offInStrict);
      const LD = await async function(DD) {
        if (!DD) return null;
        try {
          const zD = await (0, KD.x)(DD);
          return zD ? await zD.requestDevice() : null
        } catch (zD) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zD), null
        }
      }(pD);
      if (!LD) return null;
      let cD = !1;
      LD.lost.then((() => {
        cD = !0
      }));
      try {
        const zD = await Promise.all(rD.validationModules.map((zD => async function(DD, zD, wD) {
          zD.pushErrorScope("validation");
          const pD = zD.createShaderModule({
              code: wD.code
            }),
            sD = zD.popErrorScope(),
            {
              messages: KD
            } = await pD.getCompilationInfo(),
            rD = KD.filter((DD => "error" === DD.type)).map((zD => DD.mapValidationMessage(wD, zD))),
            LD = await sD;
          LD && 0 === rD.length && rD.push({
            file: null,
            line: 0,
            message: LD.message,
            variants: [wD.key]
          });
          return rD
        }(DD, LD, zD))));
        return cD ? null : gD(DD, DD.RpD(zD.flat()), rD.offInStrict)
      } catch (RD) {
        return console.error("Couldn't validate the shader pack on WebGPU.", RD), null
      } finally {
        LD.destroy()
      }
    }
    async function cD(DD, zD) {
      var wD;
      if (!(0, pD.shaderPackNeedsCheck)(DD, zD) || (0, pD.isOtherApiVersion)(DD)) return DD;
      const sD = await LD(zD, (0, pD.storedShaderPackFiles)(DD));
      if (!sD) return DD;
      const KD = !1 === (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) && !DD.validation.fromRecheck,
        rD = {
          ...DD,
          validation: KD ? sD : {
            ...sD,
            fromRecheck: !0
          }
        };
      return await (0, pD.replaceShaderPack)(DD, rD, zD) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), rD
    }

    function gD(DD, zD, wD) {
      return {
        headerVersion: (0, pD.pageShaderPackValidationVersion)(DD),
        ok: 0 === zD.length,
        errors: zD.slice(0, rD),
        moreErrors: Math.max(0, zD.length - rD),
        offInStrict: wD
      }
    }
  },
  6594: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => KD,
      C: () => LD,
      G: () => rD,
      H: () => pD,
      I: () => UD,
      K: () => RD,
      M: () => OD,
      N: () => AD,
      R: () => gD,
      d: () => ID,
      f: () => GD,
      g: () => BD,
      i: () => fD,
      k: () => MD,
      l: () => ED,
      p: () => cD,
      s: () => sD,
      w: () => JD
    });
    const pD = ["forest", "desert", "water", "night", "cave"];
    const sD = {
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
      KD = ["popular", "updated", "newest"],
      rD = 3,
      LD = 32,
      cD = 300;

    function gD(DD, zD) {
      return DD.slice(0, zD).replace(/[\uD800-\uDBFF]$/, "")
    }
    const RD = 64,
      AD = 512,
      UD = 18e5;

    function fD(DD) {
      const zD = DD,
        wD = null === zD || void 0 === zD ? void 0 : zD.files;
      return "number" === typeof(null === zD || void 0 === zD ? void 0 : zD.apiVersion) && "string" === typeof zD.name && (null === zD.author || "string" === typeof zD.author) && (void 0 === zD.keepCircleShadows || "boolean" === typeof zD.keepCircleShadows) && "object" === typeof wD && null !== wD && Object.values(wD).every((DD => "string" === typeof DD))
    }
    const ID = "Bloxdhub",
      BD = "https://bloxdhub.com/shaders";

    function GD(DD) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
    }
    const hD = "Screenshot generation failed.",
      nD = "Its screenshots couldn't be generated:";

    function MD(DD) {
      var zD;
      return DD === hD || null !== (zD = null === DD || void 0 === DD ? void 0 : DD.startsWith(nD)) && void 0 !== zD && zD
    }

    function OD(DD, zD) {
      return `shaderPacks/${DD}/${zD}.json`
    }

    function JD(DD, zD, wD, pD) {
      return null === zD.renderId ? ED(DD, zD.baselineVersion, wD, pD) : `${DD}/${function(DD,zD,wD,pD){return`shaderPacks/${DD}/${zD}/${wD}-${pD}.webp`}(zD.packId,zD.renderId,wD,pD)}`
    }

    function ED(DD, zD, wD, pD) {
      return `${DD}/${function(DD,zD,wD){return`shaderPacks/baseline/${DD}/${zD}-${wD}.webp`}(zD,wD,pD)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);