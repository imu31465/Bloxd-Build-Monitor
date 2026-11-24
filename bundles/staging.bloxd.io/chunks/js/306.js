export const id = 306;
export const ids = [306];
export const modules = {
  41625: (TT, UT, mT) => {
    mT.d(UT, {
      ensureLocalBloxdTypes: () => vT
    });
    var WT = mT(4866),
      zT = mT(41535),
      MT = mT(41530),
      gT = mT(36949),
      nT = mT(36955),
      HT = mT(36965);
    const kT = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function jT(TT) {
      return TT.replace(/^\//, "")
    }

    function lT(TT) {
      return jT((0, nT.r)(TT.name, "")).replace(/\/$/, "")
    }

    function LT(TT) {
      return TT.typesVfsPath.slice(TT.typesVfsPath.lastIndexOf("/") + 1)
    }

    function pT(TT) {
      return JSON.stringify({
        name: TT.specifier,
        types: LT(TT)
      }, null, "\t") + "\n"
    }
    async function BT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const mT = [];
      for await (const [WT, zT] of TT.entries()) {
        const TT = UT ? `${UT}/${WT}` : WT;
        "directory" !== zT.kind ? mT.push(TT) : mT.push(...await BT(zT, TT))
      }
      return mT
    }
    async function ZT(TT, UT, mT) {
      const WT = lT(UT),
        zT = await (0, HT.g)(TT, WT);
      if (!zT) return;
      const MT = new Set([LT(UT), "package.json"]);
      if (mT)
        for (const HT of Object.keys(UT.files)) MT.add(HT);
      const gT = await BT(zT),
        nT = new Set;
      for (const lT of gT) {
        if (MT.has(lT)) continue;
        await (0, HT.A)(TT, `${WT}/${lT}`);
        const UT = lT.split("/");
        for (let TT = 1; TT < UT.length; TT++) nT.add(UT.slice(0, TT).join("/"))
      }
      const kT = [...nT].sort(((TT, UT) => UT.split("/").length - TT.split("/").length));
      for (const lT of kT) try {
        await (0, HT.A)(TT, `${WT}/${lT}`)
      } catch (jT) {
        if (jT instanceof DOMException && "InvalidModificationError" === jT.name) continue;
        throw jT
      }
    }

    function cT(TT) {
      const UT = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const WT of Object.values(gT.e)) UT[WT.specifier] = [`.${WT.typesVfsPath}`];
      const mT = [];
      for (const WT of TT)
        for (const TT of Object.keys(WT.files)) mT.push(jT((0, nT.r)(WT.name, TT)));
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
          paths: UT
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...mT]
      }, null, "\t") + "\n"
    }
    async function vT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const mT = new Set(UT.map((TT => TT.name))),
        LT = Object.values(gT.e).flatMap((UT => {
          const WT = jT(UT.typesVfsPath),
            zT = `${lT(UT)}/package.json`;
          return [...mT.has(UT.name) ? Object.entries(UT.files).map((mT => {
            let [WT, zT] = mT;
            return (0, HT.I)(TT, jT((0, nT.r)(UT.name, WT)), zT)
          })) : [], (0, HT.I)(TT, WT, UT.types), (0, HT.I)(TT, zT, pT(UT))]
        }));
      await Promise.all([(0, HT.I)(TT, "node_modules/@bloxd/index.d.ts", WT.default), (0, HT.I)(TT, "node_modules/@bloxd/globals.d.ts", MT.d), (0, HT.I)(TT, "node_modules/@bloxd/lib.d.ts", zT.b), (0, HT.I)(TT, "node_modules/@bloxd/package.json", kT), (0, HT.I)(TT, "tsconfig.json", cT(UT)), ...LT]), await Promise.all(Object.values(gT.e).map((UT => ZT(TT, UT, mT.has(UT.name)))))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);