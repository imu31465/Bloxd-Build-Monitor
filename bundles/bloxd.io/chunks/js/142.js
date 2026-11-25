export const id = 142;
export const ids = [142];
export const modules = {
  42003: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      compilePagePack: () => fu,
      prefetchCompiler: () => lu,
      reconcileHint: () => qu
    });
    var su = ju(6810),
      Uu = ju(6851),
      Zu = ju(6827),
      Xu = ju(6849);

    function lu() {
      (0, su.loadPageShaderPackCompiler)()
    }
    async function qu() {
      const uu = await (0, su.loadPageShaderPackCompiler)();
      await (uu ? (0, Uu.reconcileStoredShaderPackHint)(uu) : (0, Uu.forgetShaderPackActiveHint)())
    }
    async function fu(uu) {
      const Eu = await (0, su.loadPageShaderPackCompiler)();
      if (!Eu) return {
        status: "none"
      };
      const ju = await (0, Xu.d)(uu, Eu),
        lu = (0, Uu.storedPackOutcome)(ju, Eu);
      if ("none" === lu.kind) return {
        status: "none"
      };
      const qu = Eu.luu((0, Uu.storedShaderPackFiles)(ju), (0, Zu.shaderPackTextures)());
      if ("blocked" === lu.kind) return {
        status: "blocked",
        messageKey: lu.messageKey,
        variants: 0 === qu.errors.length ? qu.variants : null
      };
      if (qu.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", qu.errors), {
        status: "none"
      };
      const {
        name: fu,
        keepCircleShadows: Cu
      } = ju.manifest;
      return {
        status: "active",
        pack: {
          name: fu,
          variants: qu.variants,
          keepCircleShadows: !0 === Cu
        }
      }
    }
  },
  6851: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      forgetShaderPackActiveHint: () => ou,
      isOtherApiVersion: () => Ju,
      isShaderPackActive: () => eu,
      isShaderPackChangePending: () => wu,
      markShaderPackChangePending: () => pu,
      pageShaderPackValidationVersion: () => du,
      reconcileStoredShaderPackHint: () => Pu,
      removeShaderPack: () => Mu,
      replaceShaderPack: () => hu,
      saveShaderPack: () => Yu,
      shaderPackNeedsCheck: () => au,
      storedPackOutcome: () => Gu,
      storedShaderPackFiles: () => cu,
      toStoredShaderPack: () => bu
    });
    var su = ju(5209),
      Uu = ju(5206),
      Zu = ju(31),
      Xu = ju(3651),
      lu = ju(6854),
      qu = ju(6827);
    const fu = "shaderPackChangePending";
    let Cu = null;

    function bu(uu, Eu, ju) {
      return {
        manifest: uu.manifest,
        files: (0, su.w)(uu.files),
        validation: Eu,
        ...ju && {
          listing: ju
        }
      }
    }

    function cu(uu) {
      return Object.keys(uu.files).map((Eu => ({
        path: Eu,
        source: uu.files[Eu]
      })))
    }
    let Nu = Promise.resolve();

    function Ou(uu) {
      const Eu = Nu.then(uu);
      return Nu = Eu.catch((() => {})), Eu
    }

    function Yu(uu, Eu) {
      return Ou((() => Du(uu, Eu)))
    }

    function hu(uu, Eu, ju) {
      return Ou((async () => JSON.stringify(await (0, lu.e)()) === JSON.stringify(uu) && (null === Eu ? (await gu(), !0) : Du(Eu, ju))))
    }
    async function Du(uu, Eu) {
      const ju = await Zu.h.setItem(lu.b, uu);
      return ju && ku(uu, Eu), ju
    }
    async function gu() {
      await Zu.h.removeItem(lu.b), Zu.k.removeItem(Xu.c)
    }

    function Mu() {
      return Ou(gu)
    }

    function eu(uu, Eu) {
      return "active" === Gu(uu, Eu).kind
    }

    function Gu(uu, Eu) {
      var ju;
      return null === uu ? {
        kind: "none",
        reason: "nothingStored"
      } : Ju(uu) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.ok) || uu.validation.fromRecheck ? null === Eu ? {
        kind: "none",
        reason: "noCompiler"
      } : au(uu, Eu) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : uu.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function pu() {
      Zu.l.setItem(fu, performance.timeOrigin)
    }

    function wu() {
      return Zu.l.getItem(fu) === performance.timeOrigin
    }

    function Ju(uu) {
      return !(0, Uu.k)(uu.manifest.apiVersion)
    }

    function du(uu) {
      return Cu ??= uu.fV((0, qu.shaderPackTextures)()), Cu
    }

    function au(uu, Eu) {
      var ju;
      return (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.headerVersion) !== du(Eu)
    }

    function Pu(uu) {
      return Ou((async () => {
        ku(await (0, lu.e)(!0), uu)
      }))
    }

    function ou() {
      return Ou((async () => {
        Zu.k.removeItem(Xu.c)
      }))
    }

    function ku(uu, Eu) {
      eu(uu, Eu) ? Zu.k.setItem(Xu.c, !0) : Zu.k.removeItem(Xu.c)
    }
  },
  6849: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      e: () => lu
    });
    var su = ju(6851),
      Uu = ju(6827),
      Zu = ju(115);
    const Xu = 100;
    async function lu(uu, Eu) {
      var ju;
      let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ju = navigator.gpu) && void 0 !== ju ? ju : null;
      const Xu = uu.luu(Eu, (0, Uu.shaderPackTextures)());
      if (Xu.errors.length > 0) return fu(uu, Xu.errors, Xu.offInStrict);
      const lu = await async function(uu) {
        if (!uu) return null;
        try {
          const Eu = await (0, Zu.v)(uu);
          return Eu ? await Eu.requestDevice() : null
        } catch (Eu) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Eu), null
        }
      }(su);
      if (!lu) return null;
      let qu = !1;
      lu.lost.then((() => {
        qu = !0
      }));
      try {
        const Eu = await Promise.all(Xu.validationModules.map((Eu => async function(uu, Eu, ju) {
          Eu.pushErrorScope("validation");
          const su = Eu.createShaderModule({
              code: ju.code
            }),
            Uu = Eu.popErrorScope(),
            {
              messages: Zu
            } = await su.getCompilationInfo(),
            Xu = Zu.filter((uu => "error" === uu.type)).map((Eu => uu.mapValidationMessage(ju, Eu))),
            lu = await Uu;
          lu && 0 === Xu.length && Xu.push({
            file: null,
            line: 0,
            message: lu.message,
            variants: [ju.key]
          });
          return Xu
        }(uu, lu, Eu))));
        return qu ? null : fu(uu, uu.Rju(Eu.flat()), Xu.offInStrict)
      } catch (Cu) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Cu), null
      } finally {
        lu.destroy()
      }
    }
    async function qu(uu, Eu) {
      var ju;
      if (!(0, su.shaderPackNeedsCheck)(uu, Eu) || (0, su.isOtherApiVersion)(uu)) return uu;
      const Uu = await lu(Eu, (0, su.storedShaderPackFiles)(uu));
      if (!Uu) return uu;
      const Zu = !1 === (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.ok) && !uu.validation.fromRecheck,
        Xu = {
          ...uu,
          validation: Zu ? Uu : {
            ...Uu,
            fromRecheck: !0
          }
        };
      return await (0, su.replaceShaderPack)(uu, Xu, Eu) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xu
    }

    function fu(uu, Eu, ju) {
      return {
        headerVersion: (0, su.pageShaderPackValidationVersion)(uu),
        ok: 0 === Eu.length,
        errors: Eu.slice(0, Xu),
        moreErrors: Math.max(0, Eu.length - Xu),
        offInStrict: ju
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);