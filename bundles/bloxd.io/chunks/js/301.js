export const id = 301;
export const ids = [301];
export const modules = {
  41488: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      ensureLocalBloxdTypes: () => Jk
    });
    var Xk = Ik(4761),
      Tk = Ik(41383),
      ik = Ik(41376),
      yk = Ik(36882),
      lk = Ik(36891),
      ak = Ik(36909);
    const qk = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Lk(kk) {
      return kk.replace(/^\//, "")
    }

    function tk(kk) {
      return Lk((0, lk.w)(kk.name, "")).replace(/\/$/, "")
    }

    function Zk(kk) {
      return kk.typesVfsPath.slice(kk.typesVfsPath.lastIndexOf("/") + 1)
    }

    function jk(kk) {
      return JSON.stringify({
        name: kk.specifier,
        types: Zk(kk)
      }, null, "\t") + "\n"
    }
    async function ek(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const Ik = [];
      for await (const [Xk, Tk] of kk.entries()) {
        const kk = Fk ? `${Fk}/${Xk}` : Xk;
        "directory" !== Tk.kind ? Ik.push(kk) : Ik.push(...await ek(Tk, kk))
      }
      return Ik
    }
    async function wk(kk, Fk, Ik) {
      const Xk = tk(Fk),
        Tk = await (0, ak.f)(kk, Xk);
      if (!Tk) return;
      const ik = new Set([Zk(Fk), "package.json"]);
      if (Ik)
        for (const ak of Object.keys(Fk.files)) ik.add(ak);
      const yk = await ek(Tk),
        lk = new Set;
      for (const tk of yk) {
        if (ik.has(tk)) continue;
        await (0, ak.v)(kk, `${Xk}/${tk}`);
        const Fk = tk.split("/");
        for (let kk = 1; kk < Fk.length; kk++) lk.add(Fk.slice(0, kk).join("/"))
      }
      const qk = [...lk].sort(((kk, Fk) => Fk.split("/").length - kk.split("/").length));
      for (const tk of qk) try {
        await (0, ak.v)(kk, `${Xk}/${tk}`)
      } catch (Lk) {
        if (Lk instanceof DOMException && "InvalidModificationError" === Lk.name) continue;
        throw Lk
      }
    }

    function Hk(kk) {
      const Fk = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Xk of Object.values(yk.e)) Fk[Xk.specifier] = [`.${Xk.typesVfsPath}`];
      const Ik = [];
      for (const Xk of kk)
        for (const kk of Object.keys(Xk.files)) Ik.push(Lk((0, lk.w)(Xk.name, kk)));
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
          paths: Fk
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...Ik]
      }, null, "\t") + "\n"
    }
    async function Jk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const Ik = new Set(Fk.map((kk => kk.name))),
        Zk = Object.values(yk.e).flatMap((Fk => {
          const Xk = Lk(Fk.typesVfsPath),
            Tk = `${tk(Fk)}/package.json`;
          return [...Ik.has(Fk.name) ? Object.entries(Fk.files).map((Ik => {
            let [Xk, Tk] = Ik;
            return (0, ak.C)(kk, Lk((0, lk.w)(Fk.name, Xk)), Tk)
          })) : [], (0, ak.C)(kk, Xk, Fk.types), (0, ak.C)(kk, Tk, jk(Fk))]
        }));
      await Promise.all([(0, ak.C)(kk, "node_modules/@bloxd/index.d.ts", Xk.default), (0, ak.C)(kk, "node_modules/@bloxd/globals.d.ts", ik.c), (0, ak.C)(kk, "node_modules/@bloxd/lib.d.ts", Tk.e), (0, ak.C)(kk, "node_modules/@bloxd/package.json", qk), (0, ak.C)(kk, "tsconfig.json", Hk(Fk)), ...Zk]), await Promise.all(Object.values(yk.e).map((Fk => wk(kk, Fk, Ik.has(Fk.name)))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);