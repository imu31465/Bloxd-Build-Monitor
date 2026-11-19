export const id = 292;
export const ids = [292];
export const modules = {
  40305: (TT, oT, IT) => {
    IT.d(oT, {
      ensureLocalBloxdTypes: () => rT
    });
    var iT = IT(4243),
      zT = IT(40194),
      kT = IT(40191),
      WT = IT(35808),
      XT = IT(35815),
      BT = IT(35830);
    const FT = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function ST(TT) {
      return TT.replace(/^\//, "")
    }

    function DT(TT) {
      return ST((0, XT.q)(TT.name, "")).replace(/\/$/, "")
    }

    function LT(TT) {
      return TT.typesVfsPath.slice(TT.typesVfsPath.lastIndexOf("/") + 1)
    }

    function xT(TT) {
      return JSON.stringify({
        name: TT.specifier,
        types: LT(TT)
      }, null, "\t") + "\n"
    }
    async function cT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const IT = [];
      for await (const [iT, zT] of TT.entries()) {
        const TT = oT ? `${oT}/${iT}` : iT;
        "directory" !== zT.kind ? IT.push(TT) : IT.push(...await cT(zT, TT))
      }
      return IT
    }
    async function KT(TT, oT, IT) {
      const iT = DT(oT),
        zT = await (0, BT.l)(TT, iT);
      if (!zT) return;
      const kT = new Set([LT(oT), "package.json"]);
      if (IT)
        for (const BT of Object.keys(oT.files)) kT.add(BT);
      const WT = await cT(zT),
        XT = new Set;
      for (const DT of WT) {
        if (kT.has(DT)) continue;
        await (0, BT.y)(TT, `${iT}/${DT}`);
        const oT = DT.split("/");
        for (let TT = 1; TT < oT.length; TT++) XT.add(oT.slice(0, TT).join("/"))
      }
      const FT = [...XT].sort(((TT, oT) => oT.split("/").length - TT.split("/").length));
      for (const DT of FT) try {
        await (0, BT.y)(TT, `${iT}/${DT}`)
      } catch (ST) {
        if (ST instanceof DOMException && "InvalidModificationError" === ST.name) continue;
        throw ST
      }
    }

    function MT(TT) {
      const oT = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const iT of Object.values(WT.e)) oT[iT.specifier] = [`.${iT.typesVfsPath}`];
      const IT = [];
      for (const iT of TT)
        for (const TT of Object.keys(iT.files)) IT.push(ST((0, XT.q)(iT.name, TT)));
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
          paths: oT
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...IT]
      }, null, "\t") + "\n"
    }
    async function rT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const IT = new Set(oT.map((TT => TT.name))),
        LT = Object.values(WT.e).flatMap((oT => {
          const iT = ST(oT.typesVfsPath),
            zT = `${DT(oT)}/package.json`;
          return [...IT.has(oT.name) ? Object.entries(oT.files).map((IT => {
            let [iT, zT] = IT;
            return (0, BT.I)(TT, ST((0, XT.q)(oT.name, iT)), zT)
          })) : [], (0, BT.I)(TT, iT, oT.types), (0, BT.I)(TT, zT, xT(oT))]
        }));
      await Promise.all([(0, BT.I)(TT, "node_modules/@bloxd/index.d.ts", iT.default), (0, BT.I)(TT, "node_modules/@bloxd/globals.d.ts", kT.d), (0, BT.I)(TT, "node_modules/@bloxd/lib.d.ts", zT.d), (0, BT.I)(TT, "node_modules/@bloxd/package.json", FT), (0, BT.I)(TT, "tsconfig.json", MT(oT)), ...LT]), await Promise.all(Object.values(WT.e).map((oT => KT(TT, oT, IT.has(oT.name)))))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);