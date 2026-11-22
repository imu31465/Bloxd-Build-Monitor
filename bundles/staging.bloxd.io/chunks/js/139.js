export const id = 139;
export const ids = [139];
export const modules = {
  41318: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      compilePagePack: () => mk,
      prefetchCompiler: () => rk,
      reconcileHint: () => Pk
    });
    var Dk = ik(6451),
      fk = ik(6498),
      Sk = ik(6477),
      bk = ik(6493);

    function rk() {
      (0, Dk.loadPageShaderPackCompiler)()
    }
    async function Pk() {
      const kk = await (0, Dk.loadPageShaderPackCompiler)();
      await (kk ? (0, fk.reconcileStoredShaderPackHint)(kk) : (0, fk.forgetShaderPackActiveHint)())
    }
    async function mk(kk) {
      const ek = await (0, Dk.loadPageShaderPackCompiler)();
      if (!ek) return {
        status: "none"
      };
      const ik = await (0, bk.b)(kk, ek),
        rk = (0, fk.storedPackOutcome)(ik, ek);
      if ("none" === rk.kind) return {
        status: "none"
      };
      const Pk = ek.B5((0, fk.storedShaderPackFiles)(ik), (0, Sk.shaderPackTextures)());
      if ("blocked" === rk.kind) return {
        status: "blocked",
        messageKey: rk.messageKey,
        variants: 0 === Pk.errors.length ? Pk.variants : null
      };
      if (Pk.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Pk.errors), {
        status: "none"
      };
      const {
        name: mk,
        keepCircleShadows: Mk
      } = ik.manifest;
      return {
        status: "active",
        pack: {
          name: mk,
          variants: Pk.variants,
          keepCircleShadows: !0 === Mk
        }
      }
    }
  },
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
  6493: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk,
      c: () => rk
    });
    var Dk = ik(6498),
      fk = ik(6477),
      Sk = ik(115);
    const bk = 100;
    async function rk(kk, ek) {
      var ik;
      let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ik = navigator.gpu) && void 0 !== ik ? ik : null;
      const bk = kk.B5(ek, (0, fk.shaderPackTextures)());
      if (bk.errors.length > 0) return mk(kk, bk.errors, bk.offInStrict);
      const rk = await async function(kk) {
        if (!kk) return null;
        try {
          const ek = await (0, Sk.t)(kk);
          return ek ? await ek.requestDevice() : null
        } catch (ek) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ek), null
        }
      }(Dk);
      if (!rk) return null;
      let Pk = !1;
      rk.lost.then((() => {
        Pk = !0
      }));
      try {
        const ek = await Promise.all(bk.validationModules.map((ek => async function(kk, ek, ik) {
          ek.pushErrorScope("validation");
          const Dk = ek.createShaderModule({
              code: ik.code
            }),
            fk = ek.popErrorScope(),
            {
              messages: Sk
            } = await Dk.getCompilationInfo(),
            bk = Sk.filter((kk => "error" === kk.type)).map((ek => kk.mapValidationMessage(ik, ek))),
            rk = await fk;
          rk && 0 === bk.length && bk.push({
            file: null,
            line: 0,
            message: rk.message,
            variants: [ik.key]
          });
          return bk
        }(kk, rk, ek))));
        return Pk ? null : mk(kk, kk.uik(ek.flat()), bk.offInStrict)
      } catch (Mk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Mk), null
      } finally {
        rk.destroy()
      }
    }
    async function Pk(kk, ek) {
      var ik;
      if (!(0, Dk.shaderPackNeedsCheck)(kk, ek) || (0, Dk.isOtherApiVersion)(kk)) return kk;
      const fk = await rk(ek, (0, Dk.storedShaderPackFiles)(kk));
      if (!fk) return kk;
      const Sk = !1 === (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) && !kk.validation.fromRecheck,
        bk = {
          ...kk,
          validation: Sk ? fk : {
            ...fk,
            fromRecheck: !0
          }
        };
      return await (0, Dk.replaceShaderPack)(kk, bk, ek) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), bk
    }

    function mk(kk, ek, ik) {
      return {
        headerVersion: (0, Dk.pageShaderPackValidationVersion)(kk),
        ok: 0 === ek.length,
        errors: ek.slice(0, bk),
        moreErrors: Math.max(0, ek.length - bk),
        offInStrict: ik
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);