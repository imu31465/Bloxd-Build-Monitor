export const id = 300;
export const ids = [300];
export const modules = {
  41055: (kk, ek, ik) => {
    ik.d(ek, {
      ensureLocalBloxdTypes: () => lk
    });
    var Dk = ik(4707),
      fk = ik(40950),
      Sk = ik(40945),
      bk = ik(36446),
      rk = ik(36454),
      Pk = ik(36475);
    const mk = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Mk(kk) {
      return kk.replace(/^\//, "")
    }

    function Kk(kk) {
      return Mk((0, rk.s)(kk.name, "")).replace(/\/$/, "")
    }

    function xk(kk) {
      return kk.typesVfsPath.slice(kk.typesVfsPath.lastIndexOf("/") + 1)
    }

    function nk(kk) {
      return JSON.stringify({
        name: kk.specifier,
        types: xk(kk)
      }, null, "\t") + "\n"
    }
    async function Uk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const ik = [];
      for await (const [Dk, fk] of kk.entries()) {
        const kk = ek ? `${ek}/${Dk}` : Dk;
        "directory" !== fk.kind ? ik.push(kk) : ik.push(...await Uk(fk, kk))
      }
      return ik
    }
    async function Hk(kk, ek, ik) {
      const Dk = Kk(ek),
        fk = await (0, Pk.h)(kk, Dk);
      if (!fk) return;
      const Sk = new Set([xk(ek), "package.json"]);
      if (ik)
        for (const Pk of Object.keys(ek.files)) Sk.add(Pk);
      const bk = await Uk(fk),
        rk = new Set;
      for (const Kk of bk) {
        if (Sk.has(Kk)) continue;
        await (0, Pk.y)(kk, `${Dk}/${Kk}`);
        const ek = Kk.split("/");
        for (let kk = 1; kk < ek.length; kk++) rk.add(ek.slice(0, kk).join("/"))
      }
      const mk = [...rk].sort(((kk, ek) => ek.split("/").length - kk.split("/").length));
      for (const Kk of mk) try {
        await (0, Pk.y)(kk, `${Dk}/${Kk}`)
      } catch (Mk) {
        if (Mk instanceof DOMException && "InvalidModificationError" === Mk.name) continue;
        throw Mk
      }
    }

    function wk(kk) {
      const ek = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Dk of Object.values(bk.g)) ek[Dk.specifier] = [`.${Dk.typesVfsPath}`];
      const ik = [];
      for (const Dk of kk)
        for (const kk of Object.keys(Dk.files)) ik.push(Mk((0, rk.s)(Dk.name, kk)));
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
          paths: ek
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...ik]
      }, null, "\t") + "\n"
    }
    async function lk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const ik = new Set(ek.map((kk => kk.name))),
        xk = Object.values(bk.g).flatMap((ek => {
          const Dk = Mk(ek.typesVfsPath),
            fk = `${Kk(ek)}/package.json`;
          return [...ik.has(ek.name) ? Object.entries(ek.files).map((ik => {
            let [Dk, fk] = ik;
            return (0, Pk.J)(kk, Mk((0, rk.s)(ek.name, Dk)), fk)
          })) : [], (0, Pk.J)(kk, Dk, ek.types), (0, Pk.J)(kk, fk, nk(ek))]
        }));
      await Promise.all([(0, Pk.J)(kk, "node_modules/@bloxd/index.d.ts", Dk.default), (0, Pk.J)(kk, "node_modules/@bloxd/globals.d.ts", Sk.e), (0, Pk.J)(kk, "node_modules/@bloxd/lib.d.ts", fk.d), (0, Pk.J)(kk, "node_modules/@bloxd/package.json", mk), (0, Pk.J)(kk, "tsconfig.json", wk(ek)), ...xk]), await Promise.all(Object.values(bk.g).map((ek => Hk(kk, ek, ik.has(ek.name)))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);