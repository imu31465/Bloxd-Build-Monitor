export const id = 151;
export const ids = [150, 151];
export const modules = {
  7251: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      forgetShaderPackActiveHint: () => CU,
      isOtherApiVersion: () => WU,
      isShaderPackActive: () => BU,
      isShaderPackChangePending: () => PU,
      markShaderPackChangePending: () => RU,
      pageShaderPackValidationVersion: () => dU,
      reconcileStoredShaderPackHint: () => eU,
      removeShaderPack: () => GU,
      replaceShaderPack: () => tU,
      saveShaderPack: () => aU,
      shaderPackNeedsCheck: () => LU,
      storedPackOutcome: () => ZU,
      storedShaderPackFiles: () => NU,
      toStoredShaderPack: () => YU
    });
    var cU = zU(5608),
      yU = zU(5603),
      QU = zU(42),
      AU = zU(3849),
      FU = zU(7253),
      oU = zU(7219);
    const DU = "shaderPackChangePending";
    let EU = null;

    function YU(UU, XU, zU) {
      return {
        manifest: UU.manifest,
        files: (0, cU.u)(UU.files),
        validation: XU,
        ...zU && {
          listing: zU
        }
      }
    }

    function NU(UU) {
      return Object.keys(UU.files).map((XU => ({
        path: XU,
        source: UU.files[XU]
      })))
    }
    let IU = Promise.resolve();

    function pU(UU) {
      const XU = IU.then(UU);
      return IU = XU.catch((() => {})), XU
    }

    function aU(UU, XU) {
      return pU((() => gU(UU, XU)))
    }

    function tU(UU, XU, zU) {
      return pU((async () => JSON.stringify(await (0, FU.f)()) === JSON.stringify(UU) && (null === XU ? (await kU(), !0) : gU(XU, zU))))
    }
    async function gU(UU, XU) {
      const zU = await QU.g.setItem(FU.e, UU);
      return zU && wU(UU, XU), zU
    }
    async function kU() {
      await QU.g.removeItem(FU.e), QU.k.removeItem(AU.b)
    }

    function GU() {
      return pU(kU)
    }

    function BU(UU, XU) {
      return "active" === ZU(UU, XU).kind
    }

    function ZU(UU, XU) {
      var zU;
      return null === UU ? {
        kind: "none",
        reason: "nothingStored"
      } : WU(UU) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) || UU.validation.fromRecheck ? null === XU ? {
        kind: "none",
        reason: "noCompiler"
      } : LU(UU, XU) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : UU.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function RU() {
      QU.n.setItem(DU, performance.timeOrigin)
    }

    function PU() {
      return QU.n.getItem(DU) === performance.timeOrigin
    }

    function WU(UU) {
      return !(0, yU.i)(UU.manifest.apiVersion)
    }

    function dU(UU) {
      return EU ??= UU.mq((0, oU.shaderPackTextures)()), EU
    }

    function LU(UU, XU) {
      var zU;
      return (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.headerVersion) !== dU(XU)
    }

    function eU(UU) {
      return pU((async () => {
        wU(await (0, FU.f)(!0), UU)
      }))
    }

    function CU() {
      return pU((async () => {
        QU.k.removeItem(AU.b)
      }))
    }

    function wU(UU, XU) {
      BU(UU, XU) ? QU.k.setItem(AU.b, !0) : QU.k.removeItem(AU.b)
    }
  },
  7219: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadShaderPackTextures: () => AU,
      shaderPackTextures: () => FU
    });
    var cU = zU(5608);
    let yU = null,
      QU = null;

    function AU() {
      return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: XU,
          textureNameToIndex: zU,
          textureAnimationData: QU
        } = UU;
        return yU ??= (0, cU.k)(zU, QU, XU), yU
      })), QU
    }

    function FU() {
      if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);