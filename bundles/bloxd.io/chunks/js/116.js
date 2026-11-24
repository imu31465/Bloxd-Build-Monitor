export const id = 116;
export const ids = [116, 136];
export const modules = {
  6664: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      loadShaderPackTextures: () => rD,
      shaderPackTextures: () => LD
    });
    var pD = wD(5084);
    let sD = null,
      KD = null;

    function rD() {
      return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zD,
          textureNameToIndex: wD,
          textureAnimationData: KD
        } = DD;
        return sD ??= (0, pD.m)(wD, KD, zD), sD
      })), KD
    }

    function LD() {
      if (null === sD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return sD
    }
  },
  5084: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => UD,
      d: () => LD,
      e: () => rD,
      i: () => pD,
      m: () => BD,
      n: () => AD,
      q: () => sD,
      r: () => KD,
      v: () => gD,
      z: () => RD
    });
    const pD = 5;

    function sD(DD) {
      return DD === pD
    }

    function KD(DD) {
      return [...DD.features]
    }
    const rD = 262144,
      LD = 256,
      cD = 256;

    function gD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const zD = [];
      for (const [wD, pD] of Object.entries(DD)) {
        if ("string" !== typeof pD) return `${wD} isn't text.`;
        zD.push({
          path: wD,
          source: pD
        })
      }
      return zD.sort(((DD, zD) => AD(DD.path, zD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
          const zD = new Set;
          for (const {
              path: wD
            }
            of DD) {
            const DD = fD(wD);
            if (null !== DD) return DD;
            if (zD.has(wD)) return `The pack has two files at ${wD}.`;
            zD.add(wD)
          }
          return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
        }(zD) ?? zD
    }

    function RD(DD) {
      const zD = {};
      for (const wD of DD) zD[wD.path] = wD.source;
      return zD
    }

    function AD(DD, zD) {
      return DD < zD ? -1 : DD > zD ? 1 : 0
    }

    function UD(DD) {
      const zD = new TextEncoder;
      let wD = 0;
      for (const {
          source: pD
        }
        of DD) wD += zD.encode(pD).byteLength;
      return wD
    }

    function fD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > cD) return `A file path is over ${cD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const ID = /^(.*)\[rot\[([1-4])$/;

    function BD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const pD = new Map;
      zD.forEach(((DD, zD) => {
        let {
          numAnimStates: wD,
          animStartIdx: sD
        } = DD;
        for (let KD = 1; KD < wD; KD++) pD.set(sD + KD - 1, zD)
      }));
      const sD = Object.entries(DD),
        KD = new Map;
      for (const [BD, GD] of sD) {
        const DD = ID.exec(BD);
        "1" === DD?.[2] && KD.set(DD[1], GD + 1)
      }
      const rD = DD => {
          const zD = ID.exec(DD);
          return zD && KD.has(zD[1]) ? {
            root: zD[1],
            rotation: Number(zD[2]) - 1
          } : null
        },
        LD = new Set(sD.map((DD => {
          let [zD] = DD;
          return rD(zD)?.root ?? zD
        }))),
        cD = (DD, wD) => {
          const pD = DD.replace(/_?0$/, "");
          return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
        },
        gD = new Map;
      for (const [ID, BD] of sD) gD.set(BD, cD(rD(ID)?.root ?? ID, BD));
      const RD = sD.reduce(((DD, zD) => {
          let [, wD] = zD;
          return Math.max(DD, wD + 1)
        }), 0),
        AD = Array.from({
          length: RD
        }, ((DD, zD) => ({
          id: zD + 1,
          rotation: 0
        }))),
        UD = new Map,
        fD = new Map;
      for (const [ID, BD] of sD) {
        const DD = rD(ID),
          zD = pD.get(BD);
        if (void 0 !== zD) {
          const wD = gD.get(zD);
          fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "frame"
          }), DD && !fD.has(DD.root) && fD.set(DD.root, {
            name: DD.root,
            texture: wD,
            kind: "frame"
          });
          continue
        }
        const wD = gD.get(BD),
          sD = DD?.root ?? ID;
        if (wD !== sD && fD.set(sD, {
            name: sD,
            texture: wD,
            kind: "frame"
          }), DD) {
          const zD = KD.get(DD.root);
          AD[BD] = {
            id: zD,
            rotation: DD.rotation
          }, UD.set(wD, zD), fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "rotation"
          })
        } else UD.set(wD, BD + 1)
      }
      for (const ID of UD.keys()) fD.delete(ID);
      for (const [ID, BD] of wD) {
        const DD = UD.get(BD);
        void 0 === DD || UD.has(ID) || (UD.set(ID, DD), fD.delete(ID))
      }
      return {
        named: [...UD].sort(((DD, zD) => {
          let [wD] = DD, [pD] = zD;
          return wD < pD ? -1 : wD > pD ? 1 : 0
        })).map((DD => {
          let [zD, wD] = DD;
          return {
            name: zD,
            id: wD
          }
        })),
        aliases: [...fD.values()],
        layers: AD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);