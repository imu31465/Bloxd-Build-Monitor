export const id = 131;
export const ids = [131];
export const modules = {
  6138: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      loadShaderPackTextures: () => WT,
      shaderPackTextures: () => XT
    });
    var iT = IT(6092);
    let zT = null,
      kT = null;

    function WT() {
      return kT ??= Promise.all([IT.e(69), IT.e(193)]).then((() => IT(39278))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: oT,
          textureNameToIndex: IT,
          textureAnimationData: kT
        } = TT;
        return zT ??= (0, iT.k)(IT, kT, oT), zT
      })), kT
    }

    function XT() {
      if (null === zT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return zT
    }
  },
  6092: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      f: () => kT,
      g: () => iT,
      k: () => cT,
      m: () => ST,
      q: () => zT,
      r: () => BT,
      t: () => FT,
      u: () => DT
    });
    const iT = 5;

    function zT(TT) {
      return TT === iT
    }
    const kT = 262144,
      WT = 256,
      XT = 256;

    function BT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const oT = [];
      for (const [IT, iT] of Object.entries(TT)) {
        if ("string" !== typeof iT) return `${IT} isn't text.`;
        oT.push({
          path: IT,
          source: iT
        })
      }
      return oT.sort(((TT, oT) => ST(TT.path, oT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > WT) return `The pack has more than ${WT} .wgsl files.`;
          const oT = new Set;
          for (const {
              path: IT
            }
            of TT) {
            const TT = LT(IT);
            if (null !== TT) return TT;
            if (oT.has(IT)) return `The pack has two files at ${IT}.`;
            oT.add(IT)
          }
          return DT(TT) > kT ? `The pack's .wgsl files are over ${kT/1024} KB in total.` : null
        }(oT) ?? oT
    }

    function FT(TT) {
      const oT = {};
      for (const IT of TT) oT[IT.path] = IT.source;
      return oT
    }

    function ST(TT, oT) {
      return TT < oT ? -1 : TT > oT ? 1 : 0
    }

    function DT(TT) {
      const oT = new TextEncoder;
      let IT = 0;
      for (const {
          source: iT
        }
        of TT) IT += oT.encode(iT).byteLength;
      return IT
    }

    function LT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > XT) return `A file path is over ${XT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const xT = /^(.*)\[rot\[([1-4])$/;

    function cT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const iT = new Map;
      oT.forEach(((TT, oT) => {
        let {
          numAnimStates: IT,
          animStartIdx: zT
        } = TT;
        for (let kT = 1; kT < IT; kT++) iT.set(zT + kT - 1, oT)
      }));
      const zT = Object.entries(TT),
        kT = new Map;
      for (const [KT, MT] of zT) {
        const TT = xT.exec(KT);
        "1" === TT?.[2] && kT.set(TT[1], MT + 1)
      }
      const WT = TT => {
          const oT = xT.exec(TT);
          return oT && kT.has(oT[1]) ? {
            root: oT[1],
            rotation: Number(oT[2]) - 1
          } : null
        },
        XT = new Set(zT.map((TT => {
          let [oT] = TT;
          return WT(oT)?.root ?? oT
        }))),
        BT = (TT, IT) => {
          const iT = TT.replace(/_?0$/, "");
          return (oT[IT]?.numAnimStates ?? 0) > 1 && !XT.has(iT) ? iT : TT
        },
        FT = new Map;
      for (const [xT, KT] of zT) FT.set(KT, BT(WT(xT)?.root ?? xT, KT));
      const ST = zT.reduce(((TT, oT) => {
          let [, IT] = oT;
          return Math.max(TT, IT + 1)
        }), 0),
        DT = Array.from({
          length: ST
        }, ((TT, oT) => ({
          id: oT + 1,
          rotation: 0
        }))),
        LT = new Map,
        cT = new Map;
      for (const [xT, KT] of zT) {
        const TT = WT(xT),
          oT = iT.get(KT);
        if (void 0 !== oT) {
          const IT = FT.get(oT);
          cT.set(xT, {
            name: xT,
            texture: IT,
            kind: "frame"
          }), TT && !cT.has(TT.root) && cT.set(TT.root, {
            name: TT.root,
            texture: IT,
            kind: "frame"
          });
          continue
        }
        const IT = FT.get(KT),
          zT = TT?.root ?? xT;
        if (IT !== zT && cT.set(zT, {
            name: zT,
            texture: IT,
            kind: "frame"
          }), TT) {
          const oT = kT.get(TT.root);
          DT[KT] = {
            id: oT,
            rotation: TT.rotation
          }, LT.set(IT, oT), cT.set(xT, {
            name: xT,
            texture: IT,
            kind: "rotation"
          })
        } else LT.set(IT, KT + 1)
      }
      for (const xT of LT.keys()) cT.delete(xT);
      for (const [xT, KT] of IT) {
        const TT = LT.get(KT);
        void 0 === TT || LT.has(xT) || (LT.set(xT, TT), cT.delete(xT))
      }
      return {
        named: [...LT].sort(((TT, oT) => {
          let [IT] = TT, [iT] = oT;
          return IT < iT ? -1 : IT > iT ? 1 : 0
        })).map((TT => {
          let [oT, IT] = TT;
          return {
            name: oT,
            id: IT
          }
        })),
        aliases: [...cT.values()],
        layers: DT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);