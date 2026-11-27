export const id = 621;
export const ids = [621];
export const modules = {
  54049: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      ensureLocalBloxdTypes: () => zr
    });
    var Zr = Qr(5577),
      Wr = Qr(53935),
      ar = Qr(53933),
      jr = Qr(38327),
      Ir = Qr(38339),
      fr = Qr(38350);
    const Er = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function pr(rr) {
      return rr.replace(/^\//, "")
    }

    function xr(rr) {
      return pr((0, Ir.u)(rr.name, "")).replace(/\/$/, "")
    }

    function mr(rr) {
      return rr.typesVfsPath.slice(rr.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Nr(rr) {
      return JSON.stringify({
        name: rr.specifier,
        types: mr(rr)
      }, null, "\t") + "\n"
    }
    async function Ur(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const Qr = [];
      for await (const [Zr, Wr] of rr.entries()) {
        const rr = Sr ? `${Sr}/${Zr}` : Zr;
        "directory" !== Wr.kind ? Qr.push(rr) : Qr.push(...await Ur(Wr, rr))
      }
      return Qr
    }
    async function tr(rr, Sr, Qr) {
      const Zr = xr(Sr),
        Wr = await (0, fr.k)(rr, Zr);
      if (!Wr) return;
      const ar = new Set([mr(Sr), "package.json"]);
      if (Qr)
        for (const fr of Object.keys(Sr.files)) ar.add(fr);
      const jr = await Ur(Wr),
        Ir = new Set;
      for (const xr of jr) {
        if (ar.has(xr)) continue;
        await (0, fr.z)(rr, `${Zr}/${xr}`);
        const Sr = xr.split("/");
        for (let rr = 1; rr < Sr.length; rr++) Ir.add(Sr.slice(0, rr).join("/"))
      }
      const Er = [...Ir].sort(((rr, Sr) => Sr.split("/").length - rr.split("/").length));
      for (const xr of Er) try {
        await (0, fr.z)(rr, `${Zr}/${xr}`)
      } catch (pr) {
        if (pr instanceof DOMException && "InvalidModificationError" === pr.name) continue;
        throw pr
      }
    }

    function hr(rr) {
      const Sr = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Zr of Object.values(jr.e)) Sr[Zr.specifier] = [`.${Zr.typesVfsPath}`];
      const Qr = [];
      for (const Zr of rr)
        for (const rr of Object.keys(Zr.files)) Qr.push(pr((0, Ir.u)(Zr.name, rr)));
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
          paths: Sr
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...Qr]
      }, null, "\t") + "\n"
    }
    async function zr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const Qr = new Set(Sr.map((rr => rr.name))),
        mr = Object.values(jr.e).flatMap((Sr => {
          const Zr = pr(Sr.typesVfsPath),
            Wr = `${xr(Sr)}/package.json`;
          return [...Qr.has(Sr.name) ? Object.entries(Sr.files).map((Qr => {
            let [Zr, Wr] = Qr;
            return (0, fr.G)(rr, pr((0, Ir.u)(Sr.name, Zr)), Wr)
          })) : [], (0, fr.G)(rr, Zr, Sr.types), (0, fr.G)(rr, Wr, Nr(Sr))]
        }));
      await Promise.all([(0, fr.G)(rr, "node_modules/@bloxd/index.d.ts", Zr.default), (0, fr.G)(rr, "node_modules/@bloxd/globals.d.ts", ar.d), (0, fr.G)(rr, "node_modules/@bloxd/lib.d.ts", Wr.c), (0, fr.G)(rr, "node_modules/@bloxd/package.json", Er), (0, fr.G)(rr, "tsconfig.json", hr(Sr)), ...mr]), await Promise.all(Object.values(jr.e).map((Sr => tr(rr, Sr, Qr.has(Sr.name)))))
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);