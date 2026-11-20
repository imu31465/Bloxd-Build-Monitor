export const id = 134;
export const ids = [134];
export const modules = {
  40859: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      compilePagePack: () => eb,
      prefetchCompiler: () => Yb,
      reconcileHint: () => Bb
    });
    var Ab = Ub(6244),
      Mb = Ub(6285),
      Tb = Ub(6262),
      Eb = Ub(6281);

    function Yb() {
      (0, Ab.loadPageShaderPackCompiler)()
    }
    async function Bb() {
      const bb = await (0, Ab.loadPageShaderPackCompiler)();
      await (bb ? (0, Mb.reconcileStoredShaderPackHint)(bb) : (0, Mb.forgetShaderPackActiveHint)())
    }
    async function eb(bb) {
      const ab = await (0, Ab.loadPageShaderPackCompiler)();
      if (!ab) return {
        status: "none"
      };
      const Ub = await (0, Eb.c)(bb, ab),
        Yb = (0, Mb.storedPackOutcome)(Ub, ab);
      if ("none" === Yb.kind) return {
        status: "none"
      };
      const Bb = ab.i6((0, Mb.storedShaderPackFiles)(Ub), (0, Tb.shaderPackTextures)());
      if ("blocked" === Yb.kind) return {
        status: "blocked",
        messageKey: Yb.messageKey,
        variants: 0 === Bb.errors.length ? Bb.variants : null
      };
      if (Bb.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Bb.errors), {
        status: "none"
      };
      const {
        name: eb,
        keepCircleShadows: vb
      } = Ub.manifest;
      return {
        status: "active",
        pack: {
          name: eb,
          variants: Bb.variants,
          keepCircleShadows: !0 === vb
        }
      }
    }
  },
  6285: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      forgetShaderPackActiveHint: () => Hb,
      isOtherApiVersion: () => mb,
      isShaderPackActive: () => zb,
      isShaderPackChangePending: () => fb,
      markShaderPackChangePending: () => ib,
      pageShaderPackValidationVersion: () => pb,
      reconcileStoredShaderPackHint: () => Wb,
      removeShaderPack: () => Db,
      replaceShaderPack: () => kb,
      saveShaderPack: () => Rb,
      shaderPackNeedsCheck: () => Nb,
      storedPackOutcome: () => xb,
      storedShaderPackFiles: () => Pb,
      toStoredShaderPack: () => Lb
    });
    var Ab = Ub(6212),
      Mb = Ub(6233),
      Tb = Ub(31),
      Eb = Ub(3132),
      Yb = Ub(6294),
      Bb = Ub(6262);
    const eb = "shaderPackChangePending";
    let vb = null;

    function Lb(bb, ab, Ub) {
      return {
        manifest: bb.manifest,
        files: (0, Ab.w)(bb.files),
        validation: ab,
        ...Ub && {
          listing: Ub
        }
      }
    }

    function Pb(bb) {
      return Object.keys(bb.files).map((ab => ({
        path: ab,
        source: bb.files[ab]
      })))
    }
    let Xb = Promise.resolve();

    function jb(bb) {
      const ab = Xb.then(bb);
      return Xb = ab.catch((() => {})), ab
    }

    function Rb(bb, ab) {
      return jb((() => yb(bb, ab)))
    }

    function kb(bb, ab, Ub) {
      return jb((async () => JSON.stringify(await (0, Yb.f)()) === JSON.stringify(bb) && (null === ab ? (await Zb(), !0) : yb(ab, Ub))))
    }
    async function yb(bb, ab) {
      const Ub = await Tb.c.setItem(Yb.b, bb);
      return Ub && Ib(bb, ab), Ub
    }
    async function Zb() {
      await Tb.c.removeItem(Yb.b), Tb.f.removeItem(Eb.d)
    }

    function Db() {
      return jb(Zb)
    }

    function zb(bb, ab) {
      return "active" === xb(bb, ab).kind
    }

    function xb(bb, ab) {
      var Ub;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : mb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.ok) || bb.validation.fromRecheck ? null === ab ? {
        kind: "none",
        reason: "noCompiler"
      } : Nb(bb, ab) ? {
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

    function ib() {
      Tb.j.setItem(eb, performance.timeOrigin)
    }

    function fb() {
      return Tb.j.getItem(eb) === performance.timeOrigin
    }

    function mb(bb) {
      return !(0, Mb.i)(bb.manifest.apiVersion)
    }

    function pb(bb) {
      return vb ??= bb.mN((0, Bb.shaderPackTextures)()), vb
    }

    function Nb(bb, ab) {
      var Ub;
      return (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.headerVersion) !== pb(ab)
    }

    function Wb(bb) {
      return jb((async () => {
        Ib(await (0, Yb.f)(!0), bb)
      }))
    }

    function Hb() {
      return jb((async () => {
        Tb.f.removeItem(Eb.d)
      }))
    }

    function Ib(bb, ab) {
      zb(bb, ab) ? Tb.f.setItem(Eb.d, !0) : Tb.f.removeItem(Eb.d)
    }
  },
  6281: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb,
      d: () => Yb
    });
    var Ab = Ub(6285),
      Mb = Ub(6262),
      Tb = Ub(119);
    const Eb = 100;
    async function Yb(bb, ab) {
      var Ub;
      let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Ub = navigator.gpu) && void 0 !== Ub ? Ub : null;
      const Eb = bb.i6(ab, (0, Mb.shaderPackTextures)());
      if (Eb.errors.length > 0) return eb(bb, Eb.errors, Eb.offInStrict);
      const Yb = await async function(bb) {
        if (!bb) return null;
        try {
          const ab = await (0, Tb.y)(bb);
          return ab ? await ab.requestDevice() : null
        } catch (ab) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ab), null
        }
      }(Ab);
      if (!Yb) return null;
      let Bb = !1;
      Yb.lost.then((() => {
        Bb = !0
      }));
      try {
        const ab = await Promise.all(Eb.validationModules.map((ab => async function(bb, ab, Ub) {
          ab.pushErrorScope("validation");
          const Ab = ab.createShaderModule({
              code: Ub.code
            }),
            Mb = ab.popErrorScope(),
            {
              messages: Tb
            } = await Ab.getCompilationInfo(),
            Eb = Tb.filter((bb => "error" === bb.type)).map((ab => bb.mapValidationMessage(Ub, ab))),
            Yb = await Mb;
          Yb && 0 === Eb.length && Eb.push({
            file: null,
            line: 0,
            message: Yb.message,
            variants: [Ub.key]
          });
          return Eb
        }(bb, Yb, ab))));
        return Bb ? null : eb(bb, bb.xUb(ab.flat()), Eb.offInStrict)
      } catch (vb) {
        return console.error("Couldn't validate the shader pack on WebGPU.", vb), null
      } finally {
        Yb.destroy()
      }
    }
    async function Bb(bb, ab) {
      var Ub;
      if (!(0, Ab.shaderPackNeedsCheck)(bb, ab) || (0, Ab.isOtherApiVersion)(bb)) return bb;
      const Mb = await Yb(ab, (0, Ab.storedShaderPackFiles)(bb));
      if (!Mb) return bb;
      const Tb = !1 === (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.ok) && !bb.validation.fromRecheck,
        Eb = {
          ...bb,
          validation: Tb ? Mb : {
            ...Mb,
            fromRecheck: !0
          }
        };
      return await (0, Ab.replaceShaderPack)(bb, Eb, ab) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Eb
    }

    function eb(bb, ab, Ub) {
      return {
        headerVersion: (0, Ab.pageShaderPackValidationVersion)(bb),
        ok: 0 === ab.length,
        errors: ab.slice(0, Eb),
        moreErrors: Math.max(0, ab.length - Eb),
        offInStrict: Ub
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);