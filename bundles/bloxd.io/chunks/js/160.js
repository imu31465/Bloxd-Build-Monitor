export const id = 160;
export const ids = [159, 160];
export const modules = {
  7656: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      forgetShaderPackActiveHint: () => HW,
      isOtherApiVersion: () => yW,
      isShaderPackActive: () => MW,
      isShaderPackChangePending: () => YW,
      markShaderPackChangePending: () => SW,
      pageShaderPackValidationVersion: () => TW,
      reconcileStoredShaderPackHint: () => hW,
      removeShaderPack: () => sW,
      replaceShaderPack: () => jW,
      saveShaderPack: () => bW,
      shaderPackNeedsCheck: () => JW,
      storedPackOutcome: () => KW,
      storedShaderPackFiles: () => xW,
      toStoredShaderPack: () => ZW
    });
    var mW = OW(5970),
      EW = OW(5961),
      NW = OW(39),
      PW = OW(4666),
      LW = OW(7659),
      cW = OW(7637);
    const wW = "shaderPackChangePending";
    let tW = null;

    function ZW(WW, iW, OW) {
      return {
        manifest: WW.manifest,
        files: (0, mW.A)(WW.files),
        validation: iW,
        ...OW && {
          listing: OW
        }
      }
    }

    function xW(WW) {
      return Object.keys(WW.files).map((iW => ({
        path: iW,
        source: WW.files[iW]
      })))
    }
    let lW = Promise.resolve();

    function AW(WW) {
      const iW = lW.then(WW);
      return lW = iW.catch((() => {})), iW
    }

    function bW(WW, iW) {
      return AW((() => UW(WW, iW)))
    }

    function jW(WW, iW, OW) {
      return AW((async () => JSON.stringify(await (0, LW.g)()) === JSON.stringify(WW) && (null === iW ? (await kW(), !0) : UW(iW, OW))))
    }
    async function UW(WW, iW) {
      const OW = await NW.f.setItem(LW.c, WW);
      return OW && nW(WW, iW), OW
    }
    async function kW() {
      await NW.f.removeItem(LW.c), NW.i.removeItem(PW.b)
    }

    function sW() {
      return AW(kW)
    }

    function MW(WW, iW) {
      return "active" === KW(WW, iW).kind
    }

    function KW(WW, iW) {
      var OW;
      return null === WW ? {
        kind: "none",
        reason: "nothingStored"
      } : yW(WW) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) || WW.validation.fromRecheck ? null === iW ? {
        kind: "none",
        reason: "noCompiler"
      } : JW(WW, iW) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : WW.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function SW() {
      NW.j.setItem(wW, performance.timeOrigin)
    }

    function YW() {
      return NW.j.getItem(wW) === performance.timeOrigin
    }

    function yW(WW) {
      return !(0, EW.g)(WW.manifest.apiVersion)
    }

    function TW(WW) {
      return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
    }

    function JW(WW, iW) {
      var OW;
      return (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.headerVersion) !== TW(iW)
    }

    function hW(WW) {
      return AW((async () => {
        nW(await (0, LW.g)(!0), WW)
      }))
    }

    function HW() {
      return AW((async () => {
        NW.i.removeItem(PW.b)
      }))
    }

    function nW(WW, iW) {
      MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
    }
  },
  7637: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      loadShaderPackTextures: () => PW,
      shaderPackTextures: () => LW
    });
    var mW = OW(5970);
    let EW = null,
      NW = null;

    function PW() {
      return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: iW,
          textureNameToIndex: OW,
          textureAnimationData: NW
        } = WW;
        return EW ??= (0, mW.o)(OW, NW, iW), EW
      })), NW
    }

    function LW() {
      if (null === EW) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return EW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);