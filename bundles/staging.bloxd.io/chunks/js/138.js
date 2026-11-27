export const id = 138;
export const ids = [138, 139, 159];
export const modules = {
  6005: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.j,
      e: () => Wr,
      i: () => Zr.r
    });
    var Zr = Qr(6007);
    const Wr = [!1, !0].flatMap((rr => ["terrain", "liquid", "model"].map((Sr => ({
      strict: rr,
      program: Sr
    })))))
  },
  40792: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ShaderPackPage: () => fr,
      harnessShaderPackMode: () => mr,
      setHarnessUrlShaderPack: () => xr,
      shaderPackPage: () => pr
    });
    var Zr = Qr(109),
      Wr = Qr(43),
      ar = (Qr(4699), Qr(6005), Qr(4690)),
      jr = Qr(7617);
    Qr(7588);
    const Ir = {
      status: "none"
    };
    class fr {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, ar.g)(Zr.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Er().then((rr => {
            rr && Wr.j.removeItem(ar.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, ar.d)(Zr.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const rr = await this.load();
        return "active" === rr.status ? rr.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((rr => (console.error("Failed to load the shader pack", rr), Ir))).then((rr => (this.resolved ??= rr, rr))), this.pagePack
      }
      hasNone() {
        var rr;
        return "none" === (null === (rr = this.resolved) || void 0 === rr ? void 0 : rr.status)
      }
      block(rr) {
        this.resolved = {
          status: "blocked",
          messageKey: rr,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([Qr.e(91), Qr.e(157), Qr.e(163)]).then((() => Qr(54275))).then((rr => (rr.prefetchCompiler(), rr))), this.compiling
      }
      async readStored() {
        const rr = await Er();
        return rr && this.compiler().then((rr => rr.reconcileHint())).catch((rr => {
          console.error("Failed to correct the shader pack hint", rr)
        })), rr
      }
      async read() {
        const rr = await this.preload();
        return rr ? (await this.compiler()).compilePagePack(rr) : Ir
      }
    }
    async function Er() {
      if (!(0, ar.k)(Zr.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const rr = await (0, jr.e)(!0);
        return rr || Wr.j.setItem(ar.b, !1), rr
      } catch (rr) {
        return console.error("Failed to read the stored shader pack", rr), Wr.j.removeItem(ar.b), null
      }
    }
    const pr = new fr;

    function xr(rr, Sr) {}

    function mr() {
      return null
    }
  },
  7617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      e: () => ar
    });
    var Zr = Qr(43);
    const Wr = "shaderPack";
    async function ar() {
      var rr;
      let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (rr = await Zr.h.getItem(Wr, Sr)) && void 0 !== rr ? rr : null
    }
  },
  7588: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      loadShaderPackTextures: () => jr,
      shaderPackTextures: () => Ir
    });
    var Zr = Qr(6007);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Promise.all([Qr.e(85), Qr.e(126)]).then((() => Qr(42330))).then((rr => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Sr,
          textureNameToIndex: Qr,
          textureAnimationData: ar
        } = rr;
        return Wr ??= (0, Zr.k)(Qr, ar, Sr), Wr
      })), ar
    }

    function Ir() {
      if (null === Wr) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wr
    }
  },
  6007: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      g: () => jr,
      j: () => Zr,
      k: () => tr,
      n: () => xr,
      r: () => Wr,
      s: () => ar,
      v: () => Er,
      w: () => pr,
      z: () => mr
    });
    const Zr = 5;

    function Wr(rr) {
      return rr === Zr
    }

    function ar(rr) {
      return [...rr.features]
    }
    const jr = 262144,
      Ir = 256,
      fr = 256;

    function Er(rr) {
      if ("object" !== typeof rr || null === rr || Array.isArray(rr)) return "The pack has no files.";
      const Sr = [];
      for (const [Qr, Zr] of Object.entries(rr)) {
        if ("string" !== typeof Zr) return `${Qr} isn't text.`;
        Sr.push({
          path: Qr,
          source: Zr
        })
      }
      return Sr.sort(((rr, Sr) => xr(rr.path, Sr.path))),
        function(rr) {
          if (0 === rr.length) return "The pack has no .wgsl files.";
          if (rr.length > Ir) return `The pack has more than ${Ir} .wgsl files.`;
          const Sr = new Set;
          for (const {
              path: Qr
            }
            of rr) {
            const rr = Nr(Qr);
            if (null !== rr) return rr;
            if (Sr.has(Qr)) return `The pack has two files at ${Qr}.`;
            Sr.add(Qr)
          }
          return mr(rr) > jr ? `The pack's .wgsl files are over ${jr/1024} KB in total.` : null
        }(Sr) ?? Sr
    }

    function pr(rr) {
      const Sr = {};
      for (const Qr of rr) Sr[Qr.path] = Qr.source;
      return Sr
    }

    function xr(rr, Sr) {
      return rr < Sr ? -1 : rr > Sr ? 1 : 0
    }

    function mr(rr) {
      const Sr = new TextEncoder;
      let Qr = 0;
      for (const {
          source: Zr
        }
        of rr) Qr += Sr.encode(Zr).byteLength;
      return Qr
    }

    function Nr(rr) {
      if (!rr.toLowerCase().endsWith(".wgsl")) return `${rr} isn't a .wgsl file.`;
      if (rr.length > fr) return `A file path is over ${fr} characters.`;
      if (rr.includes("\\") || /[\u0000-\u001f]/.test(rr)) return `${rr} isn't a valid file path.`;
      return rr.split("/").some((rr => "" === rr || "." === rr || ".." === rr)) ? `${rr} isn't a valid file path.` : null
    }
    const Ur = /^(.*)\[rot\[([1-4])$/;

    function tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Zr = new Map;
      Sr.forEach(((rr, Sr) => {
        let {
          numAnimStates: Qr,
          animStartIdx: Wr
        } = rr;
        for (let ar = 1; ar < Qr; ar++) Zr.set(Wr + ar - 1, Sr)
      }));
      const Wr = Object.entries(rr),
        ar = new Map;
      for (const [tr, hr] of Wr) {
        const rr = Ur.exec(tr);
        "1" === rr?.[2] && ar.set(rr[1], hr + 1)
      }
      const jr = rr => {
          const Sr = Ur.exec(rr);
          return Sr && ar.has(Sr[1]) ? {
            root: Sr[1],
            rotation: Number(Sr[2]) - 1
          } : null
        },
        Ir = new Set(Wr.map((rr => {
          let [Sr] = rr;
          return jr(Sr)?.root ?? Sr
        }))),
        fr = (rr, Qr) => {
          const Zr = rr.replace(/_?0$/, "");
          return (Sr[Qr]?.numAnimStates ?? 0) > 1 && !Ir.has(Zr) ? Zr : rr
        },
        Er = new Map;
      for (const [Ur, tr] of Wr) Er.set(tr, fr(jr(Ur)?.root ?? Ur, tr));
      const pr = Wr.reduce(((rr, Sr) => {
          let [, Qr] = Sr;
          return Math.max(rr, Qr + 1)
        }), 0),
        xr = Array.from({
          length: pr
        }, ((rr, Sr) => ({
          id: Sr + 1,
          rotation: 0
        }))),
        mr = new Map,
        Nr = new Map;
      for (const [Ur, tr] of Wr) {
        const rr = jr(Ur),
          Sr = Zr.get(tr);
        if (void 0 !== Sr) {
          const Qr = Er.get(Sr);
          Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "frame"
          }), rr && !Nr.has(rr.root) && Nr.set(rr.root, {
            name: rr.root,
            texture: Qr,
            kind: "frame"
          });
          continue
        }
        const Qr = Er.get(tr),
          Wr = rr?.root ?? Ur;
        if (Qr !== Wr && Nr.set(Wr, {
            name: Wr,
            texture: Qr,
            kind: "frame"
          }), rr) {
          const Sr = ar.get(rr.root);
          xr[tr] = {
            id: Sr,
            rotation: rr.rotation
          }, mr.set(Qr, Sr), Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "rotation"
          })
        } else mr.set(Qr, tr + 1)
      }
      for (const Ur of mr.keys()) Nr.delete(Ur);
      for (const [Ur, tr] of Qr) {
        const rr = mr.get(tr);
        void 0 === rr || mr.has(Ur) || (mr.set(Ur, rr), Nr.delete(Ur))
      }
      return {
        named: [...mr].sort(((rr, Sr) => {
          let [Qr] = rr, [Zr] = Sr;
          return Qr < Zr ? -1 : Qr > Zr ? 1 : 0
        })).map((rr => {
          let [Sr, Qr] = rr;
          return {
            name: Sr,
            id: Qr
          }
        })),
        aliases: [...Nr.values()],
        layers: xr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);