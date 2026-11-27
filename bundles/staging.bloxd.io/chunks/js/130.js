export const id = 130;
export const ids = [130, 131, 152];
export const modules = {
  5563: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.e,
      g: () => be,
      h: () => ye.m
    });
    var ye = He(5570);
    const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
      strict: ee,
      program: ie
    })))))
  },
  40056: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ShaderPackPage: () => Fe,
      harnessShaderPackMode: () => ke,
      setHarnessUrlShaderPack: () => Re,
      shaderPackPage: () => oe
    });
    var ye = He(97),
      be = He(35),
      Me = (He(3811), He(5563), He(3808)),
      Ke = He(7296);
    He(7262);
    const Ue = {
      status: "none"
    };
    class Fe {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Me.j)(ye.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Je().then((ee => {
            ee && be.i.removeItem(Me.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Me.f)(ye.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const ee = await this.load();
        return "active" === ee.status ? ee.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((ee => (console.error("Failed to load the shader pack", ee), Ue))).then((ee => (this.resolved ??= ee, ee))), this.pagePack
      }
      hasNone() {
        var ee;
        return "none" === (null === (ee = this.resolved) || void 0 === ee ? void 0 : ee.status)
      }
      block(ee) {
        this.resolved = {
          status: "blocked",
          messageKey: ee,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([He.e(89), He.e(149), He.e(156)]).then((() => He(44931))).then((ee => (ee.prefetchCompiler(), ee))), this.compiling
      }
      async readStored() {
        const ee = await Je();
        return ee && this.compiler().then((ee => ee.reconcileHint())).catch((ee => {
          console.error("Failed to correct the shader pack hint", ee)
        })), ee
      }
      async read() {
        const ee = await this.preload();
        return ee ? (await this.compiler()).compilePagePack(ee) : Ue
      }
    }
    async function Je() {
      if (!(0, Me.k)(ye.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const ee = await (0, Ke.h)(!0);
        return ee || be.i.setItem(Me.b, !1), ee
      } catch (ee) {
        return console.error("Failed to read the stored shader pack", ee), be.i.removeItem(Me.b), null
      }
    }
    const oe = new Fe;

    function Re(ee, ie) {}

    function ke() {
      return null
    }
  },
  7296: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      h: () => Me
    });
    var ye = He(35);
    const be = "shaderPack";
    async function Me() {
      var ee;
      let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (ee = await ye.e.getItem(be, ie)) && void 0 !== ee ? ee : null
    }
  },
  7262: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadShaderPackTextures: () => Ke,
      shaderPackTextures: () => Ue
    });
    var ye = He(5570);
    let be = null,
      Me = null;

    function Ke() {
      return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ie,
          textureNameToIndex: He,
          textureAnimationData: Me
        } = ee;
        return be ??= (0, ye.h)(He, Me, ie), be
      })), Me
    }

    function Ue() {
      if (null === be) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return be
    }
  },
  5570: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      e: () => ye,
      h: () => Te,
      k: () => Re,
      m: () => be,
      q: () => Me,
      r: () => Je,
      s: () => oe,
      t: () => ke
    });
    const ye = 5;

    function be(ee) {
      return ee === ye
    }

    function Me(ee) {
      return [...ee.features]
    }
    const Ke = 262144,
      Ue = 256,
      Fe = 256;

    function Je(ee) {
      if ("object" !== typeof ee || null === ee || Array.isArray(ee)) return "The pack has no files.";
      const ie = [];
      for (const [He, ye] of Object.entries(ee)) {
        if ("string" !== typeof ye) return `${He} isn't text.`;
        ie.push({
          path: He,
          source: ye
        })
      }
      return ie.sort(((ee, ie) => Re(ee.path, ie.path))),
        function(ee) {
          if (0 === ee.length) return "The pack has no .wgsl files.";
          if (ee.length > Ue) return `The pack has more than ${Ue} .wgsl files.`;
          const ie = new Set;
          for (const {
              path: He
            }
            of ee) {
            const ee = qe(He);
            if (null !== ee) return ee;
            if (ie.has(He)) return `The pack has two files at ${He}.`;
            ie.add(He)
          }
          return ke(ee) > Ke ? `The pack's .wgsl files are over ${Ke/1024} KB in total.` : null
        }(ie) ?? ie
    }

    function oe(ee) {
      const ie = {};
      for (const He of ee) ie[He.path] = He.source;
      return ie
    }

    function Re(ee, ie) {
      return ee < ie ? -1 : ee > ie ? 1 : 0
    }

    function ke(ee) {
      const ie = new TextEncoder;
      let He = 0;
      for (const {
          source: ye
        }
        of ee) He += ie.encode(ye).byteLength;
      return He
    }

    function qe(ee) {
      if (!ee.toLowerCase().endsWith(".wgsl")) return `${ee} isn't a .wgsl file.`;
      if (ee.length > Fe) return `A file path is over ${Fe} characters.`;
      if (ee.includes("\\") || /[\u0000-\u001f]/.test(ee)) return `${ee} isn't a valid file path.`;
      return ee.split("/").some((ee => "" === ee || "." === ee || ".." === ee)) ? `${ee} isn't a valid file path.` : null
    }
    const fe = /^(.*)\[rot\[([1-4])$/;

    function Te(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ye = new Map;
      ie.forEach(((ee, ie) => {
        let {
          numAnimStates: He,
          animStartIdx: be
        } = ee;
        for (let Me = 1; Me < He; Me++) ye.set(be + Me - 1, ie)
      }));
      const be = Object.entries(ee),
        Me = new Map;
      for (const [Te, pe] of be) {
        const ee = fe.exec(Te);
        "1" === ee?.[2] && Me.set(ee[1], pe + 1)
      }
      const Ke = ee => {
          const ie = fe.exec(ee);
          return ie && Me.has(ie[1]) ? {
            root: ie[1],
            rotation: Number(ie[2]) - 1
          } : null
        },
        Ue = new Set(be.map((ee => {
          let [ie] = ee;
          return Ke(ie)?.root ?? ie
        }))),
        Fe = (ee, He) => {
          const ye = ee.replace(/_?0$/, "");
          return (ie[He]?.numAnimStates ?? 0) > 1 && !Ue.has(ye) ? ye : ee
        },
        Je = new Map;
      for (const [fe, Te] of be) Je.set(Te, Fe(Ke(fe)?.root ?? fe, Te));
      const oe = be.reduce(((ee, ie) => {
          let [, He] = ie;
          return Math.max(ee, He + 1)
        }), 0),
        Re = Array.from({
          length: oe
        }, ((ee, ie) => ({
          id: ie + 1,
          rotation: 0
        }))),
        ke = new Map,
        qe = new Map;
      for (const [fe, Te] of be) {
        const ee = Ke(fe),
          ie = ye.get(Te);
        if (void 0 !== ie) {
          const He = Je.get(ie);
          qe.set(fe, {
            name: fe,
            texture: He,
            kind: "frame"
          }), ee && !qe.has(ee.root) && qe.set(ee.root, {
            name: ee.root,
            texture: He,
            kind: "frame"
          });
          continue
        }
        const He = Je.get(Te),
          be = ee?.root ?? fe;
        if (He !== be && qe.set(be, {
            name: be,
            texture: He,
            kind: "frame"
          }), ee) {
          const ie = Me.get(ee.root);
          Re[Te] = {
            id: ie,
            rotation: ee.rotation
          }, ke.set(He, ie), qe.set(fe, {
            name: fe,
            texture: He,
            kind: "rotation"
          })
        } else ke.set(He, Te + 1)
      }
      for (const fe of ke.keys()) qe.delete(fe);
      for (const [fe, Te] of He) {
        const ee = ke.get(Te);
        void 0 === ee || ke.has(fe) || (ke.set(fe, ee), qe.delete(fe))
      }
      return {
        named: [...ke].sort(((ee, ie) => {
          let [He] = ee, [ye] = ie;
          return He < ye ? -1 : He > ye ? 1 : 0
        })).map((ee => {
          let [ie, He] = ee;
          return {
            name: ie,
            id: He
          }
        })),
        aliases: [...qe.values()],
        layers: Re
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);