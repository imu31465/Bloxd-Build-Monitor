export const id = 133;
export const ids = [133];
export const modules = {
  42003: (pp, ip, cp) => {
    cp.d(ip, {
      startHarnessShaderPack: () => Ap
    });
    var Op = cp(6704),
      op = cp(5167),
      Ip = cp(6788),
      Sp = cp(6758),
      xp = cp(5159),
      Lp = cp(39396),
      Yp = cp(6772),
      Dp = cp(6792);
    async function Ap(pp, ip) {
      const {
        stored: cp,
        info: Ap
      } = await async function(pp, ip) {
        const cp = await async function(pp) {
          const ip = await fetch(pp);
          if (!ip.ok) throw new Error(`Couldn't fetch the shader pack at ${pp}: HTTP ${ip.status}`);
          const cp = await ip.json();
          if (!(0, Op.l)(cp)) throw new Error(`The shader pack at ${pp} isn't a shader pack listing source`);
          return cp
        }(pp);
        if (!(0, xp.k)(cp.apiVersion)) throw new Error(`The pack is for shader pack API version ${cp.apiVersion}; this build runs version ${xp.e}`);
        const Lp = {
            manifest: {
              apiVersion: cp.apiVersion,
              name: cp.name,
              author: cp.author,
              description: null,
              keepCircleShadows: !0 === cp.keepCircleShadows
            },
            files: cp.files,
            validation: null
          },
          Ap = {
            url: pp,
            name: cp.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          Pp = (0, op.s)(cp.files);
        if ("string" === typeof Pp) return Ap.errors = [{
          file: null,
          line: 0,
          message: Pp
        }], {
          stored: Lp,
          info: Ap
        };
        const Wp = await (0, Sp.loadPageShaderPackCompiler)();
        if (!Wp) throw new Error("The shader pack compiler couldn't load");
        const yp = await (0, Dp.h)(Wp, Pp);
        if (!yp) throw new Error("No WebGPU device could validate the shader pack");
        if (Ap.errors = [...yp.errors], yp.ok) {
          const pp = Wp.ipp(Pp, (0, Yp.shaderPackTextures)());
          Ap.features = (0, op.p)(pp), Ap.runsInMode = (0, Ip.f)(pp.variants, ip)
        }
        return {
          stored: {
            ...Lp,
            validation: yp
          },
          info: Ap
        }
      }(pp, ip), [Pp] = Ap.errors;
      if (Pp) {
        const pp = null === Pp.file ? "" : `${Pp.file}:${Pp.line}: `,
          ip = Ap.errors.length > 1 ? ` (${Ap.errors.length-1} more)` : "";
        return {
          info: Ap,
          problem: `The shader pack doesn't compile: ${pp}${Pp.message}${ip}`
        }
      }
      return Ap.runsInMode ? ((0, Lp.setHarnessUrlShaderPack)(cp, ip), {
        info: Ap,
        problem: null
      }) : {
        info: Ap,
        problem: `The shader pack runs nothing in ${ip} mode`
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
  },
  6704: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Ip,
      D: () => xp,
      G: () => Sp,
      J: () => Op,
      M: () => Pp,
      P: () => Dp,
      S: () => dp,
      V: () => Ap,
      W: () => Yp,
      d: () => yp,
      g: () => wp,
      j: () => Up,
      l: () => Wp,
      n: () => Hp,
      r: () => jp,
      t: () => Lp,
      u: () => op,
      x: () => ep
    });
    const Op = ["forest", "desert", "water", "night", "cave"];
    const op = {
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
      Ip = ["popular", "updated", "newest"],
      Sp = 3,
      xp = 32,
      Lp = 300;

    function Yp(pp, ip) {
      return pp.slice(0, ip).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Dp = 64,
      Ap = 512,
      Pp = 18e5;

    function Wp(pp) {
      const ip = pp,
        cp = null === ip || void 0 === ip ? void 0 : ip.files;
      return "number" === typeof(null === ip || void 0 === ip ? void 0 : ip.apiVersion) && "string" === typeof ip.name && (null === ip.author || "string" === typeof ip.author) && (void 0 === ip.keepCircleShadows || "boolean" === typeof ip.keepCircleShadows) && "object" === typeof cp && null !== cp && Object.values(cp).every((pp => "string" === typeof pp))
    }
    const yp = "Bloxdhub",
      Up = "https://bloxdhub.com/shaders";

    function wp(pp) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
    }
    const vp = "Screenshot generation failed.",
      tp = "Its screenshots couldn't be generated:";

    function Hp(pp) {
      var ip;
      return pp === vp || null !== (ip = null === pp || void 0 === pp ? void 0 : pp.startsWith(tp)) && void 0 !== ip && ip
    }

    function dp(pp, ip) {
      return `shaderPacks/${pp}/${ip}.json`
    }

    function ep(pp, ip, cp, Op) {
      return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
    }

    function jp(pp, ip, cp, Op) {
      return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);