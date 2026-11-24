export const id = 137;
export const ids = [136, 137];
export const modules = {
  6600: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      forgetShaderPackActiveHint: () => bm,
      isOtherApiVersion: () => cm,
      isShaderPackActive: () => Km,
      isShaderPackChangePending: () => Jm,
      markShaderPackChangePending: () => nm,
      pageShaderPackValidationVersion: () => zm,
      reconcileStoredShaderPackHint: () => km,
      removeShaderPack: () => Im,
      replaceShaderPack: () => qm,
      saveShaderPack: () => Ym,
      shaderPackNeedsCheck: () => Zm,
      storedPackOutcome: () => Qm,
      storedShaderPackFiles: () => Em,
      toStoredShaderPack: () => pm
    });
    var hm = fm(4989),
      Am = fm(4985),
      am = fm(37),
      xm = fm(3461),
      wm = fm(6609),
      Dm = fm(6578);
    const im = "shaderPackChangePending";
    let Rm = null;

    function pm(mm, Tm, fm) {
      return {
        manifest: mm.manifest,
        files: (0, hm.r)(mm.files),
        validation: Tm,
        ...fm && {
          listing: fm
        }
      }
    }

    function Em(mm) {
      return Object.keys(mm.files).map((Tm => ({
        path: Tm,
        source: mm.files[Tm]
      })))
    }
    let om = Promise.resolve();

    function Om(mm) {
      const Tm = om.then(mm);
      return om = Tm.catch((() => {})), Tm
    }

    function Ym(mm, Tm) {
      return Om((() => jm(mm, Tm)))
    }

    function qm(mm, Tm, fm) {
      return Om((async () => JSON.stringify(await (0, wm.e)()) === JSON.stringify(mm) && (null === Tm ? (await Vm(), !0) : jm(Tm, fm))))
    }
    async function jm(mm, Tm) {
      const fm = await am.e.setItem(wm.c, mm);
      return fm && Sm(mm, Tm), fm
    }
    async function Vm() {
      await am.e.removeItem(wm.c), am.g.removeItem(xm.b)
    }

    function Im() {
      return Om(Vm)
    }

    function Km(mm, Tm) {
      return "active" === Qm(mm, Tm).kind
    }

    function Qm(mm, Tm) {
      var fm;
      return null === mm ? {
        kind: "none",
        reason: "nothingStored"
      } : cm(mm) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.ok) || mm.validation.fromRecheck ? null === Tm ? {
        kind: "none",
        reason: "noCompiler"
      } : Zm(mm, Tm) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : mm.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function nm() {
      am.k.setItem(im, performance.timeOrigin)
    }

    function Jm() {
      return am.k.getItem(im) === performance.timeOrigin
    }

    function cm(mm) {
      return !(0, Am.e)(mm.manifest.apiVersion)
    }

    function zm(mm) {
      return Rm ??= mm.mG((0, Dm.shaderPackTextures)()), Rm
    }

    function Zm(mm, Tm) {
      var fm;
      return (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.headerVersion) !== zm(Tm)
    }

    function km(mm) {
      return Om((async () => {
        Sm(await (0, wm.e)(!0), mm)
      }))
    }

    function bm() {
      return Om((async () => {
        am.g.removeItem(xm.b)
      }))
    }

    function Sm(mm, Tm) {
      Km(mm, Tm) ? am.g.setItem(xm.b, !0) : am.g.removeItem(xm.b)
    }
  },
  6578: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      loadShaderPackTextures: () => xm,
      shaderPackTextures: () => wm
    });
    var hm = fm(4989);
    let Am = null,
      am = null;

    function xm() {
      return am ??= Promise.all([fm.e(72), fm.e(188)]).then((() => fm(40597))).then((mm => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Tm,
          textureNameToIndex: fm,
          textureAnimationData: am
        } = mm;
        return Am ??= (0, hm.g)(fm, am, Tm), Am
      })), am
    }

    function wm() {
      if (null === Am) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);