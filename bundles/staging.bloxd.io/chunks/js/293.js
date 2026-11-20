export const id = 293;
export const ids = [293];
export const modules = {
  41090: (TT, kT, cT) => {
    cT.d(kT, {
      ensureLocalBloxdTypes: () => NT
    });
    var lT = cT(4725),
      MT = cT(40990),
      KT = cT(40988),
      OT = cT(36682),
      yT = cT(36687),
      fT = cT(36705);
    const xT = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function IT(TT) {
      return TT.replace(/^\//, "")
    }

    function AT(TT) {
      return IT((0, yT.t)(TT.name, "")).replace(/\/$/, "")
    }

    function CT(TT) {
      return TT.typesVfsPath.slice(TT.typesVfsPath.lastIndexOf("/") + 1)
    }

    function jT(TT) {
      return JSON.stringify({
        name: TT.specifier,
        types: CT(TT)
      }, null, "\t") + "\n"
    }
    async function vT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const cT = [];
      for await (const [lT, MT] of TT.entries()) {
        const TT = kT ? `${kT}/${lT}` : lT;
        "directory" !== MT.kind ? cT.push(TT) : cT.push(...await vT(MT, TT))
      }
      return cT
    }
    async function tT(TT, kT, cT) {
      const lT = AT(kT),
        MT = await (0, fT.i)(TT, lT);
      if (!MT) return;
      const KT = new Set([CT(kT), "package.json"]);
      if (cT)
        for (const fT of Object.keys(kT.files)) KT.add(fT);
      const OT = await vT(MT),
        yT = new Set;
      for (const AT of OT) {
        if (KT.has(AT)) continue;
        await (0, fT.z)(TT, `${lT}/${AT}`);
        const kT = AT.split("/");
        for (let TT = 1; TT < kT.length; TT++) yT.add(kT.slice(0, TT).join("/"))
      }
      const xT = [...yT].sort(((TT, kT) => kT.split("/").length - TT.split("/").length));
      for (const AT of xT) try {
        await (0, fT.z)(TT, `${lT}/${AT}`)
      } catch (IT) {
        if (IT instanceof DOMException && "InvalidModificationError" === IT.name) continue;
        throw IT
      }
    }

    function hT(TT) {
      const kT = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const lT of Object.values(OT.g)) kT[lT.specifier] = [`.${lT.typesVfsPath}`];
      const cT = [];
      for (const lT of TT)
        for (const TT of Object.keys(lT.files)) cT.push(IT((0, yT.t)(lT.name, TT)));
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
          paths: kT
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...cT]
      }, null, "\t") + "\n"
    }
    async function NT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const cT = new Set(kT.map((TT => TT.name))),
        CT = Object.values(OT.g).flatMap((kT => {
          const lT = IT(kT.typesVfsPath),
            MT = `${AT(kT)}/package.json`;
          return [...cT.has(kT.name) ? Object.entries(kT.files).map((cT => {
            let [lT, MT] = cT;
            return (0, fT.J)(TT, IT((0, yT.t)(kT.name, lT)), MT)
          })) : [], (0, fT.J)(TT, lT, kT.types), (0, fT.J)(TT, MT, jT(kT))]
        }));
      await Promise.all([(0, fT.J)(TT, "node_modules/@bloxd/index.d.ts", lT.default), (0, fT.J)(TT, "node_modules/@bloxd/globals.d.ts", KT.b), (0, fT.J)(TT, "node_modules/@bloxd/lib.d.ts", MT.d), (0, fT.J)(TT, "node_modules/@bloxd/package.json", xT), (0, fT.J)(TT, "tsconfig.json", hT(kT)), ...CT]), await Promise.all(Object.values(OT.g).map((kT => tT(TT, kT, cT.has(kT.name)))))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);