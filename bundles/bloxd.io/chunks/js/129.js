export const id = 129;
export const ids = [129, 130];
export const modules = {
  6356: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.l,
      e: () => pD,
      f: () => ID.r
    });
    var ID = cD(6343);
    const pD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((CD => ({
      strict: DD,
      program: CD
    })))))
  },
  38527: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ShaderPackPage: () => QD,
      harnessShaderPackMode: () => yD,
      setHarnessUrlShaderPack: () => BD,
      shaderPackPage: () => SD
    });
    var ID = cD(90),
      pD = cD(36),
      iD = (cD(3260), cD(6356), cD(3255)),
      fD = cD(6409);
    cD(6379);
    const bD = {
      status: "none"
    };
    class QD {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, iD.k)(ID.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), wD().then((DD => {
            DD && pD.h.removeItem(iD.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, iD.g)(ID.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const DD = await this.load();
        return "active" === DD.status ? DD.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((DD => (console.error("Failed to load the shader pack", DD), bD))).then((DD => (this.resolved ??= DD, DD))), this.pagePack
      }
      hasNone() {
        var DD;
        return "none" === (null === (DD = this.resolved) || void 0 === DD ? void 0 : DD.status)
      }
      block(DD) {
        this.resolved = {
          status: "blocked",
          messageKey: DD,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([cD.e(74), cD.e(131), cD.e(134)]).then((() => cD(40843))).then((DD => (DD.prefetchCompiler(), DD))), this.compiling
      }
      async readStored() {
        const DD = await wD();
        return DD && this.compiler().then((DD => DD.reconcileHint())).catch((DD => {
          console.error("Failed to correct the shader pack hint", DD)
        })), DD
      }
      async read() {
        const DD = await this.preload();
        return DD ? (await this.compiler()).compilePagePack(DD) : bD
      }
    }
    async function wD() {
      if (!(0, iD.o)(ID.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const DD = await (0, fD.d)(!0);
        return DD || pD.h.setItem(iD.e, !1), DD
      } catch (DD) {
        return console.error("Failed to read the stored shader pack", DD), pD.h.removeItem(iD.e), null
      }
    }
    const SD = new QD;

    function BD(DD, CD) {}

    function yD() {
      return null
    }
  },
  6409: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => iD
    });
    var ID = cD(36);
    const pD = "shaderPack";
    async function iD() {
      var DD;
      let CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await ID.f.getItem(pD, CD)) && void 0 !== DD ? DD : null
    }
  },
  6379: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      loadShaderPackTextures: () => fD,
      shaderPackTextures: () => bD
    });
    var ID = cD(6343);
    let pD = null,
      iD = null;

    function fD() {
      return iD ??= Promise.all([cD.e(69), cD.e(198)]).then((() => cD(39608))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: CD,
          textureNameToIndex: cD,
          textureAnimationData: iD
        } = DD;
        return pD ??= (0, ID.m)(cD, iD, CD), pD
      })), iD
    }

    function bD() {
      if (null === pD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return pD
    }
  },
  6343: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => BD,
      d: () => fD,
      h: () => iD,
      l: () => ID,
      m: () => tD,
      n: () => SD,
      r: () => pD,
      s: () => QD,
      w: () => wD
    });
    const ID = 5;

    function pD(DD) {
      return DD === ID
    }
    const iD = 262144,
      fD = 256,
      bD = 256;

    function QD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const CD = [];
      for (const [cD, ID] of Object.entries(DD)) {
        if ("string" !== typeof ID) return `${cD} isn't text.`;
        CD.push({
          path: cD,
          source: ID
        })
      }
      return CD.sort(((DD, CD) => SD(DD.path, CD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > fD) return `The pack has more than ${fD} .wgsl files.`;
          const CD = new Set;
          for (const {
              path: cD
            }
            of DD) {
            const DD = yD(cD);
            if (null !== DD) return DD;
            if (CD.has(cD)) return `The pack has two files at ${cD}.`;
            CD.add(cD)
          }
          return BD(DD) > iD ? `The pack's .wgsl files are over ${iD/1024} KB in total.` : null
        }(CD) ?? CD
    }

    function wD(DD) {
      const CD = {};
      for (const cD of DD) CD[cD.path] = cD.source;
      return CD
    }

    function SD(DD, CD) {
      return DD < CD ? -1 : DD > CD ? 1 : 0
    }

    function BD(DD) {
      const CD = new TextEncoder;
      let cD = 0;
      for (const {
          source: ID
        }
        of DD) cD += CD.encode(ID).byteLength;
      return cD
    }

    function yD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > bD) return `A file path is over ${bD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const MD = /^(.*)\[rot\[([1-4])$/;

    function tD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ID = new Map;
      CD.forEach(((DD, CD) => {
        let {
          numAnimStates: cD,
          animStartIdx: pD
        } = DD;
        for (let iD = 1; iD < cD; iD++) ID.set(pD + iD - 1, CD)
      }));
      const pD = Object.entries(DD),
        iD = new Map;
      for (const [ZD, oD] of pD) {
        const DD = MD.exec(ZD);
        "1" === DD?.[2] && iD.set(DD[1], oD + 1)
      }
      const fD = DD => {
          const CD = MD.exec(DD);
          return CD && iD.has(CD[1]) ? {
            root: CD[1],
            rotation: Number(CD[2]) - 1
          } : null
        },
        bD = new Set(pD.map((DD => {
          let [CD] = DD;
          return fD(CD)?.root ?? CD
        }))),
        QD = (DD, cD) => {
          const ID = DD.replace(/_?0$/, "");
          return (CD[cD]?.numAnimStates ?? 0) > 1 && !bD.has(ID) ? ID : DD
        },
        wD = new Map;
      for (const [MD, ZD] of pD) wD.set(ZD, QD(fD(MD)?.root ?? MD, ZD));
      const SD = pD.reduce(((DD, CD) => {
          let [, cD] = CD;
          return Math.max(DD, cD + 1)
        }), 0),
        BD = Array.from({
          length: SD
        }, ((DD, CD) => ({
          id: CD + 1,
          rotation: 0
        }))),
        yD = new Map,
        tD = new Map;
      for (const [MD, ZD] of pD) {
        const DD = fD(MD),
          CD = ID.get(ZD);
        if (void 0 !== CD) {
          const cD = wD.get(CD);
          tD.set(MD, {
            name: MD,
            texture: cD,
            kind: "frame"
          }), DD && !tD.has(DD.root) && tD.set(DD.root, {
            name: DD.root,
            texture: cD,
            kind: "frame"
          });
          continue
        }
        const cD = wD.get(ZD),
          pD = DD?.root ?? MD;
        if (cD !== pD && tD.set(pD, {
            name: pD,
            texture: cD,
            kind: "frame"
          }), DD) {
          const CD = iD.get(DD.root);
          BD[ZD] = {
            id: CD,
            rotation: DD.rotation
          }, yD.set(cD, CD), tD.set(MD, {
            name: MD,
            texture: cD,
            kind: "rotation"
          })
        } else yD.set(cD, ZD + 1)
      }
      for (const MD of yD.keys()) tD.delete(MD);
      for (const [MD, ZD] of cD) {
        const DD = yD.get(ZD);
        void 0 === DD || yD.has(MD) || (yD.set(MD, DD), tD.delete(MD))
      }
      return {
        named: [...yD].sort(((DD, CD) => {
          let [cD] = DD, [ID] = CD;
          return cD < ID ? -1 : cD > ID ? 1 : 0
        })).map((DD => {
          let [CD, cD] = DD;
          return {
            name: CD,
            id: cD
          }
        })),
        aliases: [...tD.values()],
        layers: BD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);