export const id = 160;
export const ids = [159, 160];
export const modules = {
  7615: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      forgetShaderPackActiveHint: () => lr,
      isOtherApiVersion: () => Tr,
      isShaderPackActive: () => er,
      isShaderPackChangePending: () => Br,
      markShaderPackChangePending: () => yr,
      pageShaderPackValidationVersion: () => vr,
      reconcileStoredShaderPackHint: () => Lr,
      removeShaderPack: () => nr,
      replaceShaderPack: () => hr,
      saveShaderPack: () => tr,
      shaderPackNeedsCheck: () => Or,
      storedPackOutcome: () => Kr,
      storedShaderPackFiles: () => mr,
      toStoredShaderPack: () => xr
    });
    var Zr = Qr(6007),
      Wr = Qr(6005),
      ar = Qr(43),
      jr = Qr(4690),
      Ir = Qr(7617),
      fr = Qr(7588);
    const Er = "shaderPackChangePending";
    let pr = null;

    function xr(rr, Sr, Qr) {
      return {
        manifest: rr.manifest,
        files: (0, Zr.w)(rr.files),
        validation: Sr,
        ...Qr && {
          listing: Qr
        }
      }
    }

    function mr(rr) {
      return Object.keys(rr.files).map((Sr => ({
        path: Sr,
        source: rr.files[Sr]
      })))
    }
    let Nr = Promise.resolve();

    function Ur(rr) {
      const Sr = Nr.then(rr);
      return Nr = Sr.catch((() => {})), Sr
    }

    function tr(rr, Sr) {
      return Ur((() => zr(rr, Sr)))
    }

    function hr(rr, Sr, Qr) {
      return Ur((async () => JSON.stringify(await (0, Ir.e)()) === JSON.stringify(rr) && (null === Sr ? (await Yr(), !0) : zr(Sr, Qr))))
    }
    async function zr(rr, Sr) {
      const Qr = await ar.h.setItem(Ir.b, rr);
      return Qr && Xr(rr, Sr), Qr
    }
    async function Yr() {
      await ar.h.removeItem(Ir.b), ar.j.removeItem(jr.b)
    }

    function nr() {
      return Ur(Yr)
    }

    function er(rr, Sr) {
      return "active" === Kr(rr, Sr).kind
    }

    function Kr(rr, Sr) {
      var Qr;
      return null === rr ? {
        kind: "none",
        reason: "nothingStored"
      } : Tr(rr) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) || rr.validation.fromRecheck ? null === Sr ? {
        kind: "none",
        reason: "noCompiler"
      } : Or(rr, Sr) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : rr.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function yr() {
      ar.n.setItem(Er, performance.timeOrigin)
    }

    function Br() {
      return ar.n.getItem(Er) === performance.timeOrigin
    }

    function Tr(rr) {
      return !(0, Wr.i)(rr.manifest.apiVersion)
    }

    function vr(rr) {
      return pr ??= rr.rC((0, fr.shaderPackTextures)()), pr
    }

    function Or(rr, Sr) {
      var Qr;
      return (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.headerVersion) !== vr(Sr)
    }

    function Lr(rr) {
      return Ur((async () => {
        Xr(await (0, Ir.e)(!0), rr)
      }))
    }

    function lr() {
      return Ur((async () => {
        ar.j.removeItem(jr.b)
      }))
    }

    function Xr(rr, Sr) {
      er(rr, Sr) ? ar.j.setItem(jr.b, !0) : ar.j.removeItem(jr.b)
    }
  },
  7588: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      loadShaderPackTextures: () => jr,
      shaderPackTextures: () => Ir
    });
    var Zr = Qr(6007);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Promise.all([Qr.e(85), Qr.e(126)]).then((() => Qr(42330))).then((rr => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Sr,
          textureNameToIndex: Qr,
          textureAnimationData: ar
        } = rr;
        return Wr ??= (0, Zr.k)(Qr, ar, Sr), Wr
      })), ar
    }

    function Ir() {
      if (null === Wr) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);