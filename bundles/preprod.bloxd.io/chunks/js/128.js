export const id = 128;
export const ids = [128, 129, 150];
export const modules = {
  5603: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.j,
      e: () => yU,
      i: () => cU.o
    });
    var cU = zU(5608);
    const yU = [!1, !0].flatMap((UU => ["terrain", "liquid", "model"].map((XU => ({
      strict: UU,
      program: XU
    })))))
  },
  40071: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ShaderPackPage: () => oU,
      harnessShaderPackMode: () => NU,
      setHarnessUrlShaderPack: () => YU,
      shaderPackPage: () => EU
    });
    var cU = zU(97),
      yU = zU(42),
      QU = (zU(3854), zU(5603), zU(3849)),
      AU = zU(7253);
    zU(7219);
    const FU = {
      status: "none"
    };
    class oU {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, QU.h)(cU.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), DU().then((UU => {
            UU && yU.k.removeItem(QU.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, QU.d)(cU.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const UU = await this.load();
        return "active" === UU.status ? UU.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((UU => (console.error("Failed to load the shader pack", UU), FU))).then((UU => (this.resolved ??= UU, UU))), this.pagePack
      }
      hasNone() {
        var UU;
        return "none" === (null === (UU = this.resolved) || void 0 === UU ? void 0 : UU.status)
      }
      block(UU) {
        this.resolved = {
          status: "blocked",
          messageKey: UU,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([zU.e(89), zU.e(147), zU.e(154)]).then((() => zU(44434))).then((UU => (UU.prefetchCompiler(), UU))), this.compiling
      }
      async readStored() {
        const UU = await DU();
        return UU && this.compiler().then((UU => UU.reconcileHint())).catch((UU => {
          console.error("Failed to correct the shader pack hint", UU)
        })), UU
      }
      async read() {
        const UU = await this.preload();
        return UU ? (await this.compiler()).compilePagePack(UU) : FU
      }
    }
    async function DU() {
      if (!(0, QU.k)(cU.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const UU = await (0, AU.f)(!0);
        return UU || yU.k.setItem(QU.b, !1), UU
      } catch (UU) {
        return console.error("Failed to read the stored shader pack", UU), yU.k.removeItem(QU.b), null
      }
    }
    const EU = new oU;

    function YU(UU, XU) {}

    function NU() {
      return null
    }
  },
  7253: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => QU
    });
    var cU = zU(42);
    const yU = "shaderPack";
    async function QU() {
      var UU;
      let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
    }
  },
  7219: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadShaderPackTextures: () => AU,
      shaderPackTextures: () => FU
    });
    var cU = zU(5608);
    let yU = null,
      QU = null;

    function AU() {
      return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: XU,
          textureNameToIndex: zU,
          textureAnimationData: QU
        } = UU;
        return yU ??= (0, cU.k)(zU, QU, XU), yU
      })), QU
    }

    function FU() {
      if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yU
    }
  },
  5608: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => AU,
      j: () => cU,
      k: () => aU,
      m: () => YU,
      o: () => yU,
      q: () => QU,
      r: () => DU,
      u: () => EU,
      y: () => NU
    });
    const cU = 5;

    function yU(UU) {
      return UU === cU
    }

    function QU(UU) {
      return [...UU.features]
    }
    const AU = 262144,
      FU = 256,
      oU = 256;

    function DU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
      const XU = [];
      for (const [zU, cU] of Object.entries(UU)) {
        if ("string" !== typeof cU) return `${zU} isn't text.`;
        XU.push({
          path: zU,
          source: cU
        })
      }
      return XU.sort(((UU, XU) => YU(UU.path, XU.path))),
        function(UU) {
          if (0 === UU.length) return "The pack has no .wgsl files.";
          if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
          const XU = new Set;
          for (const {
              path: zU
            }
            of UU) {
            const UU = IU(zU);
            if (null !== UU) return UU;
            if (XU.has(zU)) return `The pack has two files at ${zU}.`;
            XU.add(zU)
          }
          return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
        }(XU) ?? XU
    }

    function EU(UU) {
      const XU = {};
      for (const zU of UU) XU[zU.path] = zU.source;
      return XU
    }

    function YU(UU, XU) {
      return UU < XU ? -1 : UU > XU ? 1 : 0
    }

    function NU(UU) {
      const XU = new TextEncoder;
      let zU = 0;
      for (const {
          source: cU
        }
        of UU) zU += XU.encode(cU).byteLength;
      return zU
    }

    function IU(UU) {
      if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
      if (UU.length > oU) return `A file path is over ${oU} characters.`;
      if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
      return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
    }
    const pU = /^(.*)\[rot\[([1-4])$/;

    function aU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const cU = new Map;
      XU.forEach(((UU, XU) => {
        let {
          numAnimStates: zU,
          animStartIdx: yU
        } = UU;
        for (let QU = 1; QU < zU; QU++) cU.set(yU + QU - 1, XU)
      }));
      const yU = Object.entries(UU),
        QU = new Map;
      for (const [aU, tU] of yU) {
        const UU = pU.exec(aU);
        "1" === UU?.[2] && QU.set(UU[1], tU + 1)
      }
      const AU = UU => {
          const XU = pU.exec(UU);
          return XU && QU.has(XU[1]) ? {
            root: XU[1],
            rotation: Number(XU[2]) - 1
          } : null
        },
        FU = new Set(yU.map((UU => {
          let [XU] = UU;
          return AU(XU)?.root ?? XU
        }))),
        oU = (UU, zU) => {
          const cU = UU.replace(/_?0$/, "");
          return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
        },
        DU = new Map;
      for (const [pU, aU] of yU) DU.set(aU, oU(AU(pU)?.root ?? pU, aU));
      const EU = yU.reduce(((UU, XU) => {
          let [, zU] = XU;
          return Math.max(UU, zU + 1)
        }), 0),
        YU = Array.from({
          length: EU
        }, ((UU, XU) => ({
          id: XU + 1,
          rotation: 0
        }))),
        NU = new Map,
        IU = new Map;
      for (const [pU, aU] of yU) {
        const UU = AU(pU),
          XU = cU.get(aU);
        if (void 0 !== XU) {
          const zU = DU.get(XU);
          IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "frame"
          }), UU && !IU.has(UU.root) && IU.set(UU.root, {
            name: UU.root,
            texture: zU,
            kind: "frame"
          });
          continue
        }
        const zU = DU.get(aU),
          yU = UU?.root ?? pU;
        if (zU !== yU && IU.set(yU, {
            name: yU,
            texture: zU,
            kind: "frame"
          }), UU) {
          const XU = QU.get(UU.root);
          YU[aU] = {
            id: XU,
            rotation: UU.rotation
          }, NU.set(zU, XU), IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "rotation"
          })
        } else NU.set(zU, aU + 1)
      }
      for (const pU of NU.keys()) IU.delete(pU);
      for (const [pU, aU] of zU) {
        const UU = NU.get(aU);
        void 0 === UU || NU.has(pU) || (NU.set(pU, UU), IU.delete(pU))
      }
      return {
        named: [...NU].sort(((UU, XU) => {
          let [zU] = UU, [cU] = XU;
          return zU < cU ? -1 : zU > cU ? 1 : 0
        })).map((UU => {
          let [XU, zU] = UU;
          return {
            name: XU,
            id: zU
          }
        })),
        aliases: [...IU.values()],
        layers: YU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);