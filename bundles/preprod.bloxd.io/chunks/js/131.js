export const id = 131;
export const ids = [131, 152];
export const modules = {
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