export const id = 129;
export const ids = [129, 130];
export const modules = {
  6597: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.e,
      d: () => MT,
      f: () => lT.l
    });
    var lT = cT(6581);
    const MT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((kT => ({
      strict: TT,
      program: kT
    })))))
  },
  39e3: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      ShaderPackPage: () => fT,
      harnessShaderPackMode: () => CT,
      setHarnessUrlShaderPack: () => AT,
      shaderPackPage: () => IT
    });
    var lT = cT(118),
      MT = cT(47),
      KT = (cT(3390), cT(6597), cT(3383)),
      OT = cT(6647);
    cT(6623);
    const yT = {
      status: "none"
    };
    class fT {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, KT.j)(lT.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), xT().then((TT => {
            TT && MT.e.removeItem(KT.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, KT.g)(lT.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const TT = await this.load();
        return "active" === TT.status ? TT.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((TT => (console.error("Failed to load the shader pack", TT), yT))).then((TT => (this.resolved ??= TT, TT))), this.pagePack
      }
      hasNone() {
        var TT;
        return "none" === (null === (TT = this.resolved) || void 0 === TT ? void 0 : TT.status)
      }
      block(TT) {
        this.resolved = {
          status: "blocked",
          messageKey: TT,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([cT.e(75), cT.e(131), cT.e(134)]).then((() => cT(41315))).then((TT => (TT.prefetchCompiler(), TT))), this.compiling
      }
      async readStored() {
        const TT = await xT();
        return TT && this.compiler().then((TT => TT.reconcileHint())).catch((TT => {
          console.error("Failed to correct the shader pack hint", TT)
        })), TT
      }
      async read() {
        const TT = await this.preload();
        return TT ? (await this.compiler()).compilePagePack(TT) : yT
      }
    }
    async function xT() {
      if (!(0, KT.k)(lT.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const TT = await (0, OT.e)(!0);
        return TT || MT.e.setItem(KT.d, !1), TT
      } catch (TT) {
        return console.error("Failed to read the stored shader pack", TT), MT.e.removeItem(KT.d), null
      }
    }
    const IT = new fT;

    function AT(TT, kT) {}

    function CT() {
      return null
    }
  },
  6647: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(47);
    const MT = "shaderPack";
    async function KT() {
      var TT;
      let kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await lT.d.getItem(MT, kT)) && void 0 !== TT ? TT : null
    }
  },
  6623: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      loadShaderPackTextures: () => OT,
      shaderPackTextures: () => yT
    });
    var lT = cT(6581);
    let MT = null,
      KT = null;

    function OT() {
      return KT ??= Promise.all([cT.e(70), cT.e(198)]).then((() => cT(40123))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: kT,
          textureNameToIndex: cT,
          textureAnimationData: KT
        } = TT;
        return MT ??= (0, lT.i)(cT, KT, kT), MT
      })), KT
    }

    function yT() {
      if (null === MT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return MT
    }
  },
  6581: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      c: () => KT,
      e: () => lT,
      i: () => vT,
      j: () => IT,
      l: () => MT,
      p: () => fT,
      s: () => xT,
      u: () => AT
    });
    const lT = 5;

    function MT(TT) {
      return TT === lT
    }
    const KT = 262144,
      OT = 256,
      yT = 256;

    function fT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const kT = [];
      for (const [cT, lT] of Object.entries(TT)) {
        if ("string" !== typeof lT) return `${cT} isn't text.`;
        kT.push({
          path: cT,
          source: lT
        })
      }
      return kT.sort(((TT, kT) => IT(TT.path, kT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > OT) return `The pack has more than ${OT} .wgsl files.`;
          const kT = new Set;
          for (const {
              path: cT
            }
            of TT) {
            const TT = CT(cT);
            if (null !== TT) return TT;
            if (kT.has(cT)) return `The pack has two files at ${cT}.`;
            kT.add(cT)
          }
          return AT(TT) > KT ? `The pack's .wgsl files are over ${KT/1024} KB in total.` : null
        }(kT) ?? kT
    }

    function xT(TT) {
      const kT = {};
      for (const cT of TT) kT[cT.path] = cT.source;
      return kT
    }

    function IT(TT, kT) {
      return TT < kT ? -1 : TT > kT ? 1 : 0
    }

    function AT(TT) {
      const kT = new TextEncoder;
      let cT = 0;
      for (const {
          source: lT
        }
        of TT) cT += kT.encode(lT).byteLength;
      return cT
    }

    function CT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > yT) return `A file path is over ${yT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const jT = /^(.*)\[rot\[([1-4])$/;

    function vT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const lT = new Map;
      kT.forEach(((TT, kT) => {
        let {
          numAnimStates: cT,
          animStartIdx: MT
        } = TT;
        for (let KT = 1; KT < cT; KT++) lT.set(MT + KT - 1, kT)
      }));
      const MT = Object.entries(TT),
        KT = new Map;
      for (const [tT, hT] of MT) {
        const TT = jT.exec(tT);
        "1" === TT?.[2] && KT.set(TT[1], hT + 1)
      }
      const OT = TT => {
          const kT = jT.exec(TT);
          return kT && KT.has(kT[1]) ? {
            root: kT[1],
            rotation: Number(kT[2]) - 1
          } : null
        },
        yT = new Set(MT.map((TT => {
          let [kT] = TT;
          return OT(kT)?.root ?? kT
        }))),
        fT = (TT, cT) => {
          const lT = TT.replace(/_?0$/, "");
          return (kT[cT]?.numAnimStates ?? 0) > 1 && !yT.has(lT) ? lT : TT
        },
        xT = new Map;
      for (const [jT, tT] of MT) xT.set(tT, fT(OT(jT)?.root ?? jT, tT));
      const IT = MT.reduce(((TT, kT) => {
          let [, cT] = kT;
          return Math.max(TT, cT + 1)
        }), 0),
        AT = Array.from({
          length: IT
        }, ((TT, kT) => ({
          id: kT + 1,
          rotation: 0
        }))),
        CT = new Map,
        vT = new Map;
      for (const [jT, tT] of MT) {
        const TT = OT(jT),
          kT = lT.get(tT);
        if (void 0 !== kT) {
          const cT = xT.get(kT);
          vT.set(jT, {
            name: jT,
            texture: cT,
            kind: "frame"
          }), TT && !vT.has(TT.root) && vT.set(TT.root, {
            name: TT.root,
            texture: cT,
            kind: "frame"
          });
          continue
        }
        const cT = xT.get(tT),
          MT = TT?.root ?? jT;
        if (cT !== MT && vT.set(MT, {
            name: MT,
            texture: cT,
            kind: "frame"
          }), TT) {
          const kT = KT.get(TT.root);
          AT[tT] = {
            id: kT,
            rotation: TT.rotation
          }, CT.set(cT, kT), vT.set(jT, {
            name: jT,
            texture: cT,
            kind: "rotation"
          })
        } else CT.set(cT, tT + 1)
      }
      for (const jT of CT.keys()) vT.delete(jT);
      for (const [jT, tT] of cT) {
        const TT = CT.get(tT);
        void 0 === TT || CT.has(jT) || (CT.set(jT, TT), vT.delete(jT))
      }
      return {
        named: [...CT].sort(((TT, kT) => {
          let [cT] = TT, [lT] = kT;
          return cT < lT ? -1 : cT > lT ? 1 : 0
        })).map((TT => {
          let [kT, cT] = TT;
          return {
            name: kT,
            id: cT
          }
        })),
        aliases: [...vT.values()],
        layers: AT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);