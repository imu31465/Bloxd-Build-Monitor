export const id = 115;
export const ids = [115, 116, 135];
export const modules = {
  4961: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk.g,
      e: () => fk,
      g: () => Dk.l
    });
    var Dk = ik(4965);
    const fk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((ek => ({
      strict: kk,
      program: ek
    })))))
  },
  38787: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      ShaderPackPage: () => Pk,
      harnessShaderPackMode: () => xk,
      setHarnessUrlShaderPack: () => Kk,
      shaderPackPage: () => Mk
    });
    var Dk = ik(99),
      fk = ik(38),
      Sk = (ik(3421), ik(4961), ik(3419)),
      bk = ik(6505);
    ik(6477);
    const rk = {
      status: "none"
    };
    class Pk {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Sk.k)(Dk.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), mk().then((kk => {
            kk && fk.f.removeItem(Sk.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Sk.h)(Dk.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const kk = await this.load();
        return "active" === kk.status ? kk.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((kk => (console.error("Failed to load the shader pack", kk), rk))).then((kk => (this.resolved ??= kk, kk))), this.pagePack
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
        return this.compiling ??= Promise.all([ik.e(77), ik.e(133), ik.e(139)]).then((() => ik(41318))).then((kk => (kk.prefetchCompiler(), kk))), this.compiling
      }
      async readStored() {
        const kk = await mk();
        return kk && this.compiler().then((kk => kk.reconcileHint())).catch((kk => {
          console.error("Failed to correct the shader pack hint", kk)
        })), kk
      }
      async read() {
        const kk = await this.preload();
        return kk ? (await this.compiler()).compilePagePack(kk) : rk
      }
    }
    async function mk() {
      if (!(0, Sk.m)(Dk.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const kk = await (0, bk.f)(!0);
        return kk || fk.f.setItem(Sk.e, !1), kk
      } catch (kk) {
        return console.error("Failed to read the stored shader pack", kk), fk.f.removeItem(Sk.e), null
      }
    }
    const Mk = new Pk;

    function Kk(kk, ek) {}

    function xk() {
      return null
    }
  },
  6505: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      f: () => Sk
    });
    var Dk = ik(38);
    const fk = "shaderPack";
    async function Sk() {
      var kk;
      let ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Dk.e.getItem(fk, ek)) && void 0 !== kk ? kk : null
    }
  },
  6477: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      loadShaderPackTextures: () => bk,
      shaderPackTextures: () => rk
    });
    var Dk = ik(4965);
    let fk = null,
      Sk = null;

    function bk() {
      return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ek,
          textureNameToIndex: ik,
          textureAnimationData: Sk
        } = kk;
        return fk ??= (0, Dk.h)(ik, Sk, ek), fk
      })), Sk
    }

    function rk() {
      if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return fk
    }
  },
  4965: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk,
      c: () => bk,
      g: () => Dk,
      h: () => Hk,
      i: () => Kk,
      l: () => fk,
      p: () => Sk,
      r: () => mk,
      t: () => Mk,
      u: () => xk
    });
    const Dk = 5;

    function fk(kk) {
      return kk === Dk
    }

    function Sk(kk) {
      return [...kk.features]
    }
    const bk = 262144,
      rk = 256,
      Pk = 256;

    function mk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const ek = [];
      for (const [ik, Dk] of Object.entries(kk)) {
        if ("string" !== typeof Dk) return `${ik} isn't text.`;
        ek.push({
          path: ik,
          source: Dk
        })
      }
      return ek.sort(((kk, ek) => Kk(kk.path, ek.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > rk) return `The pack has more than ${rk} .wgsl files.`;
          const ek = new Set;
          for (const {
              path: ik
            }
            of kk) {
            const kk = nk(ik);
            if (null !== kk) return kk;
            if (ek.has(ik)) return `The pack has two files at ${ik}.`;
            ek.add(ik)
          }
          return xk(kk) > bk ? `The pack's .wgsl files are over ${bk/1024} KB in total.` : null
        }(ek) ?? ek
    }

    function Mk(kk) {
      const ek = {};
      for (const ik of kk) ek[ik.path] = ik.source;
      return ek
    }

    function Kk(kk, ek) {
      return kk < ek ? -1 : kk > ek ? 1 : 0
    }

    function xk(kk) {
      const ek = new TextEncoder;
      let ik = 0;
      for (const {
          source: Dk
        }
        of kk) ik += ek.encode(Dk).byteLength;
      return ik
    }

    function nk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const Uk = /^(.*)\[rot\[([1-4])$/;

    function Hk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Dk = new Map;
      ek.forEach(((kk, ek) => {
        let {
          numAnimStates: ik,
          animStartIdx: fk
        } = kk;
        for (let Sk = 1; Sk < ik; Sk++) Dk.set(fk + Sk - 1, ek)
      }));
      const fk = Object.entries(kk),
        Sk = new Map;
      for (const [Hk, wk] of fk) {
        const kk = Uk.exec(Hk);
        "1" === kk?.[2] && Sk.set(kk[1], wk + 1)
      }
      const bk = kk => {
          const ek = Uk.exec(kk);
          return ek && Sk.has(ek[1]) ? {
            root: ek[1],
            rotation: Number(ek[2]) - 1
          } : null
        },
        rk = new Set(fk.map((kk => {
          let [ek] = kk;
          return bk(ek)?.root ?? ek
        }))),
        Pk = (kk, ik) => {
          const Dk = kk.replace(/_?0$/, "");
          return (ek[ik]?.numAnimStates ?? 0) > 1 && !rk.has(Dk) ? Dk : kk
        },
        mk = new Map;
      for (const [Uk, Hk] of fk) mk.set(Hk, Pk(bk(Uk)?.root ?? Uk, Hk));
      const Mk = fk.reduce(((kk, ek) => {
          let [, ik] = ek;
          return Math.max(kk, ik + 1)
        }), 0),
        Kk = Array.from({
          length: Mk
        }, ((kk, ek) => ({
          id: ek + 1,
          rotation: 0
        }))),
        xk = new Map,
        nk = new Map;
      for (const [Uk, Hk] of fk) {
        const kk = bk(Uk),
          ek = Dk.get(Hk);
        if (void 0 !== ek) {
          const ik = mk.get(ek);
          nk.set(Uk, {
            name: Uk,
            texture: ik,
            kind: "frame"
          }), kk && !nk.has(kk.root) && nk.set(kk.root, {
            name: kk.root,
            texture: ik,
            kind: "frame"
          });
          continue
        }
        const ik = mk.get(Hk),
          fk = kk?.root ?? Uk;
        if (ik !== fk && nk.set(fk, {
            name: fk,
            texture: ik,
            kind: "frame"
          }), kk) {
          const ek = Sk.get(kk.root);
          Kk[Hk] = {
            id: ek,
            rotation: kk.rotation
          }, xk.set(ik, ek), nk.set(Uk, {
            name: Uk,
            texture: ik,
            kind: "rotation"
          })
        } else xk.set(ik, Hk + 1)
      }
      for (const Uk of xk.keys()) nk.delete(Uk);
      for (const [Uk, Hk] of ik) {
        const kk = xk.get(Hk);
        void 0 === kk || xk.has(Uk) || (xk.set(Uk, kk), nk.delete(Uk))
      }
      return {
        named: [...xk].sort(((kk, ek) => {
          let [ik] = kk, [Dk] = ek;
          return ik < Dk ? -1 : ik > Dk ? 1 : 0
        })).map((kk => {
          let [ek, ik] = kk;
          return {
            name: ek,
            id: ik
          }
        })),
        aliases: [...nk.values()],
        layers: Kk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);