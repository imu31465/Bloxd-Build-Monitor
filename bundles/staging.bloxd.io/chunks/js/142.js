export const id = 142;
export const ids = [142];
export const modules = {
  41763: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      compilePagePack: () => cB,
      prefetchCompiler: () => vB,
      reconcileHint: () => kB
    });
    var TB = ZB(6763),
      JB = ZB(6800),
      oB = ZB(6778),
      GB = ZB(6792);

    function vB() {
      (0, TB.loadPageShaderPackCompiler)()
    }
    async function kB() {
      const BB = await (0, TB.loadPageShaderPackCompiler)();
      await (BB ? (0, JB.reconcileStoredShaderPackHint)(BB) : (0, JB.forgetShaderPackActiveHint)())
    }
    async function cB(BB) {
      const IB = await (0, TB.loadPageShaderPackCompiler)();
      if (!IB) return {
        status: "none"
      };
      const ZB = await (0, GB.d)(BB, IB),
        vB = (0, JB.storedPackOutcome)(ZB, IB);
      if ("none" === vB.kind) return {
        status: "none"
      };
      const kB = IB.yBB((0, JB.storedShaderPackFiles)(ZB), (0, oB.shaderPackTextures)());
      if ("blocked" === vB.kind) return {
        status: "blocked",
        messageKey: vB.messageKey,
        variants: 0 === kB.errors.length ? kB.variants : null
      };
      if (kB.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", kB.errors), {
        status: "none"
      };
      const {
        name: cB,
        keepCircleShadows: nB
      } = ZB.manifest;
      return {
        status: "active",
        pack: {
          name: cB,
          variants: kB.variants,
          keepCircleShadows: !0 === nB
        }
      }
    }
  },
  6800: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      forgetShaderPackActiveHint: () => pB,
      isOtherApiVersion: () => wB,
      isShaderPackActive: () => dB,
      isShaderPackChangePending: () => sB,
      markShaderPackChangePending: () => QB,
      pageShaderPackValidationVersion: () => OB,
      reconcileStoredShaderPackHint: () => iB,
      removeShaderPack: () => WB,
      replaceShaderPack: () => qB,
      saveShaderPack: () => gB,
      shaderPackNeedsCheck: () => YB,
      storedPackOutcome: () => CB,
      storedShaderPackFiles: () => zB,
      toStoredShaderPack: () => hB
    });
    var TB = ZB(5210),
      JB = ZB(5204),
      oB = ZB(36),
      GB = ZB(3640),
      vB = ZB(6808),
      kB = ZB(6778);
    const cB = "shaderPackChangePending";
    let nB = null;

    function hB(BB, IB, ZB) {
      return {
        manifest: BB.manifest,
        files: (0, TB.y)(BB.files),
        validation: IB,
        ...ZB && {
          listing: ZB
        }
      }
    }

    function zB(BB) {
      return Object.keys(BB.files).map((IB => ({
        path: IB,
        source: BB.files[IB]
      })))
    }
    let FB = Promise.resolve();

    function NB(BB) {
      const IB = FB.then(BB);
      return FB = IB.catch((() => {})), IB
    }

    function gB(BB, IB) {
      return NB((() => yB(BB, IB)))
    }

    function qB(BB, IB, ZB) {
      return NB((async () => JSON.stringify(await (0, vB.i)()) === JSON.stringify(BB) && (null === IB ? (await UB(), !0) : yB(IB, ZB))))
    }
    async function yB(BB, IB) {
      const ZB = await oB.i.setItem(vB.e, BB);
      return ZB && aB(BB, IB), ZB
    }
    async function UB() {
      await oB.i.removeItem(vB.e), oB.m.removeItem(GB.e)
    }

    function WB() {
      return NB(UB)
    }

    function dB(BB, IB) {
      return "active" === CB(BB, IB).kind
    }

    function CB(BB, IB) {
      var ZB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : wB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.ok) || BB.validation.fromRecheck ? null === IB ? {
        kind: "none",
        reason: "noCompiler"
      } : YB(BB, IB) ? {
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

    function QB() {
      oB.n.setItem(cB, performance.timeOrigin)
    }

    function sB() {
      return oB.n.getItem(cB) === performance.timeOrigin
    }

    function wB(BB) {
      return !(0, JB.g)(BB.manifest.apiVersion)
    }

    function OB(BB) {
      return nB ??= BB.rM((0, kB.shaderPackTextures)()), nB
    }

    function YB(BB, IB) {
      var ZB;
      return (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.headerVersion) !== OB(IB)
    }

    function iB(BB) {
      return NB((async () => {
        aB(await (0, vB.i)(!0), BB)
      }))
    }

    function pB() {
      return NB((async () => {
        oB.m.removeItem(GB.e)
      }))
    }

    function aB(BB, IB) {
      dB(BB, IB) ? oB.m.setItem(GB.e, !0) : oB.m.removeItem(GB.e)
    }
  },
  6792: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB,
      h: () => vB
    });
    var TB = ZB(6800),
      JB = ZB(6778),
      oB = ZB(129);
    const GB = 100;
    async function vB(BB, IB) {
      var ZB;
      let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZB = navigator.gpu) && void 0 !== ZB ? ZB : null;
      const GB = BB.yBB(IB, (0, JB.shaderPackTextures)());
      if (GB.errors.length > 0) return cB(BB, GB.errors, GB.offInStrict);
      const vB = await async function(BB) {
        if (!BB) return null;
        try {
          const IB = await (0, oB.w)(BB);
          return IB ? await IB.requestDevice() : null
        } catch (IB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", IB), null
        }
      }(TB);
      if (!vB) return null;
      let kB = !1;
      vB.lost.then((() => {
        kB = !0
      }));
      try {
        const IB = await Promise.all(GB.validationModules.map((IB => async function(BB, IB, ZB) {
          IB.pushErrorScope("validation");
          const TB = IB.createShaderModule({
              code: ZB.code
            }),
            JB = IB.popErrorScope(),
            {
              messages: oB
            } = await TB.getCompilationInfo(),
            GB = oB.filter((BB => "error" === BB.type)).map((IB => BB.mapValidationMessage(ZB, IB))),
            vB = await JB;
          vB && 0 === GB.length && GB.push({
            file: null,
            line: 0,
            message: vB.message,
            variants: [ZB.key]
          });
          return GB
        }(BB, vB, IB))));
        return kB ? null : cB(BB, BB.qTB(IB.flat()), GB.offInStrict)
      } catch (nB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", nB), null
      } finally {
        vB.destroy()
      }
    }
    async function kB(BB, IB) {
      var ZB;
      if (!(0, TB.shaderPackNeedsCheck)(BB, IB) || (0, TB.isOtherApiVersion)(BB)) return BB;
      const JB = await vB(IB, (0, TB.storedShaderPackFiles)(BB));
      if (!JB) return BB;
      const oB = !1 === (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.ok) && !BB.validation.fromRecheck,
        GB = {
          ...BB,
          validation: oB ? JB : {
            ...JB,
            fromRecheck: !0
          }
        };
      return await (0, TB.replaceShaderPack)(BB, GB, IB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), GB
    }

    function cB(BB, IB, ZB) {
      return {
        headerVersion: (0, TB.pageShaderPackValidationVersion)(BB),
        ok: 0 === IB.length,
        errors: IB.slice(0, GB),
        moreErrors: Math.max(0, IB.length - GB),
        offInStrict: ZB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);