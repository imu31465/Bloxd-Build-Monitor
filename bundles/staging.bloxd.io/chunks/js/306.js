export const id = 306;
export const ids = [306];
export const modules = {
  41585: (BB, jB, zB) => {
    zB.d(jB, {
      ensureLocalBloxdTypes: () => kB
    });
    var QB = zB(4853),
      nB = zB(41486),
      dB = zB(41480),
      IB = zB(36929),
      NB = zB(36932),
      uB = zB(36938);
    const UB = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function aB(BB) {
      return BB.replace(/^\//, "")
    }

    function pB(BB) {
      return aB((0, NB.C)(BB.name, "")).replace(/\/$/, "")
    }

    function rB(BB) {
      return BB.typesVfsPath.slice(BB.typesVfsPath.lastIndexOf("/") + 1)
    }

    function sB(BB) {
      return JSON.stringify({
        name: BB.specifier,
        types: rB(BB)
      }, null, "\t") + "\n"
    }
    async function JB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const zB = [];
      for await (const [QB, nB] of BB.entries()) {
        const BB = jB ? `${jB}/${QB}` : QB;
        "directory" !== nB.kind ? zB.push(BB) : zB.push(...await JB(nB, BB))
      }
      return zB
    }
    async function mB(BB, jB, zB) {
      const QB = pB(jB),
        nB = await (0, uB.i)(BB, QB);
      if (!nB) return;
      const dB = new Set([rB(jB), "package.json"]);
      if (zB)
        for (const uB of Object.keys(jB.files)) dB.add(uB);
      const IB = await JB(nB),
        NB = new Set;
      for (const pB of IB) {
        if (dB.has(pB)) continue;
        await (0, uB.D)(BB, `${QB}/${pB}`);
        const jB = pB.split("/");
        for (let BB = 1; BB < jB.length; BB++) NB.add(jB.slice(0, BB).join("/"))
      }
      const UB = [...NB].sort(((BB, jB) => jB.split("/").length - BB.split("/").length));
      for (const pB of UB) try {
        await (0, uB.D)(BB, `${QB}/${pB}`)
      } catch (aB) {
        if (aB instanceof DOMException && "InvalidModificationError" === aB.name) continue;
        throw aB
      }
    }

    function yB(BB) {
      const jB = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const QB of Object.values(IB.e)) jB[QB.specifier] = [`.${QB.typesVfsPath}`];
      const zB = [];
      for (const QB of BB)
        for (const BB of Object.keys(QB.files)) zB.push(aB((0, NB.C)(QB.name, BB)));
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
          paths: jB
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...zB]
      }, null, "\t") + "\n"
    }
    async function kB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const zB = new Set(jB.map((BB => BB.name))),
        rB = Object.values(IB.e).flatMap((jB => {
          const QB = aB(jB.typesVfsPath),
            nB = `${pB(jB)}/package.json`;
          return [...zB.has(jB.name) ? Object.entries(jB.files).map((zB => {
            let [QB, nB] = zB;
            return (0, uB.L)(BB, aB((0, NB.C)(jB.name, QB)), nB)
          })) : [], (0, uB.L)(BB, QB, jB.types), (0, uB.L)(BB, nB, sB(jB))]
        }));
      await Promise.all([(0, uB.L)(BB, "node_modules/@bloxd/index.d.ts", QB.default), (0, uB.L)(BB, "node_modules/@bloxd/globals.d.ts", dB.e), (0, uB.L)(BB, "node_modules/@bloxd/lib.d.ts", nB.c), (0, uB.L)(BB, "node_modules/@bloxd/package.json", UB), (0, uB.L)(BB, "tsconfig.json", yB(jB)), ...rB]), await Promise.all(Object.values(IB.e).map((jB => mB(BB, jB, zB.has(jB.name)))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);