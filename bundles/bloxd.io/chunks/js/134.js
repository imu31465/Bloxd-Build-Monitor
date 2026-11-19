export const id = 134;
export const ids = [134];
export const modules = {
  40843: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      compilePagePack: () => wD,
      prefetchCompiler: () => bD,
      reconcileHint: () => QD
    });
    var ID = cD(6366),
      pD = cD(6404),
      iD = cD(6379),
      fD = cD(6401);

    function bD() {
      (0, ID.loadPageShaderPackCompiler)()
    }
    async function QD() {
      const DD = await (0, ID.loadPageShaderPackCompiler)();
      await (DD ? (0, pD.reconcileStoredShaderPackHint)(DD) : (0, pD.forgetShaderPackActiveHint)())
    }
    async function wD(DD) {
      const CD = await (0, ID.loadPageShaderPackCompiler)();
      if (!CD) return {
        status: "none"
      };
      const cD = await (0, fD.b)(DD, CD),
        bD = (0, pD.storedPackOutcome)(cD, CD);
      if ("none" === bD.kind) return {
        status: "none"
      };
      const QD = CD.R6((0, pD.storedShaderPackFiles)(cD), (0, iD.shaderPackTextures)());
      if ("blocked" === bD.kind) return {
        status: "blocked",
        messageKey: bD.messageKey,
        variants: 0 === QD.errors.length ? QD.variants : null
      };
      if (QD.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", QD.errors), {
        status: "none"
      };
      const {
        name: wD,
        keepCircleShadows: SD
      } = cD.manifest;
      return {
        status: "active",
        pack: {
          name: wD,
          variants: QD.variants,
          keepCircleShadows: !0 === SD
        }
      }
    }
  },
  6404: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      forgetShaderPackActiveHint: () => qD,
      isOtherApiVersion: () => PD,
      isShaderPackActive: () => XD,
      isShaderPackChangePending: () => OD,
      markShaderPackChangePending: () => nD,
      pageShaderPackValidationVersion: () => HD,
      reconcileStoredShaderPackHint: () => xD,
      removeShaderPack: () => gD,
      replaceShaderPack: () => oD,
      saveShaderPack: () => ZD,
      shaderPackNeedsCheck: () => UD,
      storedPackOutcome: () => mD,
      storedShaderPackFiles: () => yD,
      toStoredShaderPack: () => BD
    });
    var ID = cD(6343),
      pD = cD(6356),
      iD = cD(36),
      fD = cD(3255),
      bD = cD(6409),
      QD = cD(6379);
    const wD = "shaderPackChangePending";
    let SD = null;

    function BD(DD, CD, cD) {
      return {
        manifest: DD.manifest,
        files: (0, ID.w)(DD.files),
        validation: CD,
        ...cD && {
          listing: cD
        }
      }
    }

    function yD(DD) {
      return Object.keys(DD.files).map((CD => ({
        path: CD,
        source: DD.files[CD]
      })))
    }
    let MD = Promise.resolve();

    function tD(DD) {
      const CD = MD.then(DD);
      return MD = CD.catch((() => {})), CD
    }

    function ZD(DD, CD) {
      return tD((() => vD(DD, CD)))
    }

    function oD(DD, CD, cD) {
      return tD((async () => JSON.stringify(await (0, bD.d)()) === JSON.stringify(DD) && (null === CD ? (await ND(), !0) : vD(CD, cD))))
    }
    async function vD(DD, CD) {
      const cD = await iD.f.setItem(bD.c, DD);
      return cD && JD(DD, CD), cD
    }
    async function ND() {
      await iD.f.removeItem(bD.c), iD.h.removeItem(fD.e)
    }

    function gD() {
      return tD(ND)
    }

    function XD(DD, CD) {
      return "active" === mD(DD, CD).kind
    }

    function mD(DD, CD) {
      var cD;
      return null === DD ? {
        kind: "none",
        reason: "nothingStored"
      } : PD(DD) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.ok) || DD.validation.fromRecheck ? null === CD ? {
        kind: "none",
        reason: "noCompiler"
      } : UD(DD, CD) ? {
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

    function nD() {
      iD.j.setItem(wD, performance.timeOrigin)
    }

    function OD() {
      return iD.j.getItem(wD) === performance.timeOrigin
    }

    function PD(DD) {
      return !(0, pD.f)(DD.manifest.apiVersion)
    }

    function HD(DD) {
      return SD ??= DD.zq((0, QD.shaderPackTextures)()), SD
    }

    function UD(DD, CD) {
      var cD;
      return (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.headerVersion) !== HD(CD)
    }

    function xD(DD) {
      return tD((async () => {
        JD(await (0, bD.d)(!0), DD)
      }))
    }

    function qD() {
      return tD((async () => {
        iD.h.removeItem(fD.e)
      }))
    }

    function JD(DD, CD) {
      XD(DD, CD) ? iD.h.setItem(fD.e, !0) : iD.h.removeItem(fD.e)
    }
  },
  6401: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD,
      f: () => bD
    });
    var ID = cD(6404),
      pD = cD(6379),
      iD = cD(110);
    const fD = 100;
    async function bD(DD, CD) {
      var cD;
      let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cD = navigator.gpu) && void 0 !== cD ? cD : null;
      const fD = DD.R6(CD, (0, pD.shaderPackTextures)());
      if (fD.errors.length > 0) return wD(DD, fD.errors, fD.offInStrict);
      const bD = await async function(DD) {
        if (!DD) return null;
        try {
          const CD = await (0, iD.v)(DD);
          return CD ? await CD.requestDevice() : null
        } catch (CD) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", CD), null
        }
      }(ID);
      if (!bD) return null;
      let QD = !1;
      bD.lost.then((() => {
        QD = !0
      }));
      try {
        const CD = await Promise.all(fD.validationModules.map((CD => async function(DD, CD, cD) {
          CD.pushErrorScope("validation");
          const ID = CD.createShaderModule({
              code: cD.code
            }),
            pD = CD.popErrorScope(),
            {
              messages: iD
            } = await ID.getCompilationInfo(),
            fD = iD.filter((DD => "error" === DD.type)).map((CD => DD.mapValidationMessage(cD, CD))),
            bD = await pD;
          bD && 0 === fD.length && fD.push({
            file: null,
            line: 0,
            message: bD.message,
            variants: [cD.key]
          });
          return fD
        }(DD, bD, CD))));
        return QD ? null : wD(DD, DD.icD(CD.flat()), fD.offInStrict)
      } catch (SD) {
        return console.error("Couldn't validate the shader pack on WebGPU.", SD), null
      } finally {
        bD.destroy()
      }
    }
    async function QD(DD, CD) {
      var cD;
      if (!(0, ID.shaderPackNeedsCheck)(DD, CD) || (0, ID.isOtherApiVersion)(DD)) return DD;
      const pD = await bD(CD, (0, ID.storedShaderPackFiles)(DD));
      if (!pD) return DD;
      const iD = !1 === (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.ok) && !DD.validation.fromRecheck,
        fD = {
          ...DD,
          validation: iD ? pD : {
            ...pD,
            fromRecheck: !0
          }
        };
      return await (0, ID.replaceShaderPack)(DD, fD, CD) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), fD
    }

    function wD(DD, CD, cD) {
      return {
        headerVersion: (0, ID.pageShaderPackValidationVersion)(DD),
        ok: 0 === CD.length,
        errors: CD.slice(0, fD),
        moreErrors: Math.max(0, CD.length - fD),
        offInStrict: cD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);