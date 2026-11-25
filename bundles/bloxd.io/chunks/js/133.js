export const id = 133;
export const ids = [133];
export const modules = {
  42019: (tt, et, Vt) => {
    Vt.d(et, {
      startHarnessShaderPack: () => Qt
    });
    var Ot = Vt(6756),
      qt = Vt(5223),
      Dt = Vt(6848),
      mt = Vt(6816),
      dt = Vt(5216),
      jt = Vt(39419),
      Ht = Vt(6830),
      Xt = Vt(6857);
    async function Qt(tt, et) {
      const {
        stored: Vt,
        info: Qt
      } = await async function(tt, et) {
        const Vt = await async function(tt) {
          const et = await fetch(tt);
          if (!et.ok) throw new Error(`Couldn't fetch the shader pack at ${tt}: HTTP ${et.status}`);
          const Vt = await et.json();
          if (!(0, Ot.o)(Vt)) throw new Error(`The shader pack at ${tt} isn't a shader pack listing source`);
          return Vt
        }(tt);
        if (!(0, dt.h)(Vt.apiVersion)) throw new Error(`The pack is for shader pack API version ${Vt.apiVersion}; this build runs version ${dt.d}`);
        const jt = {
            manifest: {
              apiVersion: Vt.apiVersion,
              name: Vt.name,
              author: Vt.author,
              description: null,
              keepCircleShadows: !0 === Vt.keepCircleShadows
            },
            files: Vt.files,
            validation: null
          },
          Qt = {
            url: tt,
            name: Vt.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          lt = (0, qt.y)(Vt.files);
        if ("string" === typeof lt) return Qt.errors = [{
          file: null,
          line: 0,
          message: lt
        }], {
          stored: jt,
          info: Qt
        };
        const Et = await (0, mt.loadPageShaderPackCompiler)();
        if (!Et) throw new Error("The shader pack compiler couldn't load");
        const ft = await (0, Xt.f)(Et, lt);
        if (!ft) throw new Error("No WebGPU device could validate the shader pack");
        if (Qt.errors = [...ft.errors], ft.ok) {
          const tt = Et.mtt(lt, (0, Ht.shaderPackTextures)());
          Qt.features = (0, qt.u)(tt), Qt.runsInMode = (0, Dt.i)(tt.variants, et)
        }
        return {
          stored: {
            ...jt,
            validation: ft
          },
          info: Qt
        }
      }(tt, et), [lt] = Qt.errors;
      if (lt) {
        const tt = null === lt.file ? "" : `${lt.file}:${lt.line}: `,
          et = Qt.errors.length > 1 ? ` (${Qt.errors.length-1} more)` : "";
        return {
          info: Qt,
          problem: `The shader pack doesn't compile: ${tt}${lt.message}${et}`
        }
      }
      return Qt.runsInMode ? ((0, jt.setHarnessUrlShaderPack)(Vt, et), {
        info: Qt,
        problem: null
      }) : {
        info: Qt,
        problem: `The shader pack runs nothing in ${et} mode`
      }
    }
  },
  6866: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      forgetShaderPackActiveHint: () => ct,
      isOtherApiVersion: () => ht,
      isShaderPackActive: () => Jt,
      isShaderPackChangePending: () => Kt,
      markShaderPackChangePending: () => ut,
      pageShaderPackValidationVersion: () => vt,
      reconcileStoredShaderPackHint: () => St,
      removeShaderPack: () => bt,
      replaceShaderPack: () => yt,
      saveShaderPack: () => wt,
      shaderPackNeedsCheck: () => Wt,
      storedPackOutcome: () => Ct,
      storedShaderPackFiles: () => lt,
      toStoredShaderPack: () => Qt
    });
    var Ot = Vt(5223),
      qt = Vt(5216),
      Dt = Vt(39),
      mt = Vt(3524),
      dt = Vt(6873),
      jt = Vt(6830);
    const Ht = "shaderPackChangePending";
    let Xt = null;

    function Qt(tt, et, Vt) {
      return {
        manifest: tt.manifest,
        files: (0, Ot.C)(tt.files),
        validation: et,
        ...Vt && {
          listing: Vt
        }
      }
    }

    function lt(tt) {
      return Object.keys(tt.files).map((et => ({
        path: et,
        source: tt.files[et]
      })))
    }
    let Et = Promise.resolve();

    function ft(tt) {
      const et = Et.then(tt);
      return Et = et.catch((() => {})), et
    }

    function wt(tt, et) {
      return ft((() => Nt(tt, et)))
    }

    function yt(tt, et, Vt) {
      return ft((async () => JSON.stringify(await (0, dt.g)()) === JSON.stringify(tt) && (null === et ? (await Mt(), !0) : Nt(et, Vt))))
    }
    async function Nt(tt, et) {
      const Vt = await Dt.c.setItem(dt.e, tt);
      return Vt && Rt(tt, et), Vt
    }
    async function Mt() {
      await Dt.c.removeItem(dt.e), Dt.e.removeItem(mt.e)
    }

    function bt() {
      return ft(Mt)
    }

    function Jt(tt, et) {
      return "active" === Ct(tt, et).kind
    }

    function Ct(tt, et) {
      var Vt;
      return null === tt ? {
        kind: "none",
        reason: "nothingStored"
      } : ht(tt) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.ok) || tt.validation.fromRecheck ? null === et ? {
        kind: "none",
        reason: "noCompiler"
      } : Wt(tt, et) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : tt.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function ut() {
      Dt.h.setItem(Ht, performance.timeOrigin)
    }

    function Kt() {
      return Dt.h.getItem(Ht) === performance.timeOrigin
    }

    function ht(tt) {
      return !(0, qt.h)(tt.manifest.apiVersion)
    }

    function vt(tt) {
      return Xt ??= tt.yI((0, jt.shaderPackTextures)()), Xt
    }

    function Wt(tt, et) {
      var Vt;
      return (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.headerVersion) !== vt(et)
    }

    function St(tt) {
      return ft((async () => {
        Rt(await (0, dt.g)(!0), tt)
      }))
    }

    function ct() {
      return ft((async () => {
        Dt.e.removeItem(mt.e)
      }))
    }

    function Rt(tt, et) {
      Jt(tt, et) ? Dt.e.setItem(mt.e, !0) : Dt.e.removeItem(mt.e)
    }
  },
  6857: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      f: () => dt
    });
    var Ot = Vt(6866),
      qt = Vt(6830),
      Dt = Vt(133);
    const mt = 100;
    async function dt(tt, et) {
      var Vt;
      let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Vt = navigator.gpu) && void 0 !== Vt ? Vt : null;
      const mt = tt.mtt(et, (0, qt.shaderPackTextures)());
      if (mt.errors.length > 0) return Ht(tt, mt.errors, mt.offInStrict);
      const dt = await async function(tt) {
        if (!tt) return null;
        try {
          const et = await (0, Dt.t)(tt);
          return et ? await et.requestDevice() : null
        } catch (et) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", et), null
        }
      }(Ot);
      if (!dt) return null;
      let jt = !1;
      dt.lost.then((() => {
        jt = !0
      }));
      try {
        const et = await Promise.all(mt.validationModules.map((et => async function(tt, et, Vt) {
          et.pushErrorScope("validation");
          const Ot = et.createShaderModule({
              code: Vt.code
            }),
            qt = et.popErrorScope(),
            {
              messages: Dt
            } = await Ot.getCompilationInfo(),
            mt = Dt.filter((tt => "error" === tt.type)).map((et => tt.mapValidationMessage(Vt, et))),
            dt = await qt;
          dt && 0 === mt.length && mt.push({
            file: null,
            line: 0,
            message: dt.message,
            variants: [Vt.key]
          });
          return mt
        }(tt, dt, et))));
        return jt ? null : Ht(tt, tt.uOt(et.flat()), mt.offInStrict)
      } catch (Xt) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Xt), null
      } finally {
        dt.destroy()
      }
    }
    async function jt(tt, et) {
      var Vt;
      if (!(0, Ot.shaderPackNeedsCheck)(tt, et) || (0, Ot.isOtherApiVersion)(tt)) return tt;
      const qt = await dt(et, (0, Ot.storedShaderPackFiles)(tt));
      if (!qt) return tt;
      const Dt = !1 === (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.ok) && !tt.validation.fromRecheck,
        mt = {
          ...tt,
          validation: Dt ? qt : {
            ...qt,
            fromRecheck: !0
          }
        };
      return await (0, Ot.replaceShaderPack)(tt, mt, et) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mt
    }

    function Ht(tt, et, Vt) {
      return {
        headerVersion: (0, Ot.pageShaderPackValidationVersion)(tt),
        ok: 0 === et.length,
        errors: et.slice(0, mt),
        moreErrors: Math.max(0, et.length - mt),
        offInStrict: Vt
      }
    }
  },
  6756: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => dt,
      E: () => mt,
      G: () => Ot,
      H: () => lt,
      I: () => Xt,
      K: () => Jt,
      L: () => Qt,
      P: () => Ht,
      e: () => ft,
      i: () => yt,
      k: () => wt,
      o: () => Et,
      q: () => bt,
      t: () => ut,
      u: () => jt,
      v: () => qt,
      w: () => Ct,
      x: () => Dt
    });
    const Ot = ["forest", "desert", "water", "night", "cave"];
    const qt = {
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
      Dt = ["popular", "updated", "newest"],
      mt = 3,
      dt = 32,
      jt = 300;

    function Ht(tt, et) {
      return tt.slice(0, et).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Xt = 64,
      Qt = 512,
      lt = 18e5;

    function Et(tt) {
      const et = tt,
        Vt = null === et || void 0 === et ? void 0 : et.files;
      return "number" === typeof(null === et || void 0 === et ? void 0 : et.apiVersion) && "string" === typeof et.name && (null === et.author || "string" === typeof et.author) && (void 0 === et.keepCircleShadows || "boolean" === typeof et.keepCircleShadows) && "object" === typeof Vt && null !== Vt && Object.values(Vt).every((tt => "string" === typeof tt))
    }
    const ft = "Bloxdhub",
      wt = "https://bloxdhub.com/shaders";

    function yt(tt) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(tt)}`
    }
    const Nt = "Screenshot generation failed.",
      Mt = "Its screenshots couldn't be generated:";

    function bt(tt) {
      var et;
      return tt === Nt || null !== (et = null === tt || void 0 === tt ? void 0 : tt.startsWith(Mt)) && void 0 !== et && et
    }

    function Jt(tt, et) {
      return `shaderPacks/${tt}/${et}.json`
    }

    function Ct(tt, et, Vt, Ot) {
      return null === et.renderId ? ut(tt, et.baselineVersion, Vt, Ot) : `${tt}/${function(tt,et,Vt,Ot){return`shaderPacks/${tt}/${et}/${Vt}-${Ot}.webp`}(et.packId,et.renderId,Vt,Ot)}`
    }

    function ut(tt, et, Vt, Ot) {
      return `${tt}/${function(tt,et,Vt){return`shaderPacks/baseline/${tt}/${et}-${Vt}.webp`}(et,Vt,Ot)}`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);