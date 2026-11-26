export const id = 152;
export const ids = [151, 152];
export const modules = {
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
  7191: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      loadShaderPackTextures: () => yV,
      shaderPackTextures: () => pV
    });
    var JV = xV(5561);
    let YV = null,
      UV = null;

    function yV() {
      return UV ??= Promise.all([xV.e(84), xV.e(204)]).then((() => xV(41764))).then((VV => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: eV,
          textureNameToIndex: xV,
          textureAnimationData: UV
        } = VV;
        return YV ??= (0, JV.j)(xV, UV, eV), YV
      })), UV
    }

    function pV() {
      if (null === YV) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return YV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);