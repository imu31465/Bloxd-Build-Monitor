export const id = 137;
export const ids = [136, 137];
export const modules = {
  6844: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      forgetShaderPackActiveHint: () => cS,
      isOtherApiVersion: () => ZS,
      isShaderPackActive: () => QS,
      isShaderPackChangePending: () => hS,
      markShaderPackChangePending: () => wS,
      pageShaderPackValidationVersion: () => JS,
      reconcileStoredShaderPackHint: () => dS,
      removeShaderPack: () => PS,
      replaceShaderPack: () => GS,
      saveShaderPack: () => jS,
      shaderPackNeedsCheck: () => OS,
      storedPackOutcome: () => DS,
      storedShaderPackFiles: () => kS,
      toStoredShaderPack: () => fS
    });
    var tS = gS(5221),
      bS = gS(5212),
      XS = gS(45),
      xS = gS(3591),
      NS = gS(6848),
      qS = gS(6824);
    const uS = "shaderPackChangePending";
    let IS = null;

    function fS(SS, HS, gS) {
      return {
        manifest: SS.manifest,
        files: (0, tS.v)(SS.files),
        validation: HS,
        ...gS && {
          listing: gS
        }
      }
    }

    function kS(SS) {
      return Object.keys(SS.files).map((HS => ({
        path: HS,
        source: SS.files[HS]
      })))
    }
    let aS = Promise.resolve();

    function KS(SS) {
      const HS = aS.then(SS);
      return aS = HS.catch((() => {})), HS
    }

    function jS(SS, HS) {
      return KS((() => CS(SS, HS)))
    }

    function GS(SS, HS, gS) {
      return KS((async () => JSON.stringify(await (0, NS.f)()) === JSON.stringify(SS) && (null === HS ? (await nS(), !0) : CS(HS, gS))))
    }
    async function CS(SS, HS) {
      const gS = await XS.e.setItem(NS.d, SS);
      return gS && vS(SS, HS), gS
    }
    async function nS() {
      await XS.e.removeItem(NS.d), XS.g.removeItem(xS.d)
    }

    function PS() {
      return KS(nS)
    }

    function QS(SS, HS) {
      return "active" === DS(SS, HS).kind
    }

    function DS(SS, HS) {
      var gS;
      return null === SS ? {
        kind: "none",
        reason: "nothingStored"
      } : ZS(SS) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) || SS.validation.fromRecheck ? null === HS ? {
        kind: "none",
        reason: "noCompiler"
      } : OS(SS, HS) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : SS.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wS() {
      XS.h.setItem(uS, performance.timeOrigin)
    }

    function hS() {
      return XS.h.getItem(uS) === performance.timeOrigin
    }

    function ZS(SS) {
      return !(0, bS.j)(SS.manifest.apiVersion)
    }

    function JS(SS) {
      return IS ??= SS.dL((0, qS.shaderPackTextures)()), IS
    }

    function OS(SS, HS) {
      var gS;
      return (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.headerVersion) !== JS(HS)
    }

    function dS(SS) {
      return KS((async () => {
        vS(await (0, NS.f)(!0), SS)
      }))
    }

    function cS() {
      return KS((async () => {
        XS.g.removeItem(xS.d)
      }))
    }

    function vS(SS, HS) {
      QS(SS, HS) ? XS.g.setItem(xS.d, !0) : XS.g.removeItem(xS.d)
    }
  },
  6824: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      loadShaderPackTextures: () => xS,
      shaderPackTextures: () => NS
    });
    var tS = gS(5221);
    let bS = null,
      XS = null;

    function xS() {
      return XS ??= Promise.all([gS.e(72), gS.e(188)]).then((() => gS(40526))).then((SS => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: HS,
          textureNameToIndex: gS,
          textureAnimationData: XS
        } = SS;
        return bS ??= (0, tS.j)(gS, XS, HS), bS
      })), XS
    }

    function NS() {
      if (null === bS) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return bS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);