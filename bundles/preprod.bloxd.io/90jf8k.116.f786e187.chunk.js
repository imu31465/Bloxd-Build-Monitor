export const id = 116;
export const ids = [116];
export const modules = {
  5603: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      loadShaderPackTextures: () => hF,
      shaderPackTextures: () => bW
    });
    var CF = SF(5564);
    let AF = null,
      uF = null;

    function hF() {
      return uF ??= Promise.all([SF.e(59), SF.e(177)]).then((() => SF(38458))).then((FF => {
        let {
          textureNameToIndex: WF,
          textureAnimationData: SF
        } = FF;
        return AF ??= (0, CF.m)(WF, SF), AF
      })), uF
    }

    function bW() {
      if (null === AF) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return AF
    }
  },
  5564: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      f: () => uF,
      j: () => CF,
      m: () => QF,
      o: () => RF,
      p: () => AF,
      q: () => dF,
      r: () => PF,
      t: () => iW
    });
    const CF = 5;

    function AF(FF) {
      return FF === CF
    }
    const uF = 262144,
      hF = 256,
      bW = 256;

    function dF(FF) {
      if ("object" !== typeof FF || null === FF || Array.isArray(FF)) return "The pack has no files.";
      const WF = [];
      for (const [SF, CF] of Object.entries(FF)) {
        if ("string" !== typeof CF) return `${SF} isn't text.`;
        WF.push({
          path: SF,
          source: CF
        })
      }
      return WF.sort(((FF, WF) => RF(FF.path, WF.path))),
        function(FF) {
          if (0 === FF.length) return "The pack has no .wgsl files.";
          if (FF.length > hF) return `The pack has more than ${hF} .wgsl files.`;
          const WF = new Set;
          for (const {
              path: SF
            }
            of FF) {
            const FF = eF(SF);
            if (null !== FF) return FF;
            if (WF.has(SF)) return `The pack has two files at ${SF}.`;
            WF.add(SF)
          }
          return iW(FF) > uF ? `The pack's .wgsl files are over ${uF/1024} KB in total.` : null
        }(WF) ?? WF
    }

    function PF(FF) {
      const WF = {};
      for (const SF of FF) WF[SF.path] = SF.source;
      return WF
    }

    function RF(FF, WF) {
      return FF < WF ? -1 : FF > WF ? 1 : 0
    }

    function iW(FF) {
      const WF = new TextEncoder;
      let SF = 0;
      for (const {
          source: CF
        }
        of FF) SF += WF.encode(CF).byteLength;
      return SF
    }

    function eF(FF) {
      if (!FF.toLowerCase().endsWith(".wgsl")) return `${FF} isn't a .wgsl file.`;
      if (FF.length > bW) return `A file path is over ${bW} characters.`;
      if (FF.includes("\\") || /[\u0000-\u001f]/.test(FF)) return `${FF} isn't a valid file path.`;
      return FF.split("/").some((FF => "" === FF || "." === FF || ".." === FF)) ? `${FF} isn't a valid file path.` : null
    }
    const EF = /^(.*)\[rot\[([1-4])$/;

    function QF(FF, WF) {
      const SF = new Map;
      WF.forEach(((FF, WF) => {
        let {
          numAnimStates: CF,
          animStartIdx: AF
        } = FF;
        for (let uF = 1; uF < CF; uF++) SF.set(AF + uF - 1, WF)
      }));
      const CF = Object.entries(FF),
        AF = new Map;
      for (const [QF, rW] of CF) {
        const FF = EF.exec(QF);
        "1" === FF?.[2] && AF.set(FF[1], rW + 1)
      }
      const uF = FF => {
          const WF = EF.exec(FF);
          return WF && AF.has(WF[1]) ? {
            root: WF[1],
            rotation: Number(WF[2]) - 1
          } : null
        },
        hF = new Set(CF.map((FF => {
          let [WF] = FF;
          return uF(WF)?.root ?? WF
        }))),
        bW = (FF, SF) => {
          const CF = FF.replace(/_?0$/, "");
          return (WF[SF]?.numAnimStates ?? 0) > 1 && !hF.has(CF) ? CF : FF
        },
        dF = new Map;
      for (const [EF, QF] of CF) dF.set(QF, bW(uF(EF)?.root ?? EF, QF));
      const PF = CF.reduce(((FF, WF) => {
          let [, SF] = WF;
          return Math.max(FF, SF + 1)
        }), 0),
        RF = Array.from({
          length: PF
        }, ((FF, WF) => ({
          id: WF + 1,
          rotation: 0
        }))),
        iW = new Map,
        eF = new Map;
      for (const [EF, QF] of CF) {
        const FF = uF(EF),
          WF = SF.get(QF);
        if (void 0 !== WF) {
          const SF = dF.get(WF);
          eF.set(EF, {
            name: EF,
            texture: SF,
            kind: "frame"
          }), FF && !eF.has(FF.root) && eF.set(FF.root, {
            name: FF.root,
            texture: SF,
            kind: "frame"
          });
          continue
        }
        const CF = dF.get(QF),
          hF = FF?.root ?? EF;
        if (CF !== hF && eF.set(hF, {
            name: hF,
            texture: CF,
            kind: "frame"
          }), FF) {
          const WF = AF.get(FF.root);
          RF[QF] = {
            id: WF,
            rotation: FF.rotation
          }, iW.set(CF, WF), eF.set(EF, {
            name: EF,
            texture: CF,
            kind: "rotation"
          })
        } else iW.set(CF, QF + 1)
      }
      for (const EF of iW.keys()) eF.delete(EF);
      return {
        named: [...iW].sort(((FF, WF) => {
          let [SF] = FF, [CF] = WF;
          return SF < CF ? -1 : SF > CF ? 1 : 0
        })).map((FF => {
          let [WF, SF] = FF;
          return {
            name: WF,
            id: SF
          }
        })),
        aliases: [...eF.values()],
        layers: RF
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);