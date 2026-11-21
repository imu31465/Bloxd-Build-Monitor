export const id = 293;
export const ids = [293];
export const modules = {
  40881: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      ensureLocalBloxdTypes: () => eQ
    });
    var LQ = wQ(4610),
      qQ = wQ(40770),
      oQ = wQ(40764),
      DQ = wQ(36472),
      kQ = wQ(36481),
      vQ = wQ(36491);
    const mQ = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function uQ(QQ) {
      return QQ.replace(/^\//, "")
    }

    function HQ(QQ) {
      return uQ((0, kQ.p)(QQ.name, "")).replace(/\/$/, "")
    }

    function bQ(QQ) {
      return QQ.typesVfsPath.slice(QQ.typesVfsPath.lastIndexOf("/") + 1)
    }

    function YQ(QQ) {
      return JSON.stringify({
        name: QQ.specifier,
        types: bQ(QQ)
      }, null, "\t") + "\n"
    }
    async function xQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const wQ = [];
      for await (const [LQ, qQ] of QQ.entries()) {
        const QQ = FQ ? `${FQ}/${LQ}` : LQ;
        "directory" !== qQ.kind ? wQ.push(QQ) : wQ.push(...await xQ(qQ, QQ))
      }
      return wQ
    }
    async function AQ(QQ, FQ, wQ) {
      const LQ = HQ(FQ),
        qQ = await (0, vQ.j)(QQ, LQ);
      if (!qQ) return;
      const oQ = new Set([bQ(FQ), "package.json"]);
      if (wQ)
        for (const vQ of Object.keys(FQ.files)) oQ.add(vQ);
      const DQ = await xQ(qQ),
        kQ = new Set;
      for (const HQ of DQ) {
        if (oQ.has(HQ)) continue;
        await (0, vQ.y)(QQ, `${LQ}/${HQ}`);
        const FQ = HQ.split("/");
        for (let QQ = 1; QQ < FQ.length; QQ++) kQ.add(FQ.slice(0, QQ).join("/"))
      }
      const mQ = [...kQ].sort(((QQ, FQ) => FQ.split("/").length - QQ.split("/").length));
      for (const HQ of mQ) try {
        await (0, vQ.y)(QQ, `${LQ}/${HQ}`)
      } catch (uQ) {
        if (uQ instanceof DOMException && "InvalidModificationError" === uQ.name) continue;
        throw uQ
      }
    }

    function tQ(QQ) {
      const FQ = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const LQ of Object.values(DQ.e)) FQ[LQ.specifier] = [`.${LQ.typesVfsPath}`];
      const wQ = [];
      for (const LQ of QQ)
        for (const QQ of Object.keys(LQ.files)) wQ.push(uQ((0, kQ.p)(LQ.name, QQ)));
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
          paths: FQ
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...wQ]
      }, null, "\t") + "\n"
    }
    async function eQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const wQ = new Set(FQ.map((QQ => QQ.name))),
        bQ = Object.values(DQ.e).flatMap((FQ => {
          const LQ = uQ(FQ.typesVfsPath),
            qQ = `${HQ(FQ)}/package.json`;
          return [...wQ.has(FQ.name) ? Object.entries(FQ.files).map((wQ => {
            let [LQ, qQ] = wQ;
            return (0, vQ.H)(QQ, uQ((0, kQ.p)(FQ.name, LQ)), qQ)
          })) : [], (0, vQ.H)(QQ, LQ, FQ.types), (0, vQ.H)(QQ, qQ, YQ(FQ))]
        }));
      await Promise.all([(0, vQ.H)(QQ, "node_modules/@bloxd/index.d.ts", LQ.default), (0, vQ.H)(QQ, "node_modules/@bloxd/globals.d.ts", oQ.b), (0, vQ.H)(QQ, "node_modules/@bloxd/lib.d.ts", qQ.c), (0, vQ.H)(QQ, "node_modules/@bloxd/package.json", mQ), (0, vQ.H)(QQ, "tsconfig.json", tQ(FQ)), ...bQ]), await Promise.all(Object.values(DQ.e).map((FQ => AQ(QQ, FQ, wQ.has(FQ.name)))))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);