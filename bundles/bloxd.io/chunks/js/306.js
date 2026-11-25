export const id = 306;
export const ids = [306];
export const modules = {
  41904: (GG, bG, ZG) => {
    ZG.d(bG, {
      ensureLocalBloxdTypes: () => JG
    });
    var wG = ZG(4779),
      SG = ZG(41801),
      LG = ZG(41795),
      yG = ZG(37197),
      kG = ZG(37200),
      UG = ZG(37212);
    const YG = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function VG(GG) {
      return GG.replace(/^\//, "")
    }

    function pG(GG) {
      return VG((0, kG.t)(GG.name, "")).replace(/\/$/, "")
    }

    function fG(GG) {
      return GG.typesVfsPath.slice(GG.typesVfsPath.lastIndexOf("/") + 1)
    }

    function QG(GG) {
      return JSON.stringify({
        name: GG.specifier,
        types: fG(GG)
      }, null, "\t") + "\n"
    }
    async function KG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const ZG = [];
      for await (const [wG, SG] of GG.entries()) {
        const GG = bG ? `${bG}/${wG}` : wG;
        "directory" !== SG.kind ? ZG.push(GG) : ZG.push(...await KG(SG, GG))
      }
      return ZG
    }
    async function hG(GG, bG, ZG) {
      const wG = pG(bG),
        SG = await (0, UG.o)(GG, wG);
      if (!SG) return;
      const LG = new Set([fG(bG), "package.json"]);
      if (ZG)
        for (const UG of Object.keys(bG.files)) LG.add(UG);
      const yG = await KG(SG),
        kG = new Set;
      for (const pG of yG) {
        if (LG.has(pG)) continue;
        await (0, UG.K)(GG, `${wG}/${pG}`);
        const bG = pG.split("/");
        for (let GG = 1; GG < bG.length; GG++) kG.add(bG.slice(0, GG).join("/"))
      }
      const YG = [...kG].sort(((GG, bG) => bG.split("/").length - GG.split("/").length));
      for (const pG of YG) try {
        await (0, UG.K)(GG, `${wG}/${pG}`)
      } catch (VG) {
        if (VG instanceof DOMException && "InvalidModificationError" === VG.name) continue;
        throw VG
      }
    }

    function dG(GG) {
      const bG = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const wG of Object.values(yG.h)) bG[wG.specifier] = [`.${wG.typesVfsPath}`];
      const ZG = [];
      for (const wG of GG)
        for (const GG of Object.keys(wG.files)) ZG.push(VG((0, kG.t)(wG.name, GG)));
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
          paths: bG
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...ZG]
      }, null, "\t") + "\n"
    }
    async function JG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const ZG = new Set(bG.map((GG => GG.name))),
        fG = Object.values(yG.h).flatMap((bG => {
          const wG = VG(bG.typesVfsPath),
            SG = `${pG(bG)}/package.json`;
          return [...ZG.has(bG.name) ? Object.entries(bG.files).map((ZG => {
            let [wG, SG] = ZG;
            return (0, UG.S)(GG, VG((0, kG.t)(bG.name, wG)), SG)
          })) : [], (0, UG.S)(GG, wG, bG.types), (0, UG.S)(GG, SG, QG(bG))]
        }));
      await Promise.all([(0, UG.S)(GG, "node_modules/@bloxd/index.d.ts", wG.default), (0, UG.S)(GG, "node_modules/@bloxd/globals.d.ts", LG.d), (0, UG.S)(GG, "node_modules/@bloxd/lib.d.ts", SG.e), (0, UG.S)(GG, "node_modules/@bloxd/package.json", YG), (0, UG.S)(GG, "tsconfig.json", dG(bG)), ...fG]), await Promise.all(Object.values(yG.h).map((bG => hG(GG, bG, ZG.has(bG.name)))))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);