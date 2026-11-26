export const id = 608;
export const ids = [608];
export const modules = {
  44173: (UU, XU, zU) => {
    zU.d(XU, {
      ensureLocalBloxdTypes: () => gU
    });
    var cU = zU(5290),
      yU = zU(44088),
      QU = zU(44079),
      AU = zU(37568),
      FU = zU(37579),
      oU = zU(37591);
    const DU = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function EU(UU) {
      return UU.replace(/^\//, "")
    }

    function YU(UU) {
      return EU((0, FU.s)(UU.name, "")).replace(/\/$/, "")
    }

    function NU(UU) {
      return UU.typesVfsPath.slice(UU.typesVfsPath.lastIndexOf("/") + 1)
    }

    function IU(UU) {
      return JSON.stringify({
        name: UU.specifier,
        types: NU(UU)
      }, null, "\t") + "\n"
    }
    async function pU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const zU = [];
      for await (const [cU, yU] of UU.entries()) {
        const UU = XU ? `${XU}/${cU}` : cU;
        "directory" !== yU.kind ? zU.push(UU) : zU.push(...await pU(yU, UU))
      }
      return zU
    }
    async function aU(UU, XU, zU) {
      const cU = YU(XU),
        yU = await (0, oU.k)(UU, cU);
      if (!yU) return;
      const QU = new Set([NU(XU), "package.json"]);
      if (zU)
        for (const oU of Object.keys(XU.files)) QU.add(oU);
      const AU = await pU(yU),
        FU = new Set;
      for (const YU of AU) {
        if (QU.has(YU)) continue;
        await (0, oU.B)(UU, `${cU}/${YU}`);
        const XU = YU.split("/");
        for (let UU = 1; UU < XU.length; UU++) FU.add(XU.slice(0, UU).join("/"))
      }
      const DU = [...FU].sort(((UU, XU) => XU.split("/").length - UU.split("/").length));
      for (const YU of DU) try {
        await (0, oU.B)(UU, `${cU}/${YU}`)
      } catch (EU) {
        if (EU instanceof DOMException && "InvalidModificationError" === EU.name) continue;
        throw EU
      }
    }

    function tU(UU) {
      const XU = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const cU of Object.values(AU.i)) XU[cU.specifier] = [`.${cU.typesVfsPath}`];
      const zU = [];
      for (const cU of UU)
        for (const UU of Object.keys(cU.files)) zU.push(EU((0, FU.s)(cU.name, UU)));
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
          paths: XU
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...zU]
      }, null, "\t") + "\n"
    }
    async function gU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const zU = new Set(XU.map((UU => UU.name))),
        NU = Object.values(AU.i).flatMap((XU => {
          const cU = EU(XU.typesVfsPath),
            yU = `${YU(XU)}/package.json`;
          return [...zU.has(XU.name) ? Object.entries(XU.files).map((zU => {
            let [cU, yU] = zU;
            return (0, oU.H)(UU, EU((0, FU.s)(XU.name, cU)), yU)
          })) : [], (0, oU.H)(UU, cU, XU.types), (0, oU.H)(UU, yU, IU(XU))]
        }));
      await Promise.all([(0, oU.H)(UU, "node_modules/@bloxd/index.d.ts", cU.default), (0, oU.H)(UU, "node_modules/@bloxd/globals.d.ts", QU.e), (0, oU.H)(UU, "node_modules/@bloxd/lib.d.ts", yU.b), (0, oU.H)(UU, "node_modules/@bloxd/package.json", DU), (0, oU.H)(UU, "tsconfig.json", tU(XU)), ...NU]), await Promise.all(Object.values(AU.i).map((XU => aU(UU, XU, zU.has(XU.name)))))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);