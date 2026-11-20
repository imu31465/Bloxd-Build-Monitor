export const id = 130;
export const ids = [130, 131];
export const modules = {
  6482: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq.h,
      c: () => lq,
      e: () => Yq.o
    });
    var Yq = gq(6458);
    const lq = [!1, !0].flatMap((qq => ["terrain", "liquid", "model"].map((Eq => ({
      strict: qq,
      program: Eq
    })))))
  },
  39158: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      ShaderPackPage: () => Aq,
      harnessShaderPackMode: () => Wq,
      setHarnessUrlShaderPack: () => Bq,
      shaderPackPage: () => uq
    });
    var Yq = gq(96),
      lq = gq(38),
      Oq = (gq(3328), gq(6482), gq(3324)),
      mq = gq(6535);
    gq(6514);
    const xq = {
      status: "none"
    };
    class Aq {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Oq.f)(Yq.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), cq().then((qq => {
            qq && lq.i.removeItem(Oq.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Oq.d)(Yq.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const qq = await this.load();
        return "active" === qq.status ? qq.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((qq => (console.error("Failed to load the shader pack", qq), xq))).then((qq => (this.resolved ??= qq, qq))), this.pagePack
      }
      hasNone() {
        var qq;
        return "none" === (null === (qq = this.resolved) || void 0 === qq ? void 0 : qq.status)
      }
      block(qq) {
        this.resolved = {
          status: "blocked",
          messageKey: qq,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([gq.e(75), gq.e(132), gq.e(135)]).then((() => gq(41501))).then((qq => (qq.prefetchCompiler(), qq))), this.compiling
      }
      async readStored() {
        const qq = await cq();
        return qq && this.compiler().then((qq => qq.reconcileHint())).catch((qq => {
          console.error("Failed to correct the shader pack hint", qq)
        })), qq
      }
      async read() {
        const qq = await this.preload();
        return qq ? (await this.compiler()).compilePagePack(qq) : xq
      }
    }
    async function cq() {
      if (!(0, Oq.h)(Yq.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const qq = await (0, mq.d)(!0);
        return qq || lq.i.setItem(Oq.c, !1), qq
      } catch (qq) {
        return console.error("Failed to read the stored shader pack", qq), lq.i.removeItem(Oq.c), null
      }
    }
    const uq = new Aq;

    function Bq(qq, Eq) {}

    function Wq() {
      return null
    }
  },
  6535: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(38);
    const lq = "shaderPack";
    async function Oq() {
      var qq;
      let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
    }
  },
  6514: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      loadShaderPackTextures: () => mq,
      shaderPackTextures: () => xq
    });
    var Yq = gq(6458);
    let lq = null,
      Oq = null;

    function mq() {
      return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Eq,
          textureNameToIndex: gq,
          textureAnimationData: Oq
        } = qq;
        return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
      })), Oq
    }

    function xq() {
      if (null === lq) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return lq
    }
  },
  6458: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Bq,
      d: () => mq,
      f: () => Oq,
      h: () => Yq,
      j: () => aq,
      k: () => uq,
      o: () => lq,
      s: () => Aq,
      w: () => cq
    });
    const Yq = 5;

    function lq(qq) {
      return qq === Yq
    }
    const Oq = 262144,
      mq = 256,
      xq = 256;

    function Aq(qq) {
      if ("object" !== typeof qq || null === qq || Array.isArray(qq)) return "The pack has no files.";
      const Eq = [];
      for (const [gq, Yq] of Object.entries(qq)) {
        if ("string" !== typeof Yq) return `${gq} isn't text.`;
        Eq.push({
          path: gq,
          source: Yq
        })
      }
      return Eq.sort(((qq, Eq) => uq(qq.path, Eq.path))),
        function(qq) {
          if (0 === qq.length) return "The pack has no .wgsl files.";
          if (qq.length > mq) return `The pack has more than ${mq} .wgsl files.`;
          const Eq = new Set;
          for (const {
              path: gq
            }
            of qq) {
            const qq = Wq(gq);
            if (null !== qq) return qq;
            if (Eq.has(gq)) return `The pack has two files at ${gq}.`;
            Eq.add(gq)
          }
          return Bq(qq) > Oq ? `The pack's .wgsl files are over ${Oq/1024} KB in total.` : null
        }(Eq) ?? Eq
    }

    function cq(qq) {
      const Eq = {};
      for (const gq of qq) Eq[gq.path] = gq.source;
      return Eq
    }

    function uq(qq, Eq) {
      return qq < Eq ? -1 : qq > Eq ? 1 : 0
    }

    function Bq(qq) {
      const Eq = new TextEncoder;
      let gq = 0;
      for (const {
          source: Yq
        }
        of qq) gq += Eq.encode(Yq).byteLength;
      return gq
    }

    function Wq(qq) {
      if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
      if (qq.length > xq) return `A file path is over ${xq} characters.`;
      if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
      return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
    }
    const Nq = /^(.*)\[rot\[([1-4])$/;

    function aq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Yq = new Map;
      Eq.forEach(((qq, Eq) => {
        let {
          numAnimStates: gq,
          animStartIdx: lq
        } = qq;
        for (let Oq = 1; Oq < gq; Oq++) Yq.set(lq + Oq - 1, Eq)
      }));
      const lq = Object.entries(qq),
        Oq = new Map;
      for (const [Vq, dq] of lq) {
        const qq = Nq.exec(Vq);
        "1" === qq?.[2] && Oq.set(qq[1], dq + 1)
      }
      const mq = qq => {
          const Eq = Nq.exec(qq);
          return Eq && Oq.has(Eq[1]) ? {
            root: Eq[1],
            rotation: Number(Eq[2]) - 1
          } : null
        },
        xq = new Set(lq.map((qq => {
          let [Eq] = qq;
          return mq(Eq)?.root ?? Eq
        }))),
        Aq = (qq, gq) => {
          const Yq = qq.replace(/_?0$/, "");
          return (Eq[gq]?.numAnimStates ?? 0) > 1 && !xq.has(Yq) ? Yq : qq
        },
        cq = new Map;
      for (const [Nq, Vq] of lq) cq.set(Vq, Aq(mq(Nq)?.root ?? Nq, Vq));
      const uq = lq.reduce(((qq, Eq) => {
          let [, gq] = Eq;
          return Math.max(qq, gq + 1)
        }), 0),
        Bq = Array.from({
          length: uq
        }, ((qq, Eq) => ({
          id: Eq + 1,
          rotation: 0
        }))),
        Wq = new Map,
        aq = new Map;
      for (const [Nq, Vq] of lq) {
        const qq = mq(Nq),
          Eq = Yq.get(Vq);
        if (void 0 !== Eq) {
          const gq = cq.get(Eq);
          aq.set(Nq, {
            name: Nq,
            texture: gq,
            kind: "frame"
          }), qq && !aq.has(qq.root) && aq.set(qq.root, {
            name: qq.root,
            texture: gq,
            kind: "frame"
          });
          continue
        }
        const gq = cq.get(Vq),
          lq = qq?.root ?? Nq;
        if (gq !== lq && aq.set(lq, {
            name: lq,
            texture: gq,
            kind: "frame"
          }), qq) {
          const Eq = Oq.get(qq.root);
          Bq[Vq] = {
            id: Eq,
            rotation: qq.rotation
          }, Wq.set(gq, Eq), aq.set(Nq, {
            name: Nq,
            texture: gq,
            kind: "rotation"
          })
        } else Wq.set(gq, Vq + 1)
      }
      for (const Nq of Wq.keys()) aq.delete(Nq);
      for (const [Nq, Vq] of gq) {
        const qq = Wq.get(Vq);
        void 0 === qq || Wq.has(Nq) || (Wq.set(Nq, qq), aq.delete(Nq))
      }
      return {
        named: [...Wq].sort(((qq, Eq) => {
          let [gq] = qq, [Yq] = Eq;
          return gq < Yq ? -1 : gq > Yq ? 1 : 0
        })).map((qq => {
          let [Eq, gq] = qq;
          return {
            name: Eq,
            id: gq
          }
        })),
        aliases: [...aq.values()],
        layers: Bq
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);