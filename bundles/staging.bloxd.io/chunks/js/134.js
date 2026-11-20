export const id = 134;
export const ids = [134];
export const modules = {
  41329: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      compilePagePack: () => Xu,
      prefetchCompiler: () => Ju,
      reconcileHint: () => Nu
    });
    var Eu = yu(6395),
      Ku = yu(6430),
      Qu = yu(6407),
      mu = yu(6424);

    function Ju() {
      (0, Eu.loadPageShaderPackCompiler)()
    }
    async function Nu() {
      const uu = await (0, Eu.loadPageShaderPackCompiler)();
      await (uu ? (0, Ku.reconcileStoredShaderPackHint)(uu) : (0, Ku.forgetShaderPackActiveHint)())
    }
    async function Xu(uu) {
      const Ru = await (0, Eu.loadPageShaderPackCompiler)();
      if (!Ru) return {
        status: "none"
      };
      const yu = await (0, mu.c)(uu, Ru),
        Ju = (0, Ku.storedPackOutcome)(yu, Ru);
      if ("none" === Ju.kind) return {
        status: "none"
      };
      const Nu = Ru.juu((0, Ku.storedShaderPackFiles)(yu), (0, Qu.shaderPackTextures)());
      if ("blocked" === Ju.kind) return {
        status: "blocked",
        messageKey: Ju.messageKey,
        variants: 0 === Nu.errors.length ? Nu.variants : null
      };
      if (Nu.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Nu.errors), {
        status: "none"
      };
      const {
        name: Xu,
        keepCircleShadows: Vu
      } = yu.manifest;
      return {
        status: "active",
        pack: {
          name: Xu,
          variants: Nu.variants,
          keepCircleShadows: !0 === Vu
        }
      }
    }
  },
  6430: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      forgetShaderPackActiveHint: () => Iu,
      isOtherApiVersion: () => eu,
      isShaderPackActive: () => du,
      isShaderPackChangePending: () => ku,
      markShaderPackChangePending: () => Cu,
      pageShaderPackValidationVersion: () => Au,
      reconcileStoredShaderPackHint: () => Mu,
      removeShaderPack: () => Hu,
      replaceShaderPack: () => Tu,
      saveShaderPack: () => pu,
      shaderPackNeedsCheck: () => Du,
      storedPackOutcome: () => bu,
      storedShaderPackFiles: () => Bu,
      toStoredShaderPack: () => ru
    });
    var Eu = yu(6362),
      Ku = yu(6381),
      Qu = yu(47),
      mu = yu(3255),
      Ju = yu(6436),
      Nu = yu(6407);
    const Xu = "shaderPackChangePending";
    let Vu = null;

    function ru(uu, Ru, yu) {
      return {
        manifest: uu.manifest,
        files: (0, Eu.w)(uu.files),
        validation: Ru,
        ...yu && {
          listing: yu
        }
      }
    }

    function Bu(uu) {
      return Object.keys(uu.files).map((Ru => ({
        path: Ru,
        source: uu.files[Ru]
      })))
    }
    let xu = Promise.resolve();

    function Su(uu) {
      const Ru = xu.then(uu);
      return xu = Ru.catch((() => {})), Ru
    }

    function pu(uu, Ru) {
      return Su((() => Wu(uu, Ru)))
    }

    function Tu(uu, Ru, yu) {
      return Su((async () => JSON.stringify(await (0, Ju.h)()) === JSON.stringify(uu) && (null === Ru ? (await ju(), !0) : Wu(Ru, yu))))
    }
    async function Wu(uu, Ru) {
      const yu = await Qu.f.setItem(Ju.e, uu);
      return yu && Gu(uu, Ru), yu
    }
    async function ju() {
      await Qu.f.removeItem(Ju.e), Qu.i.removeItem(mu.d)
    }

    function Hu() {
      return Su(ju)
    }

    function du(uu, Ru) {
      return "active" === bu(uu, Ru).kind
    }

    function bu(uu, Ru) {
      var yu;
      return null === uu ? {
        kind: "none",
        reason: "nothingStored"
      } : eu(uu) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.ok) || uu.validation.fromRecheck ? null === Ru ? {
        kind: "none",
        reason: "noCompiler"
      } : Du(uu, Ru) ? {
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

    function Cu() {
      Qu.j.setItem(Xu, performance.timeOrigin)
    }

    function ku() {
      return Qu.j.getItem(Xu) === performance.timeOrigin
    }

    function eu(uu) {
      return !(0, Ku.i)(uu.manifest.apiVersion)
    }

    function Au(uu) {
      return Vu ??= uu.dD((0, Nu.shaderPackTextures)()), Vu
    }

    function Du(uu, Ru) {
      var yu;
      return (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.headerVersion) !== Au(Ru)
    }

    function Mu(uu) {
      return Su((async () => {
        Gu(await (0, Ju.h)(!0), uu)
      }))
    }

    function Iu() {
      return Su((async () => {
        Qu.i.removeItem(mu.d)
      }))
    }

    function Gu(uu, Ru) {
      du(uu, Ru) ? Qu.i.setItem(mu.d, !0) : Qu.i.removeItem(mu.d)
    }
  },
  6424: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Nu,
      g: () => Ju
    });
    var Eu = yu(6430),
      Ku = yu(6407),
      Qu = yu(129);
    const mu = 100;
    async function Ju(uu, Ru) {
      var yu;
      let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (yu = navigator.gpu) && void 0 !== yu ? yu : null;
      const mu = uu.juu(Ru, (0, Ku.shaderPackTextures)());
      if (mu.errors.length > 0) return Xu(uu, mu.errors, mu.offInStrict);
      const Ju = await async function(uu) {
        if (!uu) return null;
        try {
          const Ru = await (0, Qu.y)(uu);
          return Ru ? await Ru.requestDevice() : null
        } catch (Ru) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Ru), null
        }
      }(Eu);
      if (!Ju) return null;
      let Nu = !1;
      Ju.lost.then((() => {
        Nu = !0
      }));
      try {
        const Ru = await Promise.all(mu.validationModules.map((Ru => async function(uu, Ru, yu) {
          Ru.pushErrorScope("validation");
          const Eu = Ru.createShaderModule({
              code: yu.code
            }),
            Ku = Ru.popErrorScope(),
            {
              messages: Qu
            } = await Eu.getCompilationInfo(),
            mu = Qu.filter((uu => "error" === uu.type)).map((Ru => uu.mapValidationMessage(yu, Ru))),
            Ju = await Ku;
          Ju && 0 === mu.length && mu.push({
            file: null,
            line: 0,
            message: Ju.message,
            variants: [yu.key]
          });
          return mu
        }(uu, Ju, Ru))));
        return Nu ? null : Xu(uu, uu.rEu(Ru.flat()), mu.offInStrict)
      } catch (Vu) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Vu), null
      } finally {
        Ju.destroy()
      }
    }
    async function Nu(uu, Ru) {
      var yu;
      if (!(0, Eu.shaderPackNeedsCheck)(uu, Ru) || (0, Eu.isOtherApiVersion)(uu)) return uu;
      const Ku = await Ju(Ru, (0, Eu.storedShaderPackFiles)(uu));
      if (!Ku) return uu;
      const Qu = !1 === (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.ok) && !uu.validation.fromRecheck,
        mu = {
          ...uu,
          validation: Qu ? Ku : {
            ...Ku,
            fromRecheck: !0
          }
        };
      return await (0, Eu.replaceShaderPack)(uu, mu, Ru) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mu
    }

    function Xu(uu, Ru, yu) {
      return {
        headerVersion: (0, Eu.pageShaderPackValidationVersion)(uu),
        ok: 0 === Ru.length,
        errors: Ru.slice(0, mu),
        moreErrors: Math.max(0, Ru.length - mu),
        offInStrict: yu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);