export const id = 306;
export const ids = [306];
export const modules = {
  41736: (pp, ip, cp) => {
    cp.d(ip, {
      ensureLocalBloxdTypes: () => vp
    });
    var Op = cp(4874),
      op = cp(41630),
      Ip = cp(41621),
      Sp = cp(37053),
      xp = cp(37055),
      Lp = cp(37070);
    const Yp = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function Dp(pp) {
      return pp.replace(/^\//, "")
    }

    function Ap(pp) {
      return Dp((0, xp.s)(pp.name, "")).replace(/\/$/, "")
    }

    function Pp(pp) {
      return pp.typesVfsPath.slice(pp.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Wp(pp) {
      return JSON.stringify({
        name: pp.specifier,
        types: Pp(pp)
      }, null, "\t") + "\n"
    }
    async function yp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const cp = [];
      for await (const [Op, op] of pp.entries()) {
        const pp = ip ? `${ip}/${Op}` : Op;
        "directory" !== op.kind ? cp.push(pp) : cp.push(...await yp(op, pp))
      }
      return cp
    }
    async function Up(pp, ip, cp) {
      const Op = Ap(ip),
        op = await (0, Lp.j)(pp, Op);
      if (!op) return;
      const Ip = new Set([Pp(ip), "package.json"]);
      if (cp)
        for (const Lp of Object.keys(ip.files)) Ip.add(Lp);
      const Sp = await yp(op),
        xp = new Set;
      for (const Ap of Sp) {
        if (Ip.has(Ap)) continue;
        await (0, Lp.w)(pp, `${Op}/${Ap}`);
        const ip = Ap.split("/");
        for (let pp = 1; pp < ip.length; pp++) xp.add(ip.slice(0, pp).join("/"))
      }
      const Yp = [...xp].sort(((pp, ip) => ip.split("/").length - pp.split("/").length));
      for (const Ap of Yp) try {
        await (0, Lp.w)(pp, `${Op}/${Ap}`)
      } catch (Dp) {
        if (Dp instanceof DOMException && "InvalidModificationError" === Dp.name) continue;
        throw Dp
      }
    }

    function wp(pp) {
      const ip = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Op of Object.values(Sp.e)) ip[Op.specifier] = [`.${Op.typesVfsPath}`];
      const cp = [];
      for (const Op of pp)
        for (const pp of Object.keys(Op.files)) cp.push(Dp((0, xp.s)(Op.name, pp)));
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
          paths: ip
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...cp]
      }, null, "\t") + "\n"
    }
    async function vp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const cp = new Set(ip.map((pp => pp.name))),
        Pp = Object.values(Sp.e).flatMap((ip => {
          const Op = Dp(ip.typesVfsPath),
            op = `${Ap(ip)}/package.json`;
          return [...cp.has(ip.name) ? Object.entries(ip.files).map((cp => {
            let [Op, op] = cp;
            return (0, Lp.E)(pp, Dp((0, xp.s)(ip.name, Op)), op)
          })) : [], (0, Lp.E)(pp, Op, ip.types), (0, Lp.E)(pp, op, Wp(ip))]
        }));
      await Promise.all([(0, Lp.E)(pp, "node_modules/@bloxd/index.d.ts", Op.default), (0, Lp.E)(pp, "node_modules/@bloxd/globals.d.ts", Ip.d), (0, Lp.E)(pp, "node_modules/@bloxd/lib.d.ts", op.b), (0, Lp.E)(pp, "node_modules/@bloxd/package.json", Yp), (0, Lp.E)(pp, "tsconfig.json", wp(ip)), ...Pp]), await Promise.all(Object.values(Sp.e).map((ip => Up(pp, ip, cp.has(ip.name)))))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);