export const id = 117;
export const ids = [117, 118, 138];
export const modules = {
  5055: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG.i,
      f: () => SG,
      g: () => wG.o
    });
    var wG = ZG(5062);
    const SG = [!1, !0].flatMap((GG => ["terrain", "liquid", "model"].map((bG => ({
      strict: GG,
      program: bG
    })))))
  },
  39633: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      ShaderPackPage: () => UG,
      harnessShaderPackMode: () => fG,
      setHarnessUrlShaderPack: () => pG,
      shaderPackPage: () => VG
    });
    var wG = ZG(80),
      SG = ZG(29),
      LG = (ZG(3444), ZG(5055), ZG(3441)),
      yG = ZG(6661);
    ZG(6627);
    const kG = {
      status: "none"
    };
    class UG {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, LG.g)(wG.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), YG().then((GG => {
            GG && SG.h.removeItem(LG.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, LG.e)(wG.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const GG = await this.load();
        return "active" === GG.status ? GG.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((GG => (console.error("Failed to load the shader pack", GG), kG))).then((GG => (this.resolved ??= GG, GG))), this.pagePack
      }
      hasNone() {
        var GG;
        return "none" === (null === (GG = this.resolved) || void 0 === GG ? void 0 : GG.status)
      }
      block(GG) {
        this.resolved = {
          status: "blocked",
          messageKey: GG,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([ZG.e(78), ZG.e(136), ZG.e(142)]).then((() => ZG(42184))).then((GG => (GG.prefetchCompiler(), GG))), this.compiling
      }
      async readStored() {
        const GG = await YG();
        return GG && this.compiler().then((GG => GG.reconcileHint())).catch((GG => {
          console.error("Failed to correct the shader pack hint", GG)
        })), GG
      }
      async read() {
        const GG = await this.preload();
        return GG ? (await this.compiler()).compilePagePack(GG) : kG
      }
    }
    async function YG() {
      if (!(0, LG.j)(wG.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const GG = await (0, yG.e)(!0);
        return GG || SG.h.setItem(LG.d, !1), GG
      } catch (GG) {
        return console.error("Failed to read the stored shader pack", GG), SG.h.removeItem(LG.d), null
      }
    }
    const VG = new UG;

    function pG(GG, bG) {}

    function fG() {
      return null
    }
  },
  6661: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      e: () => LG
    });
    var wG = ZG(29);
    const SG = "shaderPack";
    async function LG() {
      var GG;
      let bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (GG = await wG.e.getItem(SG, bG)) && void 0 !== GG ? GG : null
    }
  },
  6627: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      loadShaderPackTextures: () => yG,
      shaderPackTextures: () => kG
    });
    var wG = ZG(5062);
    let SG = null,
      LG = null;

    function yG() {
      return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: bG,
          textureNameToIndex: ZG,
          textureAnimationData: LG
        } = GG;
        return SG ??= (0, wG.j)(ZG, LG, bG), SG
      })), LG
    }

    function kG() {
      if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SG
    }
  },
  5062: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => fG,
      d: () => kG,
      h: () => yG,
      i: () => wG,
      j: () => hG,
      k: () => pG,
      o: () => SG,
      s: () => LG,
      u: () => YG,
      y: () => VG
    });
    const wG = 5;

    function SG(GG) {
      return GG === wG
    }

    function LG(GG) {
      return [...GG.features]
    }
    const yG = 262144,
      kG = 256,
      UG = 256;

    function YG(GG) {
      if ("object" !== typeof GG || null === GG || Array.isArray(GG)) return "The pack has no files.";
      const bG = [];
      for (const [ZG, wG] of Object.entries(GG)) {
        if ("string" !== typeof wG) return `${ZG} isn't text.`;
        bG.push({
          path: ZG,
          source: wG
        })
      }
      return bG.sort(((GG, bG) => pG(GG.path, bG.path))),
        function(GG) {
          if (0 === GG.length) return "The pack has no .wgsl files.";
          if (GG.length > kG) return `The pack has more than ${kG} .wgsl files.`;
          const bG = new Set;
          for (const {
              path: ZG
            }
            of GG) {
            const GG = QG(ZG);
            if (null !== GG) return GG;
            if (bG.has(ZG)) return `The pack has two files at ${ZG}.`;
            bG.add(ZG)
          }
          return fG(GG) > yG ? `The pack's .wgsl files are over ${yG/1024} KB in total.` : null
        }(bG) ?? bG
    }

    function VG(GG) {
      const bG = {};
      for (const ZG of GG) bG[ZG.path] = ZG.source;
      return bG
    }

    function pG(GG, bG) {
      return GG < bG ? -1 : GG > bG ? 1 : 0
    }

    function fG(GG) {
      const bG = new TextEncoder;
      let ZG = 0;
      for (const {
          source: wG
        }
        of GG) ZG += bG.encode(wG).byteLength;
      return ZG
    }

    function QG(GG) {
      if (!GG.toLowerCase().endsWith(".wgsl")) return `${GG} isn't a .wgsl file.`;
      if (GG.length > UG) return `A file path is over ${UG} characters.`;
      if (GG.includes("\\") || /[\u0000-\u001f]/.test(GG)) return `${GG} isn't a valid file path.`;
      return GG.split("/").some((GG => "" === GG || "." === GG || ".." === GG)) ? `${GG} isn't a valid file path.` : null
    }
    const KG = /^(.*)\[rot\[([1-4])$/;

    function hG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wG = new Map;
      bG.forEach(((GG, bG) => {
        let {
          numAnimStates: ZG,
          animStartIdx: SG
        } = GG;
        for (let LG = 1; LG < ZG; LG++) wG.set(SG + LG - 1, bG)
      }));
      const SG = Object.entries(GG),
        LG = new Map;
      for (const [hG, dG] of SG) {
        const GG = KG.exec(hG);
        "1" === GG?.[2] && LG.set(GG[1], dG + 1)
      }
      const yG = GG => {
          const bG = KG.exec(GG);
          return bG && LG.has(bG[1]) ? {
            root: bG[1],
            rotation: Number(bG[2]) - 1
          } : null
        },
        kG = new Set(SG.map((GG => {
          let [bG] = GG;
          return yG(bG)?.root ?? bG
        }))),
        UG = (GG, ZG) => {
          const wG = GG.replace(/_?0$/, "");
          return (bG[ZG]?.numAnimStates ?? 0) > 1 && !kG.has(wG) ? wG : GG
        },
        YG = new Map;
      for (const [KG, hG] of SG) YG.set(hG, UG(yG(KG)?.root ?? KG, hG));
      const VG = SG.reduce(((GG, bG) => {
          let [, ZG] = bG;
          return Math.max(GG, ZG + 1)
        }), 0),
        pG = Array.from({
          length: VG
        }, ((GG, bG) => ({
          id: bG + 1,
          rotation: 0
        }))),
        fG = new Map,
        QG = new Map;
      for (const [KG, hG] of SG) {
        const GG = yG(KG),
          bG = wG.get(hG);
        if (void 0 !== bG) {
          const ZG = YG.get(bG);
          QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "frame"
          }), GG && !QG.has(GG.root) && QG.set(GG.root, {
            name: GG.root,
            texture: ZG,
            kind: "frame"
          });
          continue
        }
        const ZG = YG.get(hG),
          SG = GG?.root ?? KG;
        if (ZG !== SG && QG.set(SG, {
            name: SG,
            texture: ZG,
            kind: "frame"
          }), GG) {
          const bG = LG.get(GG.root);
          pG[hG] = {
            id: bG,
            rotation: GG.rotation
          }, fG.set(ZG, bG), QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "rotation"
          })
        } else fG.set(ZG, hG + 1)
      }
      for (const KG of fG.keys()) QG.delete(KG);
      for (const [KG, hG] of ZG) {
        const GG = fG.get(hG);
        void 0 === GG || fG.has(KG) || (fG.set(KG, GG), QG.delete(KG))
      }
      return {
        named: [...fG].sort(((GG, bG) => {
          let [ZG] = GG, [wG] = bG;
          return ZG < wG ? -1 : ZG > wG ? 1 : 0
        })).map((GG => {
          let [bG, ZG] = GG;
          return {
            name: bG,
            id: ZG
          }
        })),
        aliases: [...QG.values()],
        layers: pG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);