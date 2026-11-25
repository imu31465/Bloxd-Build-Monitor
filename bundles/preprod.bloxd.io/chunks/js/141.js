export const id = 141;
export const ids = [140, 141];
export const modules = {
  7024: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      forgetShaderPackActiveHint: () => hQ,
      isOtherApiVersion: () => dQ,
      isShaderPackActive: () => GQ,
      isShaderPackChangePending: () => vQ,
      markShaderPackChangePending: () => bQ,
      pageShaderPackValidationVersion: () => HQ,
      reconcileStoredShaderPackHint: () => lQ,
      removeShaderPack: () => pQ,
      replaceShaderPack: () => yQ,
      saveShaderPack: () => BQ,
      shaderPackNeedsCheck: () => aQ,
      storedPackOutcome: () => UQ,
      storedShaderPackFiles: () => rQ,
      toStoredShaderPack: () => JQ
    });
    var wQ = XQ(5396),
      qQ = XQ(5394),
      TQ = XQ(43),
      zQ = XQ(3716),
      sQ = XQ(7026),
      FQ = XQ(7002);
    const PQ = "shaderPackChangePending";
    let gQ = null;

    function JQ(QQ, WQ, XQ) {
      return {
        manifest: QQ.manifest,
        files: (0, wQ.w)(QQ.files),
        validation: WQ,
        ...XQ && {
          listing: XQ
        }
      }
    }

    function rQ(QQ) {
      return Object.keys(QQ.files).map((WQ => ({
        path: WQ,
        source: QQ.files[WQ]
      })))
    }
    let IQ = Promise.resolve();

    function jQ(QQ) {
      const WQ = IQ.then(QQ);
      return IQ = WQ.catch((() => {})), WQ
    }

    function BQ(QQ, WQ) {
      return jQ((() => VQ(QQ, WQ)))
    }

    function yQ(QQ, WQ, XQ) {
      return jQ((async () => JSON.stringify(await (0, sQ.f)()) === JSON.stringify(QQ) && (null === WQ ? (await DQ(), !0) : VQ(WQ, XQ))))
    }
    async function VQ(QQ, WQ) {
      const XQ = await TQ.f.setItem(sQ.b, QQ);
      return XQ && iQ(QQ, WQ), XQ
    }
    async function DQ() {
      await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
    }

    function pQ() {
      return jQ(DQ)
    }

    function GQ(QQ, WQ) {
      return "active" === UQ(QQ, WQ).kind
    }

    function UQ(QQ, WQ) {
      var XQ;
      return null === QQ ? {
        kind: "none",
        reason: "nothingStored"
      } : dQ(QQ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
        kind: "none",
        reason: "noCompiler"
      } : aQ(QQ, WQ) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : QQ.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function bQ() {
      TQ.m.setItem(PQ, performance.timeOrigin)
    }

    function vQ() {
      return TQ.m.getItem(PQ) === performance.timeOrigin
    }

    function dQ(QQ) {
      return !(0, qQ.g)(QQ.manifest.apiVersion)
    }

    function HQ(QQ) {
      return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
    }

    function aQ(QQ, WQ) {
      var XQ;
      return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
    }

    function lQ(QQ) {
      return jQ((async () => {
        iQ(await (0, sQ.f)(!0), QQ)
      }))
    }

    function hQ() {
      return jQ((async () => {
        TQ.i.removeItem(zQ.c)
      }))
    }

    function iQ(QQ, WQ) {
      GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
    }
  },
  7002: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      loadShaderPackTextures: () => zQ,
      shaderPackTextures: () => sQ
    });
    var wQ = XQ(5396);
    let qQ = null,
      TQ = null;

    function zQ() {
      return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: WQ,
          textureNameToIndex: XQ,
          textureAnimationData: TQ
        } = QQ;
        return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
      })), TQ
    }

    function sQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);