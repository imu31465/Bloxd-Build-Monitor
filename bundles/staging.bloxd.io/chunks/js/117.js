export const id = 117;
export const ids = [117, 118, 138];
export const modules = {
  5216: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot.k,
      g: () => qt,
      h: () => Ot.s
    });
    var Ot = Vt(5223);
    const qt = [!1, !0].flatMap((tt => ["terrain", "liquid", "model"].map((et => ({
      strict: tt,
      program: et
    })))))
  },
  39419: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      ShaderPackPage: () => jt,
      harnessShaderPackMode: () => lt,
      setHarnessUrlShaderPack: () => Qt,
      shaderPackPage: () => Xt
    });
    var Ot = Vt(106),
      qt = Vt(39),
      Dt = (Vt(3533), Vt(5216), Vt(3524)),
      mt = Vt(6873);
    Vt(6830);
    const dt = {
      status: "none"
    };
    class jt {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Dt.i)(Ot.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Ht().then((tt => {
            tt && qt.e.removeItem(Dt.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Dt.g)(Ot.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const tt = await this.load();
        return "active" === tt.status ? tt.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((tt => (console.error("Failed to load the shader pack", tt), dt))).then((tt => (this.resolved ??= tt, tt))), this.pagePack
      }
      hasNone() {
        var tt;
        return "none" === (null === (tt = this.resolved) || void 0 === tt ? void 0 : tt.status)
      }
      block(tt) {
        this.resolved = {
          status: "blocked",
          messageKey: tt,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([Vt.e(78), Vt.e(136), Vt.e(142)]).then((() => Vt(42006))).then((tt => (tt.prefetchCompiler(), tt))), this.compiling
      }
      async readStored() {
        const tt = await Ht();
        return tt && this.compiler().then((tt => tt.reconcileHint())).catch((tt => {
          console.error("Failed to correct the shader pack hint", tt)
        })), tt
      }
      async read() {
        const tt = await this.preload();
        return tt ? (await this.compiler()).compilePagePack(tt) : dt
      }
    }
    async function Ht() {
      if (!(0, Dt.m)(Ot.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const tt = await (0, mt.g)(!0);
        return tt || qt.e.setItem(Dt.e, !1), tt
      } catch (tt) {
        return console.error("Failed to read the stored shader pack", tt), qt.e.removeItem(Dt.e), null
      }
    }
    const Xt = new jt;

    function Qt(tt, et) {}

    function lt() {
      return null
    }
  },
  6873: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    var Ot = Vt(39);
    const qt = "shaderPack";
    async function Dt() {
      var tt;
      let et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (tt = await Ot.c.getItem(qt, et)) && void 0 !== tt ? tt : null
    }
  },
  6830: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      loadShaderPackTextures: () => mt,
      shaderPackTextures: () => dt
    });
    var Ot = Vt(5223);
    let qt = null,
      Dt = null;

    function mt() {
      return Dt ??= Promise.all([Vt.e(73), Vt.e(190)]).then((() => Vt(40674))).then((tt => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: et,
          textureNameToIndex: Vt,
          textureAnimationData: Dt
        } = tt;
        return qt ??= (0, Ot.m)(Vt, Dt, et), qt
      })), Dt
    }

    function dt() {
      if (null === qt) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qt
    }
  },
  5223: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => Xt,
      E: () => lt,
      e: () => dt,
      h: () => mt,
      k: () => Ot,
      m: () => wt,
      p: () => Qt,
      s: () => qt,
      u: () => Dt,
      y: () => Ht
    });
    const Ot = 5;

    function qt(tt) {
      return tt === Ot
    }

    function Dt(tt) {
      return [...tt.features]
    }
    const mt = 262144,
      dt = 256,
      jt = 256;

    function Ht(tt) {
      if ("object" !== typeof tt || null === tt || Array.isArray(tt)) return "The pack has no files.";
      const et = [];
      for (const [Vt, Ot] of Object.entries(tt)) {
        if ("string" !== typeof Ot) return `${Vt} isn't text.`;
        et.push({
          path: Vt,
          source: Ot
        })
      }
      return et.sort(((tt, et) => Qt(tt.path, et.path))),
        function(tt) {
          if (0 === tt.length) return "The pack has no .wgsl files.";
          if (tt.length > dt) return `The pack has more than ${dt} .wgsl files.`;
          const et = new Set;
          for (const {
              path: Vt
            }
            of tt) {
            const tt = Et(Vt);
            if (null !== tt) return tt;
            if (et.has(Vt)) return `The pack has two files at ${Vt}.`;
            et.add(Vt)
          }
          return lt(tt) > mt ? `The pack's .wgsl files are over ${mt/1024} KB in total.` : null
        }(et) ?? et
    }

    function Xt(tt) {
      const et = {};
      for (const Vt of tt) et[Vt.path] = Vt.source;
      return et
    }

    function Qt(tt, et) {
      return tt < et ? -1 : tt > et ? 1 : 0
    }

    function lt(tt) {
      const et = new TextEncoder;
      let Vt = 0;
      for (const {
          source: Ot
        }
        of tt) Vt += et.encode(Ot).byteLength;
      return Vt
    }

    function Et(tt) {
      if (!tt.toLowerCase().endsWith(".wgsl")) return `${tt} isn't a .wgsl file.`;
      if (tt.length > jt) return `A file path is over ${jt} characters.`;
      if (tt.includes("\\") || /[\u0000-\u001f]/.test(tt)) return `${tt} isn't a valid file path.`;
      return tt.split("/").some((tt => "" === tt || "." === tt || ".." === tt)) ? `${tt} isn't a valid file path.` : null
    }
    const ft = /^(.*)\[rot\[([1-4])$/;

    function wt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ot = new Map;
      et.forEach(((tt, et) => {
        let {
          numAnimStates: Vt,
          animStartIdx: qt
        } = tt;
        for (let Dt = 1; Dt < Vt; Dt++) Ot.set(qt + Dt - 1, et)
      }));
      const qt = Object.entries(tt),
        Dt = new Map;
      for (const [wt, yt] of qt) {
        const tt = ft.exec(wt);
        "1" === tt?.[2] && Dt.set(tt[1], yt + 1)
      }
      const mt = tt => {
          const et = ft.exec(tt);
          return et && Dt.has(et[1]) ? {
            root: et[1],
            rotation: Number(et[2]) - 1
          } : null
        },
        dt = new Set(qt.map((tt => {
          let [et] = tt;
          return mt(et)?.root ?? et
        }))),
        jt = (tt, Vt) => {
          const Ot = tt.replace(/_?0$/, "");
          return (et[Vt]?.numAnimStates ?? 0) > 1 && !dt.has(Ot) ? Ot : tt
        },
        Ht = new Map;
      for (const [ft, wt] of qt) Ht.set(wt, jt(mt(ft)?.root ?? ft, wt));
      const Xt = qt.reduce(((tt, et) => {
          let [, Vt] = et;
          return Math.max(tt, Vt + 1)
        }), 0),
        Qt = Array.from({
          length: Xt
        }, ((tt, et) => ({
          id: et + 1,
          rotation: 0
        }))),
        lt = new Map,
        Et = new Map;
      for (const [ft, wt] of qt) {
        const tt = mt(ft),
          et = Ot.get(wt);
        if (void 0 !== et) {
          const Vt = Ht.get(et);
          Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "frame"
          }), tt && !Et.has(tt.root) && Et.set(tt.root, {
            name: tt.root,
            texture: Vt,
            kind: "frame"
          });
          continue
        }
        const Vt = Ht.get(wt),
          qt = tt?.root ?? ft;
        if (Vt !== qt && Et.set(qt, {
            name: qt,
            texture: Vt,
            kind: "frame"
          }), tt) {
          const et = Dt.get(tt.root);
          Qt[wt] = {
            id: et,
            rotation: tt.rotation
          }, lt.set(Vt, et), Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "rotation"
          })
        } else lt.set(Vt, wt + 1)
      }
      for (const ft of lt.keys()) Et.delete(ft);
      for (const [ft, wt] of Vt) {
        const tt = lt.get(wt);
        void 0 === tt || lt.has(ft) || (lt.set(ft, tt), Et.delete(ft))
      }
      return {
        named: [...lt].sort(((tt, et) => {
          let [Vt] = tt, [Ot] = et;
          return Vt < Ot ? -1 : Vt > Ot ? 1 : 0
        })).map((tt => {
          let [et, Vt] = tt;
          return {
            name: et,
            id: Vt
          }
        })),
        aliases: [...Et.values()],
        layers: Qt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);