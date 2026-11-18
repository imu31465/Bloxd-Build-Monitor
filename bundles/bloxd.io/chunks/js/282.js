export const id = 282;
export const ids = [282];
export const modules = {
  40222: (BB, TB, dB) => {
    dB.d(TB, {
      ensureLocalBloxdTypes: () => EB
    });
    var VB = dB(4147),
      yB = dB(40107),
      pB = dB(40104),
      lB = dB(35823),
      JB = dB(35826),
      YB = dB(35848);
    const gB = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function oB(BB) {
      return BB.replace(/^\//, "")
    }

    function kB(BB) {
      return oB((0, JB.q)(BB.name, "")).replace(/\/$/, "")
    }

    function LB(BB) {
      return BB.typesVfsPath.slice(BB.typesVfsPath.lastIndexOf("/") + 1)
    }

    function OB(BB) {
      return JSON.stringify({
        name: BB.specifier,
        types: LB(BB)
      }, null, "\t") + "\n"
    }
    async function DB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const dB = [];
      for await (const [VB, yB] of BB.entries()) {
        const BB = TB ? `${TB}/${VB}` : VB;
        "directory" !== yB.kind ? dB.push(BB) : dB.push(...await DB(yB, BB))
      }
      return dB
    }
    async function uB(BB, TB, dB) {
      const VB = kB(TB),
        yB = await (0, YB.n)(BB, VB);
      if (!yB) return;
      const pB = new Set([LB(TB), "package.json"]);
      if (dB)
        for (const YB of Object.keys(TB.files)) pB.add(YB);
      const lB = await DB(yB),
        JB = new Set;
      for (const kB of lB) {
        if (pB.has(kB)) continue;
        await (0, YB.I)(BB, `${VB}/${kB}`);
        const TB = kB.split("/");
        for (let BB = 1; BB < TB.length; BB++) JB.add(TB.slice(0, BB).join("/"))
      }
      const gB = [...JB].sort(((BB, TB) => TB.split("/").length - BB.split("/").length));
      for (const kB of gB) try {
        await (0, YB.I)(BB, `${VB}/${kB}`)
      } catch (oB) {
        if (oB instanceof DOMException && "InvalidModificationError" === oB.name) continue;
        throw oB
      }
    }

    function HB(BB) {
      const TB = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const VB of Object.values(lB.f)) TB[VB.specifier] = [`.${VB.typesVfsPath}`];
      const dB = [];
      for (const VB of BB)
        for (const BB of Object.keys(VB.files)) dB.push(oB((0, JB.q)(VB.name, BB)));
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
          paths: TB
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...dB]
      }, null, "\t") + "\n"
    }
    async function EB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const dB = new Set(TB.map((BB => BB.name))),
        LB = Object.values(lB.f).flatMap((TB => {
          const VB = oB(TB.typesVfsPath),
            yB = `${kB(TB)}/package.json`;
          return [...dB.has(TB.name) ? Object.entries(TB.files).map((dB => {
            let [VB, yB] = dB;
            return (0, YB.P)(BB, oB((0, JB.q)(TB.name, VB)), yB)
          })) : [], (0, YB.P)(BB, VB, TB.types), (0, YB.P)(BB, yB, OB(TB))]
        }));
      await Promise.all([(0, YB.P)(BB, "node_modules/@bloxd/index.d.ts", VB.default), (0, YB.P)(BB, "node_modules/@bloxd/globals.d.ts", pB.c), (0, YB.P)(BB, "node_modules/@bloxd/lib.d.ts", yB.c), (0, YB.P)(BB, "node_modules/@bloxd/package.json", gB), (0, YB.P)(BB, "tsconfig.json", HB(TB)), ...LB]), await Promise.all(Object.values(lB.f).map((TB => uB(BB, TB, dB.has(TB.name)))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);