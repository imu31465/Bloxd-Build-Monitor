export const id = 160;
export const ids = [159, 160];
export const modules = {
  7800: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      forgetShaderPackActiveHint: () => bR,
      isOtherApiVersion: () => BR,
      isShaderPackActive: () => AR,
      isShaderPackChangePending: () => MR,
      markShaderPackChangePending: () => XR,
      pageShaderPackValidationVersion: () => lR,
      reconcileStoredShaderPackHint: () => gR,
      removeShaderPack: () => WR,
      replaceShaderPack: () => LR,
      saveShaderPack: () => aR,
      shaderPackNeedsCheck: () => pR,
      storedPackOutcome: () => CR,
      storedShaderPackFiles: () => wR,
      toStoredShaderPack: () => KR
    });
    var yR = GR(6084),
      tR = GR(6080),
      uR = GR(46),
      ZR = GR(4776),
      qR = GR(7802),
      iR = GR(7773);
    const fR = "shaderPackChangePending";
    let VR = null;

    function KR(RR, JR, GR) {
      return {
        manifest: RR.manifest,
        files: (0, yR.x)(RR.files),
        validation: JR,
        ...GR && {
          listing: GR
        }
      }
    }

    function wR(RR) {
      return Object.keys(RR.files).map((JR => ({
        path: JR,
        source: RR.files[JR]
      })))
    }
    let rR = Promise.resolve();

    function eR(RR) {
      const JR = rR.then(RR);
      return rR = JR.catch((() => {})), JR
    }

    function aR(RR, JR) {
      return eR((() => nR(RR, JR)))
    }

    function LR(RR, JR, GR) {
      return eR((async () => JSON.stringify(await (0, qR.d)()) === JSON.stringify(RR) && (null === JR ? (await UR(), !0) : nR(JR, GR))))
    }
    async function nR(RR, JR) {
      const GR = await uR.g.setItem(qR.c, RR);
      return GR && vR(RR, JR), GR
    }
    async function UR() {
      await uR.g.removeItem(qR.c), uR.i.removeItem(ZR.e)
    }

    function WR() {
      return eR(UR)
    }

    function AR(RR, JR) {
      return "active" === CR(RR, JR).kind
    }

    function CR(RR, JR) {
      var GR;
      return null === RR ? {
        kind: "none",
        reason: "nothingStored"
      } : BR(RR) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.ok) || RR.validation.fromRecheck ? null === JR ? {
        kind: "none",
        reason: "noCompiler"
      } : pR(RR, JR) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : RR.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function XR() {
      uR.k.setItem(fR, performance.timeOrigin)
    }

    function MR() {
      return uR.k.getItem(fR) === performance.timeOrigin
    }

    function BR(RR) {
      return !(0, tR.i)(RR.manifest.apiVersion)
    }

    function lR(RR) {
      return VR ??= RR.iH((0, iR.shaderPackTextures)()), VR
    }

    function pR(RR, JR) {
      var GR;
      return (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.headerVersion) !== lR(JR)
    }

    function gR(RR) {
      return eR((async () => {
        vR(await (0, qR.d)(!0), RR)
      }))
    }

    function bR() {
      return eR((async () => {
        uR.i.removeItem(ZR.e)
      }))
    }

    function vR(RR, JR) {
      AR(RR, JR) ? uR.i.setItem(ZR.e, !0) : uR.i.removeItem(ZR.e)
    }
  },
  7773: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      loadShaderPackTextures: () => ZR,
      shaderPackTextures: () => qR
    });
    var yR = GR(6084);
    let tR = null,
      uR = null;

    function ZR() {
      return uR ??= Promise.all([GR.e(85), GR.e(126)]).then((() => GR(42031))).then((RR => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: JR,
          textureNameToIndex: GR,
          textureAnimationData: uR
        } = RR;
        return tR ??= (0, yR.j)(GR, uR, JR), tR
      })), uR
    }

    function qR() {
      if (null === tR) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return tR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);