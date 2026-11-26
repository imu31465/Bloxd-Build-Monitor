export const id = 128;
export const ids = [128, 131, 152, 153];
export const modules = {
  5538: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.k,
      c: () => DB,
      g: () => YB.r
    });
    var YB = GB(5546);
    const DB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((OB => ({
      strict: BB,
      program: OB
    })))))
  },
  41498: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      installListedShaderPack: () => MB
    });
    var YB = GB(7107),
      DB = GB(5546),
      QB = GB(1186),
      oB = GB(7159),
      jB = GB(5538),
      yB = GB(7193),
      JB = GB(7186);
    async function MB(BB) {
      const OB = await (0, oB.loadPageShaderPackCompiler)();
      if (null === OB) return {
        kind: "failed",
        reason: "compiler"
      };
      const GB = await PB(BB, OB);
      return "failed" === GB.kind ? GB : await (0, yB.saveShaderPack)(GB.stored, OB) ? ((0, yB.markShaderPackChangePending)(), GB) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function PB(BB, OB) {
      const GB = await async function(BB) {
        let {
          packId: OB,
          sourceHash: GB
        } = BB;
        try {
          const BB = await fetch(`${QB.clientSideServerUrls.s3Url}/${(0,YB.Q)(OB,GB)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!BB.ok) return console.error(`Failed to download shader pack ${OB} (${BB.status})`), null;
          const DB = await BB.json();
          return "object" !== typeof DB || null === DB ? (console.error(`Shader pack ${OB}'s source isn't an object`), null) : DB
        } catch (DB) {
          return console.error(`Failed to download shader pack ${OB}`, DB), null
        }
      }(BB);
      if (null === GB) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, jB.g)(GB.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const oB = (0, DB.v)(GB.files);
      if ("string" === typeof oB) return console.error(`A listed shader pack breaks the pack rules: ${oB}`), {
        kind: "failed",
        reason: "invalid"
      };
      const MB = await (0, JB.f)(OB, oB);
      if (!1 === (null === MB || void 0 === MB ? void 0 : MB.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const PB = {
        manifest: {
          apiVersion: GB.apiVersion,
          name: BB.name,
          author: BB.ownerName,
          description: BB.description || null,
          keepCircleShadows: !0 === GB.keepCircleShadows
        },
        files: oB
      };
      return {
        kind: "loaded",
        stored: (0, yB.toStoredShaderPack)(PB, MB, {
          packId: BB.packId,
          sourceHash: BB.sourceHash
        })
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
  7174: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadShaderPackTextures: () => oB,
      shaderPackTextures: () => jB
    });
    var YB = GB(5546);
    let DB = null,
      QB = null;

    function oB() {
      return QB ??= Promise.all([GB.e(84), GB.e(206)]).then((() => GB(41493))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: OB,
          textureNameToIndex: GB,
          textureAnimationData: QB
        } = BB;
        return DB ??= (0, YB.o)(GB, QB, OB), DB
      })), QB
    }

    function jB() {
      if (null === DB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return DB
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
  5546: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => zB,
      e: () => jB,
      h: () => oB,
      k: () => YB,
      o: () => qB,
      p: () => PB,
      r: () => DB,
      u: () => QB,
      v: () => JB,
      y: () => MB
    });
    const YB = 5;

    function DB(BB) {
      return BB === YB
    }

    function QB(BB) {
      return [...BB.features]
    }
    const oB = 262144,
      jB = 256,
      yB = 256;

    function JB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const OB = [];
      for (const [GB, YB] of Object.entries(BB)) {
        if ("string" !== typeof YB) return `${GB} isn't text.`;
        OB.push({
          path: GB,
          source: YB
        })
      }
      return OB.sort(((BB, OB) => PB(BB.path, OB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > jB) return `The pack has more than ${jB} .wgsl files.`;
          const OB = new Set;
          for (const {
              path: GB
            }
            of BB) {
            const BB = lB(GB);
            if (null !== BB) return BB;
            if (OB.has(GB)) return `The pack has two files at ${GB}.`;
            OB.add(GB)
          }
          return zB(BB) > oB ? `The pack's .wgsl files are over ${oB/1024} KB in total.` : null
        }(OB) ?? OB
    }

    function MB(BB) {
      const OB = {};
      for (const GB of BB) OB[GB.path] = GB.source;
      return OB
    }

    function PB(BB, OB) {
      return BB < OB ? -1 : BB > OB ? 1 : 0
    }

    function zB(BB) {
      const OB = new TextEncoder;
      let GB = 0;
      for (const {
          source: YB
        }
        of BB) GB += OB.encode(YB).byteLength;
      return GB
    }

    function lB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > yB) return `A file path is over ${yB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const pB = /^(.*)\[rot\[([1-4])$/;

    function qB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const YB = new Map;
      OB.forEach(((BB, OB) => {
        let {
          numAnimStates: GB,
          animStartIdx: DB
        } = BB;
        for (let QB = 1; QB < GB; QB++) YB.set(DB + QB - 1, OB)
      }));
      const DB = Object.entries(BB),
        QB = new Map;
      for (const [qB, ZB] of DB) {
        const BB = pB.exec(qB);
        "1" === BB?.[2] && QB.set(BB[1], ZB + 1)
      }
      const oB = BB => {
          const OB = pB.exec(BB);
          return OB && QB.has(OB[1]) ? {
            root: OB[1],
            rotation: Number(OB[2]) - 1
          } : null
        },
        jB = new Set(DB.map((BB => {
          let [OB] = BB;
          return oB(OB)?.root ?? OB
        }))),
        yB = (BB, GB) => {
          const YB = BB.replace(/_?0$/, "");
          return (OB[GB]?.numAnimStates ?? 0) > 1 && !jB.has(YB) ? YB : BB
        },
        JB = new Map;
      for (const [pB, qB] of DB) JB.set(qB, yB(oB(pB)?.root ?? pB, qB));
      const MB = DB.reduce(((BB, OB) => {
          let [, GB] = OB;
          return Math.max(BB, GB + 1)
        }), 0),
        PB = Array.from({
          length: MB
        }, ((BB, OB) => ({
          id: OB + 1,
          rotation: 0
        }))),
        zB = new Map,
        lB = new Map;
      for (const [pB, qB] of DB) {
        const BB = oB(pB),
          OB = YB.get(qB);
        if (void 0 !== OB) {
          const GB = JB.get(OB);
          lB.set(pB, {
            name: pB,
            texture: GB,
            kind: "frame"
          }), BB && !lB.has(BB.root) && lB.set(BB.root, {
            name: BB.root,
            texture: GB,
            kind: "frame"
          });
          continue
        }
        const GB = JB.get(qB),
          DB = BB?.root ?? pB;
        if (GB !== DB && lB.set(DB, {
            name: DB,
            texture: GB,
            kind: "frame"
          }), BB) {
          const OB = QB.get(BB.root);
          PB[qB] = {
            id: OB,
            rotation: BB.rotation
          }, zB.set(GB, OB), lB.set(pB, {
            name: pB,
            texture: GB,
            kind: "rotation"
          })
        } else zB.set(GB, qB + 1)
      }
      for (const pB of zB.keys()) lB.delete(pB);
      for (const [pB, qB] of GB) {
        const BB = zB.get(qB);
        void 0 === BB || zB.has(pB) || (zB.set(pB, BB), lB.delete(pB))
      }
      return {
        named: [...zB].sort(((BB, OB) => {
          let [GB] = BB, [YB] = OB;
          return GB < YB ? -1 : GB > YB ? 1 : 0
        })).map((BB => {
          let [OB, GB] = BB;
          return {
            name: OB,
            id: GB
          }
        })),
        aliases: [...lB.values()],
        layers: PB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);