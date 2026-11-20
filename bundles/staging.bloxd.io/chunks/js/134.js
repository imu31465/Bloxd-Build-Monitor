export const id = 134;
export const ids = [134];
export const modules = {
  41165: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      compilePagePack: () => dk,
      prefetchCompiler: () => bk,
      reconcileHint: () => wk
    });
    var Rk = Bk(6316),
      tk = Bk(6358),
      ak = Bk(6340),
      Xk = Bk(6356);

    function bk() {
      (0, Rk.loadPageShaderPackCompiler)()
    }
    async function wk() {
      const kk = await (0, Rk.loadPageShaderPackCompiler)();
      await (kk ? (0, tk.reconcileStoredShaderPackHint)(kk) : (0, tk.forgetShaderPackActiveHint)())
    }
    async function dk(kk) {
      const Fk = await (0, Rk.loadPageShaderPackCompiler)();
      if (!Fk) return {
        status: "none"
      };
      const Bk = await (0, Xk.d)(kk, Fk),
        bk = (0, tk.storedPackOutcome)(Bk, Fk);
      if ("none" === bk.kind) return {
        status: "none"
      };
      const wk = Fk.N7((0, tk.storedShaderPackFiles)(Bk), (0, ak.shaderPackTextures)());
      if ("blocked" === bk.kind) return {
        status: "blocked",
        messageKey: bk.messageKey,
        variants: 0 === wk.errors.length ? wk.variants : null
      };
      if (wk.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", wk.errors), {
        status: "none"
      };
      const {
        name: dk,
        keepCircleShadows: sk
      } = Bk.manifest;
      return {
        status: "active",
        pack: {
          name: dk,
          variants: wk.variants,
          keepCircleShadows: !0 === sk
        }
      }
    }
  },
  6358: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      forgetShaderPackActiveHint: () => uk,
      isOtherApiVersion: () => Ek,
      isShaderPackActive: () => ik,
      isShaderPackChangePending: () => Ok,
      markShaderPackChangePending: () => Lk,
      pageShaderPackValidationVersion: () => Sk,
      reconcileStoredShaderPackHint: () => Hk,
      removeShaderPack: () => vk,
      replaceShaderPack: () => fk,
      saveShaderPack: () => yk,
      shaderPackNeedsCheck: () => Nk,
      storedPackOutcome: () => Yk,
      storedShaderPackFiles: () => Jk,
      toStoredShaderPack: () => Vk
    });
    var Rk = Bk(6289),
      tk = Bk(6299),
      ak = Bk(42),
      Xk = Bk(3255),
      bk = Bk(6361),
      wk = Bk(6340);
    const dk = "shaderPackChangePending";
    let sk = null;

    function Vk(kk, Fk, Bk) {
      return {
        manifest: kk.manifest,
        files: (0, Rk.s)(kk.files),
        validation: Fk,
        ...Bk && {
          listing: Bk
        }
      }
    }

    function Jk(kk) {
      return Object.keys(kk.files).map((Fk => ({
        path: Fk,
        source: kk.files[Fk]
      })))
    }
    let Ak = Promise.resolve();

    function ek(kk) {
      const Fk = Ak.then(kk);
      return Ak = Fk.catch((() => {})), Fk
    }

    function yk(kk, Fk) {
      return ek((() => mk(kk, Fk)))
    }

    function fk(kk, Fk, Bk) {
      return ek((async () => JSON.stringify(await (0, bk.e)()) === JSON.stringify(kk) && (null === Fk ? (await Wk(), !0) : mk(Fk, Bk))))
    }
    async function mk(kk, Fk) {
      const Bk = await ak.f.setItem(bk.d, kk);
      return Bk && Mk(kk, Fk), Bk
    }
    async function Wk() {
      await ak.f.removeItem(bk.d), ak.i.removeItem(Xk.b)
    }

    function vk() {
      return ek(Wk)
    }

    function ik(kk, Fk) {
      return "active" === Yk(kk, Fk).kind
    }

    function Yk(kk, Fk) {
      var Bk;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : Ek(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.ok) || kk.validation.fromRecheck ? null === Fk ? {
        kind: "none",
        reason: "noCompiler"
      } : Nk(kk, Fk) ? {
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

    function Lk() {
      ak.j.setItem(dk, performance.timeOrigin)
    }

    function Ok() {
      return ak.j.getItem(dk) === performance.timeOrigin
    }

    function Ek(kk) {
      return !(0, tk.g)(kk.manifest.apiVersion)
    }

    function Sk(kk) {
      return sk ??= kk.qS((0, wk.shaderPackTextures)()), sk
    }

    function Nk(kk, Fk) {
      var Bk;
      return (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.headerVersion) !== Sk(Fk)
    }

    function Hk(kk) {
      return ek((async () => {
        Mk(await (0, bk.e)(!0), kk)
      }))
    }

    function uk() {
      return ek((async () => {
        ak.i.removeItem(Xk.b)
      }))
    }

    function Mk(kk, Fk) {
      ik(kk, Fk) ? ak.i.setItem(Xk.b, !0) : ak.i.removeItem(Xk.b)
    }
  },
  6356: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      g: () => bk
    });
    var Rk = Bk(6358),
      tk = Bk(6340),
      ak = Bk(117);
    const Xk = 100;
    async function bk(kk, Fk) {
      var Bk;
      let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Bk = navigator.gpu) && void 0 !== Bk ? Bk : null;
      const Xk = kk.N7(Fk, (0, tk.shaderPackTextures)());
      if (Xk.errors.length > 0) return dk(kk, Xk.errors, Xk.offInStrict);
      const bk = await async function(kk) {
        if (!kk) return null;
        try {
          const Fk = await (0, ak.w)(kk);
          return Fk ? await Fk.requestDevice() : null
        } catch (Fk) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Fk), null
        }
      }(Rk);
      if (!bk) return null;
      let wk = !1;
      bk.lost.then((() => {
        wk = !0
      }));
      try {
        const Fk = await Promise.all(Xk.validationModules.map((Fk => async function(kk, Fk, Bk) {
          Fk.pushErrorScope("validation");
          const Rk = Fk.createShaderModule({
              code: Bk.code
            }),
            tk = Fk.popErrorScope(),
            {
              messages: ak
            } = await Rk.getCompilationInfo(),
            Xk = ak.filter((kk => "error" === kk.type)).map((Fk => kk.mapValidationMessage(Bk, Fk))),
            bk = await tk;
          bk && 0 === Xk.length && Xk.push({
            file: null,
            line: 0,
            message: bk.message,
            variants: [Bk.key]
          });
          return Xk
        }(kk, bk, Fk))));
        return wk ? null : dk(kk, kk.EBk(Fk.flat()), Xk.offInStrict)
      } catch (sk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", sk), null
      } finally {
        bk.destroy()
      }
    }
    async function wk(kk, Fk) {
      var Bk;
      if (!(0, Rk.shaderPackNeedsCheck)(kk, Fk) || (0, Rk.isOtherApiVersion)(kk)) return kk;
      const tk = await bk(Fk, (0, Rk.storedShaderPackFiles)(kk));
      if (!tk) return kk;
      const ak = !1 === (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.ok) && !kk.validation.fromRecheck,
        Xk = {
          ...kk,
          validation: ak ? tk : {
            ...tk,
            fromRecheck: !0
          }
        };
      return await (0, Rk.replaceShaderPack)(kk, Xk, Fk) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xk
    }

    function dk(kk, Fk, Bk) {
      return {
        headerVersion: (0, Rk.pageShaderPackValidationVersion)(kk),
        ok: 0 === Fk.length,
        errors: Fk.slice(0, Xk),
        moreErrors: Math.max(0, Fk.length - Xk),
        offInStrict: Bk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);