export const id = 292;
export const ids = [292];
export const modules = {
  40702: (zz, uz, bz) => {
    bz.d(uz, {
      ensureLocalBloxdTypes: () => wz
    });
    var Ez = bz(4517),
      nz = bz(40607),
      iz = bz(40603),
      lz = bz(36291),
      Mz = bz(36294),
      tz = bz(36308);
    const Hz = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Oz(zz) {
      return zz.replace(/^\//, "")
    }

    function pz(zz) {
      return Oz((0, Mz.s)(zz.name, "")).replace(/\/$/, "")
    }

    function dz(zz) {
      return zz.typesVfsPath.slice(zz.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Fz(zz) {
      return JSON.stringify({
        name: zz.specifier,
        types: dz(zz)
      }, null, "\t") + "\n"
    }
    async function Zz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const bz = [];
      for await (const [Ez, nz] of zz.entries()) {
        const zz = uz ? `${uz}/${Ez}` : Ez;
        "directory" !== nz.kind ? bz.push(zz) : bz.push(...await Zz(nz, zz))
      }
      return bz
    }
    async function Rz(zz, uz, bz) {
      const Ez = pz(uz),
        nz = await (0, tz.l)(zz, Ez);
      if (!nz) return;
      const iz = new Set([dz(uz), "package.json"]);
      if (bz)
        for (const tz of Object.keys(uz.files)) iz.add(tz);
      const lz = await Zz(nz),
        Mz = new Set;
      for (const pz of lz) {
        if (iz.has(pz)) continue;
        await (0, tz.A)(zz, `${Ez}/${pz}`);
        const uz = pz.split("/");
        for (let zz = 1; zz < uz.length; zz++) Mz.add(uz.slice(0, zz).join("/"))
      }
      const Hz = [...Mz].sort(((zz, uz) => uz.split("/").length - zz.split("/").length));
      for (const pz of Hz) try {
        await (0, tz.A)(zz, `${Ez}/${pz}`)
      } catch (Oz) {
        if (Oz instanceof DOMException && "InvalidModificationError" === Oz.name) continue;
        throw Oz
      }
    }

    function Kz(zz) {
      const uz = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Ez of Object.values(lz.i)) uz[Ez.specifier] = [`.${Ez.typesVfsPath}`];
      const bz = [];
      for (const Ez of zz)
        for (const zz of Object.keys(Ez.files)) bz.push(Oz((0, Mz.s)(Ez.name, zz)));
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
          paths: uz
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...bz]
      }, null, "\t") + "\n"
    }
    async function wz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const bz = new Set(uz.map((zz => zz.name))),
        dz = Object.values(lz.i).flatMap((uz => {
          const Ez = Oz(uz.typesVfsPath),
            nz = `${pz(uz)}/package.json`;
          return [...bz.has(uz.name) ? Object.entries(uz.files).map((bz => {
            let [Ez, nz] = bz;
            return (0, tz.K)(zz, Oz((0, Mz.s)(uz.name, Ez)), nz)
          })) : [], (0, tz.K)(zz, Ez, uz.types), (0, tz.K)(zz, nz, Fz(uz))]
        }));
      await Promise.all([(0, tz.K)(zz, "node_modules/@bloxd/index.d.ts", Ez.default), (0, tz.K)(zz, "node_modules/@bloxd/globals.d.ts", iz.d), (0, tz.K)(zz, "node_modules/@bloxd/lib.d.ts", nz.d), (0, tz.K)(zz, "node_modules/@bloxd/package.json", Hz), (0, tz.K)(zz, "tsconfig.json", Kz(uz)), ...dz]), await Promise.all(Object.values(lz.i).map((uz => Rz(zz, uz, bz.has(uz.name)))))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);