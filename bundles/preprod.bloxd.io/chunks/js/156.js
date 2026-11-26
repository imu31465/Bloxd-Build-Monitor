export const id = 156;
export const ids = [156];
export const modules = {
  44873: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      compilePagePack: () => JB,
      prefetchCompiler: () => jB,
      reconcileHint: () => yB
    });
    var YB = GB(7159),
      DB = GB(7193),
      QB = GB(7174),
      oB = GB(7186);

    function jB() {
      (0, YB.loadPageShaderPackCompiler)()
    }
    async function yB() {
      const BB = await (0, YB.loadPageShaderPackCompiler)();
      await (BB ? (0, DB.reconcileStoredShaderPackHint)(BB) : (0, DB.forgetShaderPackActiveHint)())
    }
    async function JB(BB) {
      const OB = await (0, YB.loadPageShaderPackCompiler)();
      if (!OB) return {
        status: "none"
      };
      const GB = await (0, oB.d)(BB, OB),
        jB = (0, DB.storedPackOutcome)(GB, OB);
      if ("none" === jB.kind) return {
        status: "none"
      };
      const yB = OB.VOB((0, DB.storedShaderPackFiles)(GB), (0, QB.shaderPackTextures)());
      if ("blocked" === jB.kind) return {
        status: "blocked",
        messageKey: jB.messageKey,
        variants: 0 === yB.errors.length ? yB.variants : null
      };
      if (yB.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", yB.errors), {
        status: "none"
      };
      const {
        name: JB,
        keepCircleShadows: MB
      } = GB.manifest;
      return {
        status: "active",
        pack: {
          name: JB,
          variants: yB.variants,
          keepCircleShadows: !0 === MB
        }
      }
    }
  },
  7193: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      forgetShaderPackActiveHint: () => KB,
      isOtherApiVersion: () => UB,
      isShaderPackActive: () => AB,
      isShaderPackChangePending: () => nB,
      markShaderPackChangePending: () => SB,
      pageShaderPackValidationVersion: () => fB,
      reconcileStoredShaderPackHint: () => dB,
      removeShaderPack: () => WB,
      replaceShaderPack: () => ZB,
      saveShaderPack: () => qB,
      shaderPackNeedsCheck: () => kB,
      storedPackOutcome: () => VB,
      storedShaderPackFiles: () => zB,
      toStoredShaderPack: () => PB
    });
    var YB = GB(5546),
      DB = GB(5538),
      QB = GB(31),
      oB = GB(3885),
      jB = GB(7198),
      yB = GB(7174);
    const JB = "shaderPackChangePending";
    let MB = null;

    function PB(BB, OB, GB) {
      return {
        manifest: BB.manifest,
        files: (0, YB.y)(BB.files),
        validation: OB,
        ...GB && {
          listing: GB
        }
      }
    }

    function zB(BB) {
      return Object.keys(BB.files).map((OB => ({
        path: OB,
        source: BB.files[OB]
      })))
    }
    let lB = Promise.resolve();

    function pB(BB) {
      const OB = lB.then(BB);
      return lB = OB.catch((() => {})), OB
    }

    function qB(BB, OB) {
      return pB((() => NB(BB, OB)))
    }

    function ZB(BB, OB, GB) {
      return pB((async () => JSON.stringify(await (0, jB.e)()) === JSON.stringify(BB) && (null === OB ? (await RB(), !0) : NB(OB, GB))))
    }
    async function NB(BB, OB) {
      const GB = await QB.d.setItem(jB.c, BB);
      return GB && uB(BB, OB), GB
    }
    async function RB() {
      await QB.d.removeItem(jB.c), QB.g.removeItem(oB.d)
    }

    function WB() {
      return pB(RB)
    }

    function AB(BB, OB) {
      return "active" === VB(BB, OB).kind
    }

    function VB(BB, OB) {
      var GB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : UB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) || BB.validation.fromRecheck ? null === OB ? {
        kind: "none",
        reason: "noCompiler"
      } : kB(BB, OB) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : BB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function SB() {
      QB.i.setItem(JB, performance.timeOrigin)
    }

    function nB() {
      return QB.i.getItem(JB) === performance.timeOrigin
    }

    function UB(BB) {
      return !(0, DB.g)(BB.manifest.apiVersion)
    }

    function fB(BB) {
      return MB ??= BB.yI((0, yB.shaderPackTextures)()), MB
    }

    function kB(BB, OB) {
      var GB;
      return (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.headerVersion) !== fB(OB)
    }

    function dB(BB) {
      return pB((async () => {
        uB(await (0, jB.e)(!0), BB)
      }))
    }

    function KB() {
      return pB((async () => {
        QB.g.removeItem(oB.d)
      }))
    }

    function uB(BB, OB) {
      AB(BB, OB) ? QB.g.setItem(oB.d, !0) : QB.g.removeItem(oB.d)
    }
  },
  7186: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB,
      f: () => jB
    });
    var YB = GB(7193),
      DB = GB(7174),
      QB = GB(113);
    const oB = 100;
    async function jB(BB, OB) {
      var GB;
      let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GB = navigator.gpu) && void 0 !== GB ? GB : null;
      const oB = BB.VOB(OB, (0, DB.shaderPackTextures)());
      if (oB.errors.length > 0) return JB(BB, oB.errors, oB.offInStrict);
      const jB = await async function(BB) {
        if (!BB) return null;
        try {
          const OB = await (0, QB.w)(BB);
          return OB ? await OB.requestDevice() : null
        } catch (OB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", OB), null
        }
      }(YB);
      if (!jB) return null;
      let yB = !1;
      jB.lost.then((() => {
        yB = !0
      }));
      try {
        const OB = await Promise.all(oB.validationModules.map((OB => async function(BB, OB, GB) {
          OB.pushErrorScope("validation");
          const YB = OB.createShaderModule({
              code: GB.code
            }),
            DB = OB.popErrorScope(),
            {
              messages: QB
            } = await YB.getCompilationInfo(),
            oB = QB.filter((BB => "error" === BB.type)).map((OB => BB.mapValidationMessage(GB, OB))),
            jB = await DB;
          jB && 0 === oB.length && oB.push({
            file: null,
            line: 0,
            message: jB.message,
            variants: [GB.key]
          });
          return oB
        }(BB, jB, OB))));
        return yB ? null : JB(BB, BB.lDB(OB.flat()), oB.offInStrict)
      } catch (MB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", MB), null
      } finally {
        jB.destroy()
      }
    }
    async function yB(BB, OB) {
      var GB;
      if (!(0, YB.shaderPackNeedsCheck)(BB, OB) || (0, YB.isOtherApiVersion)(BB)) return BB;
      const DB = await jB(OB, (0, YB.storedShaderPackFiles)(BB));
      if (!DB) return BB;
      const QB = !1 === (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) && !BB.validation.fromRecheck,
        oB = {
          ...BB,
          validation: QB ? DB : {
            ...DB,
            fromRecheck: !0
          }
        };
      return await (0, YB.replaceShaderPack)(BB, oB, OB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), oB
    }

    function JB(BB, OB, GB) {
      return {
        headerVersion: (0, YB.pageShaderPackValidationVersion)(BB),
        ok: 0 === OB.length,
        errors: OB.slice(0, oB),
        moreErrors: Math.max(0, OB.length - oB),
        offInStrict: GB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);