export const id = 621;
export const ids = [621];
export const modules = {
  53945: (dd, Od, md) => {
    md.d(Od, {
      ensureLocalBloxdTypes: () => bd
    });
    var Wd = md(5534),
      Fd = md(53841),
      Rd = md(53832),
      Xd = md(38404),
      Kd = md(38413),
      hd = md(38422);
    const vd = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Qd(dd) {
      return dd.replace(/^\//, "")
    }

    function td(dd) {
      return Qd((0, Kd.t)(dd.name, "")).replace(/\/$/, "")
    }

    function od(dd) {
      return dd.typesVfsPath.slice(dd.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Nd(dd) {
      return JSON.stringify({
        name: dd.specifier,
        types: od(dd)
      }, null, "\t") + "\n"
    }
    async function qd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const md = [];
      for await (const [Wd, Fd] of dd.entries()) {
        const dd = Od ? `${Od}/${Wd}` : Wd;
        "directory" !== Fd.kind ? md.push(dd) : md.push(...await qd(Fd, dd))
      }
      return md
    }
    async function Hd(dd, Od, md) {
      const Wd = td(Od),
        Fd = await (0, hd.l)(dd, Wd);
      if (!Fd) return;
      const Rd = new Set([od(Od), "package.json"]);
      if (md)
        for (const hd of Object.keys(Od.files)) Rd.add(hd);
      const Xd = await qd(Fd),
        Kd = new Set;
      for (const td of Xd) {
        if (Rd.has(td)) continue;
        await (0, hd.y)(dd, `${Wd}/${td}`);
        const Od = td.split("/");
        for (let dd = 1; dd < Od.length; dd++) Kd.add(Od.slice(0, dd).join("/"))
      }
      const vd = [...Kd].sort(((dd, Od) => Od.split("/").length - dd.split("/").length));
      for (const td of vd) try {
        await (0, hd.y)(dd, `${Wd}/${td}`)
      } catch (Qd) {
        if (Qd instanceof DOMException && "InvalidModificationError" === Qd.name) continue;
        throw Qd
      }
    }

    function yd(dd) {
      const Od = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Wd of Object.values(Xd.f)) Od[Wd.specifier] = [`.${Wd.typesVfsPath}`];
      const md = [];
      for (const Wd of dd)
        for (const dd of Object.keys(Wd.files)) md.push(Qd((0, Kd.t)(Wd.name, dd)));
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
          paths: Od
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...md]
      }, null, "\t") + "\n"
    }
    async function bd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const md = new Set(Od.map((dd => dd.name))),
        od = Object.values(Xd.f).flatMap((Od => {
          const Wd = Qd(Od.typesVfsPath),
            Fd = `${td(Od)}/package.json`;
          return [...md.has(Od.name) ? Object.entries(Od.files).map((md => {
            let [Wd, Fd] = md;
            return (0, hd.J)(dd, Qd((0, Kd.t)(Od.name, Wd)), Fd)
          })) : [], (0, hd.J)(dd, Wd, Od.types), (0, hd.J)(dd, Fd, Nd(Od))]
        }));
      await Promise.all([(0, hd.J)(dd, "node_modules/@bloxd/index.d.ts", Wd.default), (0, hd.J)(dd, "node_modules/@bloxd/globals.d.ts", Rd.c), (0, hd.J)(dd, "node_modules/@bloxd/lib.d.ts", Fd.d), (0, hd.J)(dd, "node_modules/@bloxd/package.json", vd), (0, hd.J)(dd, "tsconfig.json", yd(Od)), ...od]), await Promise.all(Object.values(Xd.f).map((Od => Hd(dd, Od, md.has(Od.name)))))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);