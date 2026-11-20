export const id = 130;
export const ids = [130, 131];
export const modules = {
  6344: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb.i,
      f: () => Ob,
      i: () => Bb.q
    });
    var Bb = hb(6324);
    const Ob = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((ub => ({
      strict: bb,
      program: ub
    })))))
  },
  38833: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      ShaderPackPage: () => Yb,
      harnessShaderPackMode: () => wb,
      setHarnessUrlShaderPack: () => Hb,
      shaderPackPage: () => ab
    });
    var Bb = hb(86),
      Ob = hb(29),
      Gb = (hb(3244), hb(6344), hb(3237)),
      Ub = hb(6394);
    hb(6365);
    const Lb = {
      status: "none"
    };
    class Yb {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Gb.f)(Bb.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Sb().then((bb => {
            bb && Ob.j.removeItem(Gb.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Gb.e)(Bb.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const bb = await this.load();
        return "active" === bb.status ? bb.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((bb => (console.error("Failed to load the shader pack", bb), Lb))).then((bb => (this.resolved ??= bb, bb))), this.pagePack
      }
      hasNone() {
        var bb;
        return "none" === (null === (bb = this.resolved) || void 0 === bb ? void 0 : bb.status)
      }
      block(bb) {
        this.resolved = {
          status: "blocked",
          messageKey: bb,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([hb.e(75), hb.e(132), hb.e(135)]).then((() => hb(41206))).then((bb => (bb.prefetchCompiler(), bb))), this.compiling
      }
      async readStored() {
        const bb = await Sb();
        return bb && this.compiler().then((bb => bb.reconcileHint())).catch((bb => {
          console.error("Failed to correct the shader pack hint", bb)
        })), bb
      }
      async read() {
        const bb = await this.preload();
        return bb ? (await this.compiler()).compilePagePack(bb) : Lb
      }
    }
    async function Sb() {
      if (!(0, Gb.j)(Bb.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const bb = await (0, Ub.g)(!0);
        return bb || Ob.j.setItem(Gb.d, !1), bb
      } catch (bb) {
        return console.error("Failed to read the stored shader pack", bb), Ob.j.removeItem(Gb.d), null
      }
    }
    const ab = new Yb;

    function Hb(bb, ub) {}

    function wb() {
      return null
    }
  },
  6394: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      g: () => Gb
    });
    var Bb = hb(29);
    const Ob = "shaderPack";
    async function Gb() {
      var bb;
      let ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Bb.f.getItem(Ob, ub)) && void 0 !== bb ? bb : null
    }
  },
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