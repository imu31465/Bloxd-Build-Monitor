export const id = 280;
export const ids = [280];
export const modules = {
  39920: (yb, bb, Wy) => {
    Wy.d(bb, {
      ensureLocalBloxdTypes: () => ly
    });
    var Uy = Wy(3965),
      hy = Wy(39827),
      fy = Wy(39818),
      Zy = Wy(35586),
      cb = Wy(35595),
      Py = Wy(35615);
    const oy = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function By(yb) {
      return yb.replace(/^\//, "")
    }

    function Ky(yb) {
      return By((0, cb.o)(yb.name, "")).replace(/\/$/, "")
    }

    function ey(yb) {
      return yb.typesVfsPath.slice(yb.typesVfsPath.lastIndexOf("/") + 1)
    }

    function qb(yb) {
      return JSON.stringify({
        name: yb.specifier,
        types: ey(yb)
      }, null, "\t") + "\n"
    }
    async function sy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const Wy = [];
      for await (const [Uy, hy] of yb.entries()) {
        const yb = bb ? `${bb}/${Uy}` : Uy;
        "directory" !== hy.kind ? Wy.push(yb) : Wy.push(...await sy(hy, yb))
      }
      return Wy
    }
    async function Sy(yb, bb, Wy) {
      const Uy = Ky(bb),
        hy = await (0, Py.l)(yb, Uy);
      if (!hy) return;
      const fy = new Set([ey(bb), "package.json"]);
      if (Wy)
        for (const Py of Object.keys(bb.files)) fy.add(Py);
      const Zy = await sy(hy),
        cb = new Set;
      for (const Ky of Zy) {
        if (fy.has(Ky)) continue;
        await (0, Py.z)(yb, `${Uy}/${Ky}`);
        const bb = Ky.split("/");
        for (let yb = 1; yb < bb.length; yb++) cb.add(bb.slice(0, yb).join("/"))
      }
      const oy = [...cb].sort(((yb, bb) => bb.split("/").length - yb.split("/").length));
      for (const Ky of oy) try {
        await (0, Py.z)(yb, `${Uy}/${Ky}`)
      } catch (By) {
        if (By instanceof DOMException && "InvalidModificationError" === By.name) continue;
        throw By
      }
    }

    function Ey(yb) {
      const bb = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Uy of Object.values(Zy.g)) bb[Uy.specifier] = [`.${Uy.typesVfsPath}`];
      const Wy = [];
      for (const Uy of yb)
        for (const yb of Object.keys(Uy.files)) Wy.push(By((0, cb.o)(Uy.name, yb)));
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
          paths: bb
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...Wy]
      }, null, "\t") + "\n"
    }
    async function ly(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const Wy = new Set(bb.map((yb => yb.name))),
        ey = Object.values(Zy.g).flatMap((bb => {
          const Uy = By(bb.typesVfsPath),
            hy = `${Ky(bb)}/package.json`;
          return [...Wy.has(bb.name) ? Object.entries(bb.files).map((Wy => {
            let [Uy, hy] = Wy;
            return (0, Py.H)(yb, By((0, cb.o)(bb.name, Uy)), hy)
          })) : [], (0, Py.H)(yb, Uy, bb.types), (0, Py.H)(yb, hy, qb(bb))]
        }));
      await Promise.all([(0, Py.H)(yb, "node_modules/@bloxd/index.d.ts", Uy.default), (0, Py.H)(yb, "node_modules/@bloxd/globals.d.ts", fy.e), (0, Py.H)(yb, "node_modules/@bloxd/lib.d.ts", hy.e), (0, Py.H)(yb, "node_modules/@bloxd/package.json", oy), (0, Py.H)(yb, "tsconfig.json", Ey(bb)), ...ey]), await Promise.all(Object.values(Zy.g).map((bb => Sy(yb, bb, Wy.has(bb.name)))))
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);