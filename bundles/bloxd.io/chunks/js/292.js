export const id = 292;
export const ids = [292];
export const modules = {
  40599: (zz, tz, sz) => {
    sz.d(tz, {
      ensureLocalBloxdTypes: () => Hz
    });
    var Fz = sz(4391),
      Wz = sz(40506),
      Xz = sz(40498),
      Oz = sz(36270),
      oz = sz(36274),
      vz = sz(36293);
    const Uz = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Kz(zz) {
      return zz.replace(/^\//, "")
    }

    function uz(zz) {
      return Kz((0, oz.t)(zz.name, "")).replace(/\/$/, "")
    }

    function Nz(zz) {
      return zz.typesVfsPath.slice(zz.typesVfsPath.lastIndexOf("/") + 1)
    }

    function bz(zz) {
      return JSON.stringify({
        name: zz.specifier,
        types: Nz(zz)
      }, null, "\t") + "\n"
    }
    async function wz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const sz = [];
      for await (const [Fz, Wz] of zz.entries()) {
        const zz = tz ? `${tz}/${Fz}` : Fz;
        "directory" !== Wz.kind ? sz.push(zz) : sz.push(...await wz(Wz, zz))
      }
      return sz
    }
    async function Dz(zz, tz, sz) {
      const Fz = uz(tz),
        Wz = await (0, vz.h)(zz, Fz);
      if (!Wz) return;
      const Xz = new Set([Nz(tz), "package.json"]);
      if (sz)
        for (const vz of Object.keys(tz.files)) Xz.add(vz);
      const Oz = await wz(Wz),
        oz = new Set;
      for (const uz of Oz) {
        if (Xz.has(uz)) continue;
        await (0, vz.C)(zz, `${Fz}/${uz}`);
        const tz = uz.split("/");
        for (let zz = 1; zz < tz.length; zz++) oz.add(tz.slice(0, zz).join("/"))
      }
      const Uz = [...oz].sort(((zz, tz) => tz.split("/").length - zz.split("/").length));
      for (const uz of Uz) try {
        await (0, vz.C)(zz, `${Fz}/${uz}`)
      } catch (Kz) {
        if (Kz instanceof DOMException && "InvalidModificationError" === Kz.name) continue;
        throw Kz
      }
    }

    function gz(zz) {
      const tz = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Fz of Object.values(Oz.g)) tz[Fz.specifier] = [`.${Fz.typesVfsPath}`];
      const sz = [];
      for (const Fz of zz)
        for (const zz of Object.keys(Fz.files)) sz.push(Kz((0, oz.t)(Fz.name, zz)));
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
          paths: tz
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...sz]
      }, null, "\t") + "\n"
    }
    async function Hz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const sz = new Set(tz.map((zz => zz.name))),
        Nz = Object.values(Oz.g).flatMap((tz => {
          const Fz = Kz(tz.typesVfsPath),
            Wz = `${uz(tz)}/package.json`;
          return [...sz.has(tz.name) ? Object.entries(tz.files).map((sz => {
            let [Fz, Wz] = sz;
            return (0, vz.N)(zz, Kz((0, oz.t)(tz.name, Fz)), Wz)
          })) : [], (0, vz.N)(zz, Fz, tz.types), (0, vz.N)(zz, Wz, bz(tz))]
        }));
      await Promise.all([(0, vz.N)(zz, "node_modules/@bloxd/index.d.ts", Fz.default), (0, vz.N)(zz, "node_modules/@bloxd/globals.d.ts", Xz.b), (0, vz.N)(zz, "node_modules/@bloxd/lib.d.ts", Wz.d), (0, vz.N)(zz, "node_modules/@bloxd/package.json", Uz), (0, vz.N)(zz, "tsconfig.json", gz(tz)), ...Nz]), await Promise.all(Object.values(Oz.g).map((tz => Dz(zz, tz, sz.has(tz.name)))))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);