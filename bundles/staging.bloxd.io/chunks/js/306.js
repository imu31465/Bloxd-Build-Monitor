export const id = 306;
export const ids = [306];
export const modules = {
  41730: (tt, et, Vt) => {
    Vt.d(et, {
      ensureLocalBloxdTypes: () => Nt
    });
    var Ot = Vt(4935),
      qt = Vt(41611),
      Dt = Vt(41604),
      mt = Vt(37084),
      dt = Vt(37093),
      jt = Vt(37104);
    const Ht = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Xt(tt) {
      return tt.replace(/^\//, "")
    }

    function Qt(tt) {
      return Xt((0, dt.p)(tt.name, "")).replace(/\/$/, "")
    }

    function lt(tt) {
      return tt.typesVfsPath.slice(tt.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Et(tt) {
      return JSON.stringify({
        name: tt.specifier,
        types: lt(tt)
      }, null, "\t") + "\n"
    }
    async function ft(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const Vt = [];
      for await (const [Ot, qt] of tt.entries()) {
        const tt = et ? `${et}/${Ot}` : Ot;
        "directory" !== qt.kind ? Vt.push(tt) : Vt.push(...await ft(qt, tt))
      }
      return Vt
    }
    async function wt(tt, et, Vt) {
      const Ot = Qt(et),
        qt = await (0, jt.j)(tt, Ot);
      if (!qt) return;
      const Dt = new Set([lt(et), "package.json"]);
      if (Vt)
        for (const jt of Object.keys(et.files)) Dt.add(jt);
      const mt = await ft(qt),
        dt = new Set;
      for (const Qt of mt) {
        if (Dt.has(Qt)) continue;
        await (0, jt.F)(tt, `${Ot}/${Qt}`);
        const et = Qt.split("/");
        for (let tt = 1; tt < et.length; tt++) dt.add(et.slice(0, tt).join("/"))
      }
      const Ht = [...dt].sort(((tt, et) => et.split("/").length - tt.split("/").length));
      for (const Qt of Ht) try {
        await (0, jt.F)(tt, `${Ot}/${Qt}`)
      } catch (Xt) {
        if (Xt instanceof DOMException && "InvalidModificationError" === Xt.name) continue;
        throw Xt
      }
    }

    function yt(tt) {
      const et = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Ot of Object.values(mt.d)) et[Ot.specifier] = [`.${Ot.typesVfsPath}`];
      const Vt = [];
      for (const Ot of tt)
        for (const tt of Object.keys(Ot.files)) Vt.push(Xt((0, dt.p)(Ot.name, tt)));
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
          paths: et
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...Vt]
      }, null, "\t") + "\n"
    }
    async function Nt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const Vt = new Set(et.map((tt => tt.name))),
        lt = Object.values(mt.d).flatMap((et => {
          const Ot = Xt(et.typesVfsPath),
            qt = `${Qt(et)}/package.json`;
          return [...Vt.has(et.name) ? Object.entries(et.files).map((Vt => {
            let [Ot, qt] = Vt;
            return (0, jt.N)(tt, Xt((0, dt.p)(et.name, Ot)), qt)
          })) : [], (0, jt.N)(tt, Ot, et.types), (0, jt.N)(tt, qt, Et(et))]
        }));
      await Promise.all([(0, jt.N)(tt, "node_modules/@bloxd/index.d.ts", Ot.default), (0, jt.N)(tt, "node_modules/@bloxd/globals.d.ts", Dt.d), (0, jt.N)(tt, "node_modules/@bloxd/lib.d.ts", qt.b), (0, jt.N)(tt, "node_modules/@bloxd/package.json", Ht), (0, jt.N)(tt, "tsconfig.json", yt(et)), ...lt]), await Promise.all(Object.values(mt.d).map((et => wt(tt, et, Vt.has(et.name)))))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);