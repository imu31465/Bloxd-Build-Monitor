export const id = 115;
export const ids = [115, 116, 136];
export const modules = {
  5047: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk.d,
      e: () => Tk,
      i: () => Xk.m
    });
    var Xk = Ik(5053);
    const Tk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((Fk => ({
      strict: kk,
      program: Fk
    })))))
  },
  39224: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      ShaderPackPage: () => ak,
      harnessShaderPackMode: () => Zk,
      setHarnessUrlShaderPack: () => tk,
      shaderPackPage: () => Lk
    });
    var Xk = Ik(95),
      Tk = Ik(41),
      ik = (Ik(3403), Ik(5047), Ik(3396)),
      yk = Ik(6644);
    Ik(6611);
    const lk = {
      status: "none"
    };
    class ak {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, ik.j)(Xk.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), qk().then((kk => {
            kk && Tk.j.removeItem(ik.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, ik.h)(Xk.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const kk = await this.load();
        return "active" === kk.status ? kk.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((kk => (console.error("Failed to load the shader pack", kk), lk))).then((kk => (this.resolved ??= kk, kk))), this.pagePack
      }
      hasNone() {
        var kk;
        return "none" === (null === (kk = this.resolved) || void 0 === kk ? void 0 : kk.status)
      }
      block(kk) {
        this.resolved = {
          status: "blocked",
          messageKey: kk,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([Ik.e(77), Ik.e(133), Ik.e(140)]).then((() => Ik(41740))).then((kk => (kk.prefetchCompiler(), kk))), this.compiling
      }
      async readStored() {
        const kk = await qk();
        return kk && this.compiler().then((kk => kk.reconcileHint())).catch((kk => {
          console.error("Failed to correct the shader pack hint", kk)
        })), kk
      }
      async read() {
        const kk = await this.preload();
        return kk ? (await this.compiler()).compilePagePack(kk) : lk
      }
    }
    async function qk() {
      if (!(0, ik.m)(Xk.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const kk = await (0, yk.i)(!0);
        return kk || Tk.j.setItem(ik.e, !1), kk
      } catch (kk) {
        return console.error("Failed to read the stored shader pack", kk), Tk.j.removeItem(ik.e), null
      }
    }
    const Lk = new ak;

    function tk(kk, Fk) {}

    function Zk() {
      return null
    }
  },
  6644: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik
    });
    var Xk = Ik(41);
    const Tk = "shaderPack";
    async function ik() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
    }
  },
  6611: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      loadShaderPackTextures: () => yk,
      shaderPackTextures: () => lk
    });
    var Xk = Ik(5053);
    let Tk = null,
      ik = null;

    function yk() {
      return ik ??= Promise.all([Ik.e(72), Ik.e(188)]).then((() => Ik(40500))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Ik,
          textureAnimationData: ik
        } = kk;
        return Tk ??= (0, Xk.g)(Ik, ik, Fk), Tk
      })), ik
    }

    function lk() {
      if (null === Tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Tk
    }
  },
  5053: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      c: () => yk,
      d: () => Xk,
      g: () => wk,
      k: () => tk,
      m: () => Tk,
      p: () => ik,
      t: () => qk,
      w: () => Lk,
      x: () => Zk
    });
    const Xk = 5;

    function Tk(kk) {
      return kk === Xk
    }

    function ik(kk) {
      return [...kk.features]
    }
    const yk = 262144,
      lk = 256,
      ak = 256;

    function qk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Ik, Xk] of Object.entries(kk)) {
        if ("string" !== typeof Xk) return `${Ik} isn't text.`;
        Fk.push({
          path: Ik,
          source: Xk
        })
      }
      return Fk.sort(((kk, Fk) => tk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > lk) return `The pack has more than ${lk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Ik
            }
            of kk) {
            const kk = jk(Ik);
            if (null !== kk) return kk;
            if (Fk.has(Ik)) return `The pack has two files at ${Ik}.`;
            Fk.add(Ik)
          }
          return Zk(kk) > yk ? `The pack's .wgsl files are over ${yk/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function Lk(kk) {
      const Fk = {};
      for (const Ik of kk) Fk[Ik.path] = Ik.source;
      return Fk
    }

    function tk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Zk(kk) {
      const Fk = new TextEncoder;
      let Ik = 0;
      for (const {
          source: Xk
        }
        of kk) Ik += Fk.encode(Xk).byteLength;
      return Ik
    }

    function jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > ak) return `A file path is over ${ak} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const ek = /^(.*)\[rot\[([1-4])$/;

    function wk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Xk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Ik,
          animStartIdx: Tk
        } = kk;
        for (let ik = 1; ik < Ik; ik++) Xk.set(Tk + ik - 1, Fk)
      }));
      const Tk = Object.entries(kk),
        ik = new Map;
      for (const [wk, Hk] of Tk) {
        const kk = ek.exec(wk);
        "1" === kk?.[2] && ik.set(kk[1], Hk + 1)
      }
      const yk = kk => {
          const Fk = ek.exec(kk);
          return Fk && ik.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        lk = new Set(Tk.map((kk => {
          let [Fk] = kk;
          return yk(Fk)?.root ?? Fk
        }))),
        ak = (kk, Ik) => {
          const Xk = kk.replace(/_?0$/, "");
          return (Fk[Ik]?.numAnimStates ?? 0) > 1 && !lk.has(Xk) ? Xk : kk
        },
        qk = new Map;
      for (const [ek, wk] of Tk) qk.set(wk, ak(yk(ek)?.root ?? ek, wk));
      const Lk = Tk.reduce(((kk, Fk) => {
          let [, Ik] = Fk;
          return Math.max(kk, Ik + 1)
        }), 0),
        tk = Array.from({
          length: Lk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Zk = new Map,
        jk = new Map;
      for (const [ek, wk] of Tk) {
        const kk = yk(ek),
          Fk = Xk.get(wk);
        if (void 0 !== Fk) {
          const Ik = qk.get(Fk);
          jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "frame"
          }), kk && !jk.has(kk.root) && jk.set(kk.root, {
            name: kk.root,
            texture: Ik,
            kind: "frame"
          });
          continue
        }
        const Ik = qk.get(wk),
          Tk = kk?.root ?? ek;
        if (Ik !== Tk && jk.set(Tk, {
            name: Tk,
            texture: Ik,
            kind: "frame"
          }), kk) {
          const Fk = ik.get(kk.root);
          tk[wk] = {
            id: Fk,
            rotation: kk.rotation
          }, Zk.set(Ik, Fk), jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "rotation"
          })
        } else Zk.set(Ik, wk + 1)
      }
      for (const ek of Zk.keys()) jk.delete(ek);
      for (const [ek, wk] of Ik) {
        const kk = Zk.get(wk);
        void 0 === kk || Zk.has(ek) || (Zk.set(ek, kk), jk.delete(ek))
      }
      return {
        named: [...Zk].sort(((kk, Fk) => {
          let [Ik] = kk, [Xk] = Fk;
          return Ik < Xk ? -1 : Ik > Xk ? 1 : 0
        })).map((kk => {
          let [Fk, Ik] = kk;
          return {
            name: Fk,
            id: Ik
          }
        })),
        aliases: [...jk.values()],
        layers: tk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);