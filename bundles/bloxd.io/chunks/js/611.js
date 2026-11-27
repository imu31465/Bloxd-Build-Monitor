export const id = 611;
export const ids = [611];
export const modules = {
  44684: (ee, ie, He) => {
    He.d(ie, {
      ensureLocalBloxdTypes: () => Xe
    });
    var ye = He(5239),
      be = He(44574),
      Me = He(44571),
      Ke = He(37675),
      Ue = He(37689),
      Fe = He(37699);
    const Je = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function oe(ee) {
      return ee.replace(/^\//, "")
    }

    function Re(ee) {
      return oe((0, Ue.w)(ee.name, "")).replace(/\/$/, "")
    }

    function ke(ee) {
      return ee.typesVfsPath.slice(ee.typesVfsPath.lastIndexOf("/") + 1)
    }

    function qe(ee) {
      return JSON.stringify({
        name: ee.specifier,
        types: ke(ee)
      }, null, "\t") + "\n"
    }
    async function fe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const He = [];
      for await (const [ye, be] of ee.entries()) {
        const ee = ie ? `${ie}/${ye}` : ye;
        "directory" !== be.kind ? He.push(ee) : He.push(...await fe(be, ee))
      }
      return He
    }
    async function Te(ee, ie, He) {
      const ye = Re(ie),
        be = await (0, Fe.l)(ee, ye);
      if (!be) return;
      const Me = new Set([ke(ie), "package.json"]);
      if (He)
        for (const Fe of Object.keys(ie.files)) Me.add(Fe);
      const Ke = await fe(be),
        Ue = new Set;
      for (const Re of Ke) {
        if (Me.has(Re)) continue;
        await (0, Fe.D)(ee, `${ye}/${Re}`);
        const ie = Re.split("/");
        for (let ee = 1; ee < ie.length; ee++) Ue.add(ie.slice(0, ee).join("/"))
      }
      const Je = [...Ue].sort(((ee, ie) => ie.split("/").length - ee.split("/").length));
      for (const Re of Je) try {
        await (0, Fe.D)(ee, `${ye}/${Re}`)
      } catch (oe) {
        if (oe instanceof DOMException && "InvalidModificationError" === oe.name) continue;
        throw oe
      }
    }

    function pe(ee) {
      const ie = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const ye of Object.values(Ke.h)) ie[ye.specifier] = [`.${ye.typesVfsPath}`];
      const He = [];
      for (const ye of ee)
        for (const ee of Object.keys(ye.files)) He.push(oe((0, Ue.w)(ye.name, ee)));
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
          paths: ie
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...He]
      }, null, "\t") + "\n"
    }
    async function Xe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const He = new Set(ie.map((ee => ee.name))),
        ke = Object.values(Ke.h).flatMap((ie => {
          const ye = oe(ie.typesVfsPath),
            be = `${Re(ie)}/package.json`;
          return [...He.has(ie.name) ? Object.entries(ie.files).map((He => {
            let [ye, be] = He;
            return (0, Fe.J)(ee, oe((0, Ue.w)(ie.name, ye)), be)
          })) : [], (0, Fe.J)(ee, ye, ie.types), (0, Fe.J)(ee, be, qe(ie))]
        }));
      await Promise.all([(0, Fe.J)(ee, "node_modules/@bloxd/index.d.ts", ye.default), (0, Fe.J)(ee, "node_modules/@bloxd/globals.d.ts", Me.d), (0, Fe.J)(ee, "node_modules/@bloxd/lib.d.ts", be.d), (0, Fe.J)(ee, "node_modules/@bloxd/package.json", Je), (0, Fe.J)(ee, "tsconfig.json", pe(ie)), ...ke]), await Promise.all(Object.values(Ke.h).map((ie => Te(ee, ie, He.has(ie.name)))))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);