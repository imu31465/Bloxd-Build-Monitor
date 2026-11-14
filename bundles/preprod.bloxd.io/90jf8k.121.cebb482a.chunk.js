export const id = 121;
export const ids = [121];
export const modules = {
  39607: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      compilePagePack: () => PF,
      prefetchCompiler: () => bW,
      reconcileHint: () => dF
    });
    var CF = SF(5589),
      AF = SF(5626),
      uF = SF(5603),
      hF = SF(5624);

    function bW() {
      (0, CF.loadPageShaderPackCompiler)()
    }
    async function dF() {
      const FF = await (0, CF.loadPageShaderPackCompiler)();
      await (FF ? (0, AF.reconcileStoredShaderPackHint)(FF) : (0, AF.forgetShaderPackActiveHint)())
    }
    async function PF(FF) {
      const WF = await (0, CF.loadPageShaderPackCompiler)();
      if (!WF) return {
        status: "none"
      };
      const SF = await (0, hF.e)(FF, WF),
        bW = (0, AF.storedPackOutcome)(SF, WF);
      if ("none" === bW.kind) return {
        status: "none"
      };
      const dF = WF.RhF((0, AF.storedShaderPackFiles)(SF), (0, uF.shaderPackTextures)());
      if ("blocked" === bW.kind) return {
        status: "blocked",
        messageKey: bW.messageKey,
        variants: 0 === dF.errors.length ? dF.variants : null
      };
      if (dF.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", dF.errors), {
        status: "none"
      };
      const {
        name: PF,
        keepCircleShadows: RF
      } = SF.manifest;
      return {
        status: "active",
        pack: {
          name: PF,
          variants: dF.variants,
          keepCircleShadows: !0 === RF
        }
      }
    }
  },
  5626: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      forgetShaderPackActiveHint: () => xW,
      isOtherApiVersion: () => DF,
      isShaderPackActive: () => kW,
      isShaderPackChangePending: () => NF,
      markShaderPackChangePending: () => VF,
      pageShaderPackValidationVersion: () => LF,
      reconcileStoredShaderPackHint: () => OF,
      removeShaderPack: () => aW,
      replaceShaderPack: () => gW,
      saveShaderPack: () => rW,
      shaderPackNeedsCheck: () => mW,
      storedPackOutcome: () => qW,
      storedShaderPackFiles: () => eF,
      toStoredShaderPack: () => iW
    });
    var CF = SF(5564),
      AF = SF(5578),
      uF = SF(33),
      hF = SF(2591),
      bW = SF(5630),
      dF = SF(5603);
    const PF = "shaderPackChangePending";
    let RF = null;

    function iW(FF, WF, SF) {
      return {
        manifest: FF.manifest,
        files: (0, CF.r)(FF.files),
        validation: WF,
        ...SF && {
          listing: SF
        }
      }
    }

    function eF(FF) {
      return Object.keys(FF.files).map((WF => ({
        path: WF,
        source: FF.files[WF]
      })))
    }
    let EF = Promise.resolve();

    function QF(FF) {
      const WF = EF.then(FF);
      return EF = WF.catch((() => {})), WF
    }

    function rW(FF, WF) {
      return QF((() => tW(FF, WF)))
    }

    function gW(FF, WF, SF) {
      return QF((async () => JSON.stringify(await (0, bW.f)()) === JSON.stringify(FF) && (null === WF ? (await TF(), !0) : tW(WF, SF))))
    }
    async function tW(FF, WF) {
      const SF = await uF.f.setItem(bW.e, FF);
      return SF && ZF(FF, WF), SF
    }
    async function TF() {
      await uF.f.removeItem(bW.e), uF.h.removeItem(hF.e)
    }

    function aW() {
      return QF(TF)
    }

    function kW(FF, WF) {
      return "active" === qW(FF, WF).kind
    }

    function qW(FF, WF) {
      var SF;
      return null === FF ? {
        kind: "none",
        reason: "nothingStored"
      } : DF(FF) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.ok) || FF.validation.fromRecheck ? null === WF ? {
        kind: "none",
        reason: "noCompiler"
      } : mW(FF, WF) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : FF.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function VF() {
      uF.k.setItem(PF, performance.timeOrigin)
    }

    function NF() {
      return uF.k.getItem(PF) === performance.timeOrigin
    }

    function DF(FF) {
      return !(0, AF.f)(FF.manifest.apiVersion)
    }

    function LF(FF) {
      return RF ??= FF.NWF((0, dF.shaderPackTextures)()), RF
    }

    function mW(FF, WF) {
      var SF;
      return (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.headerVersion) !== LF(WF)
    }

    function OF(FF) {
      return QF((async () => {
        ZF(await (0, bW.f)(!0), FF)
      }))
    }

    function xW() {
      return QF((async () => {
        uF.h.removeItem(hF.e)
      }))
    }

    function ZF(FF, WF) {
      kW(FF, WF) ? uF.h.setItem(hF.e, !0) : uF.h.removeItem(hF.e)
    }
  },
  5624: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      f: () => bW
    });
    var CF = SF(5626),
      AF = SF(5603),
      uF = SF(112);
    const hF = 100;
    async function bW(FF, WF) {
      var SF;
      let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (SF = navigator.gpu) && void 0 !== SF ? SF : null;
      const hF = FF.RhF(WF, (0, AF.shaderPackTextures)());
      if (hF.errors.length > 0) return PF(FF, hF.errors, hF.offInStrict);
      const bW = await async function(FF) {
        if (!FF) return null;
        try {
          const WF = await (0, uF.s)(FF);
          return WF ? await WF.requestDevice() : null
        } catch (WF) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", WF), null
        }
      }(CF);
      if (!bW) return null;
      let dF = !1;
      bW.lost.then((() => {
        dF = !0
      }));
      try {
        const WF = await Promise.all(hF.validationModules.map((WF => async function(FF, WF, SF) {
          WF.pushErrorScope("validation");
          const CF = WF.createShaderModule({
              code: SF.code
            }),
            AF = WF.popErrorScope(),
            {
              messages: uF
            } = await CF.getCompilationInfo(),
            hF = uF.filter((FF => "error" === FF.type)).map((WF => FF.mapValidationMessage(SF, WF))),
            bW = await AF;
          bW && 0 === hF.length && hF.push({
            file: null,
            line: 0,
            message: bW.message,
            variants: [SF.key]
          });
          return hF
        }(FF, bW, WF))));
        return dF ? null : PF(FF, FF.WPF(WF.flat()), hF.offInStrict)
      } catch (RF) {
        return console.error("Couldn't validate the shader pack on WebGPU.", RF), null
      } finally {
        bW.destroy()
      }
    }
    async function dF(FF, WF) {
      var SF;
      if (!(0, CF.shaderPackNeedsCheck)(FF, WF) || (0, CF.isOtherApiVersion)(FF)) return FF;
      const AF = await bW(WF, (0, CF.storedShaderPackFiles)(FF));
      if (!AF) return FF;
      const uF = !1 === (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.ok) && !FF.validation.fromRecheck,
        hF = {
          ...FF,
          validation: uF ? AF : {
            ...AF,
            fromRecheck: !0
          }
        };
      return await (0, CF.replaceShaderPack)(FF, hF, WF) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), hF
    }

    function PF(FF, WF, SF) {
      return {
        headerVersion: (0, CF.pageShaderPackValidationVersion)(FF),
        ok: 0 === WF.length,
        errors: WF.slice(0, hF),
        moreErrors: Math.max(0, WF.length - hF),
        offInStrict: SF
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);