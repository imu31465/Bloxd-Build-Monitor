export const id = 133;
export const ids = [133];
export const modules = {
  41837: (BB, jB, zB) => {
    zB.d(jB, {
      startHarnessShaderPack: () => pB
    });
    var QB = zB(6523),
      nB = zB(5120),
      dB = zB(6592),
      IB = zB(6574),
      NB = zB(5115),
      uB = zB(39307),
      UB = zB(6585),
      aB = zB(6598);
    async function pB(BB, jB) {
      const {
        stored: zB,
        info: pB
      } = await async function(BB, jB) {
        const zB = await async function(BB) {
          const jB = await fetch(BB);
          if (!jB.ok) throw new Error(`Couldn't fetch the shader pack at ${BB}: HTTP ${jB.status}`);
          const zB = await jB.json();
          if (!(0, QB.l)(zB)) throw new Error(`The shader pack at ${BB} isn't a shader pack listing source`);
          return zB
        }(BB);
        if (!(0, NB.k)(zB.apiVersion)) throw new Error(`The pack is for shader pack API version ${zB.apiVersion}; this build runs version ${NB.d}`);
        const uB = {
            manifest: {
              apiVersion: zB.apiVersion,
              name: zB.name,
              author: zB.author,
              description: null,
              keepCircleShadows: !0 === zB.keepCircleShadows
            },
            files: zB.files,
            validation: null
          },
          pB = {
            url: BB,
            name: zB.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          rB = (0, nB.s)(zB.files);
        if ("string" === typeof rB) return pB.errors = [{
          file: null,
          line: 0,
          message: rB
        }], {
          stored: uB,
          info: pB
        };
        const sB = await (0, IB.loadPageShaderPackCompiler)();
        if (!sB) throw new Error("The shader pack compiler couldn't load");
        const JB = await (0, aB.f)(sB, rB);
        if (!JB) throw new Error("No WebGPU device could validate the shader pack");
        if (pB.errors = [...JB.errors], JB.ok) {
          const BB = sB.O4(rB, (0, UB.shaderPackTextures)());
          pB.features = (0, nB.o)(BB), pB.runsInMode = (0, dB.m)(BB.variants, jB)
        }
        return {
          stored: {
            ...uB,
            validation: JB
          },
          info: pB
        }
      }(BB, jB), [rB] = pB.errors;
      if (rB) {
        const BB = null === rB.file ? "" : `${rB.file}:${rB.line}: `,
          jB = pB.errors.length > 1 ? ` (${pB.errors.length-1} more)` : "";
        return {
          info: pB,
          problem: `The shader pack doesn't compile: ${BB}${rB.message}${jB}`
        }
      }
      return pB.runsInMode ? ((0, uB.setHarnessUrlShaderPack)(zB, jB), {
        info: pB,
        problem: null
      }) : {
        info: pB,
        problem: `The shader pack runs nothing in ${jB} mode`
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
  },
  6523: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => NB,
      D: () => IB,
      H: () => QB,
      L: () => rB,
      O: () => aB,
      P: () => gB,
      T: () => pB,
      U: () => UB,
      d: () => JB,
      f: () => yB,
      h: () => mB,
      l: () => sB,
      m: () => LB,
      n: () => SB,
      o: () => uB,
      s: () => nB,
      u: () => tB,
      y: () => dB
    });
    const QB = ["forest", "desert", "water", "night", "cave"];
    const nB = {
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
      dB = ["popular", "updated", "newest"],
      IB = 3,
      NB = 32,
      uB = 300;

    function UB(BB, jB) {
      return BB.slice(0, jB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const aB = 64,
      pB = 512,
      rB = 18e5;

    function sB(BB) {
      const jB = BB,
        zB = null === jB || void 0 === jB ? void 0 : jB.files;
      return "number" === typeof(null === jB || void 0 === jB ? void 0 : jB.apiVersion) && "string" === typeof jB.name && (null === jB.author || "string" === typeof jB.author) && (void 0 === jB.keepCircleShadows || "boolean" === typeof jB.keepCircleShadows) && "object" === typeof zB && null !== zB && Object.values(zB).every((BB => "string" === typeof BB))
    }
    const JB = "Bloxdhub",
      mB = "https://bloxdhub.com/shaders";

    function yB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const kB = "Screenshot generation failed.",
      GB = "Its screenshots couldn't be generated:";

    function LB(BB) {
      var jB;
      return BB === kB || null !== (jB = null === BB || void 0 === BB ? void 0 : BB.startsWith(GB)) && void 0 !== jB && jB
    }

    function gB(BB, jB) {
      return `shaderPacks/${BB}/${jB}.json`
    }

    function tB(BB, jB, zB, QB) {
      return null === jB.renderId ? SB(BB, jB.baselineVersion, zB, QB) : `${BB}/${function(BB,jB,zB,QB){return`shaderPacks/${BB}/${jB}/${zB}-${QB}.webp`}(jB.packId,jB.renderId,zB,QB)}`
    }

    function SB(BB, jB, zB, QB) {
      return `${BB}/${function(BB,jB,zB){return`shaderPacks/baseline/${BB}/${jB}-${zB}.webp`}(jB,zB,QB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);