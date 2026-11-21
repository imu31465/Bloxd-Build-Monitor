export const id = 135;
export const ids = [135];
export const modules = {
  41706: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      compilePagePack: () => Cd,
      prefetchCompiler: () => Zd,
      reconcileHint: () => gd
    });
    var pd = kd(6478),
      Nd = kd(6526),
      Wd = kd(6496),
      Pd = kd(6522);

    function Zd() {
      (0, pd.loadPageShaderPackCompiler)()
    }
    async function gd() {
      const dd = await (0, pd.loadPageShaderPackCompiler)();
      await (dd ? (0, Nd.reconcileStoredShaderPackHint)(dd) : (0, Nd.forgetShaderPackActiveHint)())
    }
    async function Cd(dd) {
      const Jd = await (0, pd.loadPageShaderPackCompiler)();
      if (!Jd) return {
        status: "none"
      };
      const kd = await (0, Pd.d)(dd, Jd),
        Zd = (0, Nd.storedPackOutcome)(kd, Jd);
      if ("none" === Zd.kind) return {
        status: "none"
      };
      const gd = Jd.Kdd((0, Nd.storedShaderPackFiles)(kd), (0, Wd.shaderPackTextures)());
      if ("blocked" === Zd.kind) return {
        status: "blocked",
        messageKey: Zd.messageKey,
        variants: 0 === gd.errors.length ? gd.variants : null
      };
      if (gd.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", gd.errors), {
        status: "none"
      };
      const {
        name: Cd,
        keepCircleShadows: Kd
      } = kd.manifest;
      return {
        status: "active",
        pack: {
          name: Cd,
          variants: gd.variants,
          keepCircleShadows: !0 === Kd
        }
      }
    }
  },
  6526: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      forgetShaderPackActiveHint: () => Yd,
      isOtherApiVersion: () => sd,
      isShaderPackActive: () => vd,
      isShaderPackChangePending: () => Bd,
      markShaderPackChangePending: () => qd,
      pageShaderPackValidationVersion: () => ad,
      reconcileStoredShaderPackHint: () => Fd,
      removeShaderPack: () => Gd,
      replaceShaderPack: () => ed,
      saveShaderPack: () => Od,
      shaderPackNeedsCheck: () => Md,
      storedPackOutcome: () => xd,
      storedShaderPackFiles: () => ld,
      toStoredShaderPack: () => od
    });
    var pd = kd(6457),
      Nd = kd(6466),
      Wd = kd(33),
      Pd = kd(3282),
      Zd = kd(6534),
      gd = kd(6496);
    const Cd = "shaderPackChangePending";
    let Kd = null;

    function od(dd, Jd, kd) {
      return {
        manifest: dd.manifest,
        files: (0, pd.v)(dd.files),
        validation: Jd,
        ...kd && {
          listing: kd
        }
      }
    }

    function ld(dd) {
      return Object.keys(dd.files).map((Jd => ({
        path: Jd,
        source: dd.files[Jd]
      })))
    }
    let Qd = Promise.resolve();

    function Ld(dd) {
      const Jd = Qd.then(dd);
      return Qd = Jd.catch((() => {})), Jd
    }

    function Od(dd, Jd) {
      return Ld((() => Rd(dd, Jd)))
    }

    function ed(dd, Jd, kd) {
      return Ld((async () => JSON.stringify(await (0, Zd.g)()) === JSON.stringify(dd) && (null === Jd ? (await Id(), !0) : Rd(Jd, kd))))
    }
    async function Rd(dd, Jd) {
      const kd = await Wd.f.setItem(Zd.c, dd);
      return kd && md(dd, Jd), kd
    }
    async function Id() {
      await Wd.f.removeItem(Zd.c), Wd.i.removeItem(Pd.b)
    }

    function Gd() {
      return Ld(Id)
    }

    function vd(dd, Jd) {
      return "active" === xd(dd, Jd).kind
    }

    function xd(dd, Jd) {
      var kd;
      return null === dd ? {
        kind: "none",
        reason: "nothingStored"
      } : sd(dd) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.ok) || dd.validation.fromRecheck ? null === Jd ? {
        kind: "none",
        reason: "noCompiler"
      } : Md(dd, Jd) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : dd.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function qd() {
      Wd.k.setItem(Cd, performance.timeOrigin)
    }

    function Bd() {
      return Wd.k.getItem(Cd) === performance.timeOrigin
    }

    function sd(dd) {
      return !(0, Nd.m)(dd.manifest.apiVersion)
    }

    function ad(dd) {
      return Kd ??= dd.rY((0, gd.shaderPackTextures)()), Kd
    }

    function Md(dd, Jd) {
      var kd;
      return (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.headerVersion) !== ad(Jd)
    }

    function Fd(dd) {
      return Ld((async () => {
        md(await (0, Zd.g)(!0), dd)
      }))
    }

    function Yd() {
      return Ld((async () => {
        Wd.i.removeItem(Pd.b)
      }))
    }

    function md(dd, Jd) {
      vd(dd, Jd) ? Wd.i.setItem(Pd.b, !0) : Wd.i.removeItem(Pd.b)
    }
  },
  6522: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd,
      f: () => Zd
    });
    var pd = kd(6526),
      Nd = kd(6496),
      Wd = kd(111);
    const Pd = 100;
    async function Zd(dd, Jd) {
      var kd;
      let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (kd = navigator.gpu) && void 0 !== kd ? kd : null;
      const Pd = dd.Kdd(Jd, (0, Nd.shaderPackTextures)());
      if (Pd.errors.length > 0) return Cd(dd, Pd.errors, Pd.offInStrict);
      const Zd = await async function(dd) {
        if (!dd) return null;
        try {
          const Jd = await (0, Wd.p)(dd);
          return Jd ? await Jd.requestDevice() : null
        } catch (Jd) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Jd), null
        }
      }(pd);
      if (!Zd) return null;
      let gd = !1;
      Zd.lost.then((() => {
        gd = !0
      }));
      try {
        const Jd = await Promise.all(Pd.validationModules.map((Jd => async function(dd, Jd, kd) {
          Jd.pushErrorScope("validation");
          const pd = Jd.createShaderModule({
              code: kd.code
            }),
            Nd = Jd.popErrorScope(),
            {
              messages: Wd
            } = await pd.getCompilationInfo(),
            Pd = Wd.filter((dd => "error" === dd.type)).map((Jd => dd.mapValidationMessage(kd, Jd))),
            Zd = await Nd;
          Zd && 0 === Pd.length && Pd.push({
            file: null,
            line: 0,
            message: Zd.message,
            variants: [kd.key]
          });
          return Pd
        }(dd, Zd, Jd))));
        return gd ? null : Cd(dd, dd.gpd(Jd.flat()), Pd.offInStrict)
      } catch (Kd) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Kd), null
      } finally {
        Zd.destroy()
      }
    }
    async function gd(dd, Jd) {
      var kd;
      if (!(0, pd.shaderPackNeedsCheck)(dd, Jd) || (0, pd.isOtherApiVersion)(dd)) return dd;
      const Nd = await Zd(Jd, (0, pd.storedShaderPackFiles)(dd));
      if (!Nd) return dd;
      const Wd = !1 === (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.ok) && !dd.validation.fromRecheck,
        Pd = {
          ...dd,
          validation: Wd ? Nd : {
            ...Nd,
            fromRecheck: !0
          }
        };
      return await (0, pd.replaceShaderPack)(dd, Pd, Jd) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Pd
    }

    function Cd(dd, Jd, kd) {
      return {
        headerVersion: (0, pd.pageShaderPackValidationVersion)(dd),
        ok: 0 === Jd.length,
        errors: Jd.slice(0, Pd),
        moreErrors: Math.max(0, Jd.length - Pd),
        offInStrict: kd
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);