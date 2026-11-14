export const id = 115;
export const ids = [115, 116];
export const modules = {
  5615: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW.f,
      g: () => CW,
      j: () => wW.l
    });
    var wW = MW(5596);
    const CW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((RW => ({
      strict: WW,
      program: RW
    })))))
  },
  37186: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ShaderPackPage: () => yR,
      harnessShaderPackMode: () => tR,
      setHarnessUrlShaderPack: () => BW,
      shaderPackPage: () => eW
    });
    var wW = MW(116),
      CW = MW(50),
      zR = (MW(2525), MW(5615), MW(2518)),
      AW = MW(5661);
    MW(5638);
    const bR = {
      status: "none"
    };
    class yR {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, zR.h)(wW.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), NW().then((WW => {
            WW && CW.g.removeItem(zR.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, zR.f)(wW.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const WW = await this.load();
        return "active" === WW.status ? WW.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((WW => (console.error("Failed to load the shader pack", WW), bR))).then((WW => (this.resolved ??= WW, WW))), this.pagePack
      }
      hasNone() {
        var WW;
        return "none" === (null === (WW = this.resolved) || void 0 === WW ? void 0 : WW.status)
      }
      block(WW) {
        this.resolved = {
          status: "blocked",
          messageKey: WW,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([MW.e(120), MW.e(117), MW.e(121)]).then((() => MW(39212))).then((WW => (WW.prefetchCompiler(), WW))), this.compiling
      }
      async readStored() {
        const WW = await NW();
        return WW && this.compiler().then((WW => WW.reconcileHint())).catch((WW => {
          console.error("Failed to correct the shader pack hint", WW)
        })), WW
      }
      async read() {
        const WW = await this.preload();
        return WW ? (await this.compiler()).compilePagePack(WW) : bR
      }
    }
    async function NW() {
      if (!(0, zR.k)(wW.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const WW = await (0, AW.h)(!0);
        return WW || CW.g.setItem(zR.c, !1), WW
      } catch (WW) {
        return console.error("Failed to read the stored shader pack", WW), CW.g.removeItem(zR.c), null
      }
    }
    const eW = new yR;

    function BW(WW, RW) {}

    function tR() {
      return null
    }
  },
  5638: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      loadShaderPackTextures: () => AW,
      shaderPackTextures: () => bR
    });
    var wW = MW(5596);
    let CW = null,
      zR = null;

    function AW() {
      return zR ??= Promise.all([MW.e(59), MW.e(177)]).then((() => MW(38083))).then((WW => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: RW,
          textureNameToIndex: MW,
          textureAnimationData: zR
        } = WW;
        return CW ??= (0, wW.g)(MW, zR, RW), CW
      })), zR
    }

    function bR() {
      if (null === CW) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return CW
    }
  },
  5596: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      e: () => zR,
      f: () => wW,
      g: () => gR,
      h: () => eW,
      l: () => CW,
      n: () => yR,
      r: () => NW,
      v: () => BW
    });
    const wW = 5;

    function CW(WW) {
      return WW === wW
    }
    const zR = 262144,
      AW = 256,
      bR = 256;

    function yR(WW) {
      if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
      const RW = [];
      for (const [MW, wW] of Object.entries(WW)) {
        if ("string" !== typeof wW) return `${MW} isn't text.`;
        RW.push({
          path: MW,
          source: wW
        })
      }
      return RW.sort(((WW, RW) => eW(WW.path, RW.path))),
        function(WW) {
          if (0 === WW.length) return "The pack has no .wgsl files.";
          if (WW.length > AW) return `The pack has more than ${AW} .wgsl files.`;
          const RW = new Set;
          for (const {
              path: MW
            }
            of WW) {
            const WW = tR(MW);
            if (null !== WW) return WW;
            if (RW.has(MW)) return `The pack has two files at ${MW}.`;
            RW.add(MW)
          }
          return BW(WW) > zR ? `The pack's .wgsl files are over ${zR/1024} KB in total.` : null
        }(RW) ?? RW
    }

    function NW(WW) {
      const RW = {};
      for (const MW of WW) RW[MW.path] = MW.source;
      return RW
    }

    function eW(WW, RW) {
      return WW < RW ? -1 : WW > RW ? 1 : 0
    }

    function BW(WW) {
      const RW = new TextEncoder;
      let MW = 0;
      for (const {
          source: wW
        }
        of WW) MW += RW.encode(wW).byteLength;
      return MW
    }

    function tR(WW) {
      if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
      if (WW.length > bR) return `A file path is over ${bR} characters.`;
      if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
      return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
    }
    const TW = /^(.*)\[rot\[([1-4])$/;

    function gR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wW = new Map;
      RW.forEach(((WW, RW) => {
        let {
          numAnimStates: MW,
          animStartIdx: CW
        } = WW;
        for (let zR = 1; zR < MW; zR++) wW.set(CW + zR - 1, RW)
      }));
      const CW = Object.entries(WW),
        zR = new Map;
      for (const [iR, YW] of CW) {
        const WW = TW.exec(iR);
        "1" === WW?.[2] && zR.set(WW[1], YW + 1)
      }
      const AW = WW => {
          const RW = TW.exec(WW);
          return RW && zR.has(RW[1]) ? {
            root: RW[1],
            rotation: Number(RW[2]) - 1
          } : null
        },
        bR = new Set(CW.map((WW => {
          let [RW] = WW;
          return AW(RW)?.root ?? RW
        }))),
        yR = (WW, MW) => {
          const wW = WW.replace(/_?0$/, "");
          return (RW[MW]?.numAnimStates ?? 0) > 1 && !bR.has(wW) ? wW : WW
        },
        NW = new Map;
      for (const [TW, iR] of CW) NW.set(iR, yR(AW(TW)?.root ?? TW, iR));
      const eW = CW.reduce(((WW, RW) => {
          let [, MW] = RW;
          return Math.max(WW, MW + 1)
        }), 0),
        BW = Array.from({
          length: eW
        }, ((WW, RW) => ({
          id: RW + 1,
          rotation: 0
        }))),
        tR = new Map,
        gR = new Map;
      for (const [TW, iR] of CW) {
        const WW = AW(TW),
          RW = wW.get(iR);
        if (void 0 !== RW) {
          const MW = NW.get(RW);
          gR.set(TW, {
            name: TW,
            texture: MW,
            kind: "frame"
          }), WW && !gR.has(WW.root) && gR.set(WW.root, {
            name: WW.root,
            texture: MW,
            kind: "frame"
          });
          continue
        }
        const MW = NW.get(iR),
          CW = WW?.root ?? TW;
        if (MW !== CW && gR.set(CW, {
            name: CW,
            texture: MW,
            kind: "frame"
          }), WW) {
          const RW = zR.get(WW.root);
          BW[iR] = {
            id: RW,
            rotation: WW.rotation
          }, tR.set(MW, RW), gR.set(TW, {
            name: TW,
            texture: MW,
            kind: "rotation"
          })
        } else tR.set(MW, iR + 1)
      }
      for (const TW of tR.keys()) gR.delete(TW);
      for (const [TW, iR] of MW) {
        const WW = tR.get(iR);
        void 0 === WW || tR.has(TW) || (tR.set(TW, WW), gR.delete(TW))
      }
      return {
        named: [...tR].sort(((WW, RW) => {
          let [MW] = WW, [wW] = RW;
          return MW < wW ? -1 : MW > wW ? 1 : 0
        })).map((WW => {
          let [RW, MW] = WW;
          return {
            name: RW,
            id: MW
          }
        })),
        aliases: [...gR.values()],
        layers: BW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);