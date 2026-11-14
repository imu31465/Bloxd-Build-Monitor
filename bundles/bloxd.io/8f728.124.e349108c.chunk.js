export const id = 124;
export const ids = [124];
export const modules = {
  39695: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      compilePagePack: () => Pc,
      prefetchCompiler: () => sc,
      reconcileHint: () => Mc
    });
    var Vc = nc(5583),
      Ic = nc(5624),
      rB = nc(5608),
      uc = nc(5618);

    function sc() {
      (0, Vc.loadPageShaderPackCompiler)()
    }
    async function Mc() {
      const cB = await (0, Vc.loadPageShaderPackCompiler)();
      await (cB ? (0, Ic.reconcileStoredShaderPackHint)(cB) : (0, Ic.forgetShaderPackActiveHint)())
    }
    async function Pc(cB) {
      const Bc = await (0, Vc.loadPageShaderPackCompiler)();
      if (!Bc) return {
        status: "none"
      };
      const nc = await (0, uc.d)(cB, Bc),
        sc = (0, Ic.storedPackOutcome)(nc, Bc);
      if ("none" === sc.kind) return {
        status: "none"
      };
      const Mc = Bc.Cuc((0, Ic.storedShaderPackFiles)(nc), (0, rB.shaderPackTextures)());
      if ("blocked" === sc.kind) return {
        status: "blocked",
        messageKey: sc.messageKey,
        variants: 0 === Mc.errors.length ? Mc.variants : null
      };
      if (Mc.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Mc.errors), {
        status: "none"
      };
      const {
        name: Pc,
        keepCircleShadows: qB
      } = nc.manifest;
      return {
        status: "active",
        pack: {
          name: Pc,
          variants: Mc.variants,
          keepCircleShadows: !0 === qB
        }
      }
    }
  },
  5624: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      forgetShaderPackActiveHint: () => bB,
      isOtherApiVersion: () => Yc,
      isShaderPackActive: () => pc,
      isShaderPackChangePending: () => lc,
      markShaderPackChangePending: () => aB,
      pageShaderPackValidationVersion: () => Lc,
      reconcileStoredShaderPackHint: () => Uc,
      removeShaderPack: () => zB,
      replaceShaderPack: () => tB,
      saveShaderPack: () => ec,
      shaderPackNeedsCheck: () => gB,
      storedPackOutcome: () => hc,
      storedShaderPackFiles: () => Tc,
      toStoredShaderPack: () => Oc
    });
    var Vc = nc(5561),
      Ic = nc(5570),
      rB = nc(51),
      uc = nc(2585),
      sc = nc(5626),
      Mc = nc(5608);
    const Pc = "shaderPackChangePending";
    let qB = null;

    function Oc(cB, Bc, nc) {
      return {
        manifest: cB.manifest,
        files: (0, Vc.u)(cB.files),
        validation: Bc,
        ...nc && {
          listing: nc
        }
      }
    }

    function Tc(cB) {
      return Object.keys(cB.files).map((Bc => ({
        path: Bc,
        source: cB.files[Bc]
      })))
    }
    let fc = Promise.resolve();

    function mB(cB) {
      const Bc = fc.then(cB);
      return fc = Bc.catch((() => {})), Bc
    }

    function ec(cB, Bc) {
      return mB((() => Sc(cB, Bc)))
    }

    function tB(cB, Bc, nc) {
      return mB((async () => JSON.stringify(await (0, sc.e)()) === JSON.stringify(cB) && (null === Bc ? (await yB(), !0) : Sc(Bc, nc))))
    }
    async function Sc(cB, Bc) {
      const nc = await rB.d.setItem(sc.c, cB);
      return nc && Zc(cB, Bc), nc
    }
    async function yB() {
      await rB.d.removeItem(sc.c), rB.h.removeItem(uc.b)
    }

    function zB() {
      return mB(yB)
    }

    function pc(cB, Bc) {
      return "active" === hc(cB, Bc).kind
    }

    function hc(cB, Bc) {
      var nc;
      return null === cB ? {
        kind: "none",
        reason: "nothingStored"
      } : Yc(cB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.ok) || cB.validation.fromRecheck ? null === Bc ? {
        kind: "none",
        reason: "noCompiler"
      } : gB(cB, Bc) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : cB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function aB() {
      rB.i.setItem(Pc, performance.timeOrigin)
    }

    function lc() {
      return rB.i.getItem(Pc) === performance.timeOrigin
    }

    function Yc(cB) {
      return !(0, Ic.k)(cB.manifest.apiVersion)
    }

    function Lc(cB) {
      return qB ??= cB.EBc((0, Mc.shaderPackTextures)()), qB
    }

    function gB(cB, Bc) {
      var nc;
      return (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.headerVersion) !== Lc(Bc)
    }

    function Uc(cB) {
      return mB((async () => {
        Zc(await (0, sc.e)(!0), cB)
      }))
    }

    function bB() {
      return mB((async () => {
        rB.h.removeItem(uc.b)
      }))
    }

    function Zc(cB, Bc) {
      pc(cB, Bc) ? rB.h.setItem(uc.b, !0) : rB.h.removeItem(uc.b)
    }
  },
  5618: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Mc,
      h: () => sc
    });
    var Vc = nc(5624),
      Ic = nc(5608),
      rB = nc(134);
    const uc = 100;
    async function sc(cB, Bc) {
      var nc;
      let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (nc = navigator.gpu) && void 0 !== nc ? nc : null;
      const uc = cB.Cuc(Bc, (0, Ic.shaderPackTextures)());
      if (uc.errors.length > 0) return Pc(cB, uc.errors, uc.offInStrict);
      const sc = await async function(cB) {
        if (!cB) return null;
        try {
          const Bc = await (0, rB.s)(cB);
          return Bc ? await Bc.requestDevice() : null
        } catch (Bc) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Bc), null
        }
      }(Vc);
      if (!sc) return null;
      let Mc = !1;
      sc.lost.then((() => {
        Mc = !0
      }));
      try {
        const Bc = await Promise.all(uc.validationModules.map((Bc => async function(cB, Bc, nc) {
          Bc.pushErrorScope("validation");
          const Vc = Bc.createShaderModule({
              code: nc.code
            }),
            Ic = Bc.popErrorScope(),
            {
              messages: rB
            } = await Vc.getCompilationInfo(),
            uc = rB.filter((cB => "error" === cB.type)).map((Bc => cB.mapValidationMessage(nc, Bc))),
            sc = await Ic;
          sc && 0 === uc.length && uc.push({
            file: null,
            line: 0,
            message: sc.message,
            variants: [nc.key]
          });
          return uc
        }(cB, sc, Bc))));
        return Mc ? null : Pc(cB, cB.UPc(Bc.flat()), uc.offInStrict)
      } catch (qB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", qB), null
      } finally {
        sc.destroy()
      }
    }
    async function Mc(cB, Bc) {
      var nc;
      if (!(0, Vc.shaderPackNeedsCheck)(cB, Bc) || (0, Vc.isOtherApiVersion)(cB)) return cB;
      const Ic = await sc(Bc, (0, Vc.storedShaderPackFiles)(cB));
      if (!Ic) return cB;
      const rB = !1 === (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.ok) && !cB.validation.fromRecheck,
        uc = {
          ...cB,
          validation: rB ? Ic : {
            ...Ic,
            fromRecheck: !0
          }
        };
      return await (0, Vc.replaceShaderPack)(cB, uc, Bc) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), uc
    }

    function Pc(cB, Bc, nc) {
      return {
        headerVersion: (0, Vc.pageShaderPackValidationVersion)(cB),
        ok: 0 === Bc.length,
        errors: Bc.slice(0, uc),
        moreErrors: Math.max(0, Bc.length - uc),
        offInStrict: nc
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);