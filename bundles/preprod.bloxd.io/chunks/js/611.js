export const id = 611;
export const ids = [611];
export const modules = {
  44977: (HH, BH, LH) => {
    LH.d(BH, {
      ensureLocalBloxdTypes: () => MH
    });
    var AH = LH(5240),
      rH = LH(44874),
      SH = LH(44871),
      hH = LH(37708),
      tH = LH(37724),
      zH = LH(37734);
    const CH = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function EH(HH) {
      return HH.replace(/^\//, "")
    }

    function XH(HH) {
      return EH((0, tH.q)(HH.name, "")).replace(/\/$/, "")
    }

    function GH(HH) {
      return HH.typesVfsPath.slice(HH.typesVfsPath.lastIndexOf("/") + 1)
    }

    function YH(HH) {
      return JSON.stringify({
        name: HH.specifier,
        types: GH(HH)
      }, null, "\t") + "\n"
    }
    async function uH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const LH = [];
      for await (const [AH, rH] of HH.entries()) {
        const HH = BH ? `${BH}/${AH}` : AH;
        "directory" !== rH.kind ? LH.push(HH) : LH.push(...await uH(rH, HH))
      }
      return LH
    }
    async function QH(HH, BH, LH) {
      const AH = XH(BH),
        rH = await (0, zH.l)(HH, AH);
      if (!rH) return;
      const SH = new Set([GH(BH), "package.json"]);
      if (LH)
        for (const zH of Object.keys(BH.files)) SH.add(zH);
      const hH = await uH(rH),
        tH = new Set;
      for (const XH of hH) {
        if (SH.has(XH)) continue;
        await (0, zH.x)(HH, `${AH}/${XH}`);
        const BH = XH.split("/");
        for (let HH = 1; HH < BH.length; HH++) tH.add(BH.slice(0, HH).join("/"))
      }
      const CH = [...tH].sort(((HH, BH) => BH.split("/").length - HH.split("/").length));
      for (const XH of CH) try {
        await (0, zH.x)(HH, `${AH}/${XH}`)
      } catch (EH) {
        if (EH instanceof DOMException && "InvalidModificationError" === EH.name) continue;
        throw EH
      }
    }

    function WH(HH) {
      const BH = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const AH of Object.values(hH.g)) BH[AH.specifier] = [`.${AH.typesVfsPath}`];
      const LH = [];
      for (const AH of HH)
        for (const HH of Object.keys(AH.files)) LH.push(EH((0, tH.q)(AH.name, HH)));
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
          paths: BH
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...LH]
      }, null, "\t") + "\n"
    }
    async function MH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const LH = new Set(BH.map((HH => HH.name))),
        GH = Object.values(hH.g).flatMap((BH => {
          const AH = EH(BH.typesVfsPath),
            rH = `${XH(BH)}/package.json`;
          return [...LH.has(BH.name) ? Object.entries(BH.files).map((LH => {
            let [AH, rH] = LH;
            return (0, zH.D)(HH, EH((0, tH.q)(BH.name, AH)), rH)
          })) : [], (0, zH.D)(HH, AH, BH.types), (0, zH.D)(HH, rH, YH(BH))]
        }));
      await Promise.all([(0, zH.D)(HH, "node_modules/@bloxd/index.d.ts", AH.default), (0, zH.D)(HH, "node_modules/@bloxd/globals.d.ts", SH.e), (0, zH.D)(HH, "node_modules/@bloxd/lib.d.ts", rH.e), (0, zH.D)(HH, "node_modules/@bloxd/package.json", CH), (0, zH.D)(HH, "tsconfig.json", WH(BH)), ...GH]), await Promise.all(Object.values(hH.g).map((BH => QH(HH, BH, LH.has(BH.name)))))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);