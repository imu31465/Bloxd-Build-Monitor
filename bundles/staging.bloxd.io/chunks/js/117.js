export const id = 117;
export const ids = [117, 118, 138];
export const modules = {
  5206: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su.h,
      h: () => Uu,
      k: () => su.o
    });
    var su = ju(5209);
    const Uu = [!1, !0].flatMap((uu => ["terrain", "liquid", "model"].map((Eu => ({
      strict: uu,
      program: Eu
    })))))
  },
  39525: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      ShaderPackPage: () => qu,
      harnessShaderPackMode: () => cu,
      setHarnessUrlShaderPack: () => bu,
      shaderPackPage: () => Cu
    });
    var su = ju(91),
      Uu = ju(31),
      Zu = (ju(3653), ju(5206), ju(3651)),
      Xu = ju(6854);
    ju(6827);
    const lu = {
      status: "none"
    };
    class qu {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Zu.e)(su.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), fu().then((uu => {
            uu && Uu.k.removeItem(Zu.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Zu.d)(su.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const uu = await this.load();
        return "active" === uu.status ? uu.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((uu => (console.error("Failed to load the shader pack", uu), lu))).then((uu => (this.resolved ??= uu, uu))), this.pagePack
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
        return this.compiling ??= Promise.all([ju.e(78), ju.e(136), ju.e(142)]).then((() => ju(42003))).then((uu => (uu.prefetchCompiler(), uu))), this.compiling
      }
      async readStored() {
        const uu = await fu();
        return uu && this.compiler().then((uu => uu.reconcileHint())).catch((uu => {
          console.error("Failed to correct the shader pack hint", uu)
        })), uu
      }
      async read() {
        const uu = await this.preload();
        return uu ? (await this.compiler()).compilePagePack(uu) : lu
      }
    }
    async function fu() {
      if (!(0, Zu.i)(su.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const uu = await (0, Xu.e)(!0);
        return uu || Uu.k.setItem(Zu.c, !1), uu
      } catch (uu) {
        return console.error("Failed to read the stored shader pack", uu), Uu.k.removeItem(Zu.c), null
      }
    }
    const Cu = new qu;

    function bu(uu, Eu) {}

    function cu() {
      return null
    }
  },
  6854: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      e: () => Zu
    });
    var su = ju(31);
    const Uu = "shaderPack";
    async function Zu() {
      var uu;
      let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await su.h.getItem(Uu, Eu)) && void 0 !== uu ? uu : null
    }
  },
  6827: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      loadShaderPackTextures: () => Xu,
      shaderPackTextures: () => lu
    });
    var su = ju(5209);
    let Uu = null,
      Zu = null;

    function Xu() {
      return Zu ??= Promise.all([ju.e(73), ju.e(190)]).then((() => ju(40746))).then((uu => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Eu,
          textureNameToIndex: ju,
          textureAnimationData: Zu
        } = uu;
        return Uu ??= (0, su.j)(ju, Zu, Eu), Uu
      })), Zu
    }

    function lu() {
      if (null === Uu) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Uu
    }
  },
  5209: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => cu,
      c: () => lu,
      e: () => Xu,
      h: () => su,
      j: () => Yu,
      k: () => bu,
      o: () => Uu,
      p: () => Zu,
      s: () => fu,
      w: () => Cu
    });
    const su = 5;

    function Uu(uu) {
      return uu === su
    }

    function Zu(uu) {
      return [...uu.features]
    }
    const Xu = 262144,
      lu = 256,
      qu = 256;

    function fu(uu) {
      if ("object" !== typeof uu || null === uu || Array.isArray(uu)) return "The pack has no files.";
      const Eu = [];
      for (const [ju, su] of Object.entries(uu)) {
        if ("string" !== typeof su) return `${ju} isn't text.`;
        Eu.push({
          path: ju,
          source: su
        })
      }
      return Eu.sort(((uu, Eu) => bu(uu.path, Eu.path))),
        function(uu) {
          if (0 === uu.length) return "The pack has no .wgsl files.";
          if (uu.length > lu) return `The pack has more than ${lu} .wgsl files.`;
          const Eu = new Set;
          for (const {
              path: ju
            }
            of uu) {
            const uu = Nu(ju);
            if (null !== uu) return uu;
            if (Eu.has(ju)) return `The pack has two files at ${ju}.`;
            Eu.add(ju)
          }
          return cu(uu) > Xu ? `The pack's .wgsl files are over ${Xu/1024} KB in total.` : null
        }(Eu) ?? Eu
    }

    function Cu(uu) {
      const Eu = {};
      for (const ju of uu) Eu[ju.path] = ju.source;
      return Eu
    }

    function bu(uu, Eu) {
      return uu < Eu ? -1 : uu > Eu ? 1 : 0
    }

    function cu(uu) {
      const Eu = new TextEncoder;
      let ju = 0;
      for (const {
          source: su
        }
        of uu) ju += Eu.encode(su).byteLength;
      return ju
    }

    function Nu(uu) {
      if (!uu.toLowerCase().endsWith(".wgsl")) return `${uu} isn't a .wgsl file.`;
      if (uu.length > qu) return `A file path is over ${qu} characters.`;
      if (uu.includes("\\") || /[\u0000-\u001f]/.test(uu)) return `${uu} isn't a valid file path.`;
      return uu.split("/").some((uu => "" === uu || "." === uu || ".." === uu)) ? `${uu} isn't a valid file path.` : null
    }
    const Ou = /^(.*)\[rot\[([1-4])$/;

    function Yu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const su = new Map;
      Eu.forEach(((uu, Eu) => {
        let {
          numAnimStates: ju,
          animStartIdx: Uu
        } = uu;
        for (let Zu = 1; Zu < ju; Zu++) su.set(Uu + Zu - 1, Eu)
      }));
      const Uu = Object.entries(uu),
        Zu = new Map;
      for (const [Yu, hu] of Uu) {
        const uu = Ou.exec(Yu);
        "1" === uu?.[2] && Zu.set(uu[1], hu + 1)
      }
      const Xu = uu => {
          const Eu = Ou.exec(uu);
          return Eu && Zu.has(Eu[1]) ? {
            root: Eu[1],
            rotation: Number(Eu[2]) - 1
          } : null
        },
        lu = new Set(Uu.map((uu => {
          let [Eu] = uu;
          return Xu(Eu)?.root ?? Eu
        }))),
        qu = (uu, ju) => {
          const su = uu.replace(/_?0$/, "");
          return (Eu[ju]?.numAnimStates ?? 0) > 1 && !lu.has(su) ? su : uu
        },
        fu = new Map;
      for (const [Ou, Yu] of Uu) fu.set(Yu, qu(Xu(Ou)?.root ?? Ou, Yu));
      const Cu = Uu.reduce(((uu, Eu) => {
          let [, ju] = Eu;
          return Math.max(uu, ju + 1)
        }), 0),
        bu = Array.from({
          length: Cu
        }, ((uu, Eu) => ({
          id: Eu + 1,
          rotation: 0
        }))),
        cu = new Map,
        Nu = new Map;
      for (const [Ou, Yu] of Uu) {
        const uu = Xu(Ou),
          Eu = su.get(Yu);
        if (void 0 !== Eu) {
          const ju = fu.get(Eu);
          Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "frame"
          }), uu && !Nu.has(uu.root) && Nu.set(uu.root, {
            name: uu.root,
            texture: ju,
            kind: "frame"
          });
          continue
        }
        const ju = fu.get(Yu),
          Uu = uu?.root ?? Ou;
        if (ju !== Uu && Nu.set(Uu, {
            name: Uu,
            texture: ju,
            kind: "frame"
          }), uu) {
          const Eu = Zu.get(uu.root);
          bu[Yu] = {
            id: Eu,
            rotation: uu.rotation
          }, cu.set(ju, Eu), Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "rotation"
          })
        } else cu.set(ju, Yu + 1)
      }
      for (const Ou of cu.keys()) Nu.delete(Ou);
      for (const [Ou, Yu] of ju) {
        const uu = cu.get(Yu);
        void 0 === uu || cu.has(Ou) || (cu.set(Ou, uu), Nu.delete(Ou))
      }
      return {
        named: [...cu].sort(((uu, Eu) => {
          let [ju] = uu, [su] = Eu;
          return ju < su ? -1 : ju > su ? 1 : 0
        })).map((uu => {
          let [Eu, ju] = uu;
          return {
            name: Eu,
            id: ju
          }
        })),
        aliases: [...Nu.values()],
        layers: bu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);