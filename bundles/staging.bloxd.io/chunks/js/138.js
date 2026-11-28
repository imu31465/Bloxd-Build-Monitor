export const id = 138;
export const ids = [138, 139, 159];
export const modules = {
  6105: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb.g,
      f: () => Hb,
      h: () => eb.j
    });
    var eb = Mb(6110);
    const Hb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((wb => ({
      strict: bb,
      program: wb
    })))))
  },
  40569: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ShaderPackPage: () => lb,
      harnessShaderPackMode: () => Ub,
      setHarnessUrlShaderPack: () => Ob,
      shaderPackPage: () => Ib
    });
    var eb = Mb(110),
      Hb = Mb(43),
      pb = (Mb(4845), Mb(6105), Mb(4843)),
      Vb = Mb(7848);
    Mb(7819);
    const gb = {
      status: "none"
    };
    class lb {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, pb.j)(eb.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Lb().then((bb => {
            bb && Hb.i.removeItem(pb.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, pb.g)(eb.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const bb = await this.load();
        return "active" === bb.status ? bb.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((bb => (console.error("Failed to load the shader pack", bb), gb))).then((bb => (this.resolved ??= bb, bb))), this.pagePack
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
        return this.compiling ??= Promise.all([Mb.e(91), Mb.e(157), Mb.e(163)]).then((() => Mb(53966))).then((bb => (bb.prefetchCompiler(), bb))), this.compiling
      }
      async readStored() {
        const bb = await Lb();
        return bb && this.compiler().then((bb => bb.reconcileHint())).catch((bb => {
          console.error("Failed to correct the shader pack hint", bb)
        })), bb
      }
      async read() {
        const bb = await this.preload();
        return bb ? (await this.compiler()).compilePagePack(bb) : gb
      }
    }
    async function Lb() {
      if (!(0, pb.l)(eb.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const bb = await (0, Vb.g)(!0);
        return bb || Hb.i.setItem(pb.d, !1), bb
      } catch (bb) {
        return console.error("Failed to read the stored shader pack", bb), Hb.i.removeItem(pb.d), null
      }
    }
    const Ib = new lb;

    function Ob(bb, wb) {}

    function Ub() {
      return null
    }
  },
  7848: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => pb
    });
    var eb = Mb(43);
    const Hb = "shaderPack";
    async function pb() {
      var bb;
      let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await eb.h.getItem(Hb, wb)) && void 0 !== bb ? bb : null
    }
  },
  7819: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      loadShaderPackTextures: () => Vb,
      shaderPackTextures: () => gb
    });
    var eb = Mb(6110);
    let Hb = null,
      pb = null;

    function Vb() {
      return pb ??= Promise.all([Mb.e(85), Mb.e(126)]).then((() => Mb(42174))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: wb,
          textureNameToIndex: Mb,
          textureAnimationData: pb
        } = bb;
        return Hb ??= (0, eb.h)(Mb, pb, wb), Hb
      })), pb
    }

    function gb() {
      if (null === Hb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Hb
    }
  },
  6110: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      e: () => Vb,
      g: () => eb,
      h: () => Eb,
      i: () => Ob,
      j: () => Hb,
      l: () => pb,
      p: () => Lb,
      t: () => Ib,
      x: () => Ub
    });
    const eb = 5;

    function Hb(bb) {
      return bb === eb
    }

    function pb(bb) {
      return [...bb.features]
    }
    const Vb = 262144,
      gb = 256,
      lb = 256;

    function Lb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const wb = [];
      for (const [Mb, eb] of Object.entries(bb)) {
        if ("string" !== typeof eb) return `${Mb} isn't text.`;
        wb.push({
          path: Mb,
          source: eb
        })
      }
      return wb.sort(((bb, wb) => Ob(bb.path, wb.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > gb) return `The pack has more than ${gb} .wgsl files.`;
          const wb = new Set;
          for (const {
              path: Mb
            }
            of bb) {
            const bb = tb(Mb);
            if (null !== bb) return bb;
            if (wb.has(Mb)) return `The pack has two files at ${Mb}.`;
            wb.add(Mb)
          }
          return Ub(bb) > Vb ? `The pack's .wgsl files are over ${Vb/1024} KB in total.` : null
        }(wb) ?? wb
    }

    function Ib(bb) {
      const wb = {};
      for (const Mb of bb) wb[Mb.path] = Mb.source;
      return wb
    }

    function Ob(bb, wb) {
      return bb < wb ? -1 : bb > wb ? 1 : 0
    }

    function Ub(bb) {
      const wb = new TextEncoder;
      let Mb = 0;
      for (const {
          source: eb
        }
        of bb) Mb += wb.encode(eb).byteLength;
      return Mb
    }

    function tb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > lb) return `A file path is over ${lb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Cb = /^(.*)\[rot\[([1-4])$/;

    function Eb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const eb = new Map;
      wb.forEach(((bb, wb) => {
        let {
          numAnimStates: Mb,
          animStartIdx: Hb
        } = bb;
        for (let pb = 1; pb < Mb; pb++) eb.set(Hb + pb - 1, wb)
      }));
      const Hb = Object.entries(bb),
        pb = new Map;
      for (const [Eb, Fb] of Hb) {
        const bb = Cb.exec(Eb);
        "1" === bb?.[2] && pb.set(bb[1], Fb + 1)
      }
      const Vb = bb => {
          const wb = Cb.exec(bb);
          return wb && pb.has(wb[1]) ? {
            root: wb[1],
            rotation: Number(wb[2]) - 1
          } : null
        },
        gb = new Set(Hb.map((bb => {
          let [wb] = bb;
          return Vb(wb)?.root ?? wb
        }))),
        lb = (bb, Mb) => {
          const eb = bb.replace(/_?0$/, "");
          return (wb[Mb]?.numAnimStates ?? 0) > 1 && !gb.has(eb) ? eb : bb
        },
        Lb = new Map;
      for (const [Cb, Eb] of Hb) Lb.set(Eb, lb(Vb(Cb)?.root ?? Cb, Eb));
      const Ib = Hb.reduce(((bb, wb) => {
          let [, Mb] = wb;
          return Math.max(bb, Mb + 1)
        }), 0),
        Ob = Array.from({
          length: Ib
        }, ((bb, wb) => ({
          id: wb + 1,
          rotation: 0
        }))),
        Ub = new Map,
        tb = new Map;
      for (const [Cb, Eb] of Hb) {
        const bb = Vb(Cb),
          wb = eb.get(Eb);
        if (void 0 !== wb) {
          const Mb = Lb.get(wb);
          tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "frame"
          }), bb && !tb.has(bb.root) && tb.set(bb.root, {
            name: bb.root,
            texture: Mb,
            kind: "frame"
          });
          continue
        }
        const Mb = Lb.get(Eb),
          Hb = bb?.root ?? Cb;
        if (Mb !== Hb && tb.set(Hb, {
            name: Hb,
            texture: Mb,
            kind: "frame"
          }), bb) {
          const wb = pb.get(bb.root);
          Ob[Eb] = {
            id: wb,
            rotation: bb.rotation
          }, Ub.set(Mb, wb), tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "rotation"
          })
        } else Ub.set(Mb, Eb + 1)
      }
      for (const Cb of Ub.keys()) tb.delete(Cb);
      for (const [Cb, Eb] of Mb) {
        const bb = Ub.get(Eb);
        void 0 === bb || Ub.has(Cb) || (Ub.set(Cb, bb), tb.delete(Cb))
      }
      return {
        named: [...Ub].sort(((bb, wb) => {
          let [Mb] = bb, [eb] = wb;
          return Mb < eb ? -1 : Mb > eb ? 1 : 0
        })).map((bb => {
          let [wb, Mb] = bb;
          return {
            name: wb,
            id: Mb
          }
        })),
        aliases: [...tb.values()],
        layers: Ob
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);