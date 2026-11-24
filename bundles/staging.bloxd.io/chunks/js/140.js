export const id = 140;
export const ids = [140];
export const modules = {
  41647: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      compilePagePack: () => gD,
      prefetchCompiler: () => LD,
      reconcileHint: () => cD
    });
    var pD = wD(6645),
      sD = wD(6691),
      KD = wD(6664),
      rD = wD(6682);

    function LD() {
      (0, pD.loadPageShaderPackCompiler)()
    }
    async function cD() {
      const DD = await (0, pD.loadPageShaderPackCompiler)();
      await (DD ? (0, sD.reconcileStoredShaderPackHint)(DD) : (0, sD.forgetShaderPackActiveHint)())
    }
    async function gD(DD) {
      const zD = await (0, pD.loadPageShaderPackCompiler)();
      if (!zD) return {
        status: "none"
      };
      const wD = await (0, rD.d)(DD, zD),
        LD = (0, sD.storedPackOutcome)(wD, zD);
      if ("none" === LD.kind) return {
        status: "none"
      };
      const cD = zD.LDD((0, sD.storedShaderPackFiles)(wD), (0, KD.shaderPackTextures)());
      if ("blocked" === LD.kind) return {
        status: "blocked",
        messageKey: LD.messageKey,
        variants: 0 === cD.errors.length ? cD.variants : null
      };
      if (cD.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", cD.errors), {
        status: "none"
      };
      const {
        name: gD,
        keepCircleShadows: RD
      } = wD.manifest;
      return {
        status: "active",
        pack: {
          name: gD,
          variants: cD.variants,
          keepCircleShadows: !0 === RD
        }
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
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);