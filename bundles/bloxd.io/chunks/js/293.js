export const id = 293;
export const ids = [293];
export const modules = {
  40931: (bb, ub, hb) => {
    hb.d(ub, {
      ensureLocalBloxdTypes: () => Ab
    });
    var Bb = hb(4528),
      Ob = hb(40837),
      Gb = hb(40835),
      Ub = hb(36498),
      Lb = hb(36502),
      Yb = hb(36516);
    const Sb = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function ab(bb) {
      return bb.replace(/^\//, "")
    }

    function Hb(bb) {
      return ab((0, Lb.t)(bb.name, "")).replace(/\/$/, "")
    }

    function wb(bb) {
      return bb.typesVfsPath.slice(bb.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Zb(bb) {
      return JSON.stringify({
        name: bb.specifier,
        types: wb(bb)
      }, null, "\t") + "\n"
    }
    async function Xb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const hb = [];
      for await (const [Bb, Ob] of bb.entries()) {
        const bb = ub ? `${ub}/${Bb}` : Bb;
        "directory" !== Ob.kind ? hb.push(bb) : hb.push(...await Xb(Ob, bb))
      }
      return hb
    }
    async function pb(bb, ub, hb) {
      const Bb = Hb(ub),
        Ob = await (0, Yb.i)(bb, Bb);
      if (!Ob) return;
      const Gb = new Set([wb(ub), "package.json"]);
      if (hb)
        for (const Yb of Object.keys(ub.files)) Gb.add(Yb);
      const Ub = await Xb(Ob),
        Lb = new Set;
      for (const Hb of Ub) {
        if (Gb.has(Hb)) continue;
        await (0, Yb.C)(bb, `${Bb}/${Hb}`);
        const ub = Hb.split("/");
        for (let bb = 1; bb < ub.length; bb++) Lb.add(ub.slice(0, bb).join("/"))
      }
      const Sb = [...Lb].sort(((bb, ub) => ub.split("/").length - bb.split("/").length));
      for (const Hb of Sb) try {
        await (0, Yb.C)(bb, `${Bb}/${Hb}`)
      } catch (ab) {
        if (ab instanceof DOMException && "InvalidModificationError" === ab.name) continue;
        throw ab
      }
    }

    function ob(bb) {
      const ub = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Bb of Object.values(Ub.f)) ub[Bb.specifier] = [`.${Bb.typesVfsPath}`];
      const hb = [];
      for (const Bb of bb)
        for (const bb of Object.keys(Bb.files)) hb.push(ab((0, Lb.t)(Bb.name, bb)));
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
          paths: ub
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...hb]
      }, null, "\t") + "\n"
    }
    async function Ab(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const hb = new Set(ub.map((bb => bb.name))),
        wb = Object.values(Ub.f).flatMap((ub => {
          const Bb = ab(ub.typesVfsPath),
            Ob = `${Hb(ub)}/package.json`;
          return [...hb.has(ub.name) ? Object.entries(ub.files).map((hb => {
            let [Bb, Ob] = hb;
            return (0, Yb.F)(bb, ab((0, Lb.t)(ub.name, Bb)), Ob)
          })) : [], (0, Yb.F)(bb, Bb, ub.types), (0, Yb.F)(bb, Ob, Zb(ub))]
        }));
      await Promise.all([(0, Yb.F)(bb, "node_modules/@bloxd/index.d.ts", Bb.default), (0, Yb.F)(bb, "node_modules/@bloxd/globals.d.ts", Gb.d), (0, Yb.F)(bb, "node_modules/@bloxd/lib.d.ts", Ob.c), (0, Yb.F)(bb, "node_modules/@bloxd/package.json", Sb), (0, Yb.F)(bb, "tsconfig.json", ob(ub)), ...wb]), await Promise.all(Object.values(Ub.f).map((ub => pb(bb, ub, hb.has(ub.name)))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);