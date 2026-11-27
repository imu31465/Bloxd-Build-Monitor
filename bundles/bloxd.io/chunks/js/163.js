export const id = 163;
export const ids = [163];
export const modules = {
  54275: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      compilePagePack: () => Er,
      prefetchCompiler: () => Ir,
      reconcileHint: () => fr
    });
    var Zr = Qr(7575),
      Wr = Qr(7615),
      ar = Qr(7588),
      jr = Qr(7610);

    function Ir() {
      (0, Zr.loadPageShaderPackCompiler)()
    }
    async function fr() {
      const rr = await (0, Zr.loadPageShaderPackCompiler)();
      await (rr ? (0, Wr.reconcileStoredShaderPackHint)(rr) : (0, Wr.forgetShaderPackActiveHint)())
    }
    async function Er(rr) {
      const Sr = await (0, Zr.loadPageShaderPackCompiler)();
      if (!Sr) return {
        status: "none"
      };
      const Qr = await (0, jr.d)(rr, Sr),
        Ir = (0, Wr.storedPackOutcome)(Qr, Sr);
      if ("none" === Ir.kind) return {
        status: "none"
      };
      const fr = Sr.Vrr((0, Wr.storedShaderPackFiles)(Qr), (0, ar.shaderPackTextures)());
      if ("blocked" === Ir.kind) return {
        status: "blocked",
        messageKey: Ir.messageKey,
        variants: 0 === fr.errors.length ? fr.variants : null
      };
      if (fr.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", fr.errors), {
        status: "none"
      };
      const {
        name: Er,
        keepCircleShadows: pr
      } = Qr.manifest;
      return {
        status: "active",
        pack: {
          name: Er,
          variants: fr.variants,
          keepCircleShadows: !0 === pr
        }
      }
    }
  },
  7615: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      forgetShaderPackActiveHint: () => lr,
      isOtherApiVersion: () => Tr,
      isShaderPackActive: () => er,
      isShaderPackChangePending: () => Br,
      markShaderPackChangePending: () => yr,
      pageShaderPackValidationVersion: () => vr,
      reconcileStoredShaderPackHint: () => Lr,
      removeShaderPack: () => nr,
      replaceShaderPack: () => hr,
      saveShaderPack: () => tr,
      shaderPackNeedsCheck: () => Or,
      storedPackOutcome: () => Kr,
      storedShaderPackFiles: () => mr,
      toStoredShaderPack: () => xr
    });
    var Zr = Qr(6007),
      Wr = Qr(6005),
      ar = Qr(43),
      jr = Qr(4690),
      Ir = Qr(7617),
      fr = Qr(7588);
    const Er = "shaderPackChangePending";
    let pr = null;

    function xr(rr, Sr, Qr) {
      return {
        manifest: rr.manifest,
        files: (0, Zr.w)(rr.files),
        validation: Sr,
        ...Qr && {
          listing: Qr
        }
      }
    }

    function mr(rr) {
      return Object.keys(rr.files).map((Sr => ({
        path: Sr,
        source: rr.files[Sr]
      })))
    }
    let Nr = Promise.resolve();

    function Ur(rr) {
      const Sr = Nr.then(rr);
      return Nr = Sr.catch((() => {})), Sr
    }

    function tr(rr, Sr) {
      return Ur((() => zr(rr, Sr)))
    }

    function hr(rr, Sr, Qr) {
      return Ur((async () => JSON.stringify(await (0, Ir.e)()) === JSON.stringify(rr) && (null === Sr ? (await Yr(), !0) : zr(Sr, Qr))))
    }
    async function zr(rr, Sr) {
      const Qr = await ar.h.setItem(Ir.b, rr);
      return Qr && Xr(rr, Sr), Qr
    }
    async function Yr() {
      await ar.h.removeItem(Ir.b), ar.j.removeItem(jr.b)
    }

    function nr() {
      return Ur(Yr)
    }

    function er(rr, Sr) {
      return "active" === Kr(rr, Sr).kind
    }

    function Kr(rr, Sr) {
      var Qr;
      return null === rr ? {
        kind: "none",
        reason: "nothingStored"
      } : Tr(rr) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) || rr.validation.fromRecheck ? null === Sr ? {
        kind: "none",
        reason: "noCompiler"
      } : Or(rr, Sr) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : rr.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function yr() {
      ar.n.setItem(Er, performance.timeOrigin)
    }

    function Br() {
      return ar.n.getItem(Er) === performance.timeOrigin
    }

    function Tr(rr) {
      return !(0, Wr.i)(rr.manifest.apiVersion)
    }

    function vr(rr) {
      return pr ??= rr.rC((0, fr.shaderPackTextures)()), pr
    }

    function Or(rr, Sr) {
      var Qr;
      return (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.headerVersion) !== vr(Sr)
    }

    function Lr(rr) {
      return Ur((async () => {
        Xr(await (0, Ir.e)(!0), rr)
      }))
    }

    function lr() {
      return Ur((async () => {
        ar.j.removeItem(jr.b)
      }))
    }

    function Xr(rr, Sr) {
      er(rr, Sr) ? ar.j.setItem(jr.b, !0) : ar.j.removeItem(jr.b)
    }
  },
  7610: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      e: () => Ir
    });
    var Zr = Qr(7615),
      Wr = Qr(7588),
      ar = Qr(127);
    const jr = 100;
    async function Ir(rr, Sr) {
      var Qr;
      let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Qr = navigator.gpu) && void 0 !== Qr ? Qr : null;
      const jr = rr.Vrr(Sr, (0, Wr.shaderPackTextures)());
      if (jr.errors.length > 0) return Er(rr, jr.errors, jr.offInStrict);
      const Ir = await async function(rr) {
        if (!rr) return null;
        try {
          const Sr = await (0, ar.t)(rr);
          return Sr ? await Sr.requestDevice() : null
        } catch (Sr) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Sr), null
        }
      }(Zr);
      if (!Ir) return null;
      let fr = !1;
      Ir.lost.then((() => {
        fr = !0
      }));
      try {
        const Sr = await Promise.all(jr.validationModules.map((Sr => async function(rr, Sr, Qr) {
          Sr.pushErrorScope("validation");
          const Zr = Sr.createShaderModule({
              code: Qr.code
            }),
            Wr = Sr.popErrorScope(),
            {
              messages: ar
            } = await Zr.getCompilationInfo(),
            jr = ar.filter((rr => "error" === rr.type)).map((Sr => rr.mapValidationMessage(Qr, Sr))),
            Ir = await Wr;
          Ir && 0 === jr.length && jr.push({
            file: null,
            line: 0,
            message: Ir.message,
            variants: [Qr.key]
          });
          return jr
        }(rr, Ir, Sr))));
        return fr ? null : Er(rr, rr.RZr(Sr.flat()), jr.offInStrict)
      } catch (pr) {
        return console.error("Couldn't validate the shader pack on WebGPU.", pr), null
      } finally {
        Ir.destroy()
      }
    }
    async function fr(rr, Sr) {
      var Qr;
      if (!(0, Zr.shaderPackNeedsCheck)(rr, Sr) || (0, Zr.isOtherApiVersion)(rr)) return rr;
      const Wr = await Ir(Sr, (0, Zr.storedShaderPackFiles)(rr));
      if (!Wr) return rr;
      const ar = !1 === (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) && !rr.validation.fromRecheck,
        jr = {
          ...rr,
          validation: ar ? Wr : {
            ...Wr,
            fromRecheck: !0
          }
        };
      return await (0, Zr.replaceShaderPack)(rr, jr, Sr) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), jr
    }

    function Er(rr, Sr, Qr) {
      return {
        headerVersion: (0, Zr.pageShaderPackValidationVersion)(rr),
        ok: 0 === Sr.length,
        errors: Sr.slice(0, jr),
        moreErrors: Math.max(0, Sr.length - jr),
        offInStrict: Qr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);