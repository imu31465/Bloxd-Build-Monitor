export const id = 130;
export const ids = [130];
export const modules = {
  6379: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      loadShaderPackTextures: () => fD,
      shaderPackTextures: () => bD
    });
    var ID = cD(6343);
    let pD = null,
      iD = null;

    function fD() {
      return iD ??= Promise.all([cD.e(69), cD.e(198)]).then((() => cD(39608))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: CD,
          textureNameToIndex: cD,
          textureAnimationData: iD
        } = DD;
        return pD ??= (0, ID.m)(cD, iD, CD), pD
      })), iD
    }

    function bD() {
      if (null === pD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return pD
    }
  },
  6343: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => BD,
      d: () => fD,
      h: () => iD,
      l: () => ID,
      m: () => tD,
      n: () => SD,
      r: () => pD,
      s: () => QD,
      w: () => wD
    });
    const ID = 5;

    function pD(DD) {
      return DD === ID
    }
    const iD = 262144,
      fD = 256,
      bD = 256;

    function QD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const CD = [];
      for (const [cD, ID] of Object.entries(DD)) {
        if ("string" !== typeof ID) return `${cD} isn't text.`;
        CD.push({
          path: cD,
          source: ID
        })
      }
      return CD.sort(((DD, CD) => SD(DD.path, CD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > fD) return `The pack has more than ${fD} .wgsl files.`;
          const CD = new Set;
          for (const {
              path: cD
            }
            of DD) {
            const DD = yD(cD);
            if (null !== DD) return DD;
            if (CD.has(cD)) return `The pack has two files at ${cD}.`;
            CD.add(cD)
          }
          return BD(DD) > iD ? `The pack's .wgsl files are over ${iD/1024} KB in total.` : null
        }(CD) ?? CD
    }

    function wD(DD) {
      const CD = {};
      for (const cD of DD) CD[cD.path] = cD.source;
      return CD
    }

    function SD(DD, CD) {
      return DD < CD ? -1 : DD > CD ? 1 : 0
    }

    function BD(DD) {
      const CD = new TextEncoder;
      let cD = 0;
      for (const {
          source: ID
        }
        of DD) cD += CD.encode(ID).byteLength;
      return cD
    }

    function yD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > bD) return `A file path is over ${bD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const MD = /^(.*)\[rot\[([1-4])$/;

    function tD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ID = new Map;
      CD.forEach(((DD, CD) => {
        let {
          numAnimStates: cD,
          animStartIdx: pD
        } = DD;
        for (let iD = 1; iD < cD; iD++) ID.set(pD + iD - 1, CD)
      }));
      const pD = Object.entries(DD),
        iD = new Map;
      for (const [ZD, oD] of pD) {
        const DD = MD.exec(ZD);
        "1" === DD?.[2] && iD.set(DD[1], oD + 1)
      }
      const fD = DD => {
          const CD = MD.exec(DD);
          return CD && iD.has(CD[1]) ? {
            root: CD[1],
            rotation: Number(CD[2]) - 1
          } : null
        },
        bD = new Set(pD.map((DD => {
          let [CD] = DD;
          return fD(CD)?.root ?? CD
        }))),
        QD = (DD, cD) => {
          const ID = DD.replace(/_?0$/, "");
          return (CD[cD]?.numAnimStates ?? 0) > 1 && !bD.has(ID) ? ID : DD
        },
        wD = new Map;
      for (const [MD, ZD] of pD) wD.set(ZD, QD(fD(MD)?.root ?? MD, ZD));
      const SD = pD.reduce(((DD, CD) => {
          let [, cD] = CD;
          return Math.max(DD, cD + 1)
        }), 0),
        BD = Array.from({
          length: SD
        }, ((DD, CD) => ({
          id: CD + 1,
          rotation: 0
        }))),
        yD = new Map,
        tD = new Map;
      for (const [MD, ZD] of pD) {
        const DD = fD(MD),
          CD = ID.get(ZD);
        if (void 0 !== CD) {
          const cD = wD.get(CD);
          tD.set(MD, {
            name: MD,
            texture: cD,
            kind: "frame"
          }), DD && !tD.has(DD.root) && tD.set(DD.root, {
            name: DD.root,
            texture: cD,
            kind: "frame"
          });
          continue
        }
        const cD = wD.get(ZD),
          pD = DD?.root ?? MD;
        if (cD !== pD && tD.set(pD, {
            name: pD,
            texture: cD,
            kind: "frame"
          }), DD) {
          const CD = iD.get(DD.root);
          BD[ZD] = {
            id: CD,
            rotation: DD.rotation
          }, yD.set(cD, CD), tD.set(MD, {
            name: MD,
            texture: cD,
            kind: "rotation"
          })
        } else yD.set(cD, ZD + 1)
      }
      for (const MD of yD.keys()) tD.delete(MD);
      for (const [MD, ZD] of cD) {
        const DD = yD.get(ZD);
        void 0 === DD || yD.has(MD) || (yD.set(MD, DD), tD.delete(MD))
      }
      return {
        named: [...yD].sort(((DD, CD) => {
          let [cD] = DD, [ID] = CD;
          return cD < ID ? -1 : cD > ID ? 1 : 0
        })).map((DD => {
          let [CD, cD] = DD;
          return {
            name: CD,
            id: cD
          }
        })),
        aliases: [...tD.values()],
        layers: BD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);