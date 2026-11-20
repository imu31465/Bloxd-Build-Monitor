export const id = 129;
export const ids = [129, 130];
export const modules = {
  6381: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.j,
      e: () => Ku,
      i: () => Eu.q
    });
    var Eu = yu(6362);
    const Ku = [!1, !0].flatMap((uu => ["terrain", "liquid", "model"].map((Ru => ({
      strict: uu,
      program: Ru
    })))))
  },
  38963: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ShaderPackPage: () => Nu,
      harnessShaderPackMode: () => Bu,
      setHarnessUrlShaderPack: () => ru,
      shaderPackPage: () => Vu
    });
    var Eu = yu(106),
      Ku = yu(47),
      Qu = (yu(3262), yu(6381), yu(3255)),
      mu = yu(6436);
    yu(6407);
    const Ju = {
      status: "none"
    };
    class Nu {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Qu.l)(Eu.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Xu().then((uu => {
            uu && Ku.i.removeItem(Qu.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Qu.h)(Eu.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const uu = await this.load();
        return "active" === uu.status ? uu.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((uu => (console.error("Failed to load the shader pack", uu), Ju))).then((uu => (this.resolved ??= uu, uu))), this.pagePack
      }
      hasNone() {
        var uu;
        return "none" === (null === (uu = this.resolved) || void 0 === uu ? void 0 : uu.status)
      }
      block(uu) {
        this.resolved = {
          status: "blocked",
          messageKey: uu,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([yu.e(74), yu.e(131), yu.e(134)]).then((() => yu(41329))).then((uu => (uu.prefetchCompiler(), uu))), this.compiling
      }
      async readStored() {
        const uu = await Xu();
        return uu && this.compiler().then((uu => uu.reconcileHint())).catch((uu => {
          console.error("Failed to correct the shader pack hint", uu)
        })), uu
      }
      async read() {
        const uu = await this.preload();
        return uu ? (await this.compiler()).compilePagePack(uu) : Ju
      }
    }
    async function Xu() {
      if (!(0, Qu.m)(Eu.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const uu = await (0, mu.h)(!0);
        return uu || Ku.i.setItem(Qu.d, !1), uu
      } catch (uu) {
        return console.error("Failed to read the stored shader pack", uu), Ku.i.removeItem(Qu.d), null
      }
    }
    const Vu = new Nu;

    function ru(uu, Ru) {}

    function Bu() {
      return null
    }
  },
  6436: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(47);
    const Ku = "shaderPack";
    async function Qu() {
      var uu;
      let Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await Eu.f.getItem(Ku, Ru)) && void 0 !== uu ? uu : null
    }
  },
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