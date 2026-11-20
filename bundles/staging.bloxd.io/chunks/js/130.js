export const id = 130;
export const ids = [130];
export const modules = {
  6306: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      loadShaderPackTextures: () => PU,
      shaderPackTextures: () => TU
    });
    var tU = gU(6265);
    let pU = null,
      EU = null;

    function PU() {
      return EU ??= Promise.all([gU.e(69), gU.e(198)]).then((() => gU(39871))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: RU,
          textureNameToIndex: gU,
          textureAnimationData: EU
        } = UU;
        return pU ??= (0, tU.i)(gU, EU, RU), pU
      })), EU
    }

    function TU() {
      if (null === pU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return pU
    }
  },
  6265: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      e: () => EU,
      h: () => tU,
      i: () => CU,
      k: () => cU,
      n: () => pU,
      r: () => qU,
      t: () => KU,
      x: () => GU
    });
    const tU = 5;

    function pU(UU) {
      return UU === tU
    }
    const EU = 262144,
      PU = 256,
      TU = 256;

    function qU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
      const RU = [];
      for (const [gU, tU] of Object.entries(UU)) {
        if ("string" !== typeof tU) return `${gU} isn't text.`;
        RU.push({
          path: gU,
          source: tU
        })
      }
      return RU.sort(((UU, RU) => cU(UU.path, RU.path))),
        function(UU) {
          if (0 === UU.length) return "The pack has no .wgsl files.";
          if (UU.length > PU) return `The pack has more than ${PU} .wgsl files.`;
          const RU = new Set;
          for (const {
              path: gU
            }
            of UU) {
            const UU = jU(gU);
            if (null !== UU) return UU;
            if (RU.has(gU)) return `The pack has two files at ${gU}.`;
            RU.add(gU)
          }
          return GU(UU) > EU ? `The pack's .wgsl files are over ${EU/1024} KB in total.` : null
        }(RU) ?? RU
    }

    function KU(UU) {
      const RU = {};
      for (const gU of UU) RU[gU.path] = gU.source;
      return RU
    }

    function cU(UU, RU) {
      return UU < RU ? -1 : UU > RU ? 1 : 0
    }

    function GU(UU) {
      const RU = new TextEncoder;
      let gU = 0;
      for (const {
          source: tU
        }
        of UU) gU += RU.encode(tU).byteLength;
      return gU
    }

    function jU(UU) {
      if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
      if (UU.length > TU) return `A file path is over ${TU} characters.`;
      if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
      return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
    }
    const uU = /^(.*)\[rot\[([1-4])$/;

    function CU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const tU = new Map;
      RU.forEach(((UU, RU) => {
        let {
          numAnimStates: gU,
          animStartIdx: pU
        } = UU;
        for (let EU = 1; EU < gU; EU++) tU.set(pU + EU - 1, RU)
      }));
      const pU = Object.entries(UU),
        EU = new Map;
      for (const [hU, QU] of pU) {
        const UU = uU.exec(hU);
        "1" === UU?.[2] && EU.set(UU[1], QU + 1)
      }
      const PU = UU => {
          const RU = uU.exec(UU);
          return RU && EU.has(RU[1]) ? {
            root: RU[1],
            rotation: Number(RU[2]) - 1
          } : null
        },
        TU = new Set(pU.map((UU => {
          let [RU] = UU;
          return PU(RU)?.root ?? RU
        }))),
        qU = (UU, gU) => {
          const tU = UU.replace(/_?0$/, "");
          return (RU[gU]?.numAnimStates ?? 0) > 1 && !TU.has(tU) ? tU : UU
        },
        KU = new Map;
      for (const [uU, hU] of pU) KU.set(hU, qU(PU(uU)?.root ?? uU, hU));
      const cU = pU.reduce(((UU, RU) => {
          let [, gU] = RU;
          return Math.max(UU, gU + 1)
        }), 0),
        GU = Array.from({
          length: cU
        }, ((UU, RU) => ({
          id: RU + 1,
          rotation: 0
        }))),
        jU = new Map,
        CU = new Map;
      for (const [uU, hU] of pU) {
        const UU = PU(uU),
          RU = tU.get(hU);
        if (void 0 !== RU) {
          const gU = KU.get(RU);
          CU.set(uU, {
            name: uU,
            texture: gU,
            kind: "frame"
          }), UU && !CU.has(UU.root) && CU.set(UU.root, {
            name: UU.root,
            texture: gU,
            kind: "frame"
          });
          continue
        }
        const gU = KU.get(hU),
          pU = UU?.root ?? uU;
        if (gU !== pU && CU.set(pU, {
            name: pU,
            texture: gU,
            kind: "frame"
          }), UU) {
          const RU = EU.get(UU.root);
          GU[hU] = {
            id: RU,
            rotation: UU.rotation
          }, jU.set(gU, RU), CU.set(uU, {
            name: uU,
            texture: gU,
            kind: "rotation"
          })
        } else jU.set(gU, hU + 1)
      }
      for (const uU of jU.keys()) CU.delete(uU);
      for (const [uU, hU] of gU) {
        const UU = jU.get(hU);
        void 0 === UU || jU.has(uU) || (jU.set(uU, UU), CU.delete(uU))
      }
      return {
        named: [...jU].sort(((UU, RU) => {
          let [gU] = UU, [tU] = RU;
          return gU < tU ? -1 : gU > tU ? 1 : 0
        })).map((UU => {
          let [RU, gU] = UU;
          return {
            name: RU,
            id: gU
          }
        })),
        aliases: [...CU.values()],
        layers: GU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);