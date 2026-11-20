export const id = 292;
export const ids = [292];
export const modules = {
  40878: (UU, RU, gU) => {
    gU.d(RU, {
      ensureLocalBloxdTypes: () => eU
    });
    var tU = gU(4417),
      pU = gU(40779),
      EU = gU(40774),
      PU = gU(36397),
      TU = gU(36406),
      qU = gU(36423);
    const KU = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function cU(UU) {
      return UU.replace(/^\//, "")
    }

    function GU(UU) {
      return cU((0, TU.u)(UU.name, "")).replace(/\/$/, "")
    }

    function jU(UU) {
      return UU.typesVfsPath.slice(UU.typesVfsPath.lastIndexOf("/") + 1)
    }

    function uU(UU) {
      return JSON.stringify({
        name: UU.specifier,
        types: jU(UU)
      }, null, "\t") + "\n"
    }
    async function CU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const gU = [];
      for await (const [tU, pU] of UU.entries()) {
        const UU = RU ? `${RU}/${tU}` : tU;
        "directory" !== pU.kind ? gU.push(UU) : gU.push(...await CU(pU, UU))
      }
      return gU
    }
    async function hU(UU, RU, gU) {
      const tU = GU(RU),
        pU = await (0, qU.j)(UU, tU);
      if (!pU) return;
      const EU = new Set([jU(RU), "package.json"]);
      if (gU)
        for (const qU of Object.keys(RU.files)) EU.add(qU);
      const PU = await CU(pU),
        TU = new Set;
      for (const GU of PU) {
        if (EU.has(GU)) continue;
        await (0, qU.D)(UU, `${tU}/${GU}`);
        const RU = GU.split("/");
        for (let UU = 1; UU < RU.length; UU++) TU.add(RU.slice(0, UU).join("/"))
      }
      const KU = [...TU].sort(((UU, RU) => RU.split("/").length - UU.split("/").length));
      for (const GU of KU) try {
        await (0, qU.D)(UU, `${tU}/${GU}`)
      } catch (cU) {
        if (cU instanceof DOMException && "InvalidModificationError" === cU.name) continue;
        throw cU
      }
    }

    function QU(UU) {
      const RU = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const tU of Object.values(PU.f)) RU[tU.specifier] = [`.${tU.typesVfsPath}`];
      const gU = [];
      for (const tU of UU)
        for (const UU of Object.keys(tU.files)) gU.push(cU((0, TU.u)(tU.name, UU)));
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
          paths: RU
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...gU]
      }, null, "\t") + "\n"
    }
    async function eU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const gU = new Set(RU.map((UU => UU.name))),
        jU = Object.values(PU.f).flatMap((RU => {
          const tU = cU(RU.typesVfsPath),
            pU = `${GU(RU)}/package.json`;
          return [...gU.has(RU.name) ? Object.entries(RU.files).map((gU => {
            let [tU, pU] = gU;
            return (0, qU.H)(UU, cU((0, TU.u)(RU.name, tU)), pU)
          })) : [], (0, qU.H)(UU, tU, RU.types), (0, qU.H)(UU, pU, uU(RU))]
        }));
      await Promise.all([(0, qU.H)(UU, "node_modules/@bloxd/index.d.ts", tU.default), (0, qU.H)(UU, "node_modules/@bloxd/globals.d.ts", EU.c), (0, qU.H)(UU, "node_modules/@bloxd/lib.d.ts", pU.c), (0, qU.H)(UU, "node_modules/@bloxd/package.json", KU), (0, qU.H)(UU, "tsconfig.json", QU(RU)), ...jU]), await Promise.all(Object.values(PU.f).map((RU => hU(UU, RU, gU.has(RU.name)))))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);