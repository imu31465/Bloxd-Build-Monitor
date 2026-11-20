export const id = 131;
export const ids = [131];
export const modules = {
  6365: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      loadShaderPackTextures: () => Ub,
      shaderPackTextures: () => Lb
    });
    var Bb = hb(6324);
    let Ob = null,
      Gb = null;

    function Ub() {
      return Gb ??= Promise.all([hb.e(70), hb.e(199)]).then((() => hb(39946))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ub,
          textureNameToIndex: hb,
          textureAnimationData: Gb
        } = bb;
        return Ob ??= (0, Bb.j)(hb, Gb, ub), Ob
      })), Gb
    }

    function Lb() {
      if (null === Ob) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ob
    }
  },
  6324: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Gb,
      i: () => Bb,
      j: () => Xb,
      n: () => ab,
      q: () => Ob,
      t: () => Yb,
      v: () => Sb,
      z: () => Hb
    });
    const Bb = 5;

    function Ob(bb) {
      return bb === Bb
    }
    const Gb = 262144,
      Ub = 256,
      Lb = 256;

    function Yb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const ub = [];
      for (const [hb, Bb] of Object.entries(bb)) {
        if ("string" !== typeof Bb) return `${hb} isn't text.`;
        ub.push({
          path: hb,
          source: Bb
        })
      }
      return ub.sort(((bb, ub) => ab(bb.path, ub.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Ub) return `The pack has more than ${Ub} .wgsl files.`;
          const ub = new Set;
          for (const {
              path: hb
            }
            of bb) {
            const bb = wb(hb);
            if (null !== bb) return bb;
            if (ub.has(hb)) return `The pack has two files at ${hb}.`;
            ub.add(hb)
          }
          return Hb(bb) > Gb ? `The pack's .wgsl files are over ${Gb/1024} KB in total.` : null
        }(ub) ?? ub
    }

    function Sb(bb) {
      const ub = {};
      for (const hb of bb) ub[hb.path] = hb.source;
      return ub
    }

    function ab(bb, ub) {
      return bb < ub ? -1 : bb > ub ? 1 : 0
    }

    function Hb(bb) {
      const ub = new TextEncoder;
      let hb = 0;
      for (const {
          source: Bb
        }
        of bb) hb += ub.encode(Bb).byteLength;
      return hb
    }

    function wb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Lb) return `A file path is over ${Lb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Zb = /^(.*)\[rot\[([1-4])$/;

    function Xb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Bb = new Map;
      ub.forEach(((bb, ub) => {
        let {
          numAnimStates: hb,
          animStartIdx: Ob
        } = bb;
        for (let Gb = 1; Gb < hb; Gb++) Bb.set(Ob + Gb - 1, ub)
      }));
      const Ob = Object.entries(bb),
        Gb = new Map;
      for (const [pb, ob] of Ob) {
        const bb = Zb.exec(pb);
        "1" === bb?.[2] && Gb.set(bb[1], ob + 1)
      }
      const Ub = bb => {
          const ub = Zb.exec(bb);
          return ub && Gb.has(ub[1]) ? {
            root: ub[1],
            rotation: Number(ub[2]) - 1
          } : null
        },
        Lb = new Set(Ob.map((bb => {
          let [ub] = bb;
          return Ub(ub)?.root ?? ub
        }))),
        Yb = (bb, hb) => {
          const Bb = bb.replace(/_?0$/, "");
          return (ub[hb]?.numAnimStates ?? 0) > 1 && !Lb.has(Bb) ? Bb : bb
        },
        Sb = new Map;
      for (const [Zb, pb] of Ob) Sb.set(pb, Yb(Ub(Zb)?.root ?? Zb, pb));
      const ab = Ob.reduce(((bb, ub) => {
          let [, hb] = ub;
          return Math.max(bb, hb + 1)
        }), 0),
        Hb = Array.from({
          length: ab
        }, ((bb, ub) => ({
          id: ub + 1,
          rotation: 0
        }))),
        wb = new Map,
        Xb = new Map;
      for (const [Zb, pb] of Ob) {
        const bb = Ub(Zb),
          ub = Bb.get(pb);
        if (void 0 !== ub) {
          const hb = Sb.get(ub);
          Xb.set(Zb, {
            name: Zb,
            texture: hb,
            kind: "frame"
          }), bb && !Xb.has(bb.root) && Xb.set(bb.root, {
            name: bb.root,
            texture: hb,
            kind: "frame"
          });
          continue
        }
        const hb = Sb.get(pb),
          Ob = bb?.root ?? Zb;
        if (hb !== Ob && Xb.set(Ob, {
            name: Ob,
            texture: hb,
            kind: "frame"
          }), bb) {
          const ub = Gb.get(bb.root);
          Hb[pb] = {
            id: ub,
            rotation: bb.rotation
          }, wb.set(hb, ub), Xb.set(Zb, {
            name: Zb,
            texture: hb,
            kind: "rotation"
          })
        } else wb.set(hb, pb + 1)
      }
      for (const Zb of wb.keys()) Xb.delete(Zb);
      for (const [Zb, pb] of hb) {
        const bb = wb.get(pb);
        void 0 === bb || wb.has(Zb) || (wb.set(Zb, bb), Xb.delete(Zb))
      }
      return {
        named: [...wb].sort(((bb, ub) => {
          let [hb] = bb, [Bb] = ub;
          return hb < Bb ? -1 : hb > Bb ? 1 : 0
        })).map((bb => {
          let [ub, hb] = bb;
          return {
            name: ub,
            id: hb
          }
        })),
        aliases: [...Xb.values()],
        layers: Hb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);