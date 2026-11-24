export const id = 301;
export const ids = [301];
export const modules = {
  41537: (mm, Tm, fm) => {
    fm.d(Tm, {
      ensureLocalBloxdTypes: () => jm
    });
    var hm = fm(4696),
      Am = fm(41432),
      am = fm(41424),
      xm = fm(36950),
      wm = fm(36955),
      Dm = fm(36975);
    const im = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Rm(mm) {
      return mm.replace(/^\//, "")
    }

    function pm(mm) {
      return Rm((0, wm.x)(mm.name, "")).replace(/\/$/, "")
    }

    function Em(mm) {
      return mm.typesVfsPath.slice(mm.typesVfsPath.lastIndexOf("/") + 1)
    }

    function om(mm) {
      return JSON.stringify({
        name: mm.specifier,
        types: Em(mm)
      }, null, "\t") + "\n"
    }
    async function Om(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const fm = [];
      for await (const [hm, Am] of mm.entries()) {
        const mm = Tm ? `${Tm}/${hm}` : hm;
        "directory" !== Am.kind ? fm.push(mm) : fm.push(...await Om(Am, mm))
      }
      return fm
    }
    async function Ym(mm, Tm, fm) {
      const hm = pm(Tm),
        Am = await (0, Dm.l)(mm, hm);
      if (!Am) return;
      const am = new Set([Em(Tm), "package.json"]);
      if (fm)
        for (const Dm of Object.keys(Tm.files)) am.add(Dm);
      const xm = await Om(Am),
        wm = new Set;
      for (const pm of xm) {
        if (am.has(pm)) continue;
        await (0, Dm.y)(mm, `${hm}/${pm}`);
        const Tm = pm.split("/");
        for (let mm = 1; mm < Tm.length; mm++) wm.add(Tm.slice(0, mm).join("/"))
      }
      const im = [...wm].sort(((mm, Tm) => Tm.split("/").length - mm.split("/").length));
      for (const pm of im) try {
        await (0, Dm.y)(mm, `${hm}/${pm}`)
      } catch (Rm) {
        if (Rm instanceof DOMException && "InvalidModificationError" === Rm.name) continue;
        throw Rm
      }
    }

    function qm(mm) {
      const Tm = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const hm of Object.values(xm.e)) Tm[hm.specifier] = [`.${hm.typesVfsPath}`];
      const fm = [];
      for (const hm of mm)
        for (const mm of Object.keys(hm.files)) fm.push(Rm((0, wm.x)(hm.name, mm)));
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
          paths: Tm
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...fm]
      }, null, "\t") + "\n"
    }
    async function jm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const fm = new Set(Tm.map((mm => mm.name))),
        Em = Object.values(xm.e).flatMap((Tm => {
          const hm = Rm(Tm.typesVfsPath),
            Am = `${pm(Tm)}/package.json`;
          return [...fm.has(Tm.name) ? Object.entries(Tm.files).map((fm => {
            let [hm, Am] = fm;
            return (0, Dm.G)(mm, Rm((0, wm.x)(Tm.name, hm)), Am)
          })) : [], (0, Dm.G)(mm, hm, Tm.types), (0, Dm.G)(mm, Am, om(Tm))]
        }));
      await Promise.all([(0, Dm.G)(mm, "node_modules/@bloxd/index.d.ts", hm.default), (0, Dm.G)(mm, "node_modules/@bloxd/globals.d.ts", am.e), (0, Dm.G)(mm, "node_modules/@bloxd/lib.d.ts", Am.e), (0, Dm.G)(mm, "node_modules/@bloxd/package.json", im), (0, Dm.G)(mm, "tsconfig.json", qm(Tm)), ...Em]), await Promise.all(Object.values(xm.e).map((Tm => Ym(mm, Tm, fm.has(Tm.name)))))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);