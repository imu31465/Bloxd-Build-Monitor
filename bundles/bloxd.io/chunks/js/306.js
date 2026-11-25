export const id = 306;
export const ids = [306];
export const modules = {
  41756: (uu, Eu, ju) => {
    ju.d(Eu, {
      ensureLocalBloxdTypes: () => Du
    });
    var su = ju(4942),
      Uu = ju(41619),
      Zu = ju(41617),
      Xu = ju(37248),
      lu = ju(37257),
      qu = ju(37271);
    const fu = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Cu(uu) {
      return uu.replace(/^\//, "")
    }

    function bu(uu) {
      return Cu((0, lu.x)(uu.name, "")).replace(/\/$/, "")
    }

    function cu(uu) {
      return uu.typesVfsPath.slice(uu.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Nu(uu) {
      return JSON.stringify({
        name: uu.specifier,
        types: cu(uu)
      }, null, "\t") + "\n"
    }
    async function Ou(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const ju = [];
      for await (const [su, Uu] of uu.entries()) {
        const uu = Eu ? `${Eu}/${su}` : su;
        "directory" !== Uu.kind ? ju.push(uu) : ju.push(...await Ou(Uu, uu))
      }
      return ju
    }
    async function Yu(uu, Eu, ju) {
      const su = bu(Eu),
        Uu = await (0, qu.h)(uu, su);
      if (!Uu) return;
      const Zu = new Set([cu(Eu), "package.json"]);
      if (ju)
        for (const qu of Object.keys(Eu.files)) Zu.add(qu);
      const Xu = await Ou(Uu),
        lu = new Set;
      for (const bu of Xu) {
        if (Zu.has(bu)) continue;
        await (0, qu.y)(uu, `${su}/${bu}`);
        const Eu = bu.split("/");
        for (let uu = 1; uu < Eu.length; uu++) lu.add(Eu.slice(0, uu).join("/"))
      }
      const fu = [...lu].sort(((uu, Eu) => Eu.split("/").length - uu.split("/").length));
      for (const bu of fu) try {
        await (0, qu.y)(uu, `${su}/${bu}`)
      } catch (Cu) {
        if (Cu instanceof DOMException && "InvalidModificationError" === Cu.name) continue;
        throw Cu
      }
    }

    function hu(uu) {
      const Eu = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const su of Object.values(Xu.h)) Eu[su.specifier] = [`.${su.typesVfsPath}`];
      const ju = [];
      for (const su of uu)
        for (const uu of Object.keys(su.files)) ju.push(Cu((0, lu.x)(su.name, uu)));
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
          paths: Eu
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...ju]
      }, null, "\t") + "\n"
    }
    async function Du(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const ju = new Set(Eu.map((uu => uu.name))),
        cu = Object.values(Xu.h).flatMap((Eu => {
          const su = Cu(Eu.typesVfsPath),
            Uu = `${bu(Eu)}/package.json`;
          return [...ju.has(Eu.name) ? Object.entries(Eu.files).map((ju => {
            let [su, Uu] = ju;
            return (0, qu.F)(uu, Cu((0, lu.x)(Eu.name, su)), Uu)
          })) : [], (0, qu.F)(uu, su, Eu.types), (0, qu.F)(uu, Uu, Nu(Eu))]
        }));
      await Promise.all([(0, qu.F)(uu, "node_modules/@bloxd/index.d.ts", su.default), (0, qu.F)(uu, "node_modules/@bloxd/globals.d.ts", Zu.d), (0, qu.F)(uu, "node_modules/@bloxd/lib.d.ts", Uu.c), (0, qu.F)(uu, "node_modules/@bloxd/package.json", fu), (0, qu.F)(uu, "tsconfig.json", hu(Eu)), ...cu]), await Promise.all(Object.values(Xu.h).map((Eu => Yu(uu, Eu, ju.has(Eu.name)))))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);