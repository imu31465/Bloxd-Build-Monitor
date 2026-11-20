export const id = 292;
export const ids = [292];
export const modules = {
  41073: (uu, Ru, yu) => {
    yu.d(Ru, {
      ensureLocalBloxdTypes: () => Wu
    });
    var Eu = yu(4532),
      Ku = yu(40982),
      Qu = yu(40979),
      mu = yu(36619),
      Ju = yu(36625),
      Nu = yu(36642);
    const Xu = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Vu(uu) {
      return uu.replace(/^\//, "")
    }

    function ru(uu) {
      return Vu((0, Ju.v)(uu.name, "")).replace(/\/$/, "")
    }

    function Bu(uu) {
      return uu.typesVfsPath.slice(uu.typesVfsPath.lastIndexOf("/") + 1)
    }

    function xu(uu) {
      return JSON.stringify({
        name: uu.specifier,
        types: Bu(uu)
      }, null, "\t") + "\n"
    }
    async function Su(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const yu = [];
      for await (const [Eu, Ku] of uu.entries()) {
        const uu = Ru ? `${Ru}/${Eu}` : Eu;
        "directory" !== Ku.kind ? yu.push(uu) : yu.push(...await Su(Ku, uu))
      }
      return yu
    }
    async function pu(uu, Ru, yu) {
      const Eu = ru(Ru),
        Ku = await (0, Nu.l)(uu, Eu);
      if (!Ku) return;
      const Qu = new Set([Bu(Ru), "package.json"]);
      if (yu)
        for (const Nu of Object.keys(Ru.files)) Qu.add(Nu);
      const mu = await Su(Ku),
        Ju = new Set;
      for (const ru of mu) {
        if (Qu.has(ru)) continue;
        await (0, Nu.H)(uu, `${Eu}/${ru}`);
        const Ru = ru.split("/");
        for (let uu = 1; uu < Ru.length; uu++) Ju.add(Ru.slice(0, uu).join("/"))
      }
      const Xu = [...Ju].sort(((uu, Ru) => Ru.split("/").length - uu.split("/").length));
      for (const ru of Xu) try {
        await (0, Nu.H)(uu, `${Eu}/${ru}`)
      } catch (Vu) {
        if (Vu instanceof DOMException && "InvalidModificationError" === Vu.name) continue;
        throw Vu
      }
    }

    function Tu(uu) {
      const Ru = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Eu of Object.values(mu.h)) Ru[Eu.specifier] = [`.${Eu.typesVfsPath}`];
      const yu = [];
      for (const Eu of uu)
        for (const uu of Object.keys(Eu.files)) yu.push(Vu((0, Ju.v)(Eu.name, uu)));
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
          paths: Ru
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...yu]
      }, null, "\t") + "\n"
    }
    async function Wu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const yu = new Set(Ru.map((uu => uu.name))),
        Bu = Object.values(mu.h).flatMap((Ru => {
          const Eu = Vu(Ru.typesVfsPath),
            Ku = `${ru(Ru)}/package.json`;
          return [...yu.has(Ru.name) ? Object.entries(Ru.files).map((yu => {
            let [Eu, Ku] = yu;
            return (0, Nu.M)(uu, Vu((0, Ju.v)(Ru.name, Eu)), Ku)
          })) : [], (0, Nu.M)(uu, Eu, Ru.types), (0, Nu.M)(uu, Ku, xu(Ru))]
        }));
      await Promise.all([(0, Nu.M)(uu, "node_modules/@bloxd/index.d.ts", Eu.default), (0, Nu.M)(uu, "node_modules/@bloxd/globals.d.ts", Qu.d), (0, Nu.M)(uu, "node_modules/@bloxd/lib.d.ts", Ku.c), (0, Nu.M)(uu, "node_modules/@bloxd/package.json", Xu), (0, Nu.M)(uu, "tsconfig.json", Tu(Ru)), ...Bu]), await Promise.all(Object.values(mu.h).map((Ru => pu(uu, Ru, yu.has(Ru.name)))))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);