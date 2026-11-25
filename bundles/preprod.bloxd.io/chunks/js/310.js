export const id = 310;
export const ids = [310];
export const modules = {
  41724: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      ensureLocalBloxdTypes: () => VQ
    });
    var wQ = XQ(5085),
      qQ = XQ(41613),
      TQ = XQ(41611),
      zQ = XQ(37152),
      sQ = XQ(37158),
      FQ = XQ(37165);
    const PQ = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function gQ(QQ) {
      return QQ.replace(/^\//, "")
    }

    function JQ(QQ) {
      return gQ((0, sQ.t)(QQ.name, "")).replace(/\/$/, "")
    }

    function rQ(QQ) {
      return QQ.typesVfsPath.slice(QQ.typesVfsPath.lastIndexOf("/") + 1)
    }

    function IQ(QQ) {
      return JSON.stringify({
        name: QQ.specifier,
        types: rQ(QQ)
      }, null, "\t") + "\n"
    }
    async function jQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const XQ = [];
      for await (const [wQ, qQ] of QQ.entries()) {
        const QQ = WQ ? `${WQ}/${wQ}` : wQ;
        "directory" !== qQ.kind ? XQ.push(QQ) : XQ.push(...await jQ(qQ, QQ))
      }
      return XQ
    }
    async function BQ(QQ, WQ, XQ) {
      const wQ = JQ(WQ),
        qQ = await (0, FQ.o)(QQ, wQ);
      if (!qQ) return;
      const TQ = new Set([rQ(WQ), "package.json"]);
      if (XQ)
        for (const FQ of Object.keys(WQ.files)) TQ.add(FQ);
      const zQ = await jQ(qQ),
        sQ = new Set;
      for (const JQ of zQ) {
        if (TQ.has(JQ)) continue;
        await (0, FQ.E)(QQ, `${wQ}/${JQ}`);
        const WQ = JQ.split("/");
        for (let QQ = 1; QQ < WQ.length; QQ++) sQ.add(WQ.slice(0, QQ).join("/"))
      }
      const PQ = [...sQ].sort(((QQ, WQ) => WQ.split("/").length - QQ.split("/").length));
      for (const JQ of PQ) try {
        await (0, FQ.E)(QQ, `${wQ}/${JQ}`)
      } catch (gQ) {
        if (gQ instanceof DOMException && "InvalidModificationError" === gQ.name) continue;
        throw gQ
      }
    }

    function yQ(QQ) {
      const WQ = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const wQ of Object.values(zQ.f)) WQ[wQ.specifier] = [`.${wQ.typesVfsPath}`];
      const XQ = [];
      for (const wQ of QQ)
        for (const QQ of Object.keys(wQ.files)) XQ.push(gQ((0, sQ.t)(wQ.name, QQ)));
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
          paths: WQ
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...XQ]
      }, null, "\t") + "\n"
    }
    async function VQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const XQ = new Set(WQ.map((QQ => QQ.name))),
        rQ = Object.values(zQ.f).flatMap((WQ => {
          const wQ = gQ(WQ.typesVfsPath),
            qQ = `${JQ(WQ)}/package.json`;
          return [...XQ.has(WQ.name) ? Object.entries(WQ.files).map((XQ => {
            let [wQ, qQ] = XQ;
            return (0, FQ.N)(QQ, gQ((0, sQ.t)(WQ.name, wQ)), qQ)
          })) : [], (0, FQ.N)(QQ, wQ, WQ.types), (0, FQ.N)(QQ, qQ, IQ(WQ))]
        }));
      await Promise.all([(0, FQ.N)(QQ, "node_modules/@bloxd/index.d.ts", wQ.default), (0, FQ.N)(QQ, "node_modules/@bloxd/globals.d.ts", TQ.b), (0, FQ.N)(QQ, "node_modules/@bloxd/lib.d.ts", qQ.c), (0, FQ.N)(QQ, "node_modules/@bloxd/package.json", PQ), (0, FQ.N)(QQ, "tsconfig.json", yQ(WQ)), ...rQ]), await Promise.all(Object.values(zQ.f).map((WQ => BQ(QQ, WQ, XQ.has(WQ.name)))))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);