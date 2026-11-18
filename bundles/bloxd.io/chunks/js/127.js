export const id = 127;
export const ids = [127];
export const modules = {
  40460: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      compilePagePack: () => jJ,
      prefetchCompiler: () => AJ,
      reconcileHint: () => qJ
    });
    var FJ = ZJ(5960),
      UJ = ZJ(5996),
      eJ = ZJ(5977),
      XJ = ZJ(5994);

    function AJ() {
      (0, FJ.loadPageShaderPackCompiler)()
    }
    async function qJ() {
      const JJ = await (0, FJ.loadPageShaderPackCompiler)();
      await (JJ ? (0, UJ.reconcileStoredShaderPackHint)(JJ) : (0, UJ.forgetShaderPackActiveHint)())
    }
    async function jJ(JJ) {
      const cJ = await (0, FJ.loadPageShaderPackCompiler)();
      if (!cJ) return {
        status: "none"
      };
      const ZJ = await (0, XJ.d)(JJ, cJ),
        AJ = (0, UJ.storedPackOutcome)(ZJ, cJ);
      if ("none" === AJ.kind) return {
        status: "none"
      };
      const qJ = cJ.W4((0, UJ.storedShaderPackFiles)(ZJ), (0, eJ.shaderPackTextures)());
      if ("blocked" === AJ.kind) return {
        status: "blocked",
        messageKey: AJ.messageKey,
        variants: 0 === qJ.errors.length ? qJ.variants : null
      };
      if (qJ.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", qJ.errors), {
        status: "none"
      };
      const {
        name: jJ,
        keepCircleShadows: YJ
      } = ZJ.manifest;
      return {
        status: "active",
        pack: {
          name: jJ,
          variants: qJ.variants,
          keepCircleShadows: !0 === YJ
        }
      }
    }
  },
  5996: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      forgetShaderPackActiveHint: () => MJ,
      isOtherApiVersion: () => KJ,
      isShaderPackActive: () => mJ,
      isShaderPackChangePending: () => VJ,
      markShaderPackChangePending: () => EJ,
      pageShaderPackValidationVersion: () => yJ,
      reconcileStoredShaderPackHint: () => IJ,
      removeShaderPack: () => vJ,
      replaceShaderPack: () => fJ,
      saveShaderPack: () => GJ,
      shaderPackNeedsCheck: () => SJ,
      storedPackOutcome: () => QJ,
      storedShaderPackFiles: () => DJ,
      toStoredShaderPack: () => hJ
    });
    var FJ = ZJ(5934),
      UJ = ZJ(5951),
      eJ = ZJ(29),
      XJ = ZJ(2938),
      AJ = ZJ(6004),
      qJ = ZJ(5977);
    const jJ = "shaderPackChangePending";
    let YJ = null;

    function hJ(JJ, cJ, ZJ) {
      return {
        manifest: JJ.manifest,
        files: (0, FJ.o)(JJ.files),
        validation: cJ,
        ...ZJ && {
          listing: ZJ
        }
      }
    }

    function DJ(JJ) {
      return Object.keys(JJ.files).map((cJ => ({
        path: cJ,
        source: JJ.files[cJ]
      })))
    }
    let sJ = Promise.resolve();

    function nJ(JJ) {
      const cJ = sJ.then(JJ);
      return sJ = cJ.catch((() => {})), cJ
    }

    function GJ(JJ, cJ) {
      return nJ((() => xJ(JJ, cJ)))
    }

    function fJ(JJ, cJ, ZJ) {
      return nJ((async () => JSON.stringify(await (0, AJ.f)()) === JSON.stringify(JJ) && (null === cJ ? (await rJ(), !0) : xJ(cJ, ZJ))))
    }
    async function xJ(JJ, cJ) {
      const ZJ = await eJ.g.setItem(AJ.e, JJ);
      return ZJ && bJ(JJ, cJ), ZJ
    }
    async function rJ() {
      await eJ.g.removeItem(AJ.e), eJ.j.removeItem(XJ.b)
    }

    function vJ() {
      return nJ(rJ)
    }

    function mJ(JJ, cJ) {
      return "active" === QJ(JJ, cJ).kind
    }

    function QJ(JJ, cJ) {
      var ZJ;
      return null === JJ ? {
        kind: "none",
        reason: "nothingStored"
      } : KJ(JJ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.ok) || JJ.validation.fromRecheck ? null === cJ ? {
        kind: "none",
        reason: "noCompiler"
      } : SJ(JJ, cJ) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : JJ.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function EJ() {
      eJ.k.setItem(jJ, performance.timeOrigin)
    }

    function VJ() {
      return eJ.k.getItem(jJ) === performance.timeOrigin
    }

    function KJ(JJ) {
      return !(0, UJ.i)(JJ.manifest.apiVersion)
    }

    function yJ(JJ) {
      return YJ ??= JJ.Uy((0, qJ.shaderPackTextures)()), YJ
    }

    function SJ(JJ, cJ) {
      var ZJ;
      return (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.headerVersion) !== yJ(cJ)
    }

    function IJ(JJ) {
      return nJ((async () => {
        bJ(await (0, AJ.f)(!0), JJ)
      }))
    }

    function MJ() {
      return nJ((async () => {
        eJ.j.removeItem(XJ.b)
      }))
    }

    function bJ(JJ, cJ) {
      mJ(JJ, cJ) ? eJ.j.setItem(XJ.b, !0) : eJ.j.removeItem(XJ.b)
    }
  },
  5994: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ,
      f: () => AJ
    });
    var FJ = ZJ(5996),
      UJ = ZJ(5977),
      eJ = ZJ(95);
    const XJ = 100;
    async function AJ(JJ, cJ) {
      var ZJ;
      let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZJ = navigator.gpu) && void 0 !== ZJ ? ZJ : null;
      const XJ = JJ.W4(cJ, (0, UJ.shaderPackTextures)());
      if (XJ.errors.length > 0) return jJ(JJ, XJ.errors, XJ.offInStrict);
      const AJ = await async function(JJ) {
        if (!JJ) return null;
        try {
          const cJ = await (0, eJ.u)(JJ);
          return cJ ? await cJ.requestDevice() : null
        } catch (cJ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", cJ), null
        }
      }(FJ);
      if (!AJ) return null;
      let qJ = !1;
      AJ.lost.then((() => {
        qJ = !0
      }));
      try {
        const cJ = await Promise.all(XJ.validationModules.map((cJ => async function(JJ, cJ, ZJ) {
          cJ.pushErrorScope("validation");
          const FJ = cJ.createShaderModule({
              code: ZJ.code
            }),
            UJ = cJ.popErrorScope(),
            {
              messages: eJ
            } = await FJ.getCompilationInfo(),
            XJ = eJ.filter((JJ => "error" === JJ.type)).map((cJ => JJ.mapValidationMessage(ZJ, cJ))),
            AJ = await UJ;
          AJ && 0 === XJ.length && XJ.push({
            file: null,
            line: 0,
            message: AJ.message,
            variants: [ZJ.key]
          });
          return XJ
        }(JJ, AJ, cJ))));
        return qJ ? null : jJ(JJ, JJ.kZJ(cJ.flat()), XJ.offInStrict)
      } catch (YJ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", YJ), null
      } finally {
        AJ.destroy()
      }
    }
    async function qJ(JJ, cJ) {
      var ZJ;
      if (!(0, FJ.shaderPackNeedsCheck)(JJ, cJ) || (0, FJ.isOtherApiVersion)(JJ)) return JJ;
      const UJ = await AJ(cJ, (0, FJ.storedShaderPackFiles)(JJ));
      if (!UJ) return JJ;
      const eJ = !1 === (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.ok) && !JJ.validation.fromRecheck,
        XJ = {
          ...JJ,
          validation: eJ ? UJ : {
            ...UJ,
            fromRecheck: !0
          }
        };
      return await (0, FJ.replaceShaderPack)(JJ, XJ, cJ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), XJ
    }

    function jJ(JJ, cJ, ZJ) {
      return {
        headerVersion: (0, FJ.pageShaderPackValidationVersion)(JJ),
        ok: 0 === cJ.length,
        errors: cJ.slice(0, XJ),
        moreErrors: Math.max(0, cJ.length - XJ),
        offInStrict: ZJ
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);