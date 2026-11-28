export const id = 160;
export const ids = [159, 160];
export const modules = {
  7598: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      forgetShaderPackActiveHint: () => Sd,
      isOtherApiVersion: () => Jd,
      isShaderPackActive: () => Yd,
      isShaderPackChangePending: () => Ed,
      markShaderPackChangePending: () => wd,
      pageShaderPackValidationVersion: () => Ud,
      reconcileStoredShaderPackHint: () => Bd,
      removeShaderPack: () => pd,
      replaceShaderPack: () => yd,
      saveShaderPack: () => Hd,
      shaderPackNeedsCheck: () => xd,
      storedPackOutcome: () => gd,
      storedShaderPackFiles: () => od,
      toStoredShaderPack: () => td
    });
    var Wd = md(5954),
      Fd = md(5951),
      Rd = md(46),
      Xd = md(4674),
      Kd = md(7602),
      hd = md(7583);
    const vd = "shaderPackChangePending";
    let Qd = null;

    function td(dd, Od, md) {
      return {
        manifest: dd.manifest,
        files: (0, Wd.v)(dd.files),
        validation: Od,
        ...md && {
          listing: md
        }
      }
    }

    function od(dd) {
      return Object.keys(dd.files).map((Od => ({
        path: Od,
        source: dd.files[Od]
      })))
    }
    let Nd = Promise.resolve();

    function qd(dd) {
      const Od = Nd.then(dd);
      return Nd = Od.catch((() => {})), Od
    }

    function Hd(dd, Od) {
      return qd((() => bd(dd, Od)))
    }

    function yd(dd, Od, md) {
      return qd((async () => JSON.stringify(await (0, Kd.g)()) === JSON.stringify(dd) && (null === Od ? (await Td(), !0) : bd(Od, md))))
    }
    async function bd(dd, Od) {
      const md = await Rd.h.setItem(Kd.e, dd);
      return md && sd(dd, Od), md
    }
    async function Td() {
      await Rd.h.removeItem(Kd.e), Rd.k.removeItem(Xd.d)
    }

    function pd() {
      return qd(Td)
    }

    function Yd(dd, Od) {
      return "active" === gd(dd, Od).kind
    }

    function gd(dd, Od) {
      var md;
      return null === dd ? {
        kind: "none",
        reason: "nothingStored"
      } : Jd(dd) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (md = dd.validation) || void 0 === md ? void 0 : md.ok) || dd.validation.fromRecheck ? null === Od ? {
        kind: "none",
        reason: "noCompiler"
      } : xd(dd, Od) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : dd.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wd() {
      Rd.o.setItem(vd, performance.timeOrigin)
    }

    function Ed() {
      return Rd.o.getItem(vd) === performance.timeOrigin
    }

    function Jd(dd) {
      return !(0, Fd.k)(dd.manifest.apiVersion)
    }

    function Ud(dd) {
      return Qd ??= dd.HV((0, hd.shaderPackTextures)()), Qd
    }

    function xd(dd, Od) {
      var md;
      return (null === (md = dd.validation) || void 0 === md ? void 0 : md.headerVersion) !== Ud(Od)
    }

    function Bd(dd) {
      return qd((async () => {
        sd(await (0, Kd.g)(!0), dd)
      }))
    }

    function Sd() {
      return qd((async () => {
        Rd.k.removeItem(Xd.d)
      }))
    }

    function sd(dd, Od) {
      Yd(dd, Od) ? Rd.k.setItem(Xd.d, !0) : Rd.k.removeItem(Xd.d)
    }
  },
  7583: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      loadShaderPackTextures: () => Xd,
      shaderPackTextures: () => Kd
    });
    var Wd = md(5954);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Rd ??= Promise.all([md.e(85), md.e(126)]).then((() => md(42438))).then((dd => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Od,
          textureNameToIndex: md,
          textureAnimationData: Rd
        } = dd;
        return Fd ??= (0, Wd.h)(md, Rd, Od), Fd
      })), Rd
    }

    function Kd() {
      if (null === Fd) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Fd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);