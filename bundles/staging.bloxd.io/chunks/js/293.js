export const id = 293;
export const ids = [293];
export const modules = {
  40778: (vv, zv, Pv) => {
    Pv.d(zv, {
      ensureLocalBloxdTypes: () => iv
    });
    var hv = Pv(4503),
      Sv = Pv(40677),
      ev = Pv(40672),
      gv = Pv(36362),
      pv = Pv(36369),
      dv = Pv(36376);
    const Nv = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function lv(vv) {
      return vv.replace(/^\//, "")
    }

    function Tv(vv) {
      return lv((0, pv.q)(vv.name, "")).replace(/\/$/, "")
    }

    function Wv(vv) {
      return vv.typesVfsPath.slice(vv.typesVfsPath.lastIndexOf("/") + 1)
    }

    function wv(vv) {
      return JSON.stringify({
        name: vv.specifier,
        types: Wv(vv)
      }, null, "\t") + "\n"
    }
    async function av(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const Pv = [];
      for await (const [hv, Sv] of vv.entries()) {
        const vv = zv ? `${zv}/${hv}` : hv;
        "directory" !== Sv.kind ? Pv.push(vv) : Pv.push(...await av(Sv, vv))
      }
      return Pv
    }
    async function sv(vv, zv, Pv) {
      const hv = Tv(zv),
        Sv = await (0, dv.i)(vv, hv);
      if (!Sv) return;
      const ev = new Set([Wv(zv), "package.json"]);
      if (Pv)
        for (const dv of Object.keys(zv.files)) ev.add(dv);
      const gv = await av(Sv),
        pv = new Set;
      for (const Tv of gv) {
        if (ev.has(Tv)) continue;
        await (0, dv.I)(vv, `${hv}/${Tv}`);
        const zv = Tv.split("/");
        for (let vv = 1; vv < zv.length; vv++) pv.add(zv.slice(0, vv).join("/"))
      }
      const Nv = [...pv].sort(((vv, zv) => zv.split("/").length - vv.split("/").length));
      for (const Tv of Nv) try {
        await (0, dv.I)(vv, `${hv}/${Tv}`)
      } catch (lv) {
        if (lv instanceof DOMException && "InvalidModificationError" === lv.name) continue;
        throw lv
      }
    }

    function Cv(vv) {
      const zv = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const hv of Object.values(gv.e)) zv[hv.specifier] = [`.${hv.typesVfsPath}`];
      const Pv = [];
      for (const hv of vv)
        for (const vv of Object.keys(hv.files)) Pv.push(lv((0, pv.q)(hv.name, vv)));
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
          paths: zv
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...Pv]
      }, null, "\t") + "\n"
    }
    async function iv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const Pv = new Set(zv.map((vv => vv.name))),
        Wv = Object.values(gv.e).flatMap((zv => {
          const hv = lv(zv.typesVfsPath),
            Sv = `${Tv(zv)}/package.json`;
          return [...Pv.has(zv.name) ? Object.entries(zv.files).map((Pv => {
            let [hv, Sv] = Pv;
            return (0, dv.O)(vv, lv((0, pv.q)(zv.name, hv)), Sv)
          })) : [], (0, dv.O)(vv, hv, zv.types), (0, dv.O)(vv, Sv, wv(zv))]
        }));
      await Promise.all([(0, dv.O)(vv, "node_modules/@bloxd/index.d.ts", hv.default), (0, dv.O)(vv, "node_modules/@bloxd/globals.d.ts", ev.d), (0, dv.O)(vv, "node_modules/@bloxd/lib.d.ts", Sv.e), (0, dv.O)(vv, "node_modules/@bloxd/package.json", Nv), (0, dv.O)(vv, "tsconfig.json", Cv(zv)), ...Wv]), await Promise.all(Object.values(gv.e).map((zv => sv(vv, zv, Pv.has(zv.name)))))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);