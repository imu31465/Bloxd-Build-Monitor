export const id = 292;
export const ids = [292];
export const modules = {
  40543: (DD, CD, cD) => {
    cD.d(CD, {
      ensureLocalBloxdTypes: () => vD
    });
    var ID = cD(4550),
      pD = cD(40441),
      iD = cD(40437),
      fD = cD(36208),
      bD = cD(36213),
      QD = cD(36231);
    const wD = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function SD(DD) {
      return DD.replace(/^\//, "")
    }

    function BD(DD) {
      return SD((0, bD.v)(DD.name, "")).replace(/\/$/, "")
    }

    function yD(DD) {
      return DD.typesVfsPath.slice(DD.typesVfsPath.lastIndexOf("/") + 1)
    }

    function MD(DD) {
      return JSON.stringify({
        name: DD.specifier,
        types: yD(DD)
      }, null, "\t") + "\n"
    }
    async function tD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const cD = [];
      for await (const [ID, pD] of DD.entries()) {
        const DD = CD ? `${CD}/${ID}` : ID;
        "directory" !== pD.kind ? cD.push(DD) : cD.push(...await tD(pD, DD))
      }
      return cD
    }
    async function ZD(DD, CD, cD) {
      const ID = BD(CD),
        pD = await (0, QD.i)(DD, ID);
      if (!pD) return;
      const iD = new Set([yD(CD), "package.json"]);
      if (cD)
        for (const QD of Object.keys(CD.files)) iD.add(QD);
      const fD = await tD(pD),
        bD = new Set;
      for (const BD of fD) {
        if (iD.has(BD)) continue;
        await (0, QD.z)(DD, `${ID}/${BD}`);
        const CD = BD.split("/");
        for (let DD = 1; DD < CD.length; DD++) bD.add(CD.slice(0, DD).join("/"))
      }
      const wD = [...bD].sort(((DD, CD) => CD.split("/").length - DD.split("/").length));
      for (const BD of wD) try {
        await (0, QD.z)(DD, `${ID}/${BD}`)
      } catch (SD) {
        if (SD instanceof DOMException && "InvalidModificationError" === SD.name) continue;
        throw SD
      }
    }

    function oD(DD) {
      const CD = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const ID of Object.values(fD.e)) CD[ID.specifier] = [`.${ID.typesVfsPath}`];
      const cD = [];
      for (const ID of DD)
        for (const DD of Object.keys(ID.files)) cD.push(SD((0, bD.v)(ID.name, DD)));
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
          paths: CD
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...cD]
      }, null, "\t") + "\n"
    }
    async function vD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const cD = new Set(CD.map((DD => DD.name))),
        yD = Object.values(fD.e).flatMap((CD => {
          const ID = SD(CD.typesVfsPath),
            pD = `${BD(CD)}/package.json`;
          return [...cD.has(CD.name) ? Object.entries(CD.files).map((cD => {
            let [ID, pD] = cD;
            return (0, QD.H)(DD, SD((0, bD.v)(CD.name, ID)), pD)
          })) : [], (0, QD.H)(DD, ID, CD.types), (0, QD.H)(DD, pD, MD(CD))]
        }));
      await Promise.all([(0, QD.H)(DD, "node_modules/@bloxd/index.d.ts", ID.default), (0, QD.H)(DD, "node_modules/@bloxd/globals.d.ts", iD.d), (0, QD.H)(DD, "node_modules/@bloxd/lib.d.ts", pD.b), (0, QD.H)(DD, "node_modules/@bloxd/package.json", wD), (0, QD.H)(DD, "tsconfig.json", oD(CD)), ...yD]), await Promise.all(Object.values(fD.e).map((CD => ZD(DD, CD, cD.has(CD.name)))))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);