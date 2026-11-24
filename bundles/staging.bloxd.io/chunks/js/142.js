export const id = 142;
export const ids = [142];
export const modules = {
  41831: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      compilePagePack: () => UB,
      prefetchCompiler: () => NB,
      reconcileHint: () => uB
    });
    var QB = zB(6574),
      nB = zB(6601),
      dB = zB(6585),
      IB = zB(6598);

    function NB() {
      (0, QB.loadPageShaderPackCompiler)()
    }
    async function uB() {
      const BB = await (0, QB.loadPageShaderPackCompiler)();
      await (BB ? (0, nB.reconcileStoredShaderPackHint)(BB) : (0, nB.forgetShaderPackActiveHint)())
    }
    async function UB(BB) {
      const jB = await (0, QB.loadPageShaderPackCompiler)();
      if (!jB) return {
        status: "none"
      };
      const zB = await (0, IB.c)(BB, jB),
        NB = (0, nB.storedPackOutcome)(zB, jB);
      if ("none" === NB.kind) return {
        status: "none"
      };
      const uB = jB.O4((0, nB.storedShaderPackFiles)(zB), (0, dB.shaderPackTextures)());
      if ("blocked" === NB.kind) return {
        status: "blocked",
        messageKey: NB.messageKey,
        variants: 0 === uB.errors.length ? uB.variants : null
      };
      if (uB.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", uB.errors), {
        status: "none"
      };
      const {
        name: UB,
        keepCircleShadows: aB
      } = zB.manifest;
      return {
        status: "active",
        pack: {
          name: UB,
          variants: uB.variants,
          keepCircleShadows: !0 === aB
        }
      }
    }
  },
  6601: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      forgetShaderPackActiveHint: () => oB,
      isOtherApiVersion: () => EB,
      isShaderPackActive: () => gB,
      isShaderPackChangePending: () => MB,
      markShaderPackChangePending: () => SB,
      pageShaderPackValidationVersion: () => iB,
      reconcileStoredShaderPackHint: () => fB,
      removeShaderPack: () => LB,
      replaceShaderPack: () => yB,
      saveShaderPack: () => mB,
      shaderPackNeedsCheck: () => qB,
      storedPackOutcome: () => tB,
      storedShaderPackFiles: () => rB,
      toStoredShaderPack: () => pB
    });
    var QB = zB(5120),
      nB = zB(5115),
      dB = zB(41),
      IB = zB(3572),
      NB = zB(6606),
      uB = zB(6585);
    const UB = "shaderPackChangePending";
    let aB = null;

    function pB(BB, jB, zB) {
      return {
        manifest: BB.manifest,
        files: (0, QB.w)(BB.files),
        validation: jB,
        ...zB && {
          listing: zB
        }
      }
    }

    function rB(BB) {
      return Object.keys(BB.files).map((jB => ({
        path: jB,
        source: BB.files[jB]
      })))
    }
    let sB = Promise.resolve();

    function JB(BB) {
      const jB = sB.then(BB);
      return sB = jB.catch((() => {})), jB
    }

    function mB(BB, jB) {
      return JB((() => kB(BB, jB)))
    }

    function yB(BB, jB, zB) {
      return JB((async () => JSON.stringify(await (0, NB.h)()) === JSON.stringify(BB) && (null === jB ? (await GB(), !0) : kB(jB, zB))))
    }
    async function kB(BB, jB) {
      const zB = await dB.g.setItem(NB.d, BB);
      return zB && HB(BB, jB), zB
    }
    async function GB() {
      await dB.g.removeItem(NB.d), dB.j.removeItem(IB.e)
    }

    function LB() {
      return JB(GB)
    }

    function gB(BB, jB) {
      return "active" === tB(BB, jB).kind
    }

    function tB(BB, jB) {
      var zB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : EB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.ok) || BB.validation.fromRecheck ? null === jB ? {
        kind: "none",
        reason: "noCompiler"
      } : qB(BB, jB) ? {
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
      dB.k.setItem(UB, performance.timeOrigin)
    }

    function MB() {
      return dB.k.getItem(UB) === performance.timeOrigin
    }

    function EB(BB) {
      return !(0, nB.k)(BB.manifest.apiVersion)
    }

    function iB(BB) {
      return aB ??= BB.ZF((0, uB.shaderPackTextures)()), aB
    }

    function qB(BB, jB) {
      var zB;
      return (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.headerVersion) !== iB(jB)
    }

    function fB(BB) {
      return JB((async () => {
        HB(await (0, NB.h)(!0), BB)
      }))
    }

    function oB() {
      return JB((async () => {
        dB.j.removeItem(IB.e)
      }))
    }

    function HB(BB, jB) {
      gB(BB, jB) ? dB.j.setItem(IB.e, !0) : dB.j.removeItem(IB.e)
    }
  },
  6598: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB,
      f: () => NB
    });
    var QB = zB(6601),
      nB = zB(6585),
      dB = zB(128);
    const IB = 100;
    async function NB(BB, jB) {
      var zB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zB = navigator.gpu) && void 0 !== zB ? zB : null;
      const IB = BB.O4(jB, (0, nB.shaderPackTextures)());
      if (IB.errors.length > 0) return UB(BB, IB.errors, IB.offInStrict);
      const NB = await async function(BB) {
        if (!BB) return null;
        try {
          const jB = await (0, dB.x)(BB);
          return jB ? await jB.requestDevice() : null
        } catch (jB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", jB), null
        }
      }(QB);
      if (!NB) return null;
      let uB = !1;
      NB.lost.then((() => {
        uB = !0
      }));
      try {
        const jB = await Promise.all(IB.validationModules.map((jB => async function(BB, jB, zB) {
          jB.pushErrorScope("validation");
          const QB = jB.createShaderModule({
              code: zB.code
            }),
            nB = jB.popErrorScope(),
            {
              messages: dB
            } = await QB.getCompilationInfo(),
            IB = dB.filter((BB => "error" === BB.type)).map((jB => BB.mapValidationMessage(zB, jB))),
            NB = await nB;
          NB && 0 === IB.length && IB.push({
            file: null,
            line: 0,
            message: NB.message,
            variants: [zB.key]
          });
          return IB
        }(BB, NB, jB))));
        return uB ? null : UB(BB, BB.lzB(jB.flat()), IB.offInStrict)
      } catch (aB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", aB), null
      } finally {
        NB.destroy()
      }
    }
    async function uB(BB, jB) {
      var zB;
      if (!(0, QB.shaderPackNeedsCheck)(BB, jB) || (0, QB.isOtherApiVersion)(BB)) return BB;
      const nB = await NB(jB, (0, QB.storedShaderPackFiles)(BB));
      if (!nB) return BB;
      const dB = !1 === (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.ok) && !BB.validation.fromRecheck,
        IB = {
          ...BB,
          validation: dB ? nB : {
            ...nB,
            fromRecheck: !0
          }
        };
      return await (0, QB.replaceShaderPack)(BB, IB, jB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), IB
    }

    function UB(BB, jB, zB) {
      return {
        headerVersion: (0, QB.pageShaderPackValidationVersion)(BB),
        ok: 0 === jB.length,
        errors: jB.slice(0, IB),
        moreErrors: Math.max(0, jB.length - IB),
        offInStrict: zB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);