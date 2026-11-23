export const id = 140;
export const ids = [140];
export const modules = {
  41740: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      compilePagePack: () => qk,
      prefetchCompiler: () => lk,
      reconcileHint: () => ak
    });
    var Xk = Ik(6596),
      Tk = Ik(6639),
      ik = Ik(6611),
      yk = Ik(6631);

    function lk() {
      (0, Xk.loadPageShaderPackCompiler)()
    }
    async function ak() {
      const kk = await (0, Xk.loadPageShaderPackCompiler)();
      await (kk ? (0, Tk.reconcileStoredShaderPackHint)(kk) : (0, Tk.forgetShaderPackActiveHint)())
    }
    async function qk(kk) {
      const Fk = await (0, Xk.loadPageShaderPackCompiler)();
      if (!Fk) return {
        status: "none"
      };
      const Ik = await (0, yk.c)(kk, Fk),
        lk = (0, Tk.storedPackOutcome)(Ik, Fk);
      if ("none" === lk.kind) return {
        status: "none"
      };
      const ak = Fk.N7((0, Tk.storedShaderPackFiles)(Ik), (0, ik.shaderPackTextures)());
      if ("blocked" === lk.kind) return {
        status: "blocked",
        messageKey: lk.messageKey,
        variants: 0 === ak.errors.length ? ak.variants : null
      };
      if (ak.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", ak.errors), {
        status: "none"
      };
      const {
        name: qk,
        keepCircleShadows: Lk
      } = Ik.manifest;
      return {
        status: "active",
        pack: {
          name: qk,
          variants: ak.variants,
          keepCircleShadows: !0 === Lk
        }
      }
    }
  },
  6639: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      forgetShaderPackActiveHint: () => Ok,
      isOtherApiVersion: () => zk,
      isShaderPackActive: () => Kk,
      isShaderPackChangePending: () => Vk,
      markShaderPackChangePending: () => sk,
      pageShaderPackValidationVersion: () => Sk,
      reconcileStoredShaderPackHint: () => Ek,
      removeShaderPack: () => Pk,
      replaceShaderPack: () => Hk,
      saveShaderPack: () => wk,
      shaderPackNeedsCheck: () => vk,
      storedPackOutcome: () => Qk,
      storedShaderPackFiles: () => Zk,
      toStoredShaderPack: () => tk
    });
    var Xk = Ik(5053),
      Tk = Ik(5047),
      ik = Ik(41),
      yk = Ik(3396),
      lk = Ik(6644),
      ak = Ik(6611);
    const qk = "shaderPackChangePending";
    let Lk = null;

    function tk(kk, Fk, Ik) {
      return {
        manifest: kk.manifest,
        files: (0, Xk.w)(kk.files),
        validation: Fk,
        ...Ik && {
          listing: Ik
        }
      }
    }

    function Zk(kk) {
      return Object.keys(kk.files).map((Fk => ({
        path: Fk,
        source: kk.files[Fk]
      })))
    }
    let jk = Promise.resolve();

    function ek(kk) {
      const Fk = jk.then(kk);
      return jk = Fk.catch((() => {})), Fk
    }

    function wk(kk, Fk) {
      return ek((() => Jk(kk, Fk)))
    }

    function Hk(kk, Fk, Ik) {
      return ek((async () => JSON.stringify(await (0, lk.i)()) === JSON.stringify(kk) && (null === Fk ? (await xk(), !0) : Jk(Fk, Ik))))
    }
    async function Jk(kk, Fk) {
      const Ik = await ik.g.setItem(lk.e, kk);
      return Ik && nk(kk, Fk), Ik
    }
    async function xk() {
      await ik.g.removeItem(lk.e), ik.j.removeItem(yk.e)
    }

    function Pk() {
      return ek(xk)
    }

    function Kk(kk, Fk) {
      return "active" === Qk(kk, Fk).kind
    }

    function Qk(kk, Fk) {
      var Ik;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : zk(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.ok) || kk.validation.fromRecheck ? null === Fk ? {
        kind: "none",
        reason: "noCompiler"
      } : vk(kk, Fk) ? {
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

    function sk() {
      ik.m.setItem(qk, performance.timeOrigin)
    }

    function Vk() {
      return ik.m.getItem(qk) === performance.timeOrigin
    }

    function zk(kk) {
      return !(0, Tk.i)(kk.manifest.apiVersion)
    }

    function Sk(kk) {
      return Lk ??= kk.nG((0, ak.shaderPackTextures)()), Lk
    }

    function vk(kk, Fk) {
      var Ik;
      return (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.headerVersion) !== Sk(Fk)
    }

    function Ek(kk) {
      return ek((async () => {
        nk(await (0, lk.i)(!0), kk)
      }))
    }

    function Ok() {
      return ek((async () => {
        ik.j.removeItem(yk.e)
      }))
    }

    function nk(kk, Fk) {
      Kk(kk, Fk) ? ik.j.setItem(yk.e, !0) : ik.j.removeItem(yk.e)
    }
  },
  6631: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      f: () => lk
    });
    var Xk = Ik(6639),
      Tk = Ik(6611),
      ik = Ik(113);
    const yk = 100;
    async function lk(kk, Fk) {
      var Ik;
      let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Ik = navigator.gpu) && void 0 !== Ik ? Ik : null;
      const yk = kk.N7(Fk, (0, Tk.shaderPackTextures)());
      if (yk.errors.length > 0) return qk(kk, yk.errors, yk.offInStrict);
      const lk = await async function(kk) {
        if (!kk) return null;
        try {
          const Fk = await (0, ik.t)(kk);
          return Fk ? await Fk.requestDevice() : null
        } catch (Fk) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Fk), null
        }
      }(Xk);
      if (!lk) return null;
      let ak = !1;
      lk.lost.then((() => {
        ak = !0
      }));
      try {
        const Fk = await Promise.all(yk.validationModules.map((Fk => async function(kk, Fk, Ik) {
          Fk.pushErrorScope("validation");
          const Xk = Fk.createShaderModule({
              code: Ik.code
            }),
            Tk = Fk.popErrorScope(),
            {
              messages: ik
            } = await Xk.getCompilationInfo(),
            yk = ik.filter((kk => "error" === kk.type)).map((Fk => kk.mapValidationMessage(Ik, Fk))),
            lk = await Tk;
          lk && 0 === yk.length && yk.push({
            file: null,
            line: 0,
            message: lk.message,
            variants: [Ik.key]
          });
          return yk
        }(kk, lk, Fk))));
        return ak ? null : qk(kk, kk.YIk(Fk.flat()), yk.offInStrict)
      } catch (Lk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Lk), null
      } finally {
        lk.destroy()
      }
    }
    async function ak(kk, Fk) {
      var Ik;
      if (!(0, Xk.shaderPackNeedsCheck)(kk, Fk) || (0, Xk.isOtherApiVersion)(kk)) return kk;
      const Tk = await lk(Fk, (0, Xk.storedShaderPackFiles)(kk));
      if (!Tk) return kk;
      const ik = !1 === (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.ok) && !kk.validation.fromRecheck,
        yk = {
          ...kk,
          validation: ik ? Tk : {
            ...Tk,
            fromRecheck: !0
          }
        };
      return await (0, Xk.replaceShaderPack)(kk, yk, Fk) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yk
    }

    function qk(kk, Fk, Ik) {
      return {
        headerVersion: (0, Xk.pageShaderPackValidationVersion)(kk),
        ok: 0 === Fk.length,
        errors: Fk.slice(0, yk),
        moreErrors: Math.max(0, Fk.length - yk),
        offInStrict: Ik
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);