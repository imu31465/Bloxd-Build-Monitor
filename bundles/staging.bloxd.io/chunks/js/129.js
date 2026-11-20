export const id = 129;
export const ids = [129, 130];
export const modules = {
  6269: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb.j,
      h: () => Wb,
      k: () => kb.p
    });
    var kb = sb(6250);
    const Wb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((cb => ({
      strict: bb,
      program: cb
    })))))
  },
  38787: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ShaderPackPage: () => Ib,
      harnessShaderPackMode: () => Xb,
      setHarnessUrlShaderPack: () => Mb,
      shaderPackPage: () => fb
    });
    var kb = sb(117),
      Wb = sb(37),
      ab = (sb(3230), sb(6269), sb(3222)),
      Tb = sb(6328);
    sb(6301);
    const Ub = {
      status: "none"
    };
    class Ib {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, ab.i)(kb.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Hb().then((bb => {
            bb && Wb.h.removeItem(ab.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, ab.e)(kb.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const bb = await this.load();
        return "active" === bb.status ? bb.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((bb => (console.error("Failed to load the shader pack", bb), Ub))).then((bb => (this.resolved ??= bb, bb))), this.pagePack
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
        return this.compiling ??= Promise.all([sb.e(74), sb.e(131), sb.e(134)]).then((() => sb(41144))).then((bb => (bb.prefetchCompiler(), bb))), this.compiling
      }
      async readStored() {
        const bb = await Hb();
        return bb && this.compiler().then((bb => bb.reconcileHint())).catch((bb => {
          console.error("Failed to correct the shader pack hint", bb)
        })), bb
      }
      async read() {
        const bb = await this.preload();
        return bb ? (await this.compiler()).compilePagePack(bb) : Ub
      }
    }
    async function Hb() {
      if (!(0, ab.j)(kb.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const bb = await (0, Tb.d)(!0);
        return bb || Wb.h.setItem(ab.c, !1), bb
      } catch (bb) {
        return console.error("Failed to read the stored shader pack", bb), Wb.h.removeItem(ab.c), null
      }
    }
    const fb = new Ib;

    function Mb(bb, cb) {}

    function Xb() {
      return null
    }
  },
  6328: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => ab
    });
    var kb = sb(37);
    const Wb = "shaderPack";
    async function ab() {
      var bb;
      let cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await kb.d.getItem(Wb, cb)) && void 0 !== bb ? bb : null
    }
  },
  6301: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      loadShaderPackTextures: () => Tb,
      shaderPackTextures: () => Ub
    });
    var kb = sb(6250);
    let Wb = null,
      ab = null;

    function Tb() {
      return ab ??= Promise.all([sb.e(69), sb.e(198)]).then((() => sb(39908))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: cb,
          textureNameToIndex: sb,
          textureAnimationData: ab
        } = bb;
        return Wb ??= (0, kb.l)(sb, ab, cb), Wb
      })), ab
    }

    function Ub() {
      if (null === Wb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wb
    }
  },
  6250: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      h: () => ab,
      j: () => kb,
      l: () => mb,
      o: () => fb,
      p: () => Wb,
      t: () => Ib,
      u: () => Hb,
      w: () => Mb
    });
    const kb = 5;

    function Wb(bb) {
      return bb === kb
    }
    const ab = 262144,
      Tb = 256,
      Ub = 256;

    function Ib(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const cb = [];
      for (const [sb, kb] of Object.entries(bb)) {
        if ("string" !== typeof kb) return `${sb} isn't text.`;
        cb.push({
          path: sb,
          source: kb
        })
      }
      return cb.sort(((bb, cb) => fb(bb.path, cb.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Tb) return `The pack has more than ${Tb} .wgsl files.`;
          const cb = new Set;
          for (const {
              path: sb
            }
            of bb) {
            const bb = Xb(sb);
            if (null !== bb) return bb;
            if (cb.has(sb)) return `The pack has two files at ${sb}.`;
            cb.add(sb)
          }
          return Mb(bb) > ab ? `The pack's .wgsl files are over ${ab/1024} KB in total.` : null
        }(cb) ?? cb
    }

    function Hb(bb) {
      const cb = {};
      for (const sb of bb) cb[sb.path] = sb.source;
      return cb
    }

    function fb(bb, cb) {
      return bb < cb ? -1 : bb > cb ? 1 : 0
    }

    function Mb(bb) {
      const cb = new TextEncoder;
      let sb = 0;
      for (const {
          source: kb
        }
        of bb) sb += cb.encode(kb).byteLength;
      return sb
    }

    function Xb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Ub) return `A file path is over ${Ub} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const nb = /^(.*)\[rot\[([1-4])$/;

    function mb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const kb = new Map;
      cb.forEach(((bb, cb) => {
        let {
          numAnimStates: sb,
          animStartIdx: Wb
        } = bb;
        for (let ab = 1; ab < sb; ab++) kb.set(Wb + ab - 1, cb)
      }));
      const Wb = Object.entries(bb),
        ab = new Map;
      for (const [lb, Qb] of Wb) {
        const bb = nb.exec(lb);
        "1" === bb?.[2] && ab.set(bb[1], Qb + 1)
      }
      const Tb = bb => {
          const cb = nb.exec(bb);
          return cb && ab.has(cb[1]) ? {
            root: cb[1],
            rotation: Number(cb[2]) - 1
          } : null
        },
        Ub = new Set(Wb.map((bb => {
          let [cb] = bb;
          return Tb(cb)?.root ?? cb
        }))),
        Ib = (bb, sb) => {
          const kb = bb.replace(/_?0$/, "");
          return (cb[sb]?.numAnimStates ?? 0) > 1 && !Ub.has(kb) ? kb : bb
        },
        Hb = new Map;
      for (const [nb, lb] of Wb) Hb.set(lb, Ib(Tb(nb)?.root ?? nb, lb));
      const fb = Wb.reduce(((bb, cb) => {
          let [, sb] = cb;
          return Math.max(bb, sb + 1)
        }), 0),
        Mb = Array.from({
          length: fb
        }, ((bb, cb) => ({
          id: cb + 1,
          rotation: 0
        }))),
        Xb = new Map,
        mb = new Map;
      for (const [nb, lb] of Wb) {
        const bb = Tb(nb),
          cb = kb.get(lb);
        if (void 0 !== cb) {
          const sb = Hb.get(cb);
          mb.set(nb, {
            name: nb,
            texture: sb,
            kind: "frame"
          }), bb && !mb.has(bb.root) && mb.set(bb.root, {
            name: bb.root,
            texture: sb,
            kind: "frame"
          });
          continue
        }
        const sb = Hb.get(lb),
          Wb = bb?.root ?? nb;
        if (sb !== Wb && mb.set(Wb, {
            name: Wb,
            texture: sb,
            kind: "frame"
          }), bb) {
          const cb = ab.get(bb.root);
          Mb[lb] = {
            id: cb,
            rotation: bb.rotation
          }, Xb.set(sb, cb), mb.set(nb, {
            name: nb,
            texture: sb,
            kind: "rotation"
          })
        } else Xb.set(sb, lb + 1)
      }
      for (const nb of Xb.keys()) mb.delete(nb);
      for (const [nb, lb] of sb) {
        const bb = Xb.get(lb);
        void 0 === bb || Xb.has(nb) || (Xb.set(nb, bb), mb.delete(nb))
      }
      return {
        named: [...Xb].sort(((bb, cb) => {
          let [sb] = bb, [kb] = cb;
          return sb < kb ? -1 : sb > kb ? 1 : 0
        })).map((bb => {
          let [cb, sb] = bb;
          return {
            name: cb,
            id: sb
          }
        })),
        aliases: [...mb.values()],
        layers: Mb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);