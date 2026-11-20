export const id = 129;
export const ids = [129, 130];
export const modules = {
  6328: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv.j,
      g: () => Sv,
      i: () => hv.r
    });
    var hv = Pv(6306);
    const Sv = [!1, !0].flatMap((vv => ["terrain", "liquid", "model"].map((zv => ({
      strict: vv,
      program: zv
    })))))
  },
  38715: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      ShaderPackPage: () => dv,
      harnessShaderPackMode: () => Wv,
      setHarnessUrlShaderPack: () => Tv,
      shaderPackPage: () => lv
    });
    var hv = Pv(73),
      Sv = Pv(39),
      ev = (Pv(3205), Pv(6328), Pv(3201)),
      gv = Pv(6377);
    Pv(6351);
    const pv = {
      status: "none"
    };
    class dv {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, ev.f)(hv.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Nv().then((vv => {
            vv && Sv.h.removeItem(ev.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, ev.e)(hv.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const vv = await this.load();
        return "active" === vv.status ? vv.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((vv => (console.error("Failed to load the shader pack", vv), pv))).then((vv => (this.resolved ??= vv, vv))), this.pagePack
      }
      hasNone() {
        var vv;
        return "none" === (null === (vv = this.resolved) || void 0 === vv ? void 0 : vv.status)
      }
      block(vv) {
        this.resolved = {
          status: "blocked",
          messageKey: vv,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([Pv.e(75), Pv.e(131), Pv.e(134)]).then((() => Pv(41051))).then((vv => (vv.prefetchCompiler(), vv))), this.compiling
      }
      async readStored() {
        const vv = await Nv();
        return vv && this.compiler().then((vv => vv.reconcileHint())).catch((vv => {
          console.error("Failed to correct the shader pack hint", vv)
        })), vv
      }
      async read() {
        const vv = await this.preload();
        return vv ? (await this.compiler()).compilePagePack(vv) : pv
      }
    }
    async function Nv() {
      if (!(0, ev.j)(hv.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const vv = await (0, gv.g)(!0);
        return vv || Sv.h.setItem(ev.b, !1), vv
      } catch (vv) {
        return console.error("Failed to read the stored shader pack", vv), Sv.h.removeItem(ev.b), null
      }
    }
    const lv = new dv;

    function Tv(vv, zv) {}

    function Wv() {
      return null
    }
  },
  6377: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      g: () => ev
    });
    var hv = Pv(39);
    const Sv = "shaderPack";
    async function ev() {
      var vv;
      let zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (vv = await hv.f.getItem(Sv, zv)) && void 0 !== vv ? vv : null
    }
  },
  6351: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      loadShaderPackTextures: () => gv,
      shaderPackTextures: () => pv
    });
    var hv = Pv(6306);
    let Sv = null,
      ev = null;

    function gv() {
      return ev ??= Promise.all([Pv.e(70), Pv.e(198)]).then((() => Pv(39807))).then((vv => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zv,
          textureNameToIndex: Pv,
          textureAnimationData: ev
        } = vv;
        return Sv ??= (0, hv.n)(Pv, ev, zv), Sv
      })), ev
    }

    function pv() {
      if (null === Sv) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Sv
    }
  },
  6306: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      f: () => ev,
      j: () => hv,
      n: () => av,
      q: () => lv,
      r: () => Sv,
      t: () => dv,
      u: () => Nv,
      x: () => Tv
    });
    const hv = 5;

    function Sv(vv) {
      return vv === hv
    }
    const ev = 262144,
      gv = 256,
      pv = 256;

    function dv(vv) {
      if ("object" !== typeof vv || null === vv || Array.isArray(vv)) return "The pack has no files.";
      const zv = [];
      for (const [Pv, hv] of Object.entries(vv)) {
        if ("string" !== typeof hv) return `${Pv} isn't text.`;
        zv.push({
          path: Pv,
          source: hv
        })
      }
      return zv.sort(((vv, zv) => lv(vv.path, zv.path))),
        function(vv) {
          if (0 === vv.length) return "The pack has no .wgsl files.";
          if (vv.length > gv) return `The pack has more than ${gv} .wgsl files.`;
          const zv = new Set;
          for (const {
              path: Pv
            }
            of vv) {
            const vv = Wv(Pv);
            if (null !== vv) return vv;
            if (zv.has(Pv)) return `The pack has two files at ${Pv}.`;
            zv.add(Pv)
          }
          return Tv(vv) > ev ? `The pack's .wgsl files are over ${ev/1024} KB in total.` : null
        }(zv) ?? zv
    }

    function Nv(vv) {
      const zv = {};
      for (const Pv of vv) zv[Pv.path] = Pv.source;
      return zv
    }

    function lv(vv, zv) {
      return vv < zv ? -1 : vv > zv ? 1 : 0
    }

    function Tv(vv) {
      const zv = new TextEncoder;
      let Pv = 0;
      for (const {
          source: hv
        }
        of vv) Pv += zv.encode(hv).byteLength;
      return Pv
    }

    function Wv(vv) {
      if (!vv.toLowerCase().endsWith(".wgsl")) return `${vv} isn't a .wgsl file.`;
      if (vv.length > pv) return `A file path is over ${pv} characters.`;
      if (vv.includes("\\") || /[\u0000-\u001f]/.test(vv)) return `${vv} isn't a valid file path.`;
      return vv.split("/").some((vv => "" === vv || "." === vv || ".." === vv)) ? `${vv} isn't a valid file path.` : null
    }
    const wv = /^(.*)\[rot\[([1-4])$/;

    function av(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const hv = new Map;
      zv.forEach(((vv, zv) => {
        let {
          numAnimStates: Pv,
          animStartIdx: Sv
        } = vv;
        for (let ev = 1; ev < Pv; ev++) hv.set(Sv + ev - 1, zv)
      }));
      const Sv = Object.entries(vv),
        ev = new Map;
      for (const [sv, Cv] of Sv) {
        const vv = wv.exec(sv);
        "1" === vv?.[2] && ev.set(vv[1], Cv + 1)
      }
      const gv = vv => {
          const zv = wv.exec(vv);
          return zv && ev.has(zv[1]) ? {
            root: zv[1],
            rotation: Number(zv[2]) - 1
          } : null
        },
        pv = new Set(Sv.map((vv => {
          let [zv] = vv;
          return gv(zv)?.root ?? zv
        }))),
        dv = (vv, Pv) => {
          const hv = vv.replace(/_?0$/, "");
          return (zv[Pv]?.numAnimStates ?? 0) > 1 && !pv.has(hv) ? hv : vv
        },
        Nv = new Map;
      for (const [wv, sv] of Sv) Nv.set(sv, dv(gv(wv)?.root ?? wv, sv));
      const lv = Sv.reduce(((vv, zv) => {
          let [, Pv] = zv;
          return Math.max(vv, Pv + 1)
        }), 0),
        Tv = Array.from({
          length: lv
        }, ((vv, zv) => ({
          id: zv + 1,
          rotation: 0
        }))),
        Wv = new Map,
        av = new Map;
      for (const [wv, sv] of Sv) {
        const vv = gv(wv),
          zv = hv.get(sv);
        if (void 0 !== zv) {
          const Pv = Nv.get(zv);
          av.set(wv, {
            name: wv,
            texture: Pv,
            kind: "frame"
          }), vv && !av.has(vv.root) && av.set(vv.root, {
            name: vv.root,
            texture: Pv,
            kind: "frame"
          });
          continue
        }
        const Pv = Nv.get(sv),
          Sv = vv?.root ?? wv;
        if (Pv !== Sv && av.set(Sv, {
            name: Sv,
            texture: Pv,
            kind: "frame"
          }), vv) {
          const zv = ev.get(vv.root);
          Tv[sv] = {
            id: zv,
            rotation: vv.rotation
          }, Wv.set(Pv, zv), av.set(wv, {
            name: wv,
            texture: Pv,
            kind: "rotation"
          })
        } else Wv.set(Pv, sv + 1)
      }
      for (const wv of Wv.keys()) av.delete(wv);
      for (const [wv, sv] of Pv) {
        const vv = Wv.get(sv);
        void 0 === vv || Wv.has(wv) || (Wv.set(wv, vv), av.delete(wv))
      }
      return {
        named: [...Wv].sort(((vv, zv) => {
          let [Pv] = vv, [hv] = zv;
          return Pv < hv ? -1 : Pv > hv ? 1 : 0
        })).map((vv => {
          let [zv, Pv] = vv;
          return {
            name: zv,
            id: Pv
          }
        })),
        aliases: [...av.values()],
        layers: Tv
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);