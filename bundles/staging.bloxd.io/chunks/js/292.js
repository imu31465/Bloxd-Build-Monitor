export const id = 292;
export const ids = [292];
export const modules = {
  40917: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      ensureLocalBloxdTypes: () => mk
    });
    var Rk = Bk(4487),
      tk = Bk(40802),
      ak = Bk(40799),
      Xk = Bk(36524),
      bk = Bk(36527),
      wk = Bk(36547);
    const dk = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function sk(kk) {
      return kk.replace(/^\//, "")
    }

    function Vk(kk) {
      return sk((0, bk.w)(kk.name, "")).replace(/\/$/, "")
    }

    function Jk(kk) {
      return kk.typesVfsPath.slice(kk.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Ak(kk) {
      return JSON.stringify({
        name: kk.specifier,
        types: Jk(kk)
      }, null, "\t") + "\n"
    }
    async function ek(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const Bk = [];
      for await (const [Rk, tk] of kk.entries()) {
        const kk = Fk ? `${Fk}/${Rk}` : Rk;
        "directory" !== tk.kind ? Bk.push(kk) : Bk.push(...await ek(tk, kk))
      }
      return Bk
    }
    async function yk(kk, Fk, Bk) {
      const Rk = Vk(Fk),
        tk = await (0, wk.k)(kk, Rk);
      if (!tk) return;
      const ak = new Set([Jk(Fk), "package.json"]);
      if (Bk)
        for (const wk of Object.keys(Fk.files)) ak.add(wk);
      const Xk = await ek(tk),
        bk = new Set;
      for (const Vk of Xk) {
        if (ak.has(Vk)) continue;
        await (0, wk.v)(kk, `${Rk}/${Vk}`);
        const Fk = Vk.split("/");
        for (let kk = 1; kk < Fk.length; kk++) bk.add(Fk.slice(0, kk).join("/"))
      }
      const dk = [...bk].sort(((kk, Fk) => Fk.split("/").length - kk.split("/").length));
      for (const Vk of dk) try {
        await (0, wk.v)(kk, `${Rk}/${Vk}`)
      } catch (sk) {
        if (sk instanceof DOMException && "InvalidModificationError" === sk.name) continue;
        throw sk
      }
    }

    function fk(kk) {
      const Fk = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Rk of Object.values(Xk.h)) Fk[Rk.specifier] = [`.${Rk.typesVfsPath}`];
      const Bk = [];
      for (const Rk of kk)
        for (const kk of Object.keys(Rk.files)) Bk.push(sk((0, bk.w)(Rk.name, kk)));
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
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...Bk]
      }, null, "\t") + "\n"
    }
    async function mk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const Bk = new Set(Fk.map((kk => kk.name))),
        Jk = Object.values(Xk.h).flatMap((Fk => {
          const Rk = sk(Fk.typesVfsPath),
            tk = `${Vk(Fk)}/package.json`;
          return [...Bk.has(Fk.name) ? Object.entries(Fk.files).map((Bk => {
            let [Rk, tk] = Bk;
            return (0, wk.C)(kk, sk((0, bk.w)(Fk.name, Rk)), tk)
          })) : [], (0, wk.C)(kk, Rk, Fk.types), (0, wk.C)(kk, tk, Ak(Fk))]
        }));
      await Promise.all([(0, wk.C)(kk, "node_modules/@bloxd/index.d.ts", Rk.default), (0, wk.C)(kk, "node_modules/@bloxd/globals.d.ts", ak.b), (0, wk.C)(kk, "node_modules/@bloxd/lib.d.ts", tk.d), (0, wk.C)(kk, "node_modules/@bloxd/package.json", dk), (0, wk.C)(kk, "tsconfig.json", fk(Fk)), ...Jk]), await Promise.all(Object.values(Xk.h).map((Fk => yk(kk, Fk, Bk.has(Fk.name)))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);