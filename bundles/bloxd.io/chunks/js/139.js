export const id = 139;
export const ids = [138, 139];
export const modules = {
  6601: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      forgetShaderPackActiveHint: () => oB,
      isOtherApiVersion: () => EB,
      isShaderPackActive: () => gB,
      isShaderPackChangePending: () => MB,
      markShaderPackChangePending: () => SB,
      pageShaderPackValidationVersion: () => iB,
      reconcileStoredShaderPackHint: () => fB,
      removeShaderPack: () => LB,
      replaceShaderPack: () => yB,
      saveShaderPack: () => mB,
      shaderPackNeedsCheck: () => qB,
      storedPackOutcome: () => tB,
      storedShaderPackFiles: () => rB,
      toStoredShaderPack: () => pB
    });
    var QB = zB(5120),
      nB = zB(5115),
      dB = zB(41),
      IB = zB(3572),
      NB = zB(6606),
      uB = zB(6585);
    const UB = "shaderPackChangePending";
    let aB = null;

    function pB(BB, jB, zB) {
      return {
        manifest: BB.manifest,
        files: (0, QB.w)(BB.files),
        validation: jB,
        ...zB && {
          listing: zB
        }
      }
    }

    function rB(BB) {
      return Object.keys(BB.files).map((jB => ({
        path: jB,
        source: BB.files[jB]
      })))
    }
    let sB = Promise.resolve();

    function JB(BB) {
      const jB = sB.then(BB);
      return sB = jB.catch((() => {})), jB
    }

    function mB(BB, jB) {
      return JB((() => kB(BB, jB)))
    }

    function yB(BB, jB, zB) {
      return JB((async () => JSON.stringify(await (0, NB.h)()) === JSON.stringify(BB) && (null === jB ? (await GB(), !0) : kB(jB, zB))))
    }
    async function kB(BB, jB) {
      const zB = await dB.g.setItem(NB.d, BB);
      return zB && HB(BB, jB), zB
    }
    async function GB() {
      await dB.g.removeItem(NB.d), dB.j.removeItem(IB.e)
    }

    function LB() {
      return JB(GB)
    }

    function gB(BB, jB) {
      return "active" === tB(BB, jB).kind
    }

    function tB(BB, jB) {
      var zB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : EB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.ok) || BB.validation.fromRecheck ? null === jB ? {
        kind: "none",
        reason: "noCompiler"
      } : qB(BB, jB) ? {
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

    function SB() {
      dB.k.setItem(UB, performance.timeOrigin)
    }

    function MB() {
      return dB.k.getItem(UB) === performance.timeOrigin
    }

    function EB(BB) {
      return !(0, nB.k)(BB.manifest.apiVersion)
    }

    function iB(BB) {
      return aB ??= BB.ZF((0, uB.shaderPackTextures)()), aB
    }

    function qB(BB, jB) {
      var zB;
      return (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.headerVersion) !== iB(jB)
    }

    function fB(BB) {
      return JB((async () => {
        HB(await (0, NB.h)(!0), BB)
      }))
    }

    function oB() {
      return JB((async () => {
        dB.j.removeItem(IB.e)
      }))
    }

    function HB(BB, jB) {
      gB(BB, jB) ? dB.j.setItem(IB.e, !0) : dB.j.removeItem(IB.e)
    }
  },
  6585: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      loadShaderPackTextures: () => IB,
      shaderPackTextures: () => NB
    });
    var QB = zB(5120);
    let nB = null,
      dB = null;

    function IB() {
      return dB ??= Promise.all([zB.e(73), zB.e(190)]).then((() => zB(40588))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: jB,
          textureNameToIndex: zB,
          textureAnimationData: dB
        } = BB;
        return nB ??= (0, QB.j)(zB, dB, jB), nB
      })), dB
    }

    function NB() {
      if (null === nB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return nB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);