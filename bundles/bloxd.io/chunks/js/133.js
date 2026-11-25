export const id = 133;
export const ids = [133];
export const modules = {
  41776: (BB, IB, ZB) => {
    ZB.d(IB, {
      startHarnessShaderPack: () => hB
    });
    var TB = ZB(6731),
      JB = ZB(5210),
      oB = ZB(6784),
      GB = ZB(6763),
      vB = ZB(5204),
      kB = ZB(39281),
      cB = ZB(6778),
      nB = ZB(6792);
    async function hB(BB, IB) {
      const {
        stored: ZB,
        info: hB
      } = await async function(BB, IB) {
        const ZB = await async function(BB) {
          const IB = await fetch(BB);
          if (!IB.ok) throw new Error(`Couldn't fetch the shader pack at ${BB}: HTTP ${IB.status}`);
          const ZB = await IB.json();
          if (!(0, TB.i)(ZB)) throw new Error(`The shader pack at ${BB} isn't a shader pack listing source`);
          return ZB
        }(BB);
        if (!(0, vB.g)(ZB.apiVersion)) throw new Error(`The pack is for shader pack API version ${ZB.apiVersion}; this build runs version ${vB.b}`);
        const kB = {
            manifest: {
              apiVersion: ZB.apiVersion,
              name: ZB.name,
              author: ZB.author,
              description: null,
              keepCircleShadows: !0 === ZB.keepCircleShadows
            },
            files: ZB.files,
            validation: null
          },
          hB = {
            url: BB,
            name: ZB.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          zB = (0, JB.u)(ZB.files);
        if ("string" === typeof zB) return hB.errors = [{
          file: null,
          line: 0,
          message: zB
        }], {
          stored: kB,
          info: hB
        };
        const FB = await (0, GB.loadPageShaderPackCompiler)();
        if (!FB) throw new Error("The shader pack compiler couldn't load");
        const NB = await (0, nB.h)(FB, zB);
        if (!NB) throw new Error("No WebGPU device could validate the shader pack");
        if (hB.errors = [...NB.errors], NB.ok) {
          const BB = FB.yBB(zB, (0, cB.shaderPackTextures)());
          hB.features = (0, JB.q)(BB), hB.runsInMode = (0, oB.l)(BB.variants, IB)
        }
        return {
          stored: {
            ...kB,
            validation: NB
          },
          info: hB
        }
      }(BB, IB), [zB] = hB.errors;
      if (zB) {
        const BB = null === zB.file ? "" : `${zB.file}:${zB.line}: `,
          IB = hB.errors.length > 1 ? ` (${hB.errors.length-1} more)` : "";
        return {
          info: hB,
          problem: `The shader pack doesn't compile: ${BB}${zB.message}${IB}`
        }
      }
      return hB.runsInMode ? ((0, kB.setHarnessUrlShaderPack)(ZB, IB), {
        info: hB,
        problem: null
      }) : {
        info: hB,
        problem: `The shader pack runs nothing in ${IB} mode`
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
  },
  6731: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => vB,
      B: () => GB,
      F: () => TB,
      G: () => zB,
      K: () => nB,
      O: () => dB,
      P: () => hB,
      R: () => cB,
      d: () => NB,
      f: () => qB,
      h: () => gB,
      i: () => FB,
      j: () => WB,
      n: () => QB,
      o: () => kB,
      r: () => JB,
      u: () => CB,
      y: () => oB
    });
    const TB = ["forest", "desert", "water", "night", "cave"];
    const JB = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      oB = ["popular", "updated", "newest"],
      GB = 3,
      vB = 32,
      kB = 300;

    function cB(BB, IB) {
      return BB.slice(0, IB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const nB = 64,
      hB = 512,
      zB = 18e5;

    function FB(BB) {
      const IB = BB,
        ZB = null === IB || void 0 === IB ? void 0 : IB.files;
      return "number" === typeof(null === IB || void 0 === IB ? void 0 : IB.apiVersion) && "string" === typeof IB.name && (null === IB.author || "string" === typeof IB.author) && (void 0 === IB.keepCircleShadows || "boolean" === typeof IB.keepCircleShadows) && "object" === typeof ZB && null !== ZB && Object.values(ZB).every((BB => "string" === typeof BB))
    }
    const NB = "Bloxdhub",
      gB = "https://bloxdhub.com/shaders";

    function qB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const yB = "Screenshot generation failed.",
      UB = "Its screenshots couldn't be generated:";

    function WB(BB) {
      var IB;
      return BB === yB || null !== (IB = null === BB || void 0 === BB ? void 0 : BB.startsWith(UB)) && void 0 !== IB && IB
    }

    function dB(BB, IB) {
      return `shaderPacks/${BB}/${IB}.json`
    }

    function CB(BB, IB, ZB, TB) {
      return null === IB.renderId ? QB(BB, IB.baselineVersion, ZB, TB) : `${BB}/${function(BB,IB,ZB,TB){return`shaderPacks/${BB}/${IB}/${ZB}-${TB}.webp`}(IB.packId,IB.renderId,ZB,TB)}`
    }

    function QB(BB, IB, ZB, TB) {
      return `${BB}/${function(BB,IB,ZB){return`shaderPacks/baseline/${BB}/${IB}-${ZB}.webp`}(IB,ZB,TB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);