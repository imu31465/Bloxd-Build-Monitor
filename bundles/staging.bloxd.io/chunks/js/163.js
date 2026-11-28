export const id = 163;
export const ids = [163];
export const modules = {
  54160: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      compilePagePack: () => vd,
      prefetchCompiler: () => Kd,
      reconcileHint: () => hd
    });
    var Wd = md(7566),
      Fd = md(7598),
      Rd = md(7583),
      Xd = md(7595);

    function Kd() {
      (0, Wd.loadPageShaderPackCompiler)()
    }
    async function hd() {
      const dd = await (0, Wd.loadPageShaderPackCompiler)();
      await (dd ? (0, Fd.reconcileStoredShaderPackHint)(dd) : (0, Fd.forgetShaderPackActiveHint)())
    }
    async function vd(dd) {
      const Od = await (0, Wd.loadPageShaderPackCompiler)();
      if (!Od) return {
        status: "none"
      };
      const md = await (0, Xd.c)(dd, Od),
        Kd = (0, Fd.storedPackOutcome)(md, Od);
      if ("none" === Kd.kind) return {
        status: "none"
      };
      const hd = Od.HOd((0, Fd.storedShaderPackFiles)(md), (0, Rd.shaderPackTextures)());
      if ("blocked" === Kd.kind) return {
        status: "blocked",
        messageKey: Kd.messageKey,
        variants: 0 === hd.errors.length ? hd.variants : null
      };
      if (hd.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", hd.errors), {
        status: "none"
      };
      const {
        name: vd,
        keepCircleShadows: Qd
      } = md.manifest;
      return {
        status: "active",
        pack: {
          name: vd,
          variants: hd.variants,
          keepCircleShadows: !0 === Qd
        }
      }
    }
  },
  7598: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      forgetShaderPackActiveHint: () => Sd,
      isOtherApiVersion: () => Jd,
      isShaderPackActive: () => Yd,
      isShaderPackChangePending: () => Ed,
      markShaderPackChangePending: () => wd,
      pageShaderPackValidationVersion: () => Ud,
      reconcileStoredShaderPackHint: () => Bd,
      removeShaderPack: () => pd,
      replaceShaderPack: () => yd,
      saveShaderPack: () => Hd,
      shaderPackNeedsCheck: () => xd,
      storedPackOutcome: () => gd,
      storedShaderPackFiles: () => od,
      toStoredShaderPack: () => td
    });
    var Wd = md(5954),
      Fd = md(5951),
      Rd = md(46),
      Xd = md(4674),
      Kd = md(7602),
      hd = md(7583);
    const vd = "shaderPackChangePending";
    let Qd = null;

    function td(dd, Od, md) {
      return {
        manifest: dd.manifest,
        files: (0, Wd.v)(dd.files),
        validation: Od,
        ...md && {
          listing: md
        }
      }
    }

    function od(dd) {
      return Object.keys(dd.files).map((Od => ({
        path: Od,
        source: dd.files[Od]
      })))
    }
    let Nd = Promise.resolve();

    function qd(dd) {
      const Od = Nd.then(dd);
      return Nd = Od.catch((() => {})), Od
    }

    function Hd(dd, Od) {
      return qd((() => bd(dd, Od)))
    }

    function yd(dd, Od, md) {
      return qd((async () => JSON.stringify(await (0, Kd.g)()) === JSON.stringify(dd) && (null === Od ? (await Td(), !0) : bd(Od, md))))
    }
    async function bd(dd, Od) {
      const md = await Rd.h.setItem(Kd.e, dd);
      return md && sd(dd, Od), md
    }
    async function Td() {
      await Rd.h.removeItem(Kd.e), Rd.k.removeItem(Xd.d)
    }

    function pd() {
      return qd(Td)
    }

    function Yd(dd, Od) {
      return "active" === gd(dd, Od).kind
    }

    function gd(dd, Od) {
      var md;
      return null === dd ? {
        kind: "none",
        reason: "nothingStored"
      } : Jd(dd) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (md = dd.validation) || void 0 === md ? void 0 : md.ok) || dd.validation.fromRecheck ? null === Od ? {
        kind: "none",
        reason: "noCompiler"
      } : xd(dd, Od) ? {
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

    function wd() {
      Rd.o.setItem(vd, performance.timeOrigin)
    }

    function Ed() {
      return Rd.o.getItem(vd) === performance.timeOrigin
    }

    function Jd(dd) {
      return !(0, Fd.k)(dd.manifest.apiVersion)
    }

    function Ud(dd) {
      return Qd ??= dd.HV((0, hd.shaderPackTextures)()), Qd
    }

    function xd(dd, Od) {
      var md;
      return (null === (md = dd.validation) || void 0 === md ? void 0 : md.headerVersion) !== Ud(Od)
    }

    function Bd(dd) {
      return qd((async () => {
        sd(await (0, Kd.g)(!0), dd)
      }))
    }

    function Sd() {
      return qd((async () => {
        Rd.k.removeItem(Xd.d)
      }))
    }

    function sd(dd, Od) {
      Yd(dd, Od) ? Rd.k.setItem(Xd.d, !0) : Rd.k.removeItem(Xd.d)
    }
  },
  7595: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => Kd
    });
    var Wd = md(7598),
      Fd = md(7583),
      Rd = md(132);
    const Xd = 100;
    async function Kd(dd, Od) {
      var md;
      let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (md = navigator.gpu) && void 0 !== md ? md : null;
      const Xd = dd.HOd(Od, (0, Fd.shaderPackTextures)());
      if (Xd.errors.length > 0) return vd(dd, Xd.errors, Xd.offInStrict);
      const Kd = await async function(dd) {
        if (!dd) return null;
        try {
          const Od = await (0, Rd.v)(dd);
          return Od ? await Od.requestDevice() : null
        } catch (Od) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Od), null
        }
      }(Wd);
      if (!Kd) return null;
      let hd = !1;
      Kd.lost.then((() => {
        hd = !0
      }));
      try {
        const Od = await Promise.all(Xd.validationModules.map((Od => async function(dd, Od, md) {
          Od.pushErrorScope("validation");
          const Wd = Od.createShaderModule({
              code: md.code
            }),
            Fd = Od.popErrorScope(),
            {
              messages: Rd
            } = await Wd.getCompilationInfo(),
            Xd = Rd.filter((dd => "error" === dd.type)).map((Od => dd.mapValidationMessage(md, Od))),
            Kd = await Fd;
          Kd && 0 === Xd.length && Xd.push({
            file: null,
            line: 0,
            message: Kd.message,
            variants: [md.key]
          });
          return Xd
        }(dd, Kd, Od))));
        return hd ? null : vd(dd, dd.HFd(Od.flat()), Xd.offInStrict)
      } catch (Qd) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Qd), null
      } finally {
        Kd.destroy()
      }
    }
    async function hd(dd, Od) {
      var md;
      if (!(0, Wd.shaderPackNeedsCheck)(dd, Od) || (0, Wd.isOtherApiVersion)(dd)) return dd;
      const Fd = await Kd(Od, (0, Wd.storedShaderPackFiles)(dd));
      if (!Fd) return dd;
      const Rd = !1 === (null === (md = dd.validation) || void 0 === md ? void 0 : md.ok) && !dd.validation.fromRecheck,
        Xd = {
          ...dd,
          validation: Rd ? Fd : {
            ...Fd,
            fromRecheck: !0
          }
        };
      return await (0, Wd.replaceShaderPack)(dd, Xd, Od) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xd
    }

    function vd(dd, Od, md) {
      return {
        headerVersion: (0, Wd.pageShaderPackValidationVersion)(dd),
        ok: 0 === Od.length,
        errors: Od.slice(0, Xd),
        moreErrors: Math.max(0, Od.length - Xd),
        offInStrict: md
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);