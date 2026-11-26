export const id = 155;
export const ids = [155];
export const modules = {
  44634: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      compilePagePack: () => nV,
      prefetchCompiler: () => pV,
      reconcileHint: () => QV
    });
    var JV = xV(7176),
      YV = xV(7212),
      UV = xV(7191),
      yV = xV(7208);

    function pV() {
      (0, JV.loadPageShaderPackCompiler)()
    }
    async function QV() {
      const VV = await (0, JV.loadPageShaderPackCompiler)();
      await (VV ? (0, YV.reconcileStoredShaderPackHint)(VV) : (0, YV.forgetShaderPackActiveHint)())
    }
    async function nV(VV) {
      const eV = await (0, JV.loadPageShaderPackCompiler)();
      if (!eV) return {
        status: "none"
      };
      const xV = await (0, yV.b)(VV, eV),
        pV = (0, YV.storedPackOutcome)(xV, eV);
      if ("none" === pV.kind) return {
        status: "none"
      };
      const QV = eV.GeV((0, YV.storedShaderPackFiles)(xV), (0, UV.shaderPackTextures)());
      if ("blocked" === pV.kind) return {
        status: "blocked",
        messageKey: pV.messageKey,
        variants: 0 === QV.errors.length ? QV.variants : null
      };
      if (QV.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", QV.errors), {
        status: "none"
      };
      const {
        name: nV,
        keepCircleShadows: wV
      } = xV.manifest;
      return {
        status: "active",
        pack: {
          name: nV,
          variants: QV.variants,
          keepCircleShadows: !0 === wV
        }
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
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);