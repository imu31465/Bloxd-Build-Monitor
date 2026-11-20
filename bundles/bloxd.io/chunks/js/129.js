export const id = 129;
export const ids = [129, 130];
export const modules = {
  6233: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab.g,
      f: () => Mb,
      i: () => Ab.q
    });
    var Ab = Ub(6212);
    const Mb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((ab => ({
      strict: bb,
      program: ab
    })))))
  },
  38489: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ShaderPackPage: () => Bb,
      harnessShaderPackMode: () => Pb,
      setHarnessUrlShaderPack: () => Lb,
      shaderPackPage: () => vb
    });
    var Ab = Ub(101),
      Mb = Ub(31),
      Tb = (Ub(3138), Ub(6233), Ub(3132)),
      Eb = Ub(6294);
    Ub(6262);
    const Yb = {
      status: "none"
    };
    class Bb {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Tb.h)(Ab.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), eb().then((bb => {
            bb && Mb.f.removeItem(Tb.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Tb.g)(Ab.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const bb = await this.load();
        return "active" === bb.status ? bb.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((bb => (console.error("Failed to load the shader pack", bb), Yb))).then((bb => (this.resolved ??= bb, bb))), this.pagePack
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
        return this.compiling ??= Promise.all([Ub.e(74), Ub.e(131), Ub.e(134)]).then((() => Ub(40859))).then((bb => (bb.prefetchCompiler(), bb))), this.compiling
      }
      async readStored() {
        const bb = await eb();
        return bb && this.compiler().then((bb => bb.reconcileHint())).catch((bb => {
          console.error("Failed to correct the shader pack hint", bb)
        })), bb
      }
      async read() {
        const bb = await this.preload();
        return bb ? (await this.compiler()).compilePagePack(bb) : Yb
      }
    }
    async function eb() {
      if (!(0, Tb.k)(Ab.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const bb = await (0, Eb.f)(!0);
        return bb || Mb.f.setItem(Tb.d, !1), bb
      } catch (bb) {
        return console.error("Failed to read the stored shader pack", bb), Mb.f.removeItem(Tb.d), null
      }
    }
    const vb = new Bb;

    function Lb(bb, ab) {}

    function Pb() {
      return null
    }
  },
  6294: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(31);
    const Mb = "shaderPack";
    async function Tb() {
      var bb;
      let ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Ab.c.getItem(Mb, ab)) && void 0 !== bb ? bb : null
    }
  },
  6262: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      loadShaderPackTextures: () => Eb,
      shaderPackTextures: () => Yb
    });
    var Ab = Ub(6212);
    let Mb = null,
      Tb = null;

    function Eb() {
      return Tb ??= Promise.all([Ub.e(69), Ub.e(198)]).then((() => Ub(39620))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ab,
          textureNameToIndex: Ub,
          textureAnimationData: Tb
        } = bb;
        return Mb ??= (0, Ab.i)(Ub, Tb, ab), Mb
      })), Tb
    }

    function Yb() {
      if (null === Mb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Mb
    }
  },
  6212: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      f: () => Tb,
      g: () => Ab,
      i: () => jb,
      m: () => vb,
      q: () => Mb,
      u: () => Bb,
      w: () => eb,
      y: () => Lb
    });
    const Ab = 5;

    function Mb(bb) {
      return bb === Ab
    }
    const Tb = 262144,
      Eb = 256,
      Yb = 256;

    function Bb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const ab = [];
      for (const [Ub, Ab] of Object.entries(bb)) {
        if ("string" !== typeof Ab) return `${Ub} isn't text.`;
        ab.push({
          path: Ub,
          source: Ab
        })
      }
      return ab.sort(((bb, ab) => vb(bb.path, ab.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Eb) return `The pack has more than ${Eb} .wgsl files.`;
          const ab = new Set;
          for (const {
              path: Ub
            }
            of bb) {
            const bb = Pb(Ub);
            if (null !== bb) return bb;
            if (ab.has(Ub)) return `The pack has two files at ${Ub}.`;
            ab.add(Ub)
          }
          return Lb(bb) > Tb ? `The pack's .wgsl files are over ${Tb/1024} KB in total.` : null
        }(ab) ?? ab
    }

    function eb(bb) {
      const ab = {};
      for (const Ub of bb) ab[Ub.path] = Ub.source;
      return ab
    }

    function vb(bb, ab) {
      return bb < ab ? -1 : bb > ab ? 1 : 0
    }

    function Lb(bb) {
      const ab = new TextEncoder;
      let Ub = 0;
      for (const {
          source: Ab
        }
        of bb) Ub += ab.encode(Ab).byteLength;
      return Ub
    }

    function Pb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Yb) return `A file path is over ${Yb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Xb = /^(.*)\[rot\[([1-4])$/;

    function jb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ab = new Map;
      ab.forEach(((bb, ab) => {
        let {
          numAnimStates: Ub,
          animStartIdx: Mb
        } = bb;
        for (let Tb = 1; Tb < Ub; Tb++) Ab.set(Mb + Tb - 1, ab)
      }));
      const Mb = Object.entries(bb),
        Tb = new Map;
      for (const [Rb, kb] of Mb) {
        const bb = Xb.exec(Rb);
        "1" === bb?.[2] && Tb.set(bb[1], kb + 1)
      }
      const Eb = bb => {
          const ab = Xb.exec(bb);
          return ab && Tb.has(ab[1]) ? {
            root: ab[1],
            rotation: Number(ab[2]) - 1
          } : null
        },
        Yb = new Set(Mb.map((bb => {
          let [ab] = bb;
          return Eb(ab)?.root ?? ab
        }))),
        Bb = (bb, Ub) => {
          const Ab = bb.replace(/_?0$/, "");
          return (ab[Ub]?.numAnimStates ?? 0) > 1 && !Yb.has(Ab) ? Ab : bb
        },
        eb = new Map;
      for (const [Xb, Rb] of Mb) eb.set(Rb, Bb(Eb(Xb)?.root ?? Xb, Rb));
      const vb = Mb.reduce(((bb, ab) => {
          let [, Ub] = ab;
          return Math.max(bb, Ub + 1)
        }), 0),
        Lb = Array.from({
          length: vb
        }, ((bb, ab) => ({
          id: ab + 1,
          rotation: 0
        }))),
        Pb = new Map,
        jb = new Map;
      for (const [Xb, Rb] of Mb) {
        const bb = Eb(Xb),
          ab = Ab.get(Rb);
        if (void 0 !== ab) {
          const Ub = eb.get(ab);
          jb.set(Xb, {
            name: Xb,
            texture: Ub,
            kind: "frame"
          }), bb && !jb.has(bb.root) && jb.set(bb.root, {
            name: bb.root,
            texture: Ub,
            kind: "frame"
          });
          continue
        }
        const Ub = eb.get(Rb),
          Mb = bb?.root ?? Xb;
        if (Ub !== Mb && jb.set(Mb, {
            name: Mb,
            texture: Ub,
            kind: "frame"
          }), bb) {
          const ab = Tb.get(bb.root);
          Lb[Rb] = {
            id: ab,
            rotation: bb.rotation
          }, Pb.set(Ub, ab), jb.set(Xb, {
            name: Xb,
            texture: Ub,
            kind: "rotation"
          })
        } else Pb.set(Ub, Rb + 1)
      }
      for (const Xb of Pb.keys()) jb.delete(Xb);
      for (const [Xb, Rb] of Ub) {
        const bb = Pb.get(Rb);
        void 0 === bb || Pb.has(Xb) || (Pb.set(Xb, bb), jb.delete(Xb))
      }
      return {
        named: [...Pb].sort(((bb, ab) => {
          let [Ub] = bb, [Ab] = ab;
          return Ub < Ab ? -1 : Ub > Ab ? 1 : 0
        })).map((bb => {
          let [ab, Ub] = bb;
          return {
            name: ab,
            id: Ub
          }
        })),
        aliases: [...jb.values()],
        layers: Lb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);