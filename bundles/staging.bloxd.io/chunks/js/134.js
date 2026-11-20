export const id = 134;
export const ids = [134];
export const modules = {
  41144: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      compilePagePack: () => Hb,
      prefetchCompiler: () => Ub,
      reconcileHint: () => Ib
    });
    var kb = sb(6276),
      Wb = sb(6321),
      ab = sb(6301),
      Tb = sb(6314);

    function Ub() {
      (0, kb.loadPageShaderPackCompiler)()
    }
    async function Ib() {
      const bb = await (0, kb.loadPageShaderPackCompiler)();
      await (bb ? (0, Wb.reconcileStoredShaderPackHint)(bb) : (0, Wb.forgetShaderPackActiveHint)())
    }
    async function Hb(bb) {
      const cb = await (0, kb.loadPageShaderPackCompiler)();
      if (!cb) return {
        status: "none"
      };
      const sb = await (0, Tb.c)(bb, cb),
        Ub = (0, Wb.storedPackOutcome)(sb, cb);
      if ("none" === Ub.kind) return {
        status: "none"
      };
      const Ib = cb.N9((0, Wb.storedShaderPackFiles)(sb), (0, ab.shaderPackTextures)());
      if ("blocked" === Ub.kind) return {
        status: "blocked",
        messageKey: Ub.messageKey,
        variants: 0 === Ib.errors.length ? Ib.variants : null
      };
      if (Ib.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Ib.errors), {
        status: "none"
      };
      const {
        name: Hb,
        keepCircleShadows: fb
      } = sb.manifest;
      return {
        status: "active",
        pack: {
          name: Hb,
          variants: Ib.variants,
          keepCircleShadows: !0 === fb
        }
      }
    }
  },
  6321: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      forgetShaderPackActiveHint: () => tb,
      isOtherApiVersion: () => hb,
      isShaderPackActive: () => Vb,
      isShaderPackChangePending: () => Yb,
      markShaderPackChangePending: () => ub,
      pageShaderPackValidationVersion: () => Jb,
      reconcileStoredShaderPackHint: () => Bb,
      removeShaderPack: () => Nb,
      replaceShaderPack: () => Qb,
      saveShaderPack: () => lb,
      shaderPackNeedsCheck: () => gb,
      storedPackOutcome: () => Lb,
      storedShaderPackFiles: () => Xb,
      toStoredShaderPack: () => Mb
    });
    var kb = sb(6250),
      Wb = sb(6269),
      ab = sb(37),
      Tb = sb(3222),
      Ub = sb(6328),
      Ib = sb(6301);
    const Hb = "shaderPackChangePending";
    let fb = null;

    function Mb(bb, cb, sb) {
      return {
        manifest: bb.manifest,
        files: (0, kb.u)(bb.files),
        validation: cb,
        ...sb && {
          listing: sb
        }
      }
    }

    function Xb(bb) {
      return Object.keys(bb.files).map((cb => ({
        path: cb,
        source: bb.files[cb]
      })))
    }
    let nb = Promise.resolve();

    function mb(bb) {
      const cb = nb.then(bb);
      return nb = cb.catch((() => {})), cb
    }

    function lb(bb, cb) {
      return mb((() => eb(bb, cb)))
    }

    function Qb(bb, cb, sb) {
      return mb((async () => JSON.stringify(await (0, Ub.d)()) === JSON.stringify(bb) && (null === cb ? (await Cb(), !0) : eb(cb, sb))))
    }
    async function eb(bb, cb) {
      const sb = await ab.d.setItem(Ub.b, bb);
      return sb && yb(bb, cb), sb
    }
    async function Cb() {
      await ab.d.removeItem(Ub.b), ab.h.removeItem(Tb.c)
    }

    function Nb() {
      return mb(Cb)
    }

    function Vb(bb, cb) {
      return "active" === Lb(bb, cb).kind
    }

    function Lb(bb, cb) {
      var sb;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : hb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (sb = bb.validation) || void 0 === sb ? void 0 : sb.ok) || bb.validation.fromRecheck ? null === cb ? {
        kind: "none",
        reason: "noCompiler"
      } : gb(bb, cb) ? {
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

    function ub() {
      ab.i.setItem(Hb, performance.timeOrigin)
    }

    function Yb() {
      return ab.i.getItem(Hb) === performance.timeOrigin
    }

    function hb(bb) {
      return !(0, Wb.k)(bb.manifest.apiVersion)
    }

    function Jb(bb) {
      return fb ??= bb.lY((0, Ib.shaderPackTextures)()), fb
    }

    function gb(bb, cb) {
      var sb;
      return (null === (sb = bb.validation) || void 0 === sb ? void 0 : sb.headerVersion) !== Jb(cb)
    }

    function Bb(bb) {
      return mb((async () => {
        yb(await (0, Ub.d)(!0), bb)
      }))
    }

    function tb() {
      return mb((async () => {
        ab.h.removeItem(Tb.c)
      }))
    }

    function yb(bb, cb) {
      Vb(bb, cb) ? ab.h.setItem(Tb.c, !0) : ab.h.removeItem(Tb.c)
    }
  },
  6314: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib,
      d: () => Ub
    });
    var kb = sb(6321),
      Wb = sb(6301),
      ab = sb(145);
    const Tb = 100;
    async function Ub(bb, cb) {
      var sb;
      let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (sb = navigator.gpu) && void 0 !== sb ? sb : null;
      const Tb = bb.N9(cb, (0, Wb.shaderPackTextures)());
      if (Tb.errors.length > 0) return Hb(bb, Tb.errors, Tb.offInStrict);
      const Ub = await async function(bb) {
        if (!bb) return null;
        try {
          const cb = await (0, ab.w)(bb);
          return cb ? await cb.requestDevice() : null
        } catch (cb) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", cb), null
        }
      }(kb);
      if (!Ub) return null;
      let Ib = !1;
      Ub.lost.then((() => {
        Ib = !0
      }));
      try {
        const cb = await Promise.all(Tb.validationModules.map((cb => async function(bb, cb, sb) {
          cb.pushErrorScope("validation");
          const kb = cb.createShaderModule({
              code: sb.code
            }),
            Wb = cb.popErrorScope(),
            {
              messages: ab
            } = await kb.getCompilationInfo(),
            Tb = ab.filter((bb => "error" === bb.type)).map((cb => bb.mapValidationMessage(sb, cb))),
            Ub = await Wb;
          Ub && 0 === Tb.length && Tb.push({
            file: null,
            line: 0,
            message: Ub.message,
            variants: [sb.key]
          });
          return Tb
        }(bb, Ub, cb))));
        return Ib ? null : Hb(bb, bb.Nsb(cb.flat()), Tb.offInStrict)
      } catch (fb) {
        return console.error("Couldn't validate the shader pack on WebGPU.", fb), null
      } finally {
        Ub.destroy()
      }
    }
    async function Ib(bb, cb) {
      var sb;
      if (!(0, kb.shaderPackNeedsCheck)(bb, cb) || (0, kb.isOtherApiVersion)(bb)) return bb;
      const Wb = await Ub(cb, (0, kb.storedShaderPackFiles)(bb));
      if (!Wb) return bb;
      const ab = !1 === (null === (sb = bb.validation) || void 0 === sb ? void 0 : sb.ok) && !bb.validation.fromRecheck,
        Tb = {
          ...bb,
          validation: ab ? Wb : {
            ...Wb,
            fromRecheck: !0
          }
        };
      return await (0, kb.replaceShaderPack)(bb, Tb, cb) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Tb
    }

    function Hb(bb, cb, sb) {
      return {
        headerVersion: (0, kb.pageShaderPackValidationVersion)(bb),
        ok: 0 === cb.length,
        errors: cb.slice(0, Tb),
        moreErrors: Math.max(0, cb.length - Tb),
        offInStrict: sb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);