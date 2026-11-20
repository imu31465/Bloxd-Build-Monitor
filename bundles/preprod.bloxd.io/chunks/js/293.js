export const id = 293;
export const ids = [293];
export const modules = {
  41238: (qq, Eq, gq) => {
    gq.d(Eq, {
      ensureLocalBloxdTypes: () => jq
    });
    var Yq = gq(4583),
      lq = gq(41120),
      Oq = gq(41113),
      mq = gq(36902),
      xq = gq(36906),
      Aq = gq(36922);
    const cq = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function uq(qq) {
      return qq.replace(/^\//, "")
    }

    function Bq(qq) {
      return uq((0, xq.o)(qq.name, "")).replace(/\/$/, "")
    }

    function Wq(qq) {
      return qq.typesVfsPath.slice(qq.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Nq(qq) {
      return JSON.stringify({
        name: qq.specifier,
        types: Wq(qq)
      }, null, "\t") + "\n"
    }
    async function aq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const gq = [];
      for await (const [Yq, lq] of qq.entries()) {
        const qq = Eq ? `${Eq}/${Yq}` : Yq;
        "directory" !== lq.kind ? gq.push(qq) : gq.push(...await aq(lq, qq))
      }
      return gq
    }
    async function Vq(qq, Eq, gq) {
      const Yq = Bq(Eq),
        lq = await (0, Aq.k)(qq, Yq);
      if (!lq) return;
      const Oq = new Set([Wq(Eq), "package.json"]);
      if (gq)
        for (const Aq of Object.keys(Eq.files)) Oq.add(Aq);
      const mq = await aq(lq),
        xq = new Set;
      for (const Bq of mq) {
        if (Oq.has(Bq)) continue;
        await (0, Aq.D)(qq, `${Yq}/${Bq}`);
        const Eq = Bq.split("/");
        for (let qq = 1; qq < Eq.length; qq++) xq.add(Eq.slice(0, qq).join("/"))
      }
      const cq = [...xq].sort(((qq, Eq) => Eq.split("/").length - qq.split("/").length));
      for (const Bq of cq) try {
        await (0, Aq.D)(qq, `${Yq}/${Bq}`)
      } catch (uq) {
        if (uq instanceof DOMException && "InvalidModificationError" === uq.name) continue;
        throw uq
      }
    }

    function dq(qq) {
      const Eq = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Yq of Object.values(mq.i)) Eq[Yq.specifier] = [`.${Yq.typesVfsPath}`];
      const gq = [];
      for (const Yq of qq)
        for (const qq of Object.keys(Yq.files)) gq.push(uq((0, xq.o)(Yq.name, qq)));
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
          paths: Eq
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...gq]
      }, null, "\t") + "\n"
    }
    async function jq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const gq = new Set(Eq.map((qq => qq.name))),
        Wq = Object.values(mq.i).flatMap((Eq => {
          const Yq = uq(Eq.typesVfsPath),
            lq = `${Bq(Eq)}/package.json`;
          return [...gq.has(Eq.name) ? Object.entries(Eq.files).map((gq => {
            let [Yq, lq] = gq;
            return (0, Aq.J)(qq, uq((0, xq.o)(Eq.name, Yq)), lq)
          })) : [], (0, Aq.J)(qq, Yq, Eq.types), (0, Aq.J)(qq, lq, Nq(Eq))]
        }));
      await Promise.all([(0, Aq.J)(qq, "node_modules/@bloxd/index.d.ts", Yq.default), (0, Aq.J)(qq, "node_modules/@bloxd/globals.d.ts", Oq.d), (0, Aq.J)(qq, "node_modules/@bloxd/lib.d.ts", lq.c), (0, Aq.J)(qq, "node_modules/@bloxd/package.json", cq), (0, Aq.J)(qq, "tsconfig.json", dq(Eq)), ...Wq]), await Promise.all(Object.values(mq.i).map((Eq => Vq(qq, Eq, gq.has(Eq.name)))))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);