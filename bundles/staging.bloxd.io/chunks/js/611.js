export const id = 611;
export const ids = [611];
export const modules = {
  44150: (MM, rM, iM) => {
    iM.d(rM, {
      ensureLocalBloxdTypes: () => yM
    });
    var OM = iM(5169),
      SM = iM(44054),
      jM = iM(44052),
      aM = iM(37799),
      PM = iM(37802),
      nM = iM(37810);
    const QM = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function zM(MM) {
      return MM.replace(/^\//, "")
    }

    function LM(MM) {
      return zM((0, PM.v)(MM.name, "")).replace(/\/$/, "")
    }

    function mM(MM) {
      return MM.typesVfsPath.slice(MM.typesVfsPath.lastIndexOf("/") + 1)
    }

    function HM(MM) {
      return JSON.stringify({
        name: MM.specifier,
        types: mM(MM)
      }, null, "\t") + "\n"
    }
    async function hM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const iM = [];
      for await (const [OM, SM] of MM.entries()) {
        const MM = rM ? `${rM}/${OM}` : OM;
        "directory" !== SM.kind ? iM.push(MM) : iM.push(...await hM(SM, MM))
      }
      return iM
    }
    async function JM(MM, rM, iM) {
      const OM = LM(rM),
        SM = await (0, nM.n)(MM, OM);
      if (!SM) return;
      const jM = new Set([mM(rM), "package.json"]);
      if (iM)
        for (const nM of Object.keys(rM.files)) jM.add(nM);
      const aM = await hM(SM),
        PM = new Set;
      for (const LM of aM) {
        if (jM.has(LM)) continue;
        await (0, nM.H)(MM, `${OM}/${LM}`);
        const rM = LM.split("/");
        for (let MM = 1; MM < rM.length; MM++) PM.add(rM.slice(0, MM).join("/"))
      }
      const QM = [...PM].sort(((MM, rM) => rM.split("/").length - MM.split("/").length));
      for (const LM of QM) try {
        await (0, nM.H)(MM, `${OM}/${LM}`)
      } catch (zM) {
        if (zM instanceof DOMException && "InvalidModificationError" === zM.name) continue;
        throw zM
      }
    }

    function dM(MM) {
      const rM = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const OM of Object.values(aM.i)) rM[OM.specifier] = [`.${OM.typesVfsPath}`];
      const iM = [];
      for (const OM of MM)
        for (const MM of Object.keys(OM.files)) iM.push(zM((0, PM.v)(OM.name, MM)));
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
          paths: rM
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...iM]
      }, null, "\t") + "\n"
    }
    async function yM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const iM = new Set(rM.map((MM => MM.name))),
        mM = Object.values(aM.i).flatMap((rM => {
          const OM = zM(rM.typesVfsPath),
            SM = `${LM(rM)}/package.json`;
          return [...iM.has(rM.name) ? Object.entries(rM.files).map((iM => {
            let [OM, SM] = iM;
            return (0, nM.Q)(MM, zM((0, PM.v)(rM.name, OM)), SM)
          })) : [], (0, nM.Q)(MM, OM, rM.types), (0, nM.Q)(MM, SM, HM(rM))]
        }));
      await Promise.all([(0, nM.Q)(MM, "node_modules/@bloxd/index.d.ts", OM.default), (0, nM.Q)(MM, "node_modules/@bloxd/globals.d.ts", jM.d), (0, nM.Q)(MM, "node_modules/@bloxd/lib.d.ts", SM.b), (0, nM.Q)(MM, "node_modules/@bloxd/package.json", QM), (0, nM.Q)(MM, "tsconfig.json", dM(rM)), ...mM]), await Promise.all(Object.values(aM.i).map((rM => JM(MM, rM, iM.has(rM.name)))))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);