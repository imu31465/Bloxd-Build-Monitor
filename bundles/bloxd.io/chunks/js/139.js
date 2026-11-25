export const id = 139;
export const ids = [138, 139];
export const modules = {
  6800: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      forgetShaderPackActiveHint: () => pB,
      isOtherApiVersion: () => wB,
      isShaderPackActive: () => dB,
      isShaderPackChangePending: () => sB,
      markShaderPackChangePending: () => QB,
      pageShaderPackValidationVersion: () => OB,
      reconcileStoredShaderPackHint: () => iB,
      removeShaderPack: () => WB,
      replaceShaderPack: () => qB,
      saveShaderPack: () => gB,
      shaderPackNeedsCheck: () => YB,
      storedPackOutcome: () => CB,
      storedShaderPackFiles: () => zB,
      toStoredShaderPack: () => hB
    });
    var TB = ZB(5210),
      JB = ZB(5204),
      oB = ZB(36),
      GB = ZB(3640),
      vB = ZB(6808),
      kB = ZB(6778);
    const cB = "shaderPackChangePending";
    let nB = null;

    function hB(BB, IB, ZB) {
      return {
        manifest: BB.manifest,
        files: (0, TB.y)(BB.files),
        validation: IB,
        ...ZB && {
          listing: ZB
        }
      }
    }

    function zB(BB) {
      return Object.keys(BB.files).map((IB => ({
        path: IB,
        source: BB.files[IB]
      })))
    }
    let FB = Promise.resolve();

    function NB(BB) {
      const IB = FB.then(BB);
      return FB = IB.catch((() => {})), IB
    }

    function gB(BB, IB) {
      return NB((() => yB(BB, IB)))
    }

    function qB(BB, IB, ZB) {
      return NB((async () => JSON.stringify(await (0, vB.i)()) === JSON.stringify(BB) && (null === IB ? (await UB(), !0) : yB(IB, ZB))))
    }
    async function yB(BB, IB) {
      const ZB = await oB.i.setItem(vB.e, BB);
      return ZB && aB(BB, IB), ZB
    }
    async function UB() {
      await oB.i.removeItem(vB.e), oB.m.removeItem(GB.e)
    }

    function WB() {
      return NB(UB)
    }

    function dB(BB, IB) {
      return "active" === CB(BB, IB).kind
    }

    function CB(BB, IB) {
      var ZB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : wB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.ok) || BB.validation.fromRecheck ? null === IB ? {
        kind: "none",
        reason: "noCompiler"
      } : YB(BB, IB) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : BB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function QB() {
      oB.n.setItem(cB, performance.timeOrigin)
    }

    function sB() {
      return oB.n.getItem(cB) === performance.timeOrigin
    }

    function wB(BB) {
      return !(0, JB.g)(BB.manifest.apiVersion)
    }

    function OB(BB) {
      return nB ??= BB.rM((0, kB.shaderPackTextures)()), nB
    }

    function YB(BB, IB) {
      var ZB;
      return (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.headerVersion) !== OB(IB)
    }

    function iB(BB) {
      return NB((async () => {
        aB(await (0, vB.i)(!0), BB)
      }))
    }

    function pB() {
      return NB((async () => {
        oB.m.removeItem(GB.e)
      }))
    }

    function aB(BB, IB) {
      dB(BB, IB) ? oB.m.setItem(GB.e, !0) : oB.m.removeItem(GB.e)
    }
  },
  6778: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      loadShaderPackTextures: () => GB,
      shaderPackTextures: () => vB
    });
    var TB = ZB(5210);
    let JB = null,
      oB = null;

    function GB() {
      return oB ??= Promise.all([ZB.e(73), ZB.e(190)]).then((() => ZB(40534))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: IB,
          textureNameToIndex: ZB,
          textureAnimationData: oB
        } = BB;
        return JB ??= (0, TB.l)(ZB, oB, IB), JB
      })), oB
    }

    function vB() {
      if (null === JB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return JB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);