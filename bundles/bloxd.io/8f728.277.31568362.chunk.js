export const id = 277;
export const ids = [277];
export const modules = {
  39449: (cB, Bc, nc) => {
    nc.d(Bc, {
      ensureLocalBloxdTypes: () => Sc
    });
    var Vc = nc(3802),
      Ic = nc(39350),
      rB = nc(39347),
      uc = nc(35471),
      sc = nc(35477),
      Mc = nc(35496);
    const Pc = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function qB(cB) {
      return cB.replace(/^\//, "")
    }

    function Oc(cB) {
      return qB((0, sc.x)(cB.name, "")).replace(/\/$/, "")
    }

    function Tc(cB) {
      return cB.typesVfsPath.slice(cB.typesVfsPath.lastIndexOf("/") + 1)
    }

    function fc(cB) {
      return JSON.stringify({
        name: cB.specifier,
        types: Tc(cB)
      }, null, "\t") + "\n"
    }
    async function mB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const nc = [];
      for await (const [Vc, Ic] of cB.entries()) {
        const cB = Bc ? `${Bc}/${Vc}` : Vc;
        "directory" !== Ic.kind ? nc.push(cB) : nc.push(...await mB(Ic, cB))
      }
      return nc
    }
    async function ec(cB, Bc, nc) {
      const Vc = Oc(Bc),
        Ic = await (0, Mc.o)(cB, Vc);
      if (!Ic) return;
      const rB = new Set([Tc(Bc), "package.json"]);
      if (nc)
        for (const Mc of Object.keys(Bc.files)) rB.add(Mc);
      const uc = await mB(Ic),
        sc = new Set;
      for (const Oc of uc) {
        if (rB.has(Oc)) continue;
        await (0, Mc.D)(cB, `${Vc}/${Oc}`);
        const Bc = Oc.split("/");
        for (let cB = 1; cB < Bc.length; cB++) sc.add(Bc.slice(0, cB).join("/"))
      }
      const Pc = [...sc].sort(((cB, Bc) => Bc.split("/").length - cB.split("/").length));
      for (const Oc of Pc) try {
        await (0, Mc.D)(cB, `${Vc}/${Oc}`)
      } catch (qB) {
        if (qB instanceof DOMException && "InvalidModificationError" === qB.name) continue;
        throw qB
      }
    }

    function tB(cB) {
      const Bc = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Vc of Object.values(uc.e)) Bc[Vc.specifier] = [`.${Vc.typesVfsPath}`];
      const nc = [];
      for (const Vc of cB)
        for (const cB of Object.keys(Vc.files)) nc.push(qB((0, sc.x)(Vc.name, cB)));
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
          paths: Bc
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...nc]
      }, null, "\t") + "\n"
    }
    async function Sc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const nc = new Set(Bc.map((cB => cB.name))),
        Tc = Object.values(uc.e).flatMap((Bc => {
          const Vc = qB(Bc.typesVfsPath),
            Ic = `${Oc(Bc)}/package.json`;
          return [...nc.has(Bc.name) ? Object.entries(Bc.files).map((nc => {
            let [Vc, Ic] = nc;
            return (0, Mc.K)(cB, qB((0, sc.x)(Bc.name, Vc)), Ic)
          })) : [], (0, Mc.K)(cB, Vc, Bc.types), (0, Mc.K)(cB, Ic, fc(Bc))]
        }));
      await Promise.all([(0, Mc.K)(cB, "node_modules/@bloxd/index.d.ts", Vc.default), (0, Mc.K)(cB, "node_modules/@bloxd/globals.d.ts", rB.b), (0, Mc.K)(cB, "node_modules/@bloxd/lib.d.ts", Ic.c), (0, Mc.K)(cB, "node_modules/@bloxd/package.json", Pc), (0, Mc.K)(cB, "tsconfig.json", tB(Bc)), ...Tc]), await Promise.all(Object.values(uc.e).map((Bc => ec(cB, Bc, nc.has(Bc.name)))))
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);