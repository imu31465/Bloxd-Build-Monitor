export const id = 301;
export const ids = [301];
export const modules = {
  41387: (DD, zD, wD) => {
    wD.d(zD, {
      ensureLocalBloxdTypes: () => hD
    });
    var pD = wD(4782),
      sD = wD(41275),
      KD = wD(41269),
      rD = wD(36813),
      LD = wD(36819),
      cD = wD(36833);
    const gD = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function RD(DD) {
      return DD.replace(/^\//, "")
    }

    function AD(DD) {
      return RD((0, LD.u)(DD.name, "")).replace(/\/$/, "")
    }

    function UD(DD) {
      return DD.typesVfsPath.slice(DD.typesVfsPath.lastIndexOf("/") + 1)
    }

    function fD(DD) {
      return JSON.stringify({
        name: DD.specifier,
        types: UD(DD)
      }, null, "\t") + "\n"
    }
    async function ID(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const wD = [];
      for await (const [pD, sD] of DD.entries()) {
        const DD = zD ? `${zD}/${pD}` : pD;
        "directory" !== sD.kind ? wD.push(DD) : wD.push(...await ID(sD, DD))
      }
      return wD
    }
    async function BD(DD, zD, wD) {
      const pD = AD(zD),
        sD = await (0, cD.h)(DD, pD);
      if (!sD) return;
      const KD = new Set([UD(zD), "package.json"]);
      if (wD)
        for (const cD of Object.keys(zD.files)) KD.add(cD);
      const rD = await ID(sD),
        LD = new Set;
      for (const AD of rD) {
        if (KD.has(AD)) continue;
        await (0, cD.D)(DD, `${pD}/${AD}`);
        const zD = AD.split("/");
        for (let DD = 1; DD < zD.length; DD++) LD.add(zD.slice(0, DD).join("/"))
      }
      const gD = [...LD].sort(((DD, zD) => zD.split("/").length - DD.split("/").length));
      for (const AD of gD) try {
        await (0, cD.D)(DD, `${pD}/${AD}`)
      } catch (RD) {
        if (RD instanceof DOMException && "InvalidModificationError" === RD.name) continue;
        throw RD
      }
    }

    function GD(DD) {
      const zD = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const pD of Object.values(rD.h)) zD[pD.specifier] = [`.${pD.typesVfsPath}`];
      const wD = [];
      for (const pD of DD)
        for (const DD of Object.keys(pD.files)) wD.push(RD((0, LD.u)(pD.name, DD)));
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
          paths: zD
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...wD]
      }, null, "\t") + "\n"
    }
    async function hD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const wD = new Set(zD.map((DD => DD.name))),
        UD = Object.values(rD.h).flatMap((zD => {
          const pD = RD(zD.typesVfsPath),
            sD = `${AD(zD)}/package.json`;
          return [...wD.has(zD.name) ? Object.entries(zD.files).map((wD => {
            let [pD, sD] = wD;
            return (0, cD.J)(DD, RD((0, LD.u)(zD.name, pD)), sD)
          })) : [], (0, cD.J)(DD, pD, zD.types), (0, cD.J)(DD, sD, fD(zD))]
        }));
      await Promise.all([(0, cD.J)(DD, "node_modules/@bloxd/index.d.ts", pD.default), (0, cD.J)(DD, "node_modules/@bloxd/globals.d.ts", KD.d), (0, cD.J)(DD, "node_modules/@bloxd/lib.d.ts", sD.e), (0, cD.J)(DD, "node_modules/@bloxd/package.json", gD), (0, cD.J)(DD, "tsconfig.json", GD(zD)), ...UD]), await Promise.all(Object.values(rD.h).map((zD => BD(DD, zD, wD.has(zD.name)))))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);