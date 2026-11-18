export const id = 122;
export const ids = [122, 123];
export const modules = {
  5940: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB.h,
      h: () => yB,
      l: () => VB.p
    });
    var VB = dB(5924);
    const yB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((TB => ({
      strict: BB,
      program: TB
    })))))
  },
  38153: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ShaderPackPage: () => YB,
      harnessShaderPackMode: () => LB,
      setHarnessUrlShaderPack: () => kB,
      shaderPackPage: () => oB
    });
    var VB = dB(95),
      yB = dB(33),
      pB = (dB(2941), dB(5940), dB(2939)),
      lB = dB(5994);
    dB(5973);
    const JB = {
      status: "none"
    };
    class YB {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, pB.g)(VB.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), gB().then((BB => {
            BB && yB.j.removeItem(pB.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, pB.f)(VB.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const BB = await this.load();
        return "active" === BB.status ? BB.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((BB => (console.error("Failed to load the shader pack", BB), JB))).then((BB => (this.resolved ??= BB, BB))), this.pagePack
      }
      hasNone() {
        var BB;
        return "none" === (null === (BB = this.resolved) || void 0 === BB ? void 0 : BB.status)
      }
      block(BB) {
        this.resolved = {
          status: "blocked",
          messageKey: BB,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([dB.e(126), dB.e(124), dB.e(127)]).then((() => dB(40452))).then((BB => (BB.prefetchCompiler(), BB))), this.compiling
      }
      async readStored() {
        const BB = await gB();
        return BB && this.compiler().then((BB => BB.reconcileHint())).catch((BB => {
          console.error("Failed to correct the shader pack hint", BB)
        })), BB
      }
      async read() {
        const BB = await this.preload();
        return BB ? (await this.compiler()).compilePagePack(BB) : JB
      }
    }
    async function gB() {
      if (!(0, pB.k)(VB.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const BB = await (0, lB.d)(!0);
        return BB || yB.j.setItem(pB.d, !1), BB
      } catch (BB) {
        return console.error("Failed to read the stored shader pack", BB), yB.j.removeItem(pB.d), null
      }
    }
    const oB = new YB;

    function kB(BB, TB) {}

    function LB() {
      return null
    }
  },
  5994: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => pB
    });
    var VB = dB(33);
    const yB = "shaderPack";
    async function pB() {
      var BB;
      let TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await VB.f.getItem(yB, TB)) && void 0 !== BB ? BB : null
    }
  },
  5973: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      loadShaderPackTextures: () => lB,
      shaderPackTextures: () => JB
    });
    var VB = dB(5924);
    let yB = null,
      pB = null;

    function lB() {
      return pB ??= Promise.all([dB.e(64), dB.e(184)]).then((() => dB(39231))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: TB,
          textureNameToIndex: dB,
          textureAnimationData: pB
        } = BB;
        return yB ??= (0, VB.l)(dB, pB, TB), yB
      })), pB
    }

    function JB() {
      if (null === yB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yB
    }
  },
  5924: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      d: () => pB,
      h: () => VB,
      l: () => DB,
      m: () => oB,
      p: () => yB,
      q: () => YB,
      u: () => gB,
      x: () => kB
    });
    const VB = 5;

    function yB(BB) {
      return BB === VB
    }
    const pB = 262144,
      lB = 256,
      JB = 256;

    function YB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const TB = [];
      for (const [dB, VB] of Object.entries(BB)) {
        if ("string" !== typeof VB) return `${dB} isn't text.`;
        TB.push({
          path: dB,
          source: VB
        })
      }
      return TB.sort(((BB, TB) => oB(BB.path, TB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > lB) return `The pack has more than ${lB} .wgsl files.`;
          const TB = new Set;
          for (const {
              path: dB
            }
            of BB) {
            const BB = LB(dB);
            if (null !== BB) return BB;
            if (TB.has(dB)) return `The pack has two files at ${dB}.`;
            TB.add(dB)
          }
          return kB(BB) > pB ? `The pack's .wgsl files are over ${pB/1024} KB in total.` : null
        }(TB) ?? TB
    }

    function gB(BB) {
      const TB = {};
      for (const dB of BB) TB[dB.path] = dB.source;
      return TB
    }

    function oB(BB, TB) {
      return BB < TB ? -1 : BB > TB ? 1 : 0
    }

    function kB(BB) {
      const TB = new TextEncoder;
      let dB = 0;
      for (const {
          source: VB
        }
        of BB) dB += TB.encode(VB).byteLength;
      return dB
    }

    function LB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > JB) return `A file path is over ${JB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const OB = /^(.*)\[rot\[([1-4])$/;

    function DB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const VB = new Map;
      TB.forEach(((BB, TB) => {
        let {
          numAnimStates: dB,
          animStartIdx: yB
        } = BB;
        for (let pB = 1; pB < dB; pB++) VB.set(yB + pB - 1, TB)
      }));
      const yB = Object.entries(BB),
        pB = new Map;
      for (const [uB, HB] of yB) {
        const BB = OB.exec(uB);
        "1" === BB?.[2] && pB.set(BB[1], HB + 1)
      }
      const lB = BB => {
          const TB = OB.exec(BB);
          return TB && pB.has(TB[1]) ? {
            root: TB[1],
            rotation: Number(TB[2]) - 1
          } : null
        },
        JB = new Set(yB.map((BB => {
          let [TB] = BB;
          return lB(TB)?.root ?? TB
        }))),
        YB = (BB, dB) => {
          const VB = BB.replace(/_?0$/, "");
          return (TB[dB]?.numAnimStates ?? 0) > 1 && !JB.has(VB) ? VB : BB
        },
        gB = new Map;
      for (const [OB, uB] of yB) gB.set(uB, YB(lB(OB)?.root ?? OB, uB));
      const oB = yB.reduce(((BB, TB) => {
          let [, dB] = TB;
          return Math.max(BB, dB + 1)
        }), 0),
        kB = Array.from({
          length: oB
        }, ((BB, TB) => ({
          id: TB + 1,
          rotation: 0
        }))),
        LB = new Map,
        DB = new Map;
      for (const [OB, uB] of yB) {
        const BB = lB(OB),
          TB = VB.get(uB);
        if (void 0 !== TB) {
          const dB = gB.get(TB);
          DB.set(OB, {
            name: OB,
            texture: dB,
            kind: "frame"
          }), BB && !DB.has(BB.root) && DB.set(BB.root, {
            name: BB.root,
            texture: dB,
            kind: "frame"
          });
          continue
        }
        const dB = gB.get(uB),
          yB = BB?.root ?? OB;
        if (dB !== yB && DB.set(yB, {
            name: yB,
            texture: dB,
            kind: "frame"
          }), BB) {
          const TB = pB.get(BB.root);
          kB[uB] = {
            id: TB,
            rotation: BB.rotation
          }, LB.set(dB, TB), DB.set(OB, {
            name: OB,
            texture: dB,
            kind: "rotation"
          })
        } else LB.set(dB, uB + 1)
      }
      for (const OB of LB.keys()) DB.delete(OB);
      for (const [OB, uB] of dB) {
        const BB = LB.get(uB);
        void 0 === BB || LB.has(OB) || (LB.set(OB, BB), DB.delete(OB))
      }
      return {
        named: [...LB].sort(((BB, TB) => {
          let [dB] = BB, [VB] = TB;
          return dB < VB ? -1 : dB > VB ? 1 : 0
        })).map((BB => {
          let [TB, dB] = BB;
          return {
            name: TB,
            id: dB
          }
        })),
        aliases: [...DB.values()],
        layers: kB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);