export const id = 146;
export const ids = [146];
export const modules = {
  44890: (BB, OB, GB) => {
    GB.d(OB, {
      startHarnessShaderPack: () => PB
    });
    var YB = GB(7107),
      DB = GB(5546),
      QB = GB(7179),
      oB = GB(7159),
      jB = GB(5538),
      yB = GB(39925),
      JB = GB(7174),
      MB = GB(7186);
    async function PB(BB, OB) {
      const {
        stored: GB,
        info: PB
      } = await async function(BB, OB) {
        const GB = await async function(BB) {
          const OB = await fetch(BB);
          if (!OB.ok) throw new Error(`Couldn't fetch the shader pack at ${BB}: HTTP ${OB.status}`);
          const GB = await OB.json();
          if (!(0, YB.l)(GB)) throw new Error(`The shader pack at ${BB} isn't a shader pack listing source`);
          return GB
        }(BB);
        if (!(0, jB.g)(GB.apiVersion)) throw new Error(`The pack is for shader pack API version ${GB.apiVersion}; this build runs version ${jB.b}`);
        const yB = {
            manifest: {
              apiVersion: GB.apiVersion,
              name: GB.name,
              author: GB.author,
              description: null,
              keepCircleShadows: !0 === GB.keepCircleShadows
            },
            files: GB.files,
            validation: null
          },
          PB = {
            url: BB,
            name: GB.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          zB = (0, DB.v)(GB.files);
        if ("string" === typeof zB) return PB.errors = [{
          file: null,
          line: 0,
          message: zB
        }], {
          stored: yB,
          info: PB
        };
        const lB = await (0, oB.loadPageShaderPackCompiler)();
        if (!lB) throw new Error("The shader pack compiler couldn't load");
        const pB = await (0, MB.f)(lB, zB);
        if (!pB) throw new Error("No WebGPU device could validate the shader pack");
        if (PB.errors = [...pB.errors], pB.ok) {
          const BB = lB.VOB(zB, (0, JB.shaderPackTextures)());
          PB.features = (0, DB.u)(BB), PB.runsInMode = (0, QB.k)(BB.variants, OB)
        }
        return {
          stored: {
            ...yB,
            validation: pB
          },
          info: PB
        }
      }(BB, OB), [zB] = PB.errors;
      if (zB) {
        const BB = null === zB.file ? "" : `${zB.file}:${zB.line}: `,
          OB = PB.errors.length > 1 ? ` (${PB.errors.length-1} more)` : "";
        return {
          info: PB,
          problem: `The shader pack doesn't compile: ${BB}${zB.message}${OB}`
        }
      }
      return PB.runsInMode ? ((0, yB.setHarnessUrlShaderPack)(GB, OB), {
        info: PB,
        problem: null
      }) : {
        info: PB,
        problem: `The shader pack runs nothing in ${OB} mode`
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
  },
  7107: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => jB,
      E: () => oB,
      F: () => YB,
      I: () => zB,
      M: () => MB,
      Q: () => AB,
      U: () => PB,
      X: () => JB,
      e: () => pB,
      h: () => ZB,
      i: () => qB,
      l: () => lB,
      n: () => WB,
      q: () => SB,
      r: () => yB,
      t: () => DB,
      x: () => VB,
      z: () => QB
    });
    const YB = ["forest", "desert", "water", "night", "cave"];
    const DB = {
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
      QB = ["popular", "updated", "newest"],
      oB = 3,
      jB = 32,
      yB = 300;

    function JB(BB, OB) {
      return BB.slice(0, OB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const MB = 64,
      PB = 512,
      zB = 18e5;

    function lB(BB) {
      const OB = BB,
        GB = null === OB || void 0 === OB ? void 0 : OB.files;
      return "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.apiVersion) && "string" === typeof OB.name && (null === OB.author || "string" === typeof OB.author) && (void 0 === OB.keepCircleShadows || "boolean" === typeof OB.keepCircleShadows) && "object" === typeof GB && null !== GB && Object.values(GB).every((BB => "string" === typeof BB))
    }
    const pB = "Bloxdhub",
      qB = "https://bloxdhub.com/shaders";

    function ZB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const NB = "Screenshot generation failed.",
      RB = "Its screenshots couldn't be generated:";

    function WB(BB) {
      var OB;
      return BB === NB || null !== (OB = null === BB || void 0 === BB ? void 0 : BB.startsWith(RB)) && void 0 !== OB && OB
    }

    function AB(BB, OB) {
      return `shaderPacks/${BB}/${OB}.json`
    }

    function VB(BB, OB, GB, YB) {
      return null === OB.renderId ? SB(BB, OB.baselineVersion, GB, YB) : `${BB}/${function(BB,OB,GB,YB){return`shaderPacks/${BB}/${OB}/${GB}-${YB}.webp`}(OB.packId,OB.renderId,GB,YB)}`
    }

    function SB(BB, OB, GB, YB) {
      return `${BB}/${function(BB,OB,GB){return`shaderPacks/baseline/${BB}/${OB}-${GB}.webp`}(OB,GB,YB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);