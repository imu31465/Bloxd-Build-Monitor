export const id = 136;
export const ids = [135, 136];
export const modules = {
  6498: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      forgetShaderPackActiveHint: () => Fk,
      isOtherApiVersion: () => jk,
      isShaderPackActive: () => Yk,
      isShaderPackChangePending: () => Ak,
      markShaderPackChangePending: () => Ck,
      pageShaderPackValidationVersion: () => sk,
      reconcileStoredShaderPackHint: () => Vk,
      removeShaderPack: () => yk,
      replaceShaderPack: () => wk,
      saveShaderPack: () => Hk,
      shaderPackNeedsCheck: () => dk,
      storedPackOutcome: () => Lk,
      storedShaderPackFiles: () => xk,
      toStoredShaderPack: () => Kk
    });
    var Dk = ik(4965),
      fk = ik(4961),
      Sk = ik(38),
      bk = ik(3419),
      rk = ik(6505),
      Pk = ik(6477);
    const mk = "shaderPackChangePending";
    let Mk = null;

    function Kk(kk, ek, ik) {
      return {
        manifest: kk.manifest,
        files: (0, Dk.t)(kk.files),
        validation: ek,
        ...ik && {
          listing: ik
        }
      }
    }

    function xk(kk) {
      return Object.keys(kk.files).map((ek => ({
        path: ek,
        source: kk.files[ek]
      })))
    }
    let nk = Promise.resolve();

    function Uk(kk) {
      const ek = nk.then(kk);
      return nk = ek.catch((() => {})), ek
    }

    function Hk(kk, ek) {
      return Uk((() => lk(kk, ek)))
    }

    function wk(kk, ek, ik) {
      return Uk((async () => JSON.stringify(await (0, rk.f)()) === JSON.stringify(kk) && (null === ek ? (await pk(), !0) : lk(ek, ik))))
    }
    async function lk(kk, ek) {
      const ik = await Sk.e.setItem(rk.c, kk);
      return ik && uk(kk, ek), ik
    }
    async function pk() {
      await Sk.e.removeItem(rk.c), Sk.f.removeItem(bk.e)
    }

    function yk() {
      return Uk(pk)
    }

    function Yk(kk, ek) {
      return "active" === Lk(kk, ek).kind
    }

    function Lk(kk, ek) {
      var ik;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : jk(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) || kk.validation.fromRecheck ? null === ek ? {
        kind: "none",
        reason: "noCompiler"
      } : dk(kk, ek) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : kk.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Ck() {
      Sk.g.setItem(mk, performance.timeOrigin)
    }

    function Ak() {
      return Sk.g.getItem(mk) === performance.timeOrigin
    }

    function jk(kk) {
      return !(0, fk.g)(kk.manifest.apiVersion)
    }

    function sk(kk) {
      return Mk ??= kk.jF((0, Pk.shaderPackTextures)()), Mk
    }

    function dk(kk, ek) {
      var ik;
      return (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.headerVersion) !== sk(ek)
    }

    function Vk(kk) {
      return Uk((async () => {
        uk(await (0, rk.f)(!0), kk)
      }))
    }

    function Fk() {
      return Uk((async () => {
        Sk.f.removeItem(bk.e)
      }))
    }

    function uk(kk, ek) {
      Yk(kk, ek) ? Sk.f.setItem(bk.e, !0) : Sk.f.removeItem(bk.e)
    }
  },
  6477: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      loadShaderPackTextures: () => bk,
      shaderPackTextures: () => rk
    });
    var Dk = ik(4965);
    let fk = null,
      Sk = null;

    function bk() {
      return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ek,
          textureNameToIndex: ik,
          textureAnimationData: Sk
        } = kk;
        return fk ??= (0, Dk.h)(ik, Sk, ek), fk
      })), Sk
    }

    function rk() {
      if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return fk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);