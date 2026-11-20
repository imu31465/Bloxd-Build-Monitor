export const id = 292;
export const ids = [292];
export const modules = {
  40906: (bb, cb, sb) => {
    sb.d(cb, {
      ensureLocalBloxdTypes: () => eb
    });
    var kb = sb(4482),
      Wb = sb(40804),
      ab = sb(40801),
      Tb = sb(36425),
      Ub = sb(36430),
      Ib = sb(36445);
    const Hb = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function fb(bb) {
      return bb.replace(/^\//, "")
    }

    function Mb(bb) {
      return fb((0, Ub.v)(bb.name, "")).replace(/\/$/, "")
    }

    function Xb(bb) {
      return bb.typesVfsPath.slice(bb.typesVfsPath.lastIndexOf("/") + 1)
    }

    function nb(bb) {
      return JSON.stringify({
        name: bb.specifier,
        types: Xb(bb)
      }, null, "\t") + "\n"
    }
    async function mb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const sb = [];
      for await (const [kb, Wb] of bb.entries()) {
        const bb = cb ? `${cb}/${kb}` : kb;
        "directory" !== Wb.kind ? sb.push(bb) : sb.push(...await mb(Wb, bb))
      }
      return sb
    }
    async function lb(bb, cb, sb) {
      const kb = Mb(cb),
        Wb = await (0, Ib.p)(bb, kb);
      if (!Wb) return;
      const ab = new Set([Xb(cb), "package.json"]);
      if (sb)
        for (const Ib of Object.keys(cb.files)) ab.add(Ib);
      const Tb = await mb(Wb),
        Ub = new Set;
      for (const Mb of Tb) {
        if (ab.has(Mb)) continue;
        await (0, Ib.F)(bb, `${kb}/${Mb}`);
        const cb = Mb.split("/");
        for (let bb = 1; bb < cb.length; bb++) Ub.add(cb.slice(0, bb).join("/"))
      }
      const Hb = [...Ub].sort(((bb, cb) => cb.split("/").length - bb.split("/").length));
      for (const Mb of Hb) try {
        await (0, Ib.F)(bb, `${kb}/${Mb}`)
      } catch (fb) {
        if (fb instanceof DOMException && "InvalidModificationError" === fb.name) continue;
        throw fb
      }
    }

    function Qb(bb) {
      const cb = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const kb of Object.values(Tb.i)) cb[kb.specifier] = [`.${kb.typesVfsPath}`];
      const sb = [];
      for (const kb of bb)
        for (const bb of Object.keys(kb.files)) sb.push(fb((0, Ub.v)(kb.name, bb)));
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
          paths: cb
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...sb]
      }, null, "\t") + "\n"
    }
    async function eb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const sb = new Set(cb.map((bb => bb.name))),
        Xb = Object.values(Tb.i).flatMap((cb => {
          const kb = fb(cb.typesVfsPath),
            Wb = `${Mb(cb)}/package.json`;
          return [...sb.has(cb.name) ? Object.entries(cb.files).map((sb => {
            let [kb, Wb] = sb;
            return (0, Ib.K)(bb, fb((0, Ub.v)(cb.name, kb)), Wb)
          })) : [], (0, Ib.K)(bb, kb, cb.types), (0, Ib.K)(bb, Wb, nb(cb))]
        }));
      await Promise.all([(0, Ib.K)(bb, "node_modules/@bloxd/index.d.ts", kb.default), (0, Ib.K)(bb, "node_modules/@bloxd/globals.d.ts", ab.e), (0, Ib.K)(bb, "node_modules/@bloxd/lib.d.ts", Wb.e), (0, Ib.K)(bb, "node_modules/@bloxd/package.json", Hb), (0, Ib.K)(bb, "tsconfig.json", Qb(cb)), ...Xb]), await Promise.all(Object.values(Tb.i).map((cb => lb(bb, cb, sb.has(cb.name)))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);