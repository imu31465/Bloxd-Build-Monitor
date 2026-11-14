export const id = 118;
export const ids = [118, 119];
export const modules = {
  5570: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc.k,
      h: () => Ic,
      k: () => Vc.q
    });
    var Vc = nc(5561);
    const Ic = [!1, !0].flatMap((cB => ["terrain", "liquid", "model"].map((Bc => ({
      strict: cB,
      program: Bc
    })))))
  },
  37643: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      ShaderPackPage: () => Mc,
      harnessShaderPackMode: () => Tc,
      setHarnessUrlShaderPack: () => Oc,
      shaderPackPage: () => qB
    });
    var Vc = nc(107),
      Ic = nc(51),
      rB = (nc(2590), nc(5570), nc(2585)),
      uc = nc(5626);
    nc(5608);
    const sc = {
      status: "none"
    };
    class Mc {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, rB.f)(Vc.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Pc().then((cB => {
            cB && Ic.h.removeItem(rB.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, rB.d)(Vc.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const cB = await this.load();
        return "active" === cB.status ? cB.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((cB => (console.error("Failed to load the shader pack", cB), sc))).then((cB => (this.resolved ??= cB, cB))), this.pagePack
      }
      hasNone() {
        var cB;
        return "none" === (null === (cB = this.resolved) || void 0 === cB ? void 0 : cB.status)
      }
      block(cB) {
        this.resolved = {
          status: "blocked",
          messageKey: cB,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([nc.e(123), nc.e(120), nc.e(124)]).then((() => nc(39695))).then((cB => (cB.prefetchCompiler(), cB))), this.compiling
      }
      async readStored() {
        const cB = await Pc();
        return cB && this.compiler().then((cB => cB.reconcileHint())).catch((cB => {
          console.error("Failed to correct the shader pack hint", cB)
        })), cB
      }
      async read() {
        const cB = await this.preload();
        return cB ? (await this.compiler()).compilePagePack(cB) : sc
      }
    }
    async function Pc() {
      if (!(0, rB.i)(Vc.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const cB = await (0, uc.e)(!0);
        return cB || Ic.h.setItem(rB.b, !1), cB
      } catch (cB) {
        return console.error("Failed to read the stored shader pack", cB), Ic.h.removeItem(rB.b), null
      }
    }
    const qB = new Mc;

    function Oc(cB, Bc) {}

    function Tc() {
      return null
    }
  },
  5608: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      loadShaderPackTextures: () => uc,
      shaderPackTextures: () => sc
    });
    var Vc = nc(5561);
    let Ic = null,
      rB = null;

    function uc() {
      return rB ??= Promise.all([nc.e(60), nc.e(180)]).then((() => nc(38499))).then((cB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Bc,
          textureNameToIndex: nc,
          textureAnimationData: rB
        } = cB;
        return Ic ??= (0, Vc.l)(nc, rB, Bc), Ic
      })), rB
    }

    function sc() {
      if (null === Ic) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ic
    }
  },
  5561: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      g: () => rB,
      k: () => Vc,
      l: () => mB,
      p: () => qB,
      q: () => Ic,
      r: () => Mc,
      u: () => Pc,
      x: () => Oc
    });
    const Vc = 5;

    function Ic(cB) {
      return cB === Vc
    }
    const rB = 262144,
      uc = 256,
      sc = 256;

    function Mc(cB) {
      if ("object" !== typeof cB || null === cB || Array.isArray(cB)) return "The pack has no files.";
      const Bc = [];
      for (const [nc, Vc] of Object.entries(cB)) {
        if ("string" !== typeof Vc) return `${nc} isn't text.`;
        Bc.push({
          path: nc,
          source: Vc
        })
      }
      return Bc.sort(((cB, Bc) => qB(cB.path, Bc.path))),
        function(cB) {
          if (0 === cB.length) return "The pack has no .wgsl files.";
          if (cB.length > uc) return `The pack has more than ${uc} .wgsl files.`;
          const Bc = new Set;
          for (const {
              path: nc
            }
            of cB) {
            const cB = Tc(nc);
            if (null !== cB) return cB;
            if (Bc.has(nc)) return `The pack has two files at ${nc}.`;
            Bc.add(nc)
          }
          return Oc(cB) > rB ? `The pack's .wgsl files are over ${rB/1024} KB in total.` : null
        }(Bc) ?? Bc
    }

    function Pc(cB) {
      const Bc = {};
      for (const nc of cB) Bc[nc.path] = nc.source;
      return Bc
    }

    function qB(cB, Bc) {
      return cB < Bc ? -1 : cB > Bc ? 1 : 0
    }

    function Oc(cB) {
      const Bc = new TextEncoder;
      let nc = 0;
      for (const {
          source: Vc
        }
        of cB) nc += Bc.encode(Vc).byteLength;
      return nc
    }

    function Tc(cB) {
      if (!cB.toLowerCase().endsWith(".wgsl")) return `${cB} isn't a .wgsl file.`;
      if (cB.length > sc) return `A file path is over ${sc} characters.`;
      if (cB.includes("\\") || /[\u0000-\u001f]/.test(cB)) return `${cB} isn't a valid file path.`;
      return cB.split("/").some((cB => "" === cB || "." === cB || ".." === cB)) ? `${cB} isn't a valid file path.` : null
    }
    const fc = /^(.*)\[rot\[([1-4])$/;

    function mB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Vc = new Map;
      Bc.forEach(((cB, Bc) => {
        let {
          numAnimStates: nc,
          animStartIdx: Ic
        } = cB;
        for (let rB = 1; rB < nc; rB++) Vc.set(Ic + rB - 1, Bc)
      }));
      const Ic = Object.entries(cB),
        rB = new Map;
      for (const [ec, tB] of Ic) {
        const cB = fc.exec(ec);
        "1" === cB?.[2] && rB.set(cB[1], tB + 1)
      }
      const uc = cB => {
          const Bc = fc.exec(cB);
          return Bc && rB.has(Bc[1]) ? {
            root: Bc[1],
            rotation: Number(Bc[2]) - 1
          } : null
        },
        sc = new Set(Ic.map((cB => {
          let [Bc] = cB;
          return uc(Bc)?.root ?? Bc
        }))),
        Mc = (cB, nc) => {
          const Vc = cB.replace(/_?0$/, "");
          return (Bc[nc]?.numAnimStates ?? 0) > 1 && !sc.has(Vc) ? Vc : cB
        },
        Pc = new Map;
      for (const [fc, ec] of Ic) Pc.set(ec, Mc(uc(fc)?.root ?? fc, ec));
      const qB = Ic.reduce(((cB, Bc) => {
          let [, nc] = Bc;
          return Math.max(cB, nc + 1)
        }), 0),
        Oc = Array.from({
          length: qB
        }, ((cB, Bc) => ({
          id: Bc + 1,
          rotation: 0
        }))),
        Tc = new Map,
        mB = new Map;
      for (const [fc, ec] of Ic) {
        const cB = uc(fc),
          Bc = Vc.get(ec);
        if (void 0 !== Bc) {
          const nc = Pc.get(Bc);
          mB.set(fc, {
            name: fc,
            texture: nc,
            kind: "frame"
          }), cB && !mB.has(cB.root) && mB.set(cB.root, {
            name: cB.root,
            texture: nc,
            kind: "frame"
          });
          continue
        }
        const nc = Pc.get(ec),
          Ic = cB?.root ?? fc;
        if (nc !== Ic && mB.set(Ic, {
            name: Ic,
            texture: nc,
            kind: "frame"
          }), cB) {
          const Bc = rB.get(cB.root);
          Oc[ec] = {
            id: Bc,
            rotation: cB.rotation
          }, Tc.set(nc, Bc), mB.set(fc, {
            name: fc,
            texture: nc,
            kind: "rotation"
          })
        } else Tc.set(nc, ec + 1)
      }
      for (const fc of Tc.keys()) mB.delete(fc);
      for (const [fc, ec] of nc) {
        const cB = Tc.get(ec);
        void 0 === cB || Tc.has(fc) || (Tc.set(fc, cB), mB.delete(fc))
      }
      return {
        named: [...Tc].sort(((cB, Bc) => {
          let [nc] = cB, [Vc] = Bc;
          return nc < Vc ? -1 : nc > Vc ? 1 : 0
        })).map((cB => {
          let [Bc, nc] = cB;
          return {
            name: Bc,
            id: nc
          }
        })),
        aliases: [...mB.values()],
        layers: Oc
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);