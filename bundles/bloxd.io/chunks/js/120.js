export const id = 120;
export const ids = [120, 123];
export const modules = {
  5940: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB.h,
      h: () => yB,
      l: () => VB.p
    });
    var VB = dB(5924);
    const yB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((TB => ({
      strict: BB,
      program: TB
    })))))
  },
  5987: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      forgetShaderPackActiveHint: () => UB,
      isOtherApiVersion: () => sB,
      isShaderPackActive: () => iB,
      isShaderPackChangePending: () => fB,
      markShaderPackChangePending: () => tB,
      pageShaderPackValidationVersion: () => MB,
      reconcileStoredShaderPackHint: () => wB,
      removeShaderPack: () => mB,
      replaceShaderPack: () => HB,
      saveShaderPack: () => uB,
      shaderPackNeedsCheck: () => zB,
      storedPackOutcome: () => NB,
      storedShaderPackFiles: () => LB,
      toStoredShaderPack: () => kB
    });
    var VB = dB(5924),
      yB = dB(5940),
      pB = dB(33),
      lB = dB(2939),
      JB = dB(5994),
      YB = dB(5973);
    const gB = "shaderPackChangePending";
    let oB = null;

    function kB(BB, TB, dB) {
      return {
        manifest: BB.manifest,
        files: (0, VB.u)(BB.files),
        validation: TB,
        ...dB && {
          listing: dB
        }
      }
    }

    function LB(BB) {
      return Object.keys(BB.files).map((TB => ({
        path: TB,
        source: BB.files[TB]
      })))
    }
    let OB = Promise.resolve();

    function DB(BB) {
      const TB = OB.then(BB);
      return OB = TB.catch((() => {})), TB
    }

    function uB(BB, TB) {
      return DB((() => EB(BB, TB)))
    }

    function HB(BB, TB, dB) {
      return DB((async () => JSON.stringify(await (0, JB.d)()) === JSON.stringify(BB) && (null === TB ? (await vB(), !0) : EB(TB, dB))))
    }
    async function EB(BB, TB) {
      const dB = await pB.f.setItem(JB.b, BB);
      return dB && FB(BB, TB), dB
    }
    async function vB() {
      await pB.f.removeItem(JB.b), pB.j.removeItem(lB.d)
    }

    function mB() {
      return DB(vB)
    }

    function iB(BB, TB) {
      return "active" === NB(BB, TB).kind
    }

    function NB(BB, TB) {
      var dB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : sB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.ok) || BB.validation.fromRecheck ? null === TB ? {
        kind: "none",
        reason: "noCompiler"
      } : zB(BB, TB) ? {
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

    function tB() {
      pB.m.setItem(gB, performance.timeOrigin)
    }

    function fB() {
      return pB.m.getItem(gB) === performance.timeOrigin
    }

    function sB(BB) {
      return !(0, yB.l)(BB.manifest.apiVersion)
    }

    function MB(BB) {
      return oB ??= BB.PU((0, YB.shaderPackTextures)()), oB
    }

    function zB(BB, TB) {
      var dB;
      return (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.headerVersion) !== MB(TB)
    }

    function wB(BB) {
      return DB((async () => {
        FB(await (0, JB.d)(!0), BB)
      }))
    }

    function UB() {
      return DB((async () => {
        pB.j.removeItem(lB.d)
      }))
    }

    function FB(BB, TB) {
      iB(BB, TB) ? pB.j.setItem(lB.d, !0) : pB.j.removeItem(lB.d)
    }
  },
  5973: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      loadShaderPackTextures: () => lB,
      shaderPackTextures: () => JB
    });
    var VB = dB(5924);
    let yB = null,
      pB = null;

    function lB() {
      return pB ??= Promise.all([dB.e(64), dB.e(184)]).then((() => dB(39231))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: TB,
          textureNameToIndex: dB,
          textureAnimationData: pB
        } = BB;
        return yB ??= (0, VB.l)(dB, pB, TB), yB
      })), pB
    }

    function JB() {
      if (null === yB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yB
    }
  },
  5924: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      d: () => pB,
      h: () => VB,
      l: () => DB,
      m: () => oB,
      p: () => yB,
      q: () => YB,
      u: () => gB,
      x: () => kB
    });
    const VB = 5;

    function yB(BB) {
      return BB === VB
    }
    const pB = 262144,
      lB = 256,
      JB = 256;

    function YB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const TB = [];
      for (const [dB, VB] of Object.entries(BB)) {
        if ("string" !== typeof VB) return `${dB} isn't text.`;
        TB.push({
          path: dB,
          source: VB
        })
      }
      return TB.sort(((BB, TB) => oB(BB.path, TB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > lB) return `The pack has more than ${lB} .wgsl files.`;
          const TB = new Set;
          for (const {
              path: dB
            }
            of BB) {
            const BB = LB(dB);
            if (null !== BB) return BB;
            if (TB.has(dB)) return `The pack has two files at ${dB}.`;
            TB.add(dB)
          }
          return kB(BB) > pB ? `The pack's .wgsl files are over ${pB/1024} KB in total.` : null
        }(TB) ?? TB
    }

    function gB(BB) {
      const TB = {};
      for (const dB of BB) TB[dB.path] = dB.source;
      return TB
    }

    function oB(BB, TB) {
      return BB < TB ? -1 : BB > TB ? 1 : 0
    }

    function kB(BB) {
      const TB = new TextEncoder;
      let dB = 0;
      for (const {
          source: VB
        }
        of BB) dB += TB.encode(VB).byteLength;
      return dB
    }

    function LB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > JB) return `A file path is over ${JB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const OB = /^(.*)\[rot\[([1-4])$/;

    function DB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const VB = new Map;
      TB.forEach(((BB, TB) => {
        let {
          numAnimStates: dB,
          animStartIdx: yB
        } = BB;
        for (let pB = 1; pB < dB; pB++) VB.set(yB + pB - 1, TB)
      }));
      const yB = Object.entries(BB),
        pB = new Map;
      for (const [uB, HB] of yB) {
        const BB = OB.exec(uB);
        "1" === BB?.[2] && pB.set(BB[1], HB + 1)
      }
      const lB = BB => {
          const TB = OB.exec(BB);
          return TB && pB.has(TB[1]) ? {
            root: TB[1],
            rotation: Number(TB[2]) - 1
          } : null
        },
        JB = new Set(yB.map((BB => {
          let [TB] = BB;
          return lB(TB)?.root ?? TB
        }))),
        YB = (BB, dB) => {
          const VB = BB.replace(/_?0$/, "");
          return (TB[dB]?.numAnimStates ?? 0) > 1 && !JB.has(VB) ? VB : BB
        },
        gB = new Map;
      for (const [OB, uB] of yB) gB.set(uB, YB(lB(OB)?.root ?? OB, uB));
      const oB = yB.reduce(((BB, TB) => {
          let [, dB] = TB;
          return Math.max(BB, dB + 1)
        }), 0),
        kB = Array.from({
          length: oB
        }, ((BB, TB) => ({
          id: TB + 1,
          rotation: 0
        }))),
        LB = new Map,
        DB = new Map;
      for (const [OB, uB] of yB) {
        const BB = lB(OB),
          TB = VB.get(uB);
        if (void 0 !== TB) {
          const dB = gB.get(TB);
          DB.set(OB, {
            name: OB,
            texture: dB,
            kind: "frame"
          }), BB && !DB.has(BB.root) && DB.set(BB.root, {
            name: BB.root,
            texture: dB,
            kind: "frame"
          });
          continue
        }
        const dB = gB.get(uB),
          yB = BB?.root ?? OB;
        if (dB !== yB && DB.set(yB, {
            name: yB,
            texture: dB,
            kind: "frame"
          }), BB) {
          const TB = pB.get(BB.root);
          kB[uB] = {
            id: TB,
            rotation: BB.rotation
          }, LB.set(dB, TB), DB.set(OB, {
            name: OB,
            texture: dB,
            kind: "rotation"
          })
        } else LB.set(dB, uB + 1)
      }
      for (const OB of LB.keys()) DB.delete(OB);
      for (const [OB, uB] of dB) {
        const BB = LB.get(uB);
        void 0 === BB || LB.has(OB) || (LB.set(OB, BB), DB.delete(OB))
      }
      return {
        named: [...LB].sort(((BB, TB) => {
          let [dB] = BB, [VB] = TB;
          return dB < VB ? -1 : dB > VB ? 1 : 0
        })).map((BB => {
          let [TB, dB] = BB;
          return {
            name: TB,
            id: dB
          }
        })),
        aliases: [...DB.values()],
        layers: kB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);