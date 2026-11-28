export const id = 138;
export const ids = [138, 139, 159];
export const modules = {
  5951: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.f,
      g: () => Fd,
      k: () => Wd.o
    });
    var Wd = md(5954);
    const Fd = [!1, !0].flatMap((dd => ["terrain", "liquid", "model"].map((Od => ({
      strict: dd,
      program: Od
    })))))
  },
  40819: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ShaderPackPage: () => hd,
      harnessShaderPackMode: () => od,
      setHarnessUrlShaderPack: () => td,
      shaderPackPage: () => Qd
    });
    var Wd = md(107),
      Fd = md(46),
      Rd = (md(4678), md(5951), md(4674)),
      Xd = md(7602);
    md(7583);
    const Kd = {
      status: "none"
    };
    class hd {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Rd.h)(Wd.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), vd().then((dd => {
            dd && Fd.k.removeItem(Rd.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Rd.e)(Wd.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const dd = await this.load();
        return "active" === dd.status ? dd.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((dd => (console.error("Failed to load the shader pack", dd), Kd))).then((dd => (this.resolved ??= dd, dd))), this.pagePack
      }
      hasNone() {
        var dd;
        return "none" === (null === (dd = this.resolved) || void 0 === dd ? void 0 : dd.status)
      }
      block(dd) {
        this.resolved = {
          status: "blocked",
          messageKey: dd,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([md.e(91), md.e(157), md.e(163)]).then((() => md(54160))).then((dd => (dd.prefetchCompiler(), dd))), this.compiling
      }
      async readStored() {
        const dd = await vd();
        return dd && this.compiler().then((dd => dd.reconcileHint())).catch((dd => {
          console.error("Failed to correct the shader pack hint", dd)
        })), dd
      }
      async read() {
        const dd = await this.preload();
        return dd ? (await this.compiler()).compilePagePack(dd) : Kd
      }
    }
    async function vd() {
      if (!(0, Rd.i)(Wd.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const dd = await (0, Xd.g)(!0);
        return dd || Fd.k.setItem(Rd.d, !1), dd
      } catch (dd) {
        return console.error("Failed to read the stored shader pack", dd), Fd.k.removeItem(Rd.d), null
      }
    }
    const Qd = new hd;

    function td(dd, Od) {}

    function od() {
      return null
    }
  },
  7602: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Rd
    });
    var Wd = md(46);
    const Fd = "shaderPack";
    async function Rd() {
      var dd;
      let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await Wd.h.getItem(Fd, Od)) && void 0 !== dd ? dd : null
    }
  },
  7583: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      loadShaderPackTextures: () => Xd,
      shaderPackTextures: () => Kd
    });
    var Wd = md(5954);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Rd ??= Promise.all([md.e(85), md.e(126)]).then((() => md(42438))).then((dd => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Od,
          textureNameToIndex: md,
          textureAnimationData: Rd
        } = dd;
        return Fd ??= (0, Wd.h)(md, Rd, Od), Fd
      })), Rd
    }

    function Kd() {
      if (null === Fd) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Fd
    }
  },
  5954: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      e: () => Xd,
      f: () => Wd,
      h: () => Hd,
      l: () => td,
      o: () => Fd,
      p: () => Rd,
      r: () => vd,
      v: () => Qd,
      w: () => od
    });
    const Wd = 5;

    function Fd(dd) {
      return dd === Wd
    }

    function Rd(dd) {
      return [...dd.features]
    }
    const Xd = 262144,
      Kd = 256,
      hd = 256;

    function vd(dd) {
      if ("object" !== typeof dd || null === dd || Array.isArray(dd)) return "The pack has no files.";
      const Od = [];
      for (const [md, Wd] of Object.entries(dd)) {
        if ("string" !== typeof Wd) return `${md} isn't text.`;
        Od.push({
          path: md,
          source: Wd
        })
      }
      return Od.sort(((dd, Od) => td(dd.path, Od.path))),
        function(dd) {
          if (0 === dd.length) return "The pack has no .wgsl files.";
          if (dd.length > Kd) return `The pack has more than ${Kd} .wgsl files.`;
          const Od = new Set;
          for (const {
              path: md
            }
            of dd) {
            const dd = Nd(md);
            if (null !== dd) return dd;
            if (Od.has(md)) return `The pack has two files at ${md}.`;
            Od.add(md)
          }
          return od(dd) > Xd ? `The pack's .wgsl files are over ${Xd/1024} KB in total.` : null
        }(Od) ?? Od
    }

    function Qd(dd) {
      const Od = {};
      for (const md of dd) Od[md.path] = md.source;
      return Od
    }

    function td(dd, Od) {
      return dd < Od ? -1 : dd > Od ? 1 : 0
    }

    function od(dd) {
      const Od = new TextEncoder;
      let md = 0;
      for (const {
          source: Wd
        }
        of dd) md += Od.encode(Wd).byteLength;
      return md
    }

    function Nd(dd) {
      if (!dd.toLowerCase().endsWith(".wgsl")) return `${dd} isn't a .wgsl file.`;
      if (dd.length > hd) return `A file path is over ${hd} characters.`;
      if (dd.includes("\\") || /[\u0000-\u001f]/.test(dd)) return `${dd} isn't a valid file path.`;
      return dd.split("/").some((dd => "" === dd || "." === dd || ".." === dd)) ? `${dd} isn't a valid file path.` : null
    }
    const qd = /^(.*)\[rot\[([1-4])$/;

    function Hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Wd = new Map;
      Od.forEach(((dd, Od) => {
        let {
          numAnimStates: md,
          animStartIdx: Fd
        } = dd;
        for (let Rd = 1; Rd < md; Rd++) Wd.set(Fd + Rd - 1, Od)
      }));
      const Fd = Object.entries(dd),
        Rd = new Map;
      for (const [Hd, yd] of Fd) {
        const dd = qd.exec(Hd);
        "1" === dd?.[2] && Rd.set(dd[1], yd + 1)
      }
      const Xd = dd => {
          const Od = qd.exec(dd);
          return Od && Rd.has(Od[1]) ? {
            root: Od[1],
            rotation: Number(Od[2]) - 1
          } : null
        },
        Kd = new Set(Fd.map((dd => {
          let [Od] = dd;
          return Xd(Od)?.root ?? Od
        }))),
        hd = (dd, md) => {
          const Wd = dd.replace(/_?0$/, "");
          return (Od[md]?.numAnimStates ?? 0) > 1 && !Kd.has(Wd) ? Wd : dd
        },
        vd = new Map;
      for (const [qd, Hd] of Fd) vd.set(Hd, hd(Xd(qd)?.root ?? qd, Hd));
      const Qd = Fd.reduce(((dd, Od) => {
          let [, md] = Od;
          return Math.max(dd, md + 1)
        }), 0),
        td = Array.from({
          length: Qd
        }, ((dd, Od) => ({
          id: Od + 1,
          rotation: 0
        }))),
        od = new Map,
        Nd = new Map;
      for (const [qd, Hd] of Fd) {
        const dd = Xd(qd),
          Od = Wd.get(Hd);
        if (void 0 !== Od) {
          const md = vd.get(Od);
          Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "frame"
          }), dd && !Nd.has(dd.root) && Nd.set(dd.root, {
            name: dd.root,
            texture: md,
            kind: "frame"
          });
          continue
        }
        const md = vd.get(Hd),
          Fd = dd?.root ?? qd;
        if (md !== Fd && Nd.set(Fd, {
            name: Fd,
            texture: md,
            kind: "frame"
          }), dd) {
          const Od = Rd.get(dd.root);
          td[Hd] = {
            id: Od,
            rotation: dd.rotation
          }, od.set(md, Od), Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "rotation"
          })
        } else od.set(md, Hd + 1)
      }
      for (const qd of od.keys()) Nd.delete(qd);
      for (const [qd, Hd] of md) {
        const dd = od.get(Hd);
        void 0 === dd || od.has(qd) || (od.set(qd, dd), Nd.delete(qd))
      }
      return {
        named: [...od].sort(((dd, Od) => {
          let [md] = dd, [Wd] = Od;
          return md < Wd ? -1 : md > Wd ? 1 : 0
        })).map((dd => {
          let [Od, md] = dd;
          return {
            name: Od,
            id: md
          }
        })),
        aliases: [...Nd.values()],
        layers: td
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);