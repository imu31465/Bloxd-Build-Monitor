export const id = 138;
export const ids = [138, 139, 159];
export const modules = {
  6080: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.f,
      g: () => tR,
      i: () => yR.o
    });
    var yR = GR(6084);
    const tR = [!1, !0].flatMap((RR => ["terrain", "liquid", "model"].map((JR => ({
      strict: RR,
      program: JR
    })))))
  },
  40495: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ShaderPackPage: () => iR,
      harnessShaderPackMode: () => wR,
      setHarnessUrlShaderPack: () => KR,
      shaderPackPage: () => VR
    });
    var yR = GR(103),
      tR = GR(46),
      uR = (GR(4781), GR(6080), GR(4776)),
      ZR = GR(7802);
    GR(7773);
    const qR = {
      status: "none"
    };
    class iR {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, uR.l)(yR.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), fR().then((RR => {
            RR && tR.i.removeItem(uR.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, uR.h)(yR.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const RR = await this.load();
        return "active" === RR.status ? RR.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((RR => (console.error("Failed to load the shader pack", RR), qR))).then((RR => (this.resolved ??= RR, RR))), this.pagePack
      }
      hasNone() {
        var RR;
        return "none" === (null === (RR = this.resolved) || void 0 === RR ? void 0 : RR.status)
      }
      block(RR) {
        this.resolved = {
          status: "blocked",
          messageKey: RR,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([GR.e(91), GR.e(157), GR.e(163)]).then((() => GR(53760))).then((RR => (RR.prefetchCompiler(), RR))), this.compiling
      }
      async readStored() {
        const RR = await fR();
        return RR && this.compiler().then((RR => RR.reconcileHint())).catch((RR => {
          console.error("Failed to correct the shader pack hint", RR)
        })), RR
      }
      async read() {
        const RR = await this.preload();
        return RR ? (await this.compiler()).compilePagePack(RR) : qR
      }
    }
    async function fR() {
      if (!(0, uR.o)(yR.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const RR = await (0, ZR.d)(!0);
        return RR || tR.i.setItem(uR.e, !1), RR
      } catch (RR) {
        return console.error("Failed to read the stored shader pack", RR), tR.i.removeItem(uR.e), null
      }
    }
    const VR = new iR;

    function KR(RR, JR) {}

    function wR() {
      return null
    }
  },
  7802: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      d: () => uR
    });
    var yR = GR(46);
    const tR = "shaderPack";
    async function uR() {
      var RR;
      let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (RR = await yR.g.getItem(tR, JR)) && void 0 !== RR ? RR : null
    }
  },
  7773: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      loadShaderPackTextures: () => ZR,
      shaderPackTextures: () => qR
    });
    var yR = GR(6084);
    let tR = null,
      uR = null;

    function ZR() {
      return uR ??= Promise.all([GR.e(85), GR.e(126)]).then((() => GR(42031))).then((RR => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: JR,
          textureNameToIndex: GR,
          textureAnimationData: uR
        } = RR;
        return tR ??= (0, yR.j)(GR, uR, JR), tR
      })), uR
    }

    function qR() {
      if (null === tR) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return tR
    }
  },
  6084: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      e: () => ZR,
      f: () => yR,
      j: () => aR,
      l: () => KR,
      o: () => tR,
      r: () => uR,
      t: () => fR,
      x: () => VR,
      z: () => wR
    });
    const yR = 5;

    function tR(RR) {
      return RR === yR
    }

    function uR(RR) {
      return [...RR.features]
    }
    const ZR = 262144,
      qR = 256,
      iR = 256;

    function fR(RR) {
      if ("object" !== typeof RR || null === RR || Array.isArray(RR)) return "The pack has no files.";
      const JR = [];
      for (const [GR, yR] of Object.entries(RR)) {
        if ("string" !== typeof yR) return `${GR} isn't text.`;
        JR.push({
          path: GR,
          source: yR
        })
      }
      return JR.sort(((RR, JR) => KR(RR.path, JR.path))),
        function(RR) {
          if (0 === RR.length) return "The pack has no .wgsl files.";
          if (RR.length > qR) return `The pack has more than ${qR} .wgsl files.`;
          const JR = new Set;
          for (const {
              path: GR
            }
            of RR) {
            const RR = rR(GR);
            if (null !== RR) return RR;
            if (JR.has(GR)) return `The pack has two files at ${GR}.`;
            JR.add(GR)
          }
          return wR(RR) > ZR ? `The pack's .wgsl files are over ${ZR/1024} KB in total.` : null
        }(JR) ?? JR
    }

    function VR(RR) {
      const JR = {};
      for (const GR of RR) JR[GR.path] = GR.source;
      return JR
    }

    function KR(RR, JR) {
      return RR < JR ? -1 : RR > JR ? 1 : 0
    }

    function wR(RR) {
      const JR = new TextEncoder;
      let GR = 0;
      for (const {
          source: yR
        }
        of RR) GR += JR.encode(yR).byteLength;
      return GR
    }

    function rR(RR) {
      if (!RR.toLowerCase().endsWith(".wgsl")) return `${RR} isn't a .wgsl file.`;
      if (RR.length > iR) return `A file path is over ${iR} characters.`;
      if (RR.includes("\\") || /[\u0000-\u001f]/.test(RR)) return `${RR} isn't a valid file path.`;
      return RR.split("/").some((RR => "" === RR || "." === RR || ".." === RR)) ? `${RR} isn't a valid file path.` : null
    }
    const eR = /^(.*)\[rot\[([1-4])$/;

    function aR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const yR = new Map;
      JR.forEach(((RR, JR) => {
        let {
          numAnimStates: GR,
          animStartIdx: tR
        } = RR;
        for (let uR = 1; uR < GR; uR++) yR.set(tR + uR - 1, JR)
      }));
      const tR = Object.entries(RR),
        uR = new Map;
      for (const [aR, LR] of tR) {
        const RR = eR.exec(aR);
        "1" === RR?.[2] && uR.set(RR[1], LR + 1)
      }
      const ZR = RR => {
          const JR = eR.exec(RR);
          return JR && uR.has(JR[1]) ? {
            root: JR[1],
            rotation: Number(JR[2]) - 1
          } : null
        },
        qR = new Set(tR.map((RR => {
          let [JR] = RR;
          return ZR(JR)?.root ?? JR
        }))),
        iR = (RR, GR) => {
          const yR = RR.replace(/_?0$/, "");
          return (JR[GR]?.numAnimStates ?? 0) > 1 && !qR.has(yR) ? yR : RR
        },
        fR = new Map;
      for (const [eR, aR] of tR) fR.set(aR, iR(ZR(eR)?.root ?? eR, aR));
      const VR = tR.reduce(((RR, JR) => {
          let [, GR] = JR;
          return Math.max(RR, GR + 1)
        }), 0),
        KR = Array.from({
          length: VR
        }, ((RR, JR) => ({
          id: JR + 1,
          rotation: 0
        }))),
        wR = new Map,
        rR = new Map;
      for (const [eR, aR] of tR) {
        const RR = ZR(eR),
          JR = yR.get(aR);
        if (void 0 !== JR) {
          const GR = fR.get(JR);
          rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "frame"
          }), RR && !rR.has(RR.root) && rR.set(RR.root, {
            name: RR.root,
            texture: GR,
            kind: "frame"
          });
          continue
        }
        const GR = fR.get(aR),
          tR = RR?.root ?? eR;
        if (GR !== tR && rR.set(tR, {
            name: tR,
            texture: GR,
            kind: "frame"
          }), RR) {
          const JR = uR.get(RR.root);
          KR[aR] = {
            id: JR,
            rotation: RR.rotation
          }, wR.set(GR, JR), rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "rotation"
          })
        } else wR.set(GR, aR + 1)
      }
      for (const eR of wR.keys()) rR.delete(eR);
      for (const [eR, aR] of GR) {
        const RR = wR.get(aR);
        void 0 === RR || wR.has(eR) || (wR.set(eR, RR), rR.delete(eR))
      }
      return {
        named: [...wR].sort(((RR, JR) => {
          let [GR] = RR, [yR] = JR;
          return GR < yR ? -1 : GR > yR ? 1 : 0
        })).map((RR => {
          let [JR, GR] = RR;
          return {
            name: JR,
            id: GR
          }
        })),
        aliases: [...rR.values()],
        layers: KR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);