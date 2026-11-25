export const id = 133;
export const ids = [133];
export const modules = {
  42017: (uu, Eu, ju) => {
    ju.d(Eu, {
      startHarnessShaderPack: () => bu
    });
    var su = ju(6764),
      Uu = ju(5209),
      Zu = ju(6840),
      Xu = ju(6810),
      lu = ju(5206),
      qu = ju(39525),
      fu = ju(6827),
      Cu = ju(6849);
    async function bu(uu, Eu) {
      const {
        stored: ju,
        info: bu
      } = await async function(uu, Eu) {
        const ju = await async function(uu) {
          const Eu = await fetch(uu);
          if (!Eu.ok) throw new Error(`Couldn't fetch the shader pack at ${uu}: HTTP ${Eu.status}`);
          const ju = await Eu.json();
          if (!(0, su.n)(ju)) throw new Error(`The shader pack at ${uu} isn't a shader pack listing source`);
          return ju
        }(uu);
        if (!(0, lu.k)(ju.apiVersion)) throw new Error(`The pack is for shader pack API version ${ju.apiVersion}; this build runs version ${lu.d}`);
        const qu = {
            manifest: {
              apiVersion: ju.apiVersion,
              name: ju.name,
              author: ju.author,
              description: null,
              keepCircleShadows: !0 === ju.keepCircleShadows
            },
            files: ju.files,
            validation: null
          },
          bu = {
            url: uu,
            name: ju.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          cu = (0, Uu.s)(ju.files);
        if ("string" === typeof cu) return bu.errors = [{
          file: null,
          line: 0,
          message: cu
        }], {
          stored: qu,
          info: bu
        };
        const Nu = await (0, Xu.loadPageShaderPackCompiler)();
        if (!Nu) throw new Error("The shader pack compiler couldn't load");
        const Ou = await (0, Cu.e)(Nu, cu);
        if (!Ou) throw new Error("No WebGPU device could validate the shader pack");
        if (bu.errors = [...Ou.errors], Ou.ok) {
          const uu = Nu.luu(cu, (0, fu.shaderPackTextures)());
          bu.features = (0, Uu.p)(uu), bu.runsInMode = (0, Zu.i)(uu.variants, Eu)
        }
        return {
          stored: {
            ...qu,
            validation: Ou
          },
          info: bu
        }
      }(uu, Eu), [cu] = bu.errors;
      if (cu) {
        const uu = null === cu.file ? "" : `${cu.file}:${cu.line}: `,
          Eu = bu.errors.length > 1 ? ` (${bu.errors.length-1} more)` : "";
        return {
          info: bu,
          problem: `The shader pack doesn't compile: ${uu}${cu.message}${Eu}`
        }
      }
      return bu.runsInMode ? ((0, qu.setHarnessUrlShaderPack)(ju, Eu), {
        info: bu,
        problem: null
      }) : {
        info: bu,
        problem: `The shader pack runs nothing in ${Eu} mode`
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
  },
  6764: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => Gu,
      E: () => Zu,
      F: () => lu,
      I: () => Xu,
      M: () => su,
      Q: () => cu,
      R: () => Cu,
      U: () => eu,
      X: () => bu,
      _: () => fu,
      c: () => Ou,
      f: () => hu,
      j: () => Yu,
      n: () => Nu,
      r: () => Mu,
      t: () => pu,
      x: () => qu,
      z: () => Uu
    });
    const su = ["forest", "desert", "water", "night", "cave"];
    const Uu = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      Zu = ["popular", "updated", "newest"],
      Xu = 3,
      lu = 32,
      qu = 300;

    function fu(uu, Eu) {
      return uu.slice(0, Eu).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Cu = 64,
      bu = 512,
      cu = 18e5;

    function Nu(uu) {
      const Eu = uu,
        ju = null === Eu || void 0 === Eu ? void 0 : Eu.files;
      return "number" === typeof(null === Eu || void 0 === Eu ? void 0 : Eu.apiVersion) && "string" === typeof Eu.name && (null === Eu.author || "string" === typeof Eu.author) && (void 0 === Eu.keepCircleShadows || "boolean" === typeof Eu.keepCircleShadows) && "object" === typeof ju && null !== ju && Object.values(ju).every((uu => "string" === typeof uu))
    }
    const Ou = "Bloxdhub",
      Yu = "https://bloxdhub.com/shaders";

    function hu(uu) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(uu)}`
    }
    const Du = "Screenshot generation failed.",
      gu = "Its screenshots couldn't be generated:";

    function Mu(uu) {
      var Eu;
      return uu === Du || null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.startsWith(gu)) && void 0 !== Eu && Eu
    }

    function eu(uu, Eu) {
      return `shaderPacks/${uu}/${Eu}.json`
    }

    function Gu(uu, Eu, ju, su) {
      return null === Eu.renderId ? pu(uu, Eu.baselineVersion, ju, su) : `${uu}/${function(uu,Eu,ju,su){return`shaderPacks/${uu}/${Eu}/${ju}-${su}.webp`}(Eu.packId,Eu.renderId,ju,su)}`
    }

    function pu(uu, Eu, ju, su) {
      return `${uu}/${function(uu,Eu,ju){return`shaderPacks/baseline/${uu}/${Eu}-${ju}.webp`}(Eu,ju,su)}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);