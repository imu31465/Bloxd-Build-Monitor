export const id = 306;
export const ids = [306];
export const modules = {
  41515: (BB, IB, ZB) => {
    ZB.d(IB, {
      ensureLocalBloxdTypes: () => yB
    });
    var TB = ZB(4937),
      JB = ZB(41417),
      oB = ZB(41409),
      GB = ZB(36878),
      vB = ZB(36881),
      kB = ZB(36895);
    const cB = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function nB(BB) {
      return BB.replace(/^\//, "")
    }

    function hB(BB) {
      return nB((0, vB.s)(BB.name, "")).replace(/\/$/, "")
    }

    function zB(BB) {
      return BB.typesVfsPath.slice(BB.typesVfsPath.lastIndexOf("/") + 1)
    }

    function FB(BB) {
      return JSON.stringify({
        name: BB.specifier,
        types: zB(BB)
      }, null, "\t") + "\n"
    }
    async function NB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const ZB = [];
      for await (const [TB, JB] of BB.entries()) {
        const BB = IB ? `${IB}/${TB}` : TB;
        "directory" !== JB.kind ? ZB.push(BB) : ZB.push(...await NB(JB, BB))
      }
      return ZB
    }
    async function gB(BB, IB, ZB) {
      const TB = hB(IB),
        JB = await (0, kB.j)(BB, TB);
      if (!JB) return;
      const oB = new Set([zB(IB), "package.json"]);
      if (ZB)
        for (const kB of Object.keys(IB.files)) oB.add(kB);
      const GB = await NB(JB),
        vB = new Set;
      for (const hB of GB) {
        if (oB.has(hB)) continue;
        await (0, kB.E)(BB, `${TB}/${hB}`);
        const IB = hB.split("/");
        for (let BB = 1; BB < IB.length; BB++) vB.add(IB.slice(0, BB).join("/"))
      }
      const cB = [...vB].sort(((BB, IB) => IB.split("/").length - BB.split("/").length));
      for (const hB of cB) try {
        await (0, kB.E)(BB, `${TB}/${hB}`)
      } catch (nB) {
        if (nB instanceof DOMException && "InvalidModificationError" === nB.name) continue;
        throw nB
      }
    }

    function qB(BB) {
      const IB = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const TB of Object.values(GB.e)) IB[TB.specifier] = [`.${TB.typesVfsPath}`];
      const ZB = [];
      for (const TB of BB)
        for (const BB of Object.keys(TB.files)) ZB.push(nB((0, vB.s)(TB.name, BB)));
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
          paths: IB
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...ZB]
      }, null, "\t") + "\n"
    }
    async function yB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const ZB = new Set(IB.map((BB => BB.name))),
        zB = Object.values(GB.e).flatMap((IB => {
          const TB = nB(IB.typesVfsPath),
            JB = `${hB(IB)}/package.json`;
          return [...ZB.has(IB.name) ? Object.entries(IB.files).map((ZB => {
            let [TB, JB] = ZB;
            return (0, kB.N)(BB, nB((0, vB.s)(IB.name, TB)), JB)
          })) : [], (0, kB.N)(BB, TB, IB.types), (0, kB.N)(BB, JB, FB(IB))]
        }));
      await Promise.all([(0, kB.N)(BB, "node_modules/@bloxd/index.d.ts", TB.default), (0, kB.N)(BB, "node_modules/@bloxd/globals.d.ts", oB.d), (0, kB.N)(BB, "node_modules/@bloxd/lib.d.ts", JB.b), (0, kB.N)(BB, "node_modules/@bloxd/package.json", cB), (0, kB.N)(BB, "tsconfig.json", qB(IB)), ...zB]), await Promise.all(Object.values(GB.e).map((IB => gB(BB, IB, ZB.has(IB.name)))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);