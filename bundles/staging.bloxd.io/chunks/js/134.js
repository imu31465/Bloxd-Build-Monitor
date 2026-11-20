export const id = 134;
export const ids = [134];
export const modules = {
  41051: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      compilePagePack: () => Nv,
      prefetchCompiler: () => pv,
      reconcileHint: () => dv
    });
    var hv = Pv(6339),
      Sv = Pv(6369),
      ev = Pv(6351),
      gv = Pv(6367);

    function pv() {
      (0, hv.loadPageShaderPackCompiler)()
    }
    async function dv() {
      const vv = await (0, hv.loadPageShaderPackCompiler)();
      await (vv ? (0, Sv.reconcileStoredShaderPackHint)(vv) : (0, Sv.forgetShaderPackActiveHint)())
    }
    async function Nv(vv) {
      const zv = await (0, hv.loadPageShaderPackCompiler)();
      if (!zv) return {
        status: "none"
      };
      const Pv = await (0, gv.c)(vv, zv),
        pv = (0, Sv.storedPackOutcome)(Pv, zv);
      if ("none" === pv.kind) return {
        status: "none"
      };
      const dv = zv.L_((0, Sv.storedShaderPackFiles)(Pv), (0, ev.shaderPackTextures)());
      if ("blocked" === pv.kind) return {
        status: "blocked",
        messageKey: pv.messageKey,
        variants: 0 === dv.errors.length ? dv.variants : null
      };
      if (dv.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", dv.errors), {
        status: "none"
      };
      const {
        name: Nv,
        keepCircleShadows: lv
      } = Pv.manifest;
      return {
        status: "active",
        pack: {
          name: Nv,
          variants: dv.variants,
          keepCircleShadows: !0 === lv
        }
      }
    }
  },
  6369: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      forgetShaderPackActiveHint: () => Kv,
      isOtherApiVersion: () => Yv,
      isShaderPackActive: () => mv,
      isShaderPackChangePending: () => Fv,
      markShaderPackChangePending: () => fv,
      pageShaderPackValidationVersion: () => nv,
      reconcileStoredShaderPackHint: () => Dv,
      removeShaderPack: () => Gv,
      replaceShaderPack: () => Cv,
      saveShaderPack: () => sv,
      shaderPackNeedsCheck: () => Ov,
      storedPackOutcome: () => jv,
      storedShaderPackFiles: () => Wv,
      toStoredShaderPack: () => Tv
    });
    var hv = Pv(6306),
      Sv = Pv(6328),
      ev = Pv(39),
      gv = Pv(3201),
      pv = Pv(6377),
      dv = Pv(6351);
    const Nv = "shaderPackChangePending";
    let lv = null;

    function Tv(vv, zv, Pv) {
      return {
        manifest: vv.manifest,
        files: (0, hv.u)(vv.files),
        validation: zv,
        ...Pv && {
          listing: Pv
        }
      }
    }

    function Wv(vv) {
      return Object.keys(vv.files).map((zv => ({
        path: zv,
        source: vv.files[zv]
      })))
    }
    let wv = Promise.resolve();

    function av(vv) {
      const zv = wv.then(vv);
      return wv = zv.catch((() => {})), zv
    }

    function sv(vv, zv) {
      return av((() => iv(vv, zv)))
    }

    function Cv(vv, zv, Pv) {
      return av((async () => JSON.stringify(await (0, pv.g)()) === JSON.stringify(vv) && (null === zv ? (await cv(), !0) : iv(zv, Pv))))
    }
    async function iv(vv, zv) {
      const Pv = await ev.f.setItem(pv.c, vv);
      return Pv && Vv(vv, zv), Pv
    }
    async function cv() {
      await ev.f.removeItem(pv.c), ev.h.removeItem(gv.b)
    }

    function Gv() {
      return av(cv)
    }

    function mv(vv, zv) {
      return "active" === jv(vv, zv).kind
    }

    function jv(vv, zv) {
      var Pv;
      return null === vv ? {
        kind: "none",
        reason: "nothingStored"
      } : Yv(vv) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.ok) || vv.validation.fromRecheck ? null === zv ? {
        kind: "none",
        reason: "noCompiler"
      } : Ov(vv, zv) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : vv.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function fv() {
      ev.l.setItem(Nv, performance.timeOrigin)
    }

    function Fv() {
      return ev.l.getItem(Nv) === performance.timeOrigin
    }

    function Yv(vv) {
      return !(0, Sv.i)(vv.manifest.apiVersion)
    }

    function nv(vv) {
      return lv ??= vv.RD((0, dv.shaderPackTextures)()), lv
    }

    function Ov(vv, zv) {
      var Pv;
      return (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.headerVersion) !== nv(zv)
    }

    function Dv(vv) {
      return av((async () => {
        Vv(await (0, pv.g)(!0), vv)
      }))
    }

    function Kv() {
      return av((async () => {
        ev.h.removeItem(gv.b)
      }))
    }

    function Vv(vv, zv) {
      mv(vv, zv) ? ev.h.setItem(gv.b, !0) : ev.h.removeItem(gv.b)
    }
  },
  6367: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      e: () => pv
    });
    var hv = Pv(6369),
      Sv = Pv(6351),
      ev = Pv(90);
    const gv = 100;
    async function pv(vv, zv) {
      var Pv;
      let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Pv = navigator.gpu) && void 0 !== Pv ? Pv : null;
      const gv = vv.L_(zv, (0, Sv.shaderPackTextures)());
      if (gv.errors.length > 0) return Nv(vv, gv.errors, gv.offInStrict);
      const pv = await async function(vv) {
        if (!vv) return null;
        try {
          const zv = await (0, ev.m)(vv);
          return zv ? await zv.requestDevice() : null
        } catch (zv) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zv), null
        }
      }(hv);
      if (!pv) return null;
      let dv = !1;
      pv.lost.then((() => {
        dv = !0
      }));
      try {
        const zv = await Promise.all(gv.validationModules.map((zv => async function(vv, zv, Pv) {
          zv.pushErrorScope("validation");
          const hv = zv.createShaderModule({
              code: Pv.code
            }),
            Sv = zv.popErrorScope(),
            {
              messages: ev
            } = await hv.getCompilationInfo(),
            gv = ev.filter((vv => "error" === vv.type)).map((zv => vv.mapValidationMessage(Pv, zv))),
            pv = await Sv;
          pv && 0 === gv.length && gv.push({
            file: null,
            line: 0,
            message: pv.message,
            variants: [Pv.key]
          });
          return gv
        }(vv, pv, zv))));
        return dv ? null : Nv(vv, vv.Jzv(zv.flat()), gv.offInStrict)
      } catch (lv) {
        return console.error("Couldn't validate the shader pack on WebGPU.", lv), null
      } finally {
        pv.destroy()
      }
    }
    async function dv(vv, zv) {
      var Pv;
      if (!(0, hv.shaderPackNeedsCheck)(vv, zv) || (0, hv.isOtherApiVersion)(vv)) return vv;
      const Sv = await pv(zv, (0, hv.storedShaderPackFiles)(vv));
      if (!Sv) return vv;
      const ev = !1 === (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.ok) && !vv.validation.fromRecheck,
        gv = {
          ...vv,
          validation: ev ? Sv : {
            ...Sv,
            fromRecheck: !0
          }
        };
      return await (0, hv.replaceShaderPack)(vv, gv, zv) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), gv
    }

    function Nv(vv, zv, Pv) {
      return {
        headerVersion: (0, hv.pageShaderPackValidationVersion)(vv),
        ok: 0 === zv.length,
        errors: zv.slice(0, gv),
        moreErrors: Math.max(0, zv.length - gv),
        offInStrict: Pv
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);