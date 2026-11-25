export const id = 129;
export const ids = [129, 130, 151];
export const modules = {
  5435: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.g,
      g: () => SM,
      k: () => OM.o
    });
    var OM = iM(5442);
    const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
      strict: MM,
      program: rM
    })))))
  },
  40300: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ShaderPackPage: () => nM,
      harnessShaderPackMode: () => mM,
      setHarnessUrlShaderPack: () => LM,
      shaderPackPage: () => zM
    });
    var OM = iM(83),
      SM = iM(30),
      jM = (iM(3860), iM(5435), iM(3855)),
      aM = iM(7148);
    iM(7120);
    const PM = {
      status: "none"
    };
    class nM {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, jM.f)(OM.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), QM().then((MM => {
            MM && SM.g.removeItem(jM.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, jM.d)(OM.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const MM = await this.load();
        return "active" === MM.status ? MM.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((MM => (console.error("Failed to load the shader pack", MM), PM))).then((MM => (this.resolved ??= MM, MM))), this.pagePack
      }
      hasNone() {
        var MM;
        return "none" === (null === (MM = this.resolved) || void 0 === MM ? void 0 : MM.status)
      }
      block(MM) {
        this.resolved = {
          status: "blocked",
          messageKey: MM,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([iM.e(89), iM.e(149), iM.e(155)]).then((() => iM(44389))).then((MM => (MM.prefetchCompiler(), MM))), this.compiling
      }
      async readStored() {
        const MM = await QM();
        return MM && this.compiler().then((MM => MM.reconcileHint())).catch((MM => {
          console.error("Failed to correct the shader pack hint", MM)
        })), MM
      }
      async read() {
        const MM = await this.preload();
        return MM ? (await this.compiler()).compilePagePack(MM) : PM
      }
    }
    async function QM() {
      if (!(0, jM.i)(OM.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const MM = await (0, aM.d)(!0);
        return MM || SM.g.setItem(jM.c, !1), MM
      } catch (MM) {
        return console.error("Failed to read the stored shader pack", MM), SM.g.removeItem(jM.c), null
      }
    }
    const zM = new nM;

    function LM(MM, rM) {}

    function mM() {
      return null
    }
  },
  7148: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      d: () => jM
    });
    var OM = iM(30);
    const SM = "shaderPack";
    async function jM() {
      var MM;
      let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
    }
  },
  7120: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      loadShaderPackTextures: () => aM,
      shaderPackTextures: () => PM
    });
    var OM = iM(5442);
    let SM = null,
      jM = null;

    function aM() {
      return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: rM,
          textureNameToIndex: iM,
          textureAnimationData: jM
        } = MM;
        return SM ??= (0, OM.j)(iM, jM, rM), SM
      })), jM
    }

    function PM() {
      if (null === SM) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SM
    }
  },
  5442: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      f: () => aM,
      g: () => OM,
      j: () => JM,
      k: () => LM,
      o: () => SM,
      q: () => jM,
      t: () => QM,
      w: () => zM,
      z: () => mM
    });
    const OM = 5;

    function SM(MM) {
      return MM === OM
    }

    function jM(MM) {
      return [...MM.features]
    }
    const aM = 262144,
      PM = 256,
      nM = 256;

    function QM(MM) {
      if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
      const rM = [];
      for (const [iM, OM] of Object.entries(MM)) {
        if ("string" !== typeof OM) return `${iM} isn't text.`;
        rM.push({
          path: iM,
          source: OM
        })
      }
      return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
        function(MM) {
          if (0 === MM.length) return "The pack has no .wgsl files.";
          if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
          const rM = new Set;
          for (const {
              path: iM
            }
            of MM) {
            const MM = HM(iM);
            if (null !== MM) return MM;
            if (rM.has(iM)) return `The pack has two files at ${iM}.`;
            rM.add(iM)
          }
          return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
        }(rM) ?? rM
    }

    function zM(MM) {
      const rM = {};
      for (const iM of MM) rM[iM.path] = iM.source;
      return rM
    }

    function LM(MM, rM) {
      return MM < rM ? -1 : MM > rM ? 1 : 0
    }

    function mM(MM) {
      const rM = new TextEncoder;
      let iM = 0;
      for (const {
          source: OM
        }
        of MM) iM += rM.encode(OM).byteLength;
      return iM
    }

    function HM(MM) {
      if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
      if (MM.length > nM) return `A file path is over ${nM} characters.`;
      if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
      return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
    }
    const hM = /^(.*)\[rot\[([1-4])$/;

    function JM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const OM = new Map;
      rM.forEach(((MM, rM) => {
        let {
          numAnimStates: iM,
          animStartIdx: SM
        } = MM;
        for (let jM = 1; jM < iM; jM++) OM.set(SM + jM - 1, rM)
      }));
      const SM = Object.entries(MM),
        jM = new Map;
      for (const [JM, dM] of SM) {
        const MM = hM.exec(JM);
        "1" === MM?.[2] && jM.set(MM[1], dM + 1)
      }
      const aM = MM => {
          const rM = hM.exec(MM);
          return rM && jM.has(rM[1]) ? {
            root: rM[1],
            rotation: Number(rM[2]) - 1
          } : null
        },
        PM = new Set(SM.map((MM => {
          let [rM] = MM;
          return aM(rM)?.root ?? rM
        }))),
        nM = (MM, iM) => {
          const OM = MM.replace(/_?0$/, "");
          return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
        },
        QM = new Map;
      for (const [hM, JM] of SM) QM.set(JM, nM(aM(hM)?.root ?? hM, JM));
      const zM = SM.reduce(((MM, rM) => {
          let [, iM] = rM;
          return Math.max(MM, iM + 1)
        }), 0),
        LM = Array.from({
          length: zM
        }, ((MM, rM) => ({
          id: rM + 1,
          rotation: 0
        }))),
        mM = new Map,
        HM = new Map;
      for (const [hM, JM] of SM) {
        const MM = aM(hM),
          rM = OM.get(JM);
        if (void 0 !== rM) {
          const iM = QM.get(rM);
          HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "frame"
          }), MM && !HM.has(MM.root) && HM.set(MM.root, {
            name: MM.root,
            texture: iM,
            kind: "frame"
          });
          continue
        }
        const iM = QM.get(JM),
          SM = MM?.root ?? hM;
        if (iM !== SM && HM.set(SM, {
            name: SM,
            texture: iM,
            kind: "frame"
          }), MM) {
          const rM = jM.get(MM.root);
          LM[JM] = {
            id: rM,
            rotation: MM.rotation
          }, mM.set(iM, rM), HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "rotation"
          })
        } else mM.set(iM, JM + 1)
      }
      for (const hM of mM.keys()) HM.delete(hM);
      for (const [hM, JM] of iM) {
        const MM = mM.get(JM);
        void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
      }
      return {
        named: [...mM].sort(((MM, rM) => {
          let [iM] = MM, [OM] = rM;
          return iM < OM ? -1 : iM > OM ? 1 : 0
        })).map((MM => {
          let [rM, iM] = MM;
          return {
            name: rM,
            id: iM
          }
        })),
        aliases: [...HM.values()],
        layers: LM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);