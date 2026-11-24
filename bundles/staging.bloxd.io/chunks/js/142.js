export const id = 142;
export const ids = [142];
export const modules = {
  42006: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      compilePagePack: () => Ht,
      prefetchCompiler: () => dt,
      reconcileHint: () => jt
    });
    var Ot = Vt(6816),
      qt = Vt(6866),
      Dt = Vt(6830),
      mt = Vt(6857);

    function dt() {
      (0, Ot.loadPageShaderPackCompiler)()
    }
    async function jt() {
      const tt = await (0, Ot.loadPageShaderPackCompiler)();
      await (tt ? (0, qt.reconcileStoredShaderPackHint)(tt) : (0, qt.forgetShaderPackActiveHint)())
    }
    async function Ht(tt) {
      const et = await (0, Ot.loadPageShaderPackCompiler)();
      if (!et) return {
        status: "none"
      };
      const Vt = await (0, mt.b)(tt, et),
        dt = (0, qt.storedPackOutcome)(Vt, et);
      if ("none" === dt.kind) return {
        status: "none"
      };
      const jt = et.mtt((0, qt.storedShaderPackFiles)(Vt), (0, Dt.shaderPackTextures)());
      if ("blocked" === dt.kind) return {
        status: "blocked",
        messageKey: dt.messageKey,
        variants: 0 === jt.errors.length ? jt.variants : null
      };
      if (jt.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", jt.errors), {
        status: "none"
      };
      const {
        name: Ht,
        keepCircleShadows: Xt
      } = Vt.manifest;
      return {
        status: "active",
        pack: {
          name: Ht,
          variants: jt.variants,
          keepCircleShadows: !0 === Xt
        }
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
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);