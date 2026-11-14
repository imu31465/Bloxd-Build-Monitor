export const id = 272;
export const ids = [272];
export const modules = {
  39345: (FF, WF, SF) => {
    SF.d(WF, {
      ensureLocalBloxdTypes: () => tW
    });
    var CF = SF(3750),
      AF = SF(39234),
      uF = SF(39226),
      hF = SF(35339),
      bW = SF(35347),
      dF = SF(35354);
    const PF = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function RF(FF) {
      return FF.replace(/^\//, "")
    }

    function iW(FF) {
      return RF((0, bW.u)(FF.name, "")).replace(/\/$/, "")
    }

    function eF(FF) {
      return FF.typesVfsPath.slice(FF.typesVfsPath.lastIndexOf("/") + 1)
    }

    function EF(FF) {
      return JSON.stringify({
        name: FF.specifier,
        types: eF(FF)
      }, null, "\t") + "\n"
    }
    async function QF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const SF = [];
      for await (const [CF, AF] of FF.entries()) {
        const FF = WF ? `${WF}/${CF}` : CF;
        "directory" !== AF.kind ? SF.push(FF) : SF.push(...await QF(AF, FF))
      }
      return SF
    }
    async function rW(FF, WF, SF) {
      const CF = iW(WF),
        AF = await (0, dF.i)(FF, CF);
      if (!AF) return;
      const uF = new Set([eF(WF), "package.json"]);
      if (SF)
        for (const dF of Object.keys(WF.files)) uF.add(dF);
      const hF = await QF(AF),
        bW = new Set;
      for (const iW of hF) {
        if (uF.has(iW)) continue;
        await (0, dF.B)(FF, `${CF}/${iW}`);
        const WF = iW.split("/");
        for (let FF = 1; FF < WF.length; FF++) bW.add(WF.slice(0, FF).join("/"))
      }
      const PF = [...bW].sort(((FF, WF) => WF.split("/").length - FF.split("/").length));
      for (const iW of PF) try {
        await (0, dF.B)(FF, `${CF}/${iW}`)
      } catch (RF) {
        if (RF instanceof DOMException && "InvalidModificationError" === RF.name) continue;
        throw RF
      }
    }

    function gW(FF) {
      const WF = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const CF of Object.values(hF.f)) WF[CF.specifier] = [`.${CF.typesVfsPath}`];
      const SF = [];
      for (const CF of FF)
        for (const FF of Object.keys(CF.files)) SF.push(RF((0, bW.u)(CF.name, FF)));
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
          paths: WF
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...SF]
      }, null, "\t") + "\n"
    }
    async function tW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const SF = new Set(WF.map((FF => FF.name))),
        eF = Object.values(hF.f).flatMap((WF => {
          const CF = RF(WF.typesVfsPath),
            AF = `${iW(WF)}/package.json`;
          return [...SF.has(WF.name) ? Object.entries(WF.files).map((SF => {
            let [CF, AF] = SF;
            return (0, dF.G)(FF, RF((0, bW.u)(WF.name, CF)), AF)
          })) : [], (0, dF.G)(FF, CF, WF.types), (0, dF.G)(FF, AF, EF(WF))]
        }));
      await Promise.all([(0, dF.G)(FF, "node_modules/@bloxd/index.d.ts", CF.default), (0, dF.G)(FF, "node_modules/@bloxd/globals.d.ts", uF.c), (0, dF.G)(FF, "node_modules/@bloxd/lib.d.ts", AF.c), (0, dF.G)(FF, "node_modules/@bloxd/package.json", PF), (0, dF.G)(FF, "tsconfig.json", gW(WF)), ...eF]), await Promise.all(Object.values(hF.f).map((WF => rW(FF, WF, SF.has(WF.name)))))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);