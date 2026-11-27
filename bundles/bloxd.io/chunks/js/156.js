export const id = 156;
export const ids = [156];
export const modules = {
  44931: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      compilePagePack: () => Je,
      prefetchCompiler: () => Ue,
      reconcileHint: () => Fe
    });
    var ye = He(7249),
      be = He(7290),
      Me = He(7262),
      Ke = He(7283);

    function Ue() {
      (0, ye.loadPageShaderPackCompiler)()
    }
    async function Fe() {
      const ee = await (0, ye.loadPageShaderPackCompiler)();
      await (ee ? (0, be.reconcileStoredShaderPackHint)(ee) : (0, be.forgetShaderPackActiveHint)())
    }
    async function Je(ee) {
      const ie = await (0, ye.loadPageShaderPackCompiler)();
      if (!ie) return {
        status: "none"
      };
      const He = await (0, Ke.e)(ee, ie),
        Ue = (0, be.storedPackOutcome)(He, ie);
      if ("none" === Ue.kind) return {
        status: "none"
      };
      const Fe = ie.vie((0, be.storedShaderPackFiles)(He), (0, Me.shaderPackTextures)());
      if ("blocked" === Ue.kind) return {
        status: "blocked",
        messageKey: Ue.messageKey,
        variants: 0 === Fe.errors.length ? Fe.variants : null
      };
      if (Fe.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Fe.errors), {
        status: "none"
      };
      const {
        name: Je,
        keepCircleShadows: oe
      } = He.manifest;
      return {
        status: "active",
        pack: {
          name: Je,
          variants: Fe.variants,
          keepCircleShadows: !0 === oe
        }
      }
    }
  },
  7290: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      forgetShaderPackActiveHint: () => De,
      isOtherApiVersion: () => We,
      isShaderPackActive: () => Ee,
      isShaderPackChangePending: () => de,
      markShaderPackChangePending: () => Oe,
      pageShaderPackValidationVersion: () => te,
      reconcileStoredShaderPackHint: () => we,
      removeShaderPack: () => Be,
      replaceShaderPack: () => pe,
      saveShaderPack: () => Te,
      shaderPackNeedsCheck: () => Ze,
      storedPackOutcome: () => ge,
      storedShaderPackFiles: () => ke,
      toStoredShaderPack: () => Re
    });
    var ye = He(5570),
      be = He(5563),
      Me = He(35),
      Ke = He(3808),
      Ue = He(7296),
      Fe = He(7262);
    const Je = "shaderPackChangePending";
    let oe = null;

    function Re(ee, ie, He) {
      return {
        manifest: ee.manifest,
        files: (0, ye.s)(ee.files),
        validation: ie,
        ...He && {
          listing: He
        }
      }
    }

    function ke(ee) {
      return Object.keys(ee.files).map((ie => ({
        path: ie,
        source: ee.files[ie]
      })))
    }
    let qe = Promise.resolve();

    function fe(ee) {
      const ie = qe.then(ee);
      return qe = ie.catch((() => {})), ie
    }

    function Te(ee, ie) {
      return fe((() => Xe(ee, ie)))
    }

    function pe(ee, ie, He) {
      return fe((async () => JSON.stringify(await (0, Ue.h)()) === JSON.stringify(ee) && (null === ie ? (await ze(), !0) : Xe(ie, He))))
    }
    async function Xe(ee, ie) {
      const He = await Me.e.setItem(Ue.e, ee);
      return He && Pe(ee, ie), He
    }
    async function ze() {
      await Me.e.removeItem(Ue.e), Me.i.removeItem(Ke.b)
    }

    function Be() {
      return fe(ze)
    }

    function Ee(ee, ie) {
      return "active" === ge(ee, ie).kind
    }

    function ge(ee, ie) {
      var He;
      return null === ee ? {
        kind: "none",
        reason: "nothingStored"
      } : We(ee) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) || ee.validation.fromRecheck ? null === ie ? {
        kind: "none",
        reason: "noCompiler"
      } : Ze(ee, ie) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : ee.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Oe() {
      Me.m.setItem(Je, performance.timeOrigin)
    }

    function de() {
      return Me.m.getItem(Je) === performance.timeOrigin
    }

    function We(ee) {
      return !(0, be.h)(ee.manifest.apiVersion)
    }

    function te(ee) {
      return oe ??= ee.cV((0, Fe.shaderPackTextures)()), oe
    }

    function Ze(ee, ie) {
      var He;
      return (null === (He = ee.validation) || void 0 === He ? void 0 : He.headerVersion) !== te(ie)
    }

    function we(ee) {
      return fe((async () => {
        Pe(await (0, Ue.h)(!0), ee)
      }))
    }

    function De() {
      return fe((async () => {
        Me.i.removeItem(Ke.b)
      }))
    }

    function Pe(ee, ie) {
      Ee(ee, ie) ? Me.i.setItem(Ke.b, !0) : Me.i.removeItem(Ke.b)
    }
  },
  7283: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      g: () => Ue
    });
    var ye = He(7290),
      be = He(7262),
      Me = He(115);
    const Ke = 100;
    async function Ue(ee, ie) {
      var He;
      let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (He = navigator.gpu) && void 0 !== He ? He : null;
      const Ke = ee.vie(ie, (0, be.shaderPackTextures)());
      if (Ke.errors.length > 0) return Je(ee, Ke.errors, Ke.offInStrict);
      const Ue = await async function(ee) {
        if (!ee) return null;
        try {
          const ie = await (0, Me.v)(ee);
          return ie ? await ie.requestDevice() : null
        } catch (ie) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ie), null
        }
      }(ye);
      if (!Ue) return null;
      let Fe = !1;
      Ue.lost.then((() => {
        Fe = !0
      }));
      try {
        const ie = await Promise.all(Ke.validationModules.map((ie => async function(ee, ie, He) {
          ie.pushErrorScope("validation");
          const ye = ie.createShaderModule({
              code: He.code
            }),
            be = ie.popErrorScope(),
            {
              messages: Me
            } = await ye.getCompilationInfo(),
            Ke = Me.filter((ee => "error" === ee.type)).map((ie => ee.mapValidationMessage(He, ie))),
            Ue = await be;
          Ue && 0 === Ke.length && Ke.push({
            file: null,
            line: 0,
            message: Ue.message,
            variants: [He.key]
          });
          return Ke
        }(ee, Ue, ie))));
        return Fe ? null : Je(ee, ee.Lbe(ie.flat()), Ke.offInStrict)
      } catch (oe) {
        return console.error("Couldn't validate the shader pack on WebGPU.", oe), null
      } finally {
        Ue.destroy()
      }
    }
    async function Fe(ee, ie) {
      var He;
      if (!(0, ye.shaderPackNeedsCheck)(ee, ie) || (0, ye.isOtherApiVersion)(ee)) return ee;
      const be = await Ue(ie, (0, ye.storedShaderPackFiles)(ee));
      if (!be) return ee;
      const Me = !1 === (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) && !ee.validation.fromRecheck,
        Ke = {
          ...ee,
          validation: Me ? be : {
            ...be,
            fromRecheck: !0
          }
        };
      return await (0, ye.replaceShaderPack)(ee, Ke, ie) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Ke
    }

    function Je(ee, ie, He) {
      return {
        headerVersion: (0, ye.pageShaderPackValidationVersion)(ee),
        ok: 0 === ie.length,
        errors: ie.slice(0, Ke),
        moreErrors: Math.max(0, ie.length - Ke),
        offInStrict: He
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);