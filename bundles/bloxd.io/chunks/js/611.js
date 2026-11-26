export const id = 611;
export const ids = [611];
export const modules = {
  44639: (BB, OB, GB) => {
    GB.d(OB, {
      ensureLocalBloxdTypes: () => NB
    });
    var YB = GB(5253),
      DB = GB(44535),
      QB = GB(44529),
      oB = GB(37541),
      jB = GB(37547),
      yB = GB(37562);
    const JB = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function MB(BB) {
      return BB.replace(/^\//, "")
    }

    function PB(BB) {
      return MB((0, jB.u)(BB.name, "")).replace(/\/$/, "")
    }

    function zB(BB) {
      return BB.typesVfsPath.slice(BB.typesVfsPath.lastIndexOf("/") + 1)
    }

    function lB(BB) {
      return JSON.stringify({
        name: BB.specifier,
        types: zB(BB)
      }, null, "\t") + "\n"
    }
    async function pB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const GB = [];
      for await (const [YB, DB] of BB.entries()) {
        const BB = OB ? `${OB}/${YB}` : YB;
        "directory" !== DB.kind ? GB.push(BB) : GB.push(...await pB(DB, BB))
      }
      return GB
    }
    async function qB(BB, OB, GB) {
      const YB = PB(OB),
        DB = await (0, yB.m)(BB, YB);
      if (!DB) return;
      const QB = new Set([zB(OB), "package.json"]);
      if (GB)
        for (const yB of Object.keys(OB.files)) QB.add(yB);
      const oB = await pB(DB),
        jB = new Set;
      for (const PB of oB) {
        if (QB.has(PB)) continue;
        await (0, yB.E)(BB, `${YB}/${PB}`);
        const OB = PB.split("/");
        for (let BB = 1; BB < OB.length; BB++) jB.add(OB.slice(0, BB).join("/"))
      }
      const JB = [...jB].sort(((BB, OB) => OB.split("/").length - BB.split("/").length));
      for (const PB of JB) try {
        await (0, yB.E)(BB, `${YB}/${PB}`)
      } catch (MB) {
        if (MB instanceof DOMException && "InvalidModificationError" === MB.name) continue;
        throw MB
      }
    }

    function ZB(BB) {
      const OB = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const YB of Object.values(oB.f)) OB[YB.specifier] = [`.${YB.typesVfsPath}`];
      const GB = [];
      for (const YB of BB)
        for (const BB of Object.keys(YB.files)) GB.push(MB((0, jB.u)(YB.name, BB)));
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
          paths: OB
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...GB]
      }, null, "\t") + "\n"
    }
    async function NB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const GB = new Set(OB.map((BB => BB.name))),
        zB = Object.values(oB.f).flatMap((OB => {
          const YB = MB(OB.typesVfsPath),
            DB = `${PB(OB)}/package.json`;
          return [...GB.has(OB.name) ? Object.entries(OB.files).map((GB => {
            let [YB, DB] = GB;
            return (0, yB.J)(BB, MB((0, jB.u)(OB.name, YB)), DB)
          })) : [], (0, yB.J)(BB, YB, OB.types), (0, yB.J)(BB, DB, lB(OB))]
        }));
      await Promise.all([(0, yB.J)(BB, "node_modules/@bloxd/index.d.ts", YB.default), (0, yB.J)(BB, "node_modules/@bloxd/globals.d.ts", QB.d), (0, yB.J)(BB, "node_modules/@bloxd/lib.d.ts", DB.c), (0, yB.J)(BB, "node_modules/@bloxd/package.json", JB), (0, yB.J)(BB, "tsconfig.json", ZB(OB)), ...zB]), await Promise.all(Object.values(oB.f).map((OB => qB(BB, OB, GB.has(OB.name)))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);