export const id = 131;
export const ids = [131, 152];
export const modules = {
  7179: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadShaderPackTextures: () => hH,
      shaderPackTextures: () => tH
    });
    var AH = LH(5531);
    let rH = null,
      SH = null;

    function hH() {
      return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: BH,
          textureNameToIndex: LH,
          textureAnimationData: SH
        } = HH;
        return rH ??= (0, AH.f)(LH, SH, BH), rH
      })), SH
    }

    function tH() {
      if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return rH
    }
  },
  5531: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      d: () => hH,
      e: () => AH,
      f: () => QH,
      j: () => XH,
      l: () => rH,
      n: () => SH,
      q: () => CH,
      t: () => EH,
      u: () => GH
    });
    const AH = 5;

    function rH(HH) {
      return HH === AH
    }

    function SH(HH) {
      return [...HH.features]
    }
    const hH = 262144,
      tH = 256,
      zH = 256;

    function CH(HH) {
      if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return "The pack has no files.";
      const BH = [];
      for (const [LH, AH] of Object.entries(HH)) {
        if ("string" !== typeof AH) return `${LH} isn't text.`;
        BH.push({
          path: LH,
          source: AH
        })
      }
      return BH.sort(((HH, BH) => XH(HH.path, BH.path))),
        function(HH) {
          if (0 === HH.length) return "The pack has no .wgsl files.";
          if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
          const BH = new Set;
          for (const {
              path: LH
            }
            of HH) {
            const HH = YH(LH);
            if (null !== HH) return HH;
            if (BH.has(LH)) return `The pack has two files at ${LH}.`;
            BH.add(LH)
          }
          return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
        }(BH) ?? BH
    }

    function EH(HH) {
      const BH = {};
      for (const LH of HH) BH[LH.path] = LH.source;
      return BH
    }

    function XH(HH, BH) {
      return HH < BH ? -1 : HH > BH ? 1 : 0
    }

    function GH(HH) {
      const BH = new TextEncoder;
      let LH = 0;
      for (const {
          source: AH
        }
        of HH) LH += BH.encode(AH).byteLength;
      return LH
    }

    function YH(HH) {
      if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
      if (HH.length > zH) return `A file path is over ${zH} characters.`;
      if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
      return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
    }
    const uH = /^(.*)\[rot\[([1-4])$/;

    function QH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const AH = new Map;
      BH.forEach(((HH, BH) => {
        let {
          numAnimStates: LH,
          animStartIdx: rH
        } = HH;
        for (let SH = 1; SH < LH; SH++) AH.set(rH + SH - 1, BH)
      }));
      const rH = Object.entries(HH),
        SH = new Map;
      for (const [QH, WH] of rH) {
        const HH = uH.exec(QH);
        "1" === HH?.[2] && SH.set(HH[1], WH + 1)
      }
      const hH = HH => {
          const BH = uH.exec(HH);
          return BH && SH.has(BH[1]) ? {
            root: BH[1],
            rotation: Number(BH[2]) - 1
          } : null
        },
        tH = new Set(rH.map((HH => {
          let [BH] = HH;
          return hH(BH)?.root ?? BH
        }))),
        zH = (HH, LH) => {
          const AH = HH.replace(/_?0$/, "");
          return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
        },
        CH = new Map;
      for (const [uH, QH] of rH) CH.set(QH, zH(hH(uH)?.root ?? uH, QH));
      const EH = rH.reduce(((HH, BH) => {
          let [, LH] = BH;
          return Math.max(HH, LH + 1)
        }), 0),
        XH = Array.from({
          length: EH
        }, ((HH, BH) => ({
          id: BH + 1,
          rotation: 0
        }))),
        GH = new Map,
        YH = new Map;
      for (const [uH, QH] of rH) {
        const HH = hH(uH),
          BH = AH.get(QH);
        if (void 0 !== BH) {
          const LH = CH.get(BH);
          YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "frame"
          }), HH && !YH.has(HH.root) && YH.set(HH.root, {
            name: HH.root,
            texture: LH,
            kind: "frame"
          });
          continue
        }
        const LH = CH.get(QH),
          rH = HH?.root ?? uH;
        if (LH !== rH && YH.set(rH, {
            name: rH,
            texture: LH,
            kind: "frame"
          }), HH) {
          const BH = SH.get(HH.root);
          XH[QH] = {
            id: BH,
            rotation: HH.rotation
          }, GH.set(LH, BH), YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "rotation"
          })
        } else GH.set(LH, QH + 1)
      }
      for (const uH of GH.keys()) YH.delete(uH);
      for (const [uH, QH] of LH) {
        const HH = GH.get(QH);
        void 0 === HH || GH.has(uH) || (GH.set(uH, HH), YH.delete(uH))
      }
      return {
        named: [...GH].sort(((HH, BH) => {
          let [LH] = HH, [AH] = BH;
          return LH < AH ? -1 : LH > AH ? 1 : 0
        })).map((HH => {
          let [BH, LH] = HH;
          return {
            name: BH,
            id: LH
          }
        })),
        aliases: [...YH.values()],
        layers: XH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);