export const id = 129;
export const ids = [129, 130];
export const modules = {
  6284: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU.h,
      e: () => pU,
      i: () => tU.n
    });
    var tU = gU(6265);
    const pU = [!1, !0].flatMap((UU => ["terrain", "liquid", "model"].map((RU => ({
      strict: UU,
      program: RU
    })))))
  },
  38747: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ShaderPackPage: () => qU,
      harnessShaderPackMode: () => jU,
      setHarnessUrlShaderPack: () => GU,
      shaderPackPage: () => cU
    });
    var tU = gU(96),
      pU = gU(34),
      EU = (gU(3153), gU(6284), gU(3151)),
      PU = gU(6339);
    gU(6306);
    const TU = {
      status: "none"
    };
    class qU {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, EU.h)(tU.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), KU().then((UU => {
            UU && pU.k.removeItem(EU.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, EU.f)(tU.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const UU = await this.load();
        return "active" === UU.status ? UU.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((UU => (console.error("Failed to load the shader pack", UU), TU))).then((UU => (this.resolved ??= UU, UU))), this.pagePack
      }
      hasNone() {
        var UU;
        return "none" === (null === (UU = this.resolved) || void 0 === UU ? void 0 : UU.status)
      }
      block(UU) {
        this.resolved = {
          status: "blocked",
          messageKey: UU,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([gU.e(74), gU.e(131), gU.e(134)]).then((() => gU(41104))).then((UU => (UU.prefetchCompiler(), UU))), this.compiling
      }
      async readStored() {
        const UU = await KU();
        return UU && this.compiler().then((UU => UU.reconcileHint())).catch((UU => {
          console.error("Failed to correct the shader pack hint", UU)
        })), UU
      }
      async read() {
        const UU = await this.preload();
        return UU ? (await this.compiler()).compilePagePack(UU) : TU
      }
    }
    async function KU() {
      if (!(0, EU.l)(tU.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const UU = await (0, PU.e)(!0);
        return UU || pU.k.setItem(EU.b, !1), UU
      } catch (UU) {
        return console.error("Failed to read the stored shader pack", UU), pU.k.removeItem(EU.b), null
      }
    }
    const cU = new qU;

    function GU(UU, RU) {}

    function jU() {
      return null
    }
  },
  6339: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU
    });
    var tU = gU(34);
    const pU = "shaderPack";
    async function EU() {
      var UU;
      let RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await tU.g.getItem(pU, RU)) && void 0 !== UU ? UU : null
    }
  },
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