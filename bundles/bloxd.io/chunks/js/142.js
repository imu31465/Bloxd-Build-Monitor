export const id = 142;
export const ids = [142];
export const modules = {
  41994: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      compilePagePack: () => Yp,
      prefetchCompiler: () => xp,
      reconcileHint: () => Lp
    });
    var Op = cp(6758),
      op = cp(6798),
      Ip = cp(6772),
      Sp = cp(6792);

    function xp() {
      (0, Op.loadPageShaderPackCompiler)()
    }
    async function Lp() {
      const pp = await (0, Op.loadPageShaderPackCompiler)();
      await (pp ? (0, op.reconcileStoredShaderPackHint)(pp) : (0, op.forgetShaderPackActiveHint)())
    }
    async function Yp(pp) {
      const ip = await (0, Op.loadPageShaderPackCompiler)();
      if (!ip) return {
        status: "none"
      };
      const cp = await (0, Sp.e)(pp, ip),
        xp = (0, op.storedPackOutcome)(cp, ip);
      if ("none" === xp.kind) return {
        status: "none"
      };
      const Lp = ip.ipp((0, op.storedShaderPackFiles)(cp), (0, Ip.shaderPackTextures)());
      if ("blocked" === xp.kind) return {
        status: "blocked",
        messageKey: xp.messageKey,
        variants: 0 === Lp.errors.length ? Lp.variants : null
      };
      if (Lp.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Lp.errors), {
        status: "none"
      };
      const {
        name: Yp,
        keepCircleShadows: Dp
      } = cp.manifest;
      return {
        status: "active",
        pack: {
          name: Yp,
          variants: Lp.variants,
          keepCircleShadows: !0 === Dp
        }
      }
    }
  },
  6798: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      forgetShaderPackActiveHint: () => Cp,
      isOtherApiVersion: () => mp,
      isShaderPackActive: () => dp,
      isShaderPackChangePending: () => kp,
      markShaderPackChangePending: () => jp,
      pageShaderPackValidationVersion: () => Rp,
      reconcileStoredShaderPackHint: () => Mp,
      removeShaderPack: () => Hp,
      replaceShaderPack: () => wp,
      saveShaderPack: () => Up,
      shaderPackNeedsCheck: () => qp,
      storedPackOutcome: () => ep,
      storedShaderPackFiles: () => Pp,
      toStoredShaderPack: () => Ap
    });
    var Op = cp(5167),
      op = cp(5159),
      Ip = cp(44),
      Sp = cp(3564),
      xp = cp(6804),
      Lp = cp(6772);
    const Yp = "shaderPackChangePending";
    let Dp = null;

    function Ap(pp, ip, cp) {
      return {
        manifest: pp.manifest,
        files: (0, Op.v)(pp.files),
        validation: ip,
        ...cp && {
          listing: cp
        }
      }
    }

    function Pp(pp) {
      return Object.keys(pp.files).map((ip => ({
        path: ip,
        source: pp.files[ip]
      })))
    }
    let Wp = Promise.resolve();

    function yp(pp) {
      const ip = Wp.then(pp);
      return Wp = ip.catch((() => {})), ip
    }

    function Up(pp, ip) {
      return yp((() => vp(pp, ip)))
    }

    function wp(pp, ip, cp) {
      return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
    }
    async function vp(pp, ip) {
      const cp = await Ip.g.setItem(xp.e, pp);
      return cp && Ep(pp, ip), cp
    }
    async function tp() {
      await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
    }

    function Hp() {
      return yp(tp)
    }

    function dp(pp, ip) {
      return "active" === ep(pp, ip).kind
    }

    function ep(pp, ip) {
      var cp;
      return null === pp ? {
        kind: "none",
        reason: "nothingStored"
      } : mp(pp) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
        kind: "none",
        reason: "noCompiler"
      } : qp(pp, ip) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : pp.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function jp() {
      Ip.l.setItem(Yp, performance.timeOrigin)
    }

    function kp() {
      return Ip.l.getItem(Yp) === performance.timeOrigin
    }

    function mp(pp) {
      return !(0, op.k)(pp.manifest.apiVersion)
    }

    function Rp(pp) {
      return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
    }

    function qp(pp, ip) {
      var cp;
      return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
    }

    function Mp(pp) {
      return yp((async () => {
        Ep(await (0, xp.f)(!0), pp)
      }))
    }

    function Cp() {
      return yp((async () => {
        Ip.h.removeItem(Sp.d)
      }))
    }

    function Ep(pp, ip) {
      dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
    }
  },
  6792: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Lp,
      h: () => xp
    });
    var Op = cp(6798),
      op = cp(6772),
      Ip = cp(118);
    const Sp = 100;
    async function xp(pp, ip) {
      var cp;
      let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
      const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
      if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
      const xp = await async function(pp) {
        if (!pp) return null;
        try {
          const ip = await (0, Ip.s)(pp);
          return ip ? await ip.requestDevice() : null
        } catch (ip) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ip), null
        }
      }(Op);
      if (!xp) return null;
      let Lp = !1;
      xp.lost.then((() => {
        Lp = !0
      }));
      try {
        const ip = await Promise.all(Sp.validationModules.map((ip => async function(pp, ip, cp) {
          ip.pushErrorScope("validation");
          const Op = ip.createShaderModule({
              code: cp.code
            }),
            op = ip.popErrorScope(),
            {
              messages: Ip
            } = await Op.getCompilationInfo(),
            Sp = Ip.filter((pp => "error" === pp.type)).map((ip => pp.mapValidationMessage(cp, ip))),
            xp = await op;
          xp && 0 === Sp.length && Sp.push({
            file: null,
            line: 0,
            message: xp.message,
            variants: [cp.key]
          });
          return Sp
        }(pp, xp, ip))));
        return Lp ? null : Yp(pp, pp.eOp(ip.flat()), Sp.offInStrict)
      } catch (Dp) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Dp), null
      } finally {
        xp.destroy()
      }
    }
    async function Lp(pp, ip) {
      var cp;
      if (!(0, Op.shaderPackNeedsCheck)(pp, ip) || (0, Op.isOtherApiVersion)(pp)) return pp;
      const op = await xp(ip, (0, Op.storedShaderPackFiles)(pp));
      if (!op) return pp;
      const Ip = !1 === (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) && !pp.validation.fromRecheck,
        Sp = {
          ...pp,
          validation: Ip ? op : {
            ...op,
            fromRecheck: !0
          }
        };
      return await (0, Op.replaceShaderPack)(pp, Sp, ip) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Sp
    }

    function Yp(pp, ip, cp) {
      return {
        headerVersion: (0, Op.pageShaderPackValidationVersion)(pp),
        ok: 0 === ip.length,
        errors: ip.slice(0, Sp),
        moreErrors: Math.max(0, ip.length - Sp),
        offInStrict: cp
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);