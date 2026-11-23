export const id = 301;
export const ids = [301];
export const modules = {
  41289: (CC, zC, ZC) => {
    ZC.d(zC, {
      ensureLocalBloxdTypes: () => PC
    });
    var QC = ZC(4696),
      wC = ZC(41188),
      bC = ZC(41179),
      nC = ZC(36714),
      fC = ZC(36721),
      oC = ZC(36735);
    const qC = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function FC(CC) {
      return CC.replace(/^\//, "")
    }

    function WC(CC) {
      return FC((0, fC.t)(CC.name, "")).replace(/\/$/, "")
    }

    function NC(CC) {
      return CC.typesVfsPath.slice(CC.typesVfsPath.lastIndexOf("/") + 1)
    }

    function MC(CC) {
      return JSON.stringify({
        name: CC.specifier,
        types: NC(CC)
      }, null, "\t") + "\n"
    }
    async function gC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const ZC = [];
      for await (const [QC, wC] of CC.entries()) {
        const CC = zC ? `${zC}/${QC}` : QC;
        "directory" !== wC.kind ? ZC.push(CC) : ZC.push(...await gC(wC, CC))
      }
      return ZC
    }
    async function SC(CC, zC, ZC) {
      const QC = WC(zC),
        wC = await (0, oC.k)(CC, QC);
      if (!wC) return;
      const bC = new Set([NC(zC), "package.json"]);
      if (ZC)
        for (const oC of Object.keys(zC.files)) bC.add(oC);
      const nC = await gC(wC),
        fC = new Set;
      for (const WC of nC) {
        if (bC.has(WC)) continue;
        await (0, oC.y)(CC, `${QC}/${WC}`);
        const zC = WC.split("/");
        for (let CC = 1; CC < zC.length; CC++) fC.add(zC.slice(0, CC).join("/"))
      }
      const qC = [...fC].sort(((CC, zC) => zC.split("/").length - CC.split("/").length));
      for (const WC of qC) try {
        await (0, oC.y)(CC, `${QC}/${WC}`)
      } catch (FC) {
        if (FC instanceof DOMException && "InvalidModificationError" === FC.name) continue;
        throw FC
      }
    }

    function pC(CC) {
      const zC = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const QC of Object.values(nC.c)) zC[QC.specifier] = [`.${QC.typesVfsPath}`];
      const ZC = [];
      for (const QC of CC)
        for (const CC of Object.keys(QC.files)) ZC.push(FC((0, fC.t)(QC.name, CC)));
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
          paths: zC
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...ZC]
      }, null, "\t") + "\n"
    }
    async function PC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const ZC = new Set(zC.map((CC => CC.name))),
        NC = Object.values(nC.c).flatMap((zC => {
          const QC = FC(zC.typesVfsPath),
            wC = `${WC(zC)}/package.json`;
          return [...ZC.has(zC.name) ? Object.entries(zC.files).map((ZC => {
            let [QC, wC] = ZC;
            return (0, oC.F)(CC, FC((0, fC.t)(zC.name, QC)), wC)
          })) : [], (0, oC.F)(CC, QC, zC.types), (0, oC.F)(CC, wC, MC(zC))]
        }));
      await Promise.all([(0, oC.F)(CC, "node_modules/@bloxd/index.d.ts", QC.default), (0, oC.F)(CC, "node_modules/@bloxd/globals.d.ts", bC.b), (0, oC.F)(CC, "node_modules/@bloxd/lib.d.ts", wC.d), (0, oC.F)(CC, "node_modules/@bloxd/package.json", qC), (0, oC.F)(CC, "tsconfig.json", pC(zC)), ...NC]), await Promise.all(Object.values(nC.c).map((zC => SC(CC, zC, ZC.has(zC.name)))))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);