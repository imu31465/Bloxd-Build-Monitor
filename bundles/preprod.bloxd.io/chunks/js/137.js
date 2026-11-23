export const id = 137;
export const ids = [136, 137];
export const modules = {
  6658: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      forgetShaderPackActiveHint: () => KC,
      isOtherApiVersion: () => iC,
      isShaderPackActive: () => AC,
      isShaderPackChangePending: () => IC,
      markShaderPackChangePending: () => JC,
      pageShaderPackValidationVersion: () => vC,
      reconcileStoredShaderPackHint: () => hC,
      removeShaderPack: () => RC,
      replaceShaderPack: () => pC,
      saveShaderPack: () => SC,
      shaderPackNeedsCheck: () => eC,
      storedPackOutcome: () => xC,
      storedShaderPackFiles: () => NC,
      toStoredShaderPack: () => WC
    });
    var QC = ZC(5002),
      wC = ZC(4998),
      bC = ZC(38),
      nC = ZC(3432),
      fC = ZC(6660),
      oC = ZC(6630);
    const qC = "shaderPackChangePending";
    let FC = null;

    function WC(CC, zC, ZC) {
      return {
        manifest: CC.manifest,
        files: (0, QC.w)(CC.files),
        validation: zC,
        ...ZC && {
          listing: ZC
        }
      }
    }

    function NC(CC) {
      return Object.keys(CC.files).map((zC => ({
        path: zC,
        source: CC.files[zC]
      })))
    }
    let MC = Promise.resolve();

    function gC(CC) {
      const zC = MC.then(CC);
      return MC = zC.catch((() => {})), zC
    }

    function SC(CC, zC) {
      return gC((() => PC(CC, zC)))
    }

    function pC(CC, zC, ZC) {
      return gC((async () => JSON.stringify(await (0, fC.e)()) === JSON.stringify(CC) && (null === zC ? (await GC(), !0) : PC(zC, ZC))))
    }
    async function PC(CC, zC) {
      const ZC = await bC.g.setItem(fC.c, CC);
      return ZC && YC(CC, zC), ZC
    }
    async function GC() {
      await bC.g.removeItem(fC.c), bC.i.removeItem(nC.b)
    }

    function RC() {
      return gC(GC)
    }

    function AC(CC, zC) {
      return "active" === xC(CC, zC).kind
    }

    function xC(CC, zC) {
      var ZC;
      return null === CC ? {
        kind: "none",
        reason: "nothingStored"
      } : iC(CC) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) || CC.validation.fromRecheck ? null === zC ? {
        kind: "none",
        reason: "noCompiler"
      } : eC(CC, zC) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : CC.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function JC() {
      bC.k.setItem(qC, performance.timeOrigin)
    }

    function IC() {
      return bC.k.getItem(qC) === performance.timeOrigin
    }

    function iC(CC) {
      return !(0, wC.i)(CC.manifest.apiVersion)
    }

    function vC(CC) {
      return FC ??= CC.Rm((0, oC.shaderPackTextures)()), FC
    }

    function eC(CC, zC) {
      var ZC;
      return (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.headerVersion) !== vC(zC)
    }

    function hC(CC) {
      return gC((async () => {
        YC(await (0, fC.e)(!0), CC)
      }))
    }

    function KC() {
      return gC((async () => {
        bC.i.removeItem(nC.b)
      }))
    }

    function YC(CC, zC) {
      AC(CC, zC) ? bC.i.setItem(nC.b, !0) : bC.i.removeItem(nC.b)
    }
  },
  6630: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      loadShaderPackTextures: () => nC,
      shaderPackTextures: () => fC
    });
    var QC = ZC(5002);
    let wC = null,
      bC = null;

    function nC() {
      return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zC,
          textureNameToIndex: ZC,
          textureAnimationData: bC
        } = CC;
        return wC ??= (0, QC.k)(ZC, bC, zC), wC
      })), bC
    }

    function fC() {
      if (null === wC) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return wC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);