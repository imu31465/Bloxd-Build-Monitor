export const id = 130;
export const ids = [130];
export const modules = {
  6407: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      loadShaderPackTextures: () => mu,
      shaderPackTextures: () => Ju
    });
    var Eu = yu(6362);
    let Ku = null,
      Qu = null;

    function mu() {
      return Qu ??= Promise.all([yu.e(69), yu.e(198)]).then((() => yu(40062))).then((uu => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Ru,
          textureNameToIndex: yu,
          textureAnimationData: Qu
        } = uu;
        return Ku ??= (0, Eu.l)(yu, Qu, Ru), Ku
      })), Qu
    }

    function Ju() {
      if (null === Ku) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ku
    }
  },
  6362: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      g: () => Qu,
      j: () => Eu,
      l: () => Su,
      o: () => Vu,
      q: () => Ku,
      s: () => Nu,
      w: () => Xu,
      x: () => ru
    });
    const Eu = 5;

    function Ku(uu) {
      return uu === Eu
    }
    const Qu = 262144,
      mu = 256,
      Ju = 256;

    function Nu(uu) {
      if ("object" !== typeof uu || null === uu || Array.isArray(uu)) return "The pack has no files.";
      const Ru = [];
      for (const [yu, Eu] of Object.entries(uu)) {
        if ("string" !== typeof Eu) return `${yu} isn't text.`;
        Ru.push({
          path: yu,
          source: Eu
        })
      }
      return Ru.sort(((uu, Ru) => Vu(uu.path, Ru.path))),
        function(uu) {
          if (0 === uu.length) return "The pack has no .wgsl files.";
          if (uu.length > mu) return `The pack has more than ${mu} .wgsl files.`;
          const Ru = new Set;
          for (const {
              path: yu
            }
            of uu) {
            const uu = Bu(yu);
            if (null !== uu) return uu;
            if (Ru.has(yu)) return `The pack has two files at ${yu}.`;
            Ru.add(yu)
          }
          return ru(uu) > Qu ? `The pack's .wgsl files are over ${Qu/1024} KB in total.` : null
        }(Ru) ?? Ru
    }

    function Xu(uu) {
      const Ru = {};
      for (const yu of uu) Ru[yu.path] = yu.source;
      return Ru
    }

    function Vu(uu, Ru) {
      return uu < Ru ? -1 : uu > Ru ? 1 : 0
    }

    function ru(uu) {
      const Ru = new TextEncoder;
      let yu = 0;
      for (const {
          source: Eu
        }
        of uu) yu += Ru.encode(Eu).byteLength;
      return yu
    }

    function Bu(uu) {
      if (!uu.toLowerCase().endsWith(".wgsl")) return `${uu} isn't a .wgsl file.`;
      if (uu.length > Ju) return `A file path is over ${Ju} characters.`;
      if (uu.includes("\\") || /[\u0000-\u001f]/.test(uu)) return `${uu} isn't a valid file path.`;
      return uu.split("/").some((uu => "" === uu || "." === uu || ".." === uu)) ? `${uu} isn't a valid file path.` : null
    }
    const xu = /^(.*)\[rot\[([1-4])$/;

    function Su(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Eu = new Map;
      Ru.forEach(((uu, Ru) => {
        let {
          numAnimStates: yu,
          animStartIdx: Ku
        } = uu;
        for (let Qu = 1; Qu < yu; Qu++) Eu.set(Ku + Qu - 1, Ru)
      }));
      const Ku = Object.entries(uu),
        Qu = new Map;
      for (const [pu, Tu] of Ku) {
        const uu = xu.exec(pu);
        "1" === uu?.[2] && Qu.set(uu[1], Tu + 1)
      }
      const mu = uu => {
          const Ru = xu.exec(uu);
          return Ru && Qu.has(Ru[1]) ? {
            root: Ru[1],
            rotation: Number(Ru[2]) - 1
          } : null
        },
        Ju = new Set(Ku.map((uu => {
          let [Ru] = uu;
          return mu(Ru)?.root ?? Ru
        }))),
        Nu = (uu, yu) => {
          const Eu = uu.replace(/_?0$/, "");
          return (Ru[yu]?.numAnimStates ?? 0) > 1 && !Ju.has(Eu) ? Eu : uu
        },
        Xu = new Map;
      for (const [xu, pu] of Ku) Xu.set(pu, Nu(mu(xu)?.root ?? xu, pu));
      const Vu = Ku.reduce(((uu, Ru) => {
          let [, yu] = Ru;
          return Math.max(uu, yu + 1)
        }), 0),
        ru = Array.from({
          length: Vu
        }, ((uu, Ru) => ({
          id: Ru + 1,
          rotation: 0
        }))),
        Bu = new Map,
        Su = new Map;
      for (const [xu, pu] of Ku) {
        const uu = mu(xu),
          Ru = Eu.get(pu);
        if (void 0 !== Ru) {
          const yu = Xu.get(Ru);
          Su.set(xu, {
            name: xu,
            texture: yu,
            kind: "frame"
          }), uu && !Su.has(uu.root) && Su.set(uu.root, {
            name: uu.root,
            texture: yu,
            kind: "frame"
          });
          continue
        }
        const yu = Xu.get(pu),
          Ku = uu?.root ?? xu;
        if (yu !== Ku && Su.set(Ku, {
            name: Ku,
            texture: yu,
            kind: "frame"
          }), uu) {
          const Ru = Qu.get(uu.root);
          ru[pu] = {
            id: Ru,
            rotation: uu.rotation
          }, Bu.set(yu, Ru), Su.set(xu, {
            name: xu,
            texture: yu,
            kind: "rotation"
          })
        } else Bu.set(yu, pu + 1)
      }
      for (const xu of Bu.keys()) Su.delete(xu);
      for (const [xu, pu] of yu) {
        const uu = Bu.get(pu);
        void 0 === uu || Bu.has(xu) || (Bu.set(xu, uu), Su.delete(xu))
      }
      return {
        named: [...Bu].sort(((uu, Ru) => {
          let [yu] = uu, [Eu] = Ru;
          return yu < Eu ? -1 : yu > Eu ? 1 : 0
        })).map((uu => {
          let [Ru, yu] = uu;
          return {
            name: Ru,
            id: yu
          }
        })),
        aliases: [...Su.values()],
        layers: ru
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);