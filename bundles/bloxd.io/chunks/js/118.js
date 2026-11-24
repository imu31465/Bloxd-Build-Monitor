export const id = 118;
export const ids = [118, 138];
export const modules = {
  6778: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      loadShaderPackTextures: () => GB,
      shaderPackTextures: () => vB
    });
    var TB = ZB(5210);
    let JB = null,
      oB = null;

    function GB() {
      return oB ??= Promise.all([ZB.e(73), ZB.e(190)]).then((() => ZB(40534))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: IB,
          textureNameToIndex: ZB,
          textureAnimationData: oB
        } = BB;
        return JB ??= (0, TB.l)(ZB, oB, IB), JB
      })), oB
    }

    function vB() {
      if (null === JB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return JB
    }
  },
  5210: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => zB,
      d: () => vB,
      g: () => GB,
      j: () => TB,
      l: () => gB,
      m: () => hB,
      o: () => JB,
      q: () => oB,
      u: () => cB,
      y: () => nB
    });
    const TB = 5;

    function JB(BB) {
      return BB === TB
    }

    function oB(BB) {
      return [...BB.features]
    }
    const GB = 262144,
      vB = 256,
      kB = 256;

    function cB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const IB = [];
      for (const [ZB, TB] of Object.entries(BB)) {
        if ("string" !== typeof TB) return `${ZB} isn't text.`;
        IB.push({
          path: ZB,
          source: TB
        })
      }
      return IB.sort(((BB, IB) => hB(BB.path, IB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > vB) return `The pack has more than ${vB} .wgsl files.`;
          const IB = new Set;
          for (const {
              path: ZB
            }
            of BB) {
            const BB = FB(ZB);
            if (null !== BB) return BB;
            if (IB.has(ZB)) return `The pack has two files at ${ZB}.`;
            IB.add(ZB)
          }
          return zB(BB) > GB ? `The pack's .wgsl files are over ${GB/1024} KB in total.` : null
        }(IB) ?? IB
    }

    function nB(BB) {
      const IB = {};
      for (const ZB of BB) IB[ZB.path] = ZB.source;
      return IB
    }

    function hB(BB, IB) {
      return BB < IB ? -1 : BB > IB ? 1 : 0
    }

    function zB(BB) {
      const IB = new TextEncoder;
      let ZB = 0;
      for (const {
          source: TB
        }
        of BB) ZB += IB.encode(TB).byteLength;
      return ZB
    }

    function FB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > kB) return `A file path is over ${kB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const NB = /^(.*)\[rot\[([1-4])$/;

    function gB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const TB = new Map;
      IB.forEach(((BB, IB) => {
        let {
          numAnimStates: ZB,
          animStartIdx: JB
        } = BB;
        for (let oB = 1; oB < ZB; oB++) TB.set(JB + oB - 1, IB)
      }));
      const JB = Object.entries(BB),
        oB = new Map;
      for (const [gB, qB] of JB) {
        const BB = NB.exec(gB);
        "1" === BB?.[2] && oB.set(BB[1], qB + 1)
      }
      const GB = BB => {
          const IB = NB.exec(BB);
          return IB && oB.has(IB[1]) ? {
            root: IB[1],
            rotation: Number(IB[2]) - 1
          } : null
        },
        vB = new Set(JB.map((BB => {
          let [IB] = BB;
          return GB(IB)?.root ?? IB
        }))),
        kB = (BB, ZB) => {
          const TB = BB.replace(/_?0$/, "");
          return (IB[ZB]?.numAnimStates ?? 0) > 1 && !vB.has(TB) ? TB : BB
        },
        cB = new Map;
      for (const [NB, gB] of JB) cB.set(gB, kB(GB(NB)?.root ?? NB, gB));
      const nB = JB.reduce(((BB, IB) => {
          let [, ZB] = IB;
          return Math.max(BB, ZB + 1)
        }), 0),
        hB = Array.from({
          length: nB
        }, ((BB, IB) => ({
          id: IB + 1,
          rotation: 0
        }))),
        zB = new Map,
        FB = new Map;
      for (const [NB, gB] of JB) {
        const BB = GB(NB),
          IB = TB.get(gB);
        if (void 0 !== IB) {
          const ZB = cB.get(IB);
          FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "frame"
          }), BB && !FB.has(BB.root) && FB.set(BB.root, {
            name: BB.root,
            texture: ZB,
            kind: "frame"
          });
          continue
        }
        const ZB = cB.get(gB),
          JB = BB?.root ?? NB;
        if (ZB !== JB && FB.set(JB, {
            name: JB,
            texture: ZB,
            kind: "frame"
          }), BB) {
          const IB = oB.get(BB.root);
          hB[gB] = {
            id: IB,
            rotation: BB.rotation
          }, zB.set(ZB, IB), FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "rotation"
          })
        } else zB.set(ZB, gB + 1)
      }
      for (const NB of zB.keys()) FB.delete(NB);
      for (const [NB, gB] of ZB) {
        const BB = zB.get(gB);
        void 0 === BB || zB.has(NB) || (zB.set(NB, BB), FB.delete(NB))
      }
      return {
        named: [...zB].sort(((BB, IB) => {
          let [ZB] = BB, [TB] = IB;
          return ZB < TB ? -1 : ZB > TB ? 1 : 0
        })).map((BB => {
          let [IB, ZB] = BB;
          return {
            name: IB,
            id: ZB
          }
        })),
        aliases: [...FB.values()],
        layers: hB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);