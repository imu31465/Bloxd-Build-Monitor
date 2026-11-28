export const id = 139;
export const ids = [139, 159];
export const modules = {
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