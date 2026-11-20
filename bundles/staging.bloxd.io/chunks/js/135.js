export const id = 135;
export const ids = [135];
export const modules = {
  41206: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      compilePagePack: () => Sb,
      prefetchCompiler: () => Lb,
      reconcileHint: () => Yb
    });
    var Bb = hb(6350),
      Ob = hb(6388),
      Gb = hb(6365),
      Ub = hb(6384);

    function Lb() {
      (0, Bb.loadPageShaderPackCompiler)()
    }
    async function Yb() {
      const bb = await (0, Bb.loadPageShaderPackCompiler)();
      await (bb ? (0, Ob.reconcileStoredShaderPackHint)(bb) : (0, Ob.forgetShaderPackActiveHint)())
    }
    async function Sb(bb) {
      const ub = await (0, Bb.loadPageShaderPackCompiler)();
      if (!ub) return {
        status: "none"
      };
      const hb = await (0, Ub.c)(bb, ub),
        Lb = (0, Ob.storedPackOutcome)(hb, ub);
      if ("none" === Lb.kind) return {
        status: "none"
      };
      const Yb = ub.k_((0, Ob.storedShaderPackFiles)(hb), (0, Gb.shaderPackTextures)());
      if ("blocked" === Lb.kind) return {
        status: "blocked",
        messageKey: Lb.messageKey,
        variants: 0 === Yb.errors.length ? Yb.variants : null
      };
      if (Yb.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Yb.errors), {
        status: "none"
      };
      const {
        name: Sb,
        keepCircleShadows: ab
      } = hb.manifest;
      return {
        status: "active",
        pack: {
          name: Sb,
          variants: Yb.variants,
          keepCircleShadows: !0 === ab
        }
      }
    }
  },
  6388: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      forgetShaderPackActiveHint: () => zb,
      isOtherApiVersion: () => jb,
      isShaderPackActive: () => Wb,
      isShaderPackChangePending: () => rb,
      markShaderPackChangePending: () => db,
      pageShaderPackValidationVersion: () => nb,
      reconcileStoredShaderPackHint: () => xb,
      removeShaderPack: () => Kb,
      replaceShaderPack: () => ob,
      saveShaderPack: () => pb,
      shaderPackNeedsCheck: () => Db,
      storedPackOutcome: () => Cb,
      storedShaderPackFiles: () => wb,
      toStoredShaderPack: () => Hb
    });
    var Bb = hb(6324),
      Ob = hb(6344),
      Gb = hb(29),
      Ub = hb(3237),
      Lb = hb(6394),
      Yb = hb(6365);
    const Sb = "shaderPackChangePending";
    let ab = null;

    function Hb(bb, ub, hb) {
      return {
        manifest: bb.manifest,
        files: (0, Bb.v)(bb.files),
        validation: ub,
        ...hb && {
          listing: hb
        }
      }
    }

    function wb(bb) {
      return Object.keys(bb.files).map((ub => ({
        path: ub,
        source: bb.files[ub]
      })))
    }
    let Zb = Promise.resolve();

    function Xb(bb) {
      const ub = Zb.then(bb);
      return Zb = ub.catch((() => {})), ub
    }

    function pb(bb, ub) {
      return Xb((() => Ab(bb, ub)))
    }

    function ob(bb, ub, hb) {
      return Xb((async () => JSON.stringify(await (0, Lb.g)()) === JSON.stringify(bb) && (null === ub ? (await lb(), !0) : Ab(ub, hb))))
    }
    async function Ab(bb, ub) {
      const hb = await Gb.f.setItem(Lb.d, bb);
      return hb && gb(bb, ub), hb
    }
    async function lb() {
      await Gb.f.removeItem(Lb.d), Gb.j.removeItem(Ub.d)
    }

    function Kb() {
      return Xb(lb)
    }

    function Wb(bb, ub) {
      return "active" === Cb(bb, ub).kind
    }

    function Cb(bb, ub) {
      var hb;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : jb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.ok) || bb.validation.fromRecheck ? null === ub ? {
        kind: "none",
        reason: "noCompiler"
      } : Db(bb, ub) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : bb.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function db() {
      Gb.m.setItem(Sb, performance.timeOrigin)
    }

    function rb() {
      return Gb.m.getItem(Sb) === performance.timeOrigin
    }

    function jb(bb) {
      return !(0, Ob.i)(bb.manifest.apiVersion)
    }

    function nb(bb) {
      return ab ??= bb.VJ((0, Yb.shaderPackTextures)()), ab
    }

    function Db(bb, ub) {
      var hb;
      return (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.headerVersion) !== nb(ub)
    }

    function xb(bb) {
      return Xb((async () => {
        gb(await (0, Lb.g)(!0), bb)
      }))
    }

    function zb() {
      return Xb((async () => {
        Gb.j.removeItem(Ub.d)
      }))
    }

    function gb(bb, ub) {
      Wb(bb, ub) ? Gb.j.setItem(Ub.d, !0) : Gb.j.removeItem(Ub.d)
    }
  },
  6384: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      d: () => Lb
    });
    var Bb = hb(6388),
      Ob = hb(6365),
      Gb = hb(104);
    const Ub = 100;
    async function Lb(bb, ub) {
      var hb;
      let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (hb = navigator.gpu) && void 0 !== hb ? hb : null;
      const Ub = bb.k_(ub, (0, Ob.shaderPackTextures)());
      if (Ub.errors.length > 0) return Sb(bb, Ub.errors, Ub.offInStrict);
      const Lb = await async function(bb) {
        if (!bb) return null;
        try {
          const ub = await (0, Gb.x)(bb);
          return ub ? await ub.requestDevice() : null
        } catch (ub) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ub), null
        }
      }(Bb);
      if (!Lb) return null;
      let Yb = !1;
      Lb.lost.then((() => {
        Yb = !0
      }));
      try {
        const ub = await Promise.all(Ub.validationModules.map((ub => async function(bb, ub, hb) {
          ub.pushErrorScope("validation");
          const Bb = ub.createShaderModule({
              code: hb.code
            }),
            Ob = ub.popErrorScope(),
            {
              messages: Gb
            } = await Bb.getCompilationInfo(),
            Ub = Gb.filter((bb => "error" === bb.type)).map((ub => bb.mapValidationMessage(hb, ub))),
            Lb = await Ob;
          Lb && 0 === Ub.length && Ub.push({
            file: null,
            line: 0,
            message: Lb.message,
            variants: [hb.key]
          });
          return Ub
        }(bb, Lb, ub))));
        return Yb ? null : Sb(bb, bb.Rhb(ub.flat()), Ub.offInStrict)
      } catch (ab) {
        return console.error("Couldn't validate the shader pack on WebGPU.", ab), null
      } finally {
        Lb.destroy()
      }
    }
    async function Yb(bb, ub) {
      var hb;
      if (!(0, Bb.shaderPackNeedsCheck)(bb, ub) || (0, Bb.isOtherApiVersion)(bb)) return bb;
      const Ob = await Lb(ub, (0, Bb.storedShaderPackFiles)(bb));
      if (!Ob) return bb;
      const Gb = !1 === (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.ok) && !bb.validation.fromRecheck,
        Ub = {
          ...bb,
          validation: Gb ? Ob : {
            ...Ob,
            fromRecheck: !0
          }
        };
      return await (0, Bb.replaceShaderPack)(bb, Ub, ub) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Ub
    }

    function Sb(bb, ub, hb) {
      return {
        headerVersion: (0, Bb.pageShaderPackValidationVersion)(bb),
        ok: 0 === ub.length,
        errors: ub.slice(0, Ub),
        moreErrors: Math.max(0, ub.length - Ub),
        offInStrict: hb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);