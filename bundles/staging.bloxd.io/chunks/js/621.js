export const id = 621;
export const ids = [621];
export const modules = {
  53698: (bb, wb, Mb) => {
    Mb.d(wb, {
      ensureLocalBloxdTypes: () => Bb
    });
    var eb = Mb(5652),
      Hb = Mb(53585),
      pb = Mb(53581),
      Vb = Mb(38066),
      gb = Mb(38077),
      lb = Mb(38084);
    const Lb = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Ib(bb) {
      return bb.replace(/^\//, "")
    }

    function Ob(bb) {
      return Ib((0, gb.x)(bb.name, "")).replace(/\/$/, "")
    }

    function Ub(bb) {
      return bb.typesVfsPath.slice(bb.typesVfsPath.lastIndexOf("/") + 1)
    }

    function tb(bb) {
      return JSON.stringify({
        name: bb.specifier,
        types: Ub(bb)
      }, null, "\t") + "\n"
    }
    async function Cb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const Mb = [];
      for await (const [eb, Hb] of bb.entries()) {
        const bb = wb ? `${wb}/${eb}` : eb;
        "directory" !== Hb.kind ? Mb.push(bb) : Mb.push(...await Cb(Hb, bb))
      }
      return Mb
    }
    async function Eb(bb, wb, Mb) {
      const eb = Ob(wb),
        Hb = await (0, lb.k)(bb, eb);
      if (!Hb) return;
      const pb = new Set([Ub(wb), "package.json"]);
      if (Mb)
        for (const lb of Object.keys(wb.files)) pb.add(lb);
      const Vb = await Cb(Hb),
        gb = new Set;
      for (const Ob of Vb) {
        if (pb.has(Ob)) continue;
        await (0, lb.D)(bb, `${eb}/${Ob}`);
        const wb = Ob.split("/");
        for (let bb = 1; bb < wb.length; bb++) gb.add(wb.slice(0, bb).join("/"))
      }
      const Lb = [...gb].sort(((bb, wb) => wb.split("/").length - bb.split("/").length));
      for (const Ob of Lb) try {
        await (0, lb.D)(bb, `${eb}/${Ob}`)
      } catch (Ib) {
        if (Ib instanceof DOMException && "InvalidModificationError" === Ib.name) continue;
        throw Ib
      }
    }

    function Fb(bb) {
      const wb = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const eb of Object.values(Vb.e)) wb[eb.specifier] = [`.${eb.typesVfsPath}`];
      const Mb = [];
      for (const eb of bb)
        for (const bb of Object.keys(eb.files)) Mb.push(Ib((0, gb.x)(eb.name, bb)));
      return JSON.stringify({
        compilerOptions: {
          allowJs: !0,
          checkJs: !1,
          strict: !1,
          module: "ESNext",
          moduleResolution: "bundler",
          target: "ES2015",
          noEmit: !0,
          noLib: !0,
          skipLibCheck: !0,
          baseUrl: ".",
          paths: wb
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...Mb]
      }, null, "\t") + "\n"
    }
    async function Bb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const Mb = new Set(wb.map((bb => bb.name))),
        Ub = Object.values(Vb.e).flatMap((wb => {
          const eb = Ib(wb.typesVfsPath),
            Hb = `${Ob(wb)}/package.json`;
          return [...Mb.has(wb.name) ? Object.entries(wb.files).map((Mb => {
            let [eb, Hb] = Mb;
            return (0, lb.J)(bb, Ib((0, gb.x)(wb.name, eb)), Hb)
          })) : [], (0, lb.J)(bb, eb, wb.types), (0, lb.J)(bb, Hb, tb(wb))]
        }));
      await Promise.all([(0, lb.J)(bb, "node_modules/@bloxd/index.d.ts", eb.default), (0, lb.J)(bb, "node_modules/@bloxd/globals.d.ts", pb.b), (0, lb.J)(bb, "node_modules/@bloxd/lib.d.ts", Hb.e), (0, lb.J)(bb, "node_modules/@bloxd/package.json", Lb), (0, lb.J)(bb, "tsconfig.json", Fb(wb)), ...Ub]), await Promise.all(Object.values(Vb.e).map((wb => Eb(bb, wb, Mb.has(wb.name)))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);