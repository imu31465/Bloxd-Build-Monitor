export const id = 140;
export const ids = [140];
export const modules = {
  41755: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      compilePagePack: () => im,
      prefetchCompiler: () => wm,
      reconcileHint: () => Dm
    });
    var hm = fm(6562),
      Am = fm(6600),
      am = fm(6578),
      xm = fm(6595);

    function wm() {
      (0, hm.loadPageShaderPackCompiler)()
    }
    async function Dm() {
      const mm = await (0, hm.loadPageShaderPackCompiler)();
      await (mm ? (0, Am.reconcileStoredShaderPackHint)(mm) : (0, Am.forgetShaderPackActiveHint)())
    }
    async function im(mm) {
      const Tm = await (0, hm.loadPageShaderPackCompiler)();
      if (!Tm) return {
        status: "none"
      };
      const fm = await (0, xm.b)(mm, Tm),
        wm = (0, Am.storedPackOutcome)(fm, Tm);
      if ("none" === wm.kind) return {
        status: "none"
      };
      const Dm = Tm.Z6((0, Am.storedShaderPackFiles)(fm), (0, am.shaderPackTextures)());
      if ("blocked" === wm.kind) return {
        status: "blocked",
        messageKey: wm.messageKey,
        variants: 0 === Dm.errors.length ? Dm.variants : null
      };
      if (Dm.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Dm.errors), {
        status: "none"
      };
      const {
        name: im,
        keepCircleShadows: Rm
      } = fm.manifest;
      return {
        status: "active",
        pack: {
          name: im,
          variants: Dm.variants,
          keepCircleShadows: !0 === Rm
        }
      }
    }
  },
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
  6595: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      f: () => wm
    });
    var hm = fm(6600),
      Am = fm(6578),
      am = fm(118);
    const xm = 100;
    async function wm(mm, Tm) {
      var fm;
      let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (fm = navigator.gpu) && void 0 !== fm ? fm : null;
      const xm = mm.Z6(Tm, (0, Am.shaderPackTextures)());
      if (xm.errors.length > 0) return im(mm, xm.errors, xm.offInStrict);
      const wm = await async function(mm) {
        if (!mm) return null;
        try {
          const Tm = await (0, am.v)(mm);
          return Tm ? await Tm.requestDevice() : null
        } catch (Tm) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Tm), null
        }
      }(hm);
      if (!wm) return null;
      let Dm = !1;
      wm.lost.then((() => {
        Dm = !0
      }));
      try {
        const Tm = await Promise.all(xm.validationModules.map((Tm => async function(mm, Tm, fm) {
          Tm.pushErrorScope("validation");
          const hm = Tm.createShaderModule({
              code: fm.code
            }),
            Am = Tm.popErrorScope(),
            {
              messages: am
            } = await hm.getCompilationInfo(),
            xm = am.filter((mm => "error" === mm.type)).map((Tm => mm.mapValidationMessage(fm, Tm))),
            wm = await Am;
          wm && 0 === xm.length && xm.push({
            file: null,
            line: 0,
            message: wm.message,
            variants: [fm.key]
          });
          return xm
        }(mm, wm, Tm))));
        return Dm ? null : im(mm, mm.Lfm(Tm.flat()), xm.offInStrict)
      } catch (Rm) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Rm), null
      } finally {
        wm.destroy()
      }
    }
    async function Dm(mm, Tm) {
      var fm;
      if (!(0, hm.shaderPackNeedsCheck)(mm, Tm) || (0, hm.isOtherApiVersion)(mm)) return mm;
      const Am = await wm(Tm, (0, hm.storedShaderPackFiles)(mm));
      if (!Am) return mm;
      const am = !1 === (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.ok) && !mm.validation.fromRecheck,
        xm = {
          ...mm,
          validation: am ? Am : {
            ...Am,
            fromRecheck: !0
          }
        };
      return await (0, hm.replaceShaderPack)(mm, xm, Tm) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), xm
    }

    function im(mm, Tm, fm) {
      return {
        headerVersion: (0, hm.pageShaderPackValidationVersion)(mm),
        ok: 0 === Tm.length,
        errors: Tm.slice(0, xm),
        moreErrors: Math.max(0, Tm.length - xm),
        offInStrict: fm
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);