export const id = 301;
export const ids = [301];
export const modules = {
  41501: (SS, HS, gS) => {
    gS.d(HS, {
      ensureLocalBloxdTypes: () => CS
    });
    var tS = gS(4887),
      bS = gS(41381),
      XS = gS(41376),
      xS = gS(36880),
      NS = gS(36882),
      qS = gS(36898);
    const uS = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function IS(SS) {
      return SS.replace(/^\//, "")
    }

    function fS(SS) {
      return IS((0, NS.s)(SS.name, "")).replace(/\/$/, "")
    }

    function kS(SS) {
      return SS.typesVfsPath.slice(SS.typesVfsPath.lastIndexOf("/") + 1)
    }

    function aS(SS) {
      return JSON.stringify({
        name: SS.specifier,
        types: kS(SS)
      }, null, "\t") + "\n"
    }
    async function KS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const gS = [];
      for await (const [tS, bS] of SS.entries()) {
        const SS = HS ? `${HS}/${tS}` : tS;
        "directory" !== bS.kind ? gS.push(SS) : gS.push(...await KS(bS, SS))
      }
      return gS
    }
    async function jS(SS, HS, gS) {
      const tS = fS(HS),
        bS = await (0, qS.p)(SS, tS);
      if (!bS) return;
      const XS = new Set([kS(HS), "package.json"]);
      if (gS)
        for (const qS of Object.keys(HS.files)) XS.add(qS);
      const xS = await KS(bS),
        NS = new Set;
      for (const fS of xS) {
        if (XS.has(fS)) continue;
        await (0, qS.y)(SS, `${tS}/${fS}`);
        const HS = fS.split("/");
        for (let SS = 1; SS < HS.length; SS++) NS.add(HS.slice(0, SS).join("/"))
      }
      const uS = [...NS].sort(((SS, HS) => HS.split("/").length - SS.split("/").length));
      for (const fS of uS) try {
        await (0, qS.y)(SS, `${tS}/${fS}`)
      } catch (IS) {
        if (IS instanceof DOMException && "InvalidModificationError" === IS.name) continue;
        throw IS
      }
    }

    function GS(SS) {
      const HS = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const tS of Object.values(xS.g)) HS[tS.specifier] = [`.${tS.typesVfsPath}`];
      const gS = [];
      for (const tS of SS)
        for (const SS of Object.keys(tS.files)) gS.push(IS((0, NS.s)(tS.name, SS)));
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
          paths: HS
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...gS]
      }, null, "\t") + "\n"
    }
    async function CS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const gS = new Set(HS.map((SS => SS.name))),
        kS = Object.values(xS.g).flatMap((HS => {
          const tS = IS(HS.typesVfsPath),
            bS = `${fS(HS)}/package.json`;
          return [...gS.has(HS.name) ? Object.entries(HS.files).map((gS => {
            let [tS, bS] = gS;
            return (0, qS.D)(SS, IS((0, NS.s)(HS.name, tS)), bS)
          })) : [], (0, qS.D)(SS, tS, HS.types), (0, qS.D)(SS, bS, aS(HS))]
        }));
      await Promise.all([(0, qS.D)(SS, "node_modules/@bloxd/index.d.ts", tS.default), (0, qS.D)(SS, "node_modules/@bloxd/globals.d.ts", XS.c), (0, qS.D)(SS, "node_modules/@bloxd/lib.d.ts", bS.e), (0, qS.D)(SS, "node_modules/@bloxd/package.json", uS), (0, qS.D)(SS, "tsconfig.json", GS(HS)), ...kS]), await Promise.all(Object.values(xS.g).map((HS => jS(SS, HS, gS.has(HS.name)))))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);