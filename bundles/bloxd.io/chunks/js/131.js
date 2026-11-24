export const id = 131;
export const ids = [131];
export const modules = {
  41767: (mm, Tm, fm) => {
    fm.d(Tm, {
      startHarnessShaderPack: () => pm
    });
    var hm = fm(6509),
      Am = fm(4989),
      am = fm(6586),
      xm = fm(6562),
      wm = fm(4985),
      Dm = fm(39342),
      im = fm(6578),
      Rm = fm(6595);
    async function pm(mm, Tm) {
      const {
        stored: fm,
        info: pm
      } = await async function(mm, Tm) {
        const fm = await async function(mm) {
          const Tm = await fetch(mm);
          if (!Tm.ok) throw new Error(`Couldn't fetch the shader pack at ${mm}: HTTP ${Tm.status}`);
          const fm = await Tm.json();
          if (!(0, hm.l)(fm)) throw new Error(`The shader pack at ${mm} isn't a shader pack listing source`);
          return fm
        }(mm);
        if (!(0, wm.e)(fm.apiVersion)) throw new Error(`The pack is for shader pack API version ${fm.apiVersion}; this build runs version ${wm.c}`);
        const Dm = {
            manifest: {
              apiVersion: fm.apiVersion,
              name: fm.name,
              author: fm.author,
              description: null,
              keepCircleShadows: !0 === fm.keepCircleShadows
            },
            files: fm.files,
            validation: null
          },
          pm = {
            url: mm,
            name: fm.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          Em = (0, Am.q)(fm.files);
        if ("string" === typeof Em) return pm.errors = [{
          file: null,
          line: 0,
          message: Em
        }], {
          stored: Dm,
          info: pm
        };
        const om = await (0, xm.loadPageShaderPackCompiler)();
        if (!om) throw new Error("The shader pack compiler couldn't load");
        const Om = await (0, Rm.f)(om, Em);
        if (!Om) throw new Error("No WebGPU device could validate the shader pack");
        if (pm.errors = [...Om.errors], Om.ok) {
          const mm = om.Z6(Em, (0, im.shaderPackTextures)());
          pm.features = (0, Am.o)(mm), pm.runsInMode = (0, am.l)(mm.variants, Tm)
        }
        return {
          stored: {
            ...Dm,
            validation: Om
          },
          info: pm
        }
      }(mm, Tm), [Em] = pm.errors;
      if (Em) {
        const mm = null === Em.file ? "" : `${Em.file}:${Em.line}: `,
          Tm = pm.errors.length > 1 ? ` (${pm.errors.length-1} more)` : "";
        return {
          info: pm,
          problem: `The shader pack doesn't compile: ${mm}${Em.message}${Tm}`
        }
      }
      return pm.runsInMode ? ((0, Dm.setHarnessUrlShaderPack)(fm, Tm), {
        info: pm,
        problem: null
      }) : {
        info: pm,
        problem: `The shader pack runs nothing in ${Tm} mode`
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
  },
  6509: (mm, Tm, fm) => {
    fm.d(Tm, {
      D: () => wm,
      H: () => xm,
      K: () => hm,
      L: () => Em,
      P: () => Rm,
      S: () => Km,
      V: () => pm,
      X: () => im,
      e: () => Om,
      g: () => qm,
      k: () => Ym,
      l: () => om,
      m: () => Im,
      o: () => nm,
      r: () => Dm,
      t: () => Am,
      v: () => Qm,
      z: () => am
    });
    const hm = ["forest", "desert", "water", "night", "cave"];
    const Am = {
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
      am = ["popular", "updated", "newest"],
      xm = 3,
      wm = 32,
      Dm = 300;

    function im(mm, Tm) {
      return mm.slice(0, Tm).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Rm = 64,
      pm = 512,
      Em = 18e5;

    function om(mm) {
      const Tm = mm,
        fm = null === Tm || void 0 === Tm ? void 0 : Tm.files;
      return "number" === typeof(null === Tm || void 0 === Tm ? void 0 : Tm.apiVersion) && "string" === typeof Tm.name && (null === Tm.author || "string" === typeof Tm.author) && (void 0 === Tm.keepCircleShadows || "boolean" === typeof Tm.keepCircleShadows) && "object" === typeof fm && null !== fm && Object.values(fm).every((mm => "string" === typeof mm))
    }
    const Om = "Bloxdhub",
      Ym = "https://bloxdhub.com/shaders";

    function qm(mm) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(mm)}`
    }
    const jm = "Screenshot generation failed.",
      Vm = "Its screenshots couldn't be generated:";

    function Im(mm) {
      var Tm;
      return mm === jm || null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.startsWith(Vm)) && void 0 !== Tm && Tm
    }

    function Km(mm, Tm) {
      return `shaderPacks/${mm}/${Tm}.json`
    }

    function Qm(mm, Tm, fm, hm) {
      return null === Tm.renderId ? nm(mm, Tm.baselineVersion, fm, hm) : `${mm}/${function(mm,Tm,fm,hm){return`shaderPacks/${mm}/${Tm}/${fm}-${hm}.webp`}(Tm.packId,Tm.renderId,fm,hm)}`
    }

    function nm(mm, Tm, fm, hm) {
      return `${mm}/${function(mm,Tm,fm){return`shaderPacks/baseline/${mm}/${Tm}-${fm}.webp`}(Tm,fm,hm)}`
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);