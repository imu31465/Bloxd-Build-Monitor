export const id = 293;
export const ids = [293];
export const modules = {
  41457: (dd, Jd, kd) => {
    kd.d(Jd, {
      ensureLocalBloxdTypes: () => Rd
    });
    var pd = kd(4636),
      Nd = kd(41351),
      Wd = kd(41347),
      Pd = kd(37030),
      Zd = kd(37035),
      gd = kd(37050);
    const Cd = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Kd(dd) {
      return dd.replace(/^\//, "")
    }

    function od(dd) {
      return Kd((0, Zd.A)(dd.name, "")).replace(/\/$/, "")
    }

    function ld(dd) {
      return dd.typesVfsPath.slice(dd.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Qd(dd) {
      return JSON.stringify({
        name: dd.specifier,
        types: ld(dd)
      }, null, "\t") + "\n"
    }
    async function Ld(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const kd = [];
      for await (const [pd, Nd] of dd.entries()) {
        const dd = Jd ? `${Jd}/${pd}` : pd;
        "directory" !== Nd.kind ? kd.push(dd) : kd.push(...await Ld(Nd, dd))
      }
      return kd
    }
    async function Od(dd, Jd, kd) {
      const pd = od(Jd),
        Nd = await (0, gd.j)(dd, pd);
      if (!Nd) return;
      const Wd = new Set([ld(Jd), "package.json"]);
      if (kd)
        for (const gd of Object.keys(Jd.files)) Wd.add(gd);
      const Pd = await Ld(Nd),
        Zd = new Set;
      for (const od of Pd) {
        if (Wd.has(od)) continue;
        await (0, gd.x)(dd, `${pd}/${od}`);
        const Jd = od.split("/");
        for (let dd = 1; dd < Jd.length; dd++) Zd.add(Jd.slice(0, dd).join("/"))
      }
      const Cd = [...Zd].sort(((dd, Jd) => Jd.split("/").length - dd.split("/").length));
      for (const od of Cd) try {
        await (0, gd.x)(dd, `${pd}/${od}`)
      } catch (Kd) {
        if (Kd instanceof DOMException && "InvalidModificationError" === Kd.name) continue;
        throw Kd
      }
    }

    function ed(dd) {
      const Jd = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const pd of Object.values(Pd.g)) Jd[pd.specifier] = [`.${pd.typesVfsPath}`];
      const kd = [];
      for (const pd of dd)
        for (const dd of Object.keys(pd.files)) kd.push(Kd((0, Zd.A)(pd.name, dd)));
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
          paths: Jd
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...kd]
      }, null, "\t") + "\n"
    }
    async function Rd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const kd = new Set(Jd.map((dd => dd.name))),
        ld = Object.values(Pd.g).flatMap((Jd => {
          const pd = Kd(Jd.typesVfsPath),
            Nd = `${od(Jd)}/package.json`;
          return [...kd.has(Jd.name) ? Object.entries(Jd.files).map((kd => {
            let [pd, Nd] = kd;
            return (0, gd.D)(dd, Kd((0, Zd.A)(Jd.name, pd)), Nd)
          })) : [], (0, gd.D)(dd, pd, Jd.types), (0, gd.D)(dd, Nd, Qd(Jd))]
        }));
      await Promise.all([(0, gd.D)(dd, "node_modules/@bloxd/index.d.ts", pd.default), (0, gd.D)(dd, "node_modules/@bloxd/globals.d.ts", Wd.b), (0, gd.D)(dd, "node_modules/@bloxd/lib.d.ts", Nd.c), (0, gd.D)(dd, "node_modules/@bloxd/package.json", Cd), (0, gd.D)(dd, "tsconfig.json", ed(Jd)), ...ld]), await Promise.all(Object.values(Pd.g).map((Jd => Od(dd, Jd, kd.has(Jd.name)))))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);