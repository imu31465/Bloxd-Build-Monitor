export const id = 282;
export const ids = [282];
export const modules = {
  40225: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      ensureLocalBloxdTypes: () => xJ
    });
    var FJ = ZJ(4153),
      UJ = ZJ(40111),
      eJ = ZJ(40107),
      XJ = ZJ(35877),
      AJ = ZJ(35882),
      qJ = ZJ(35894);
    const jJ = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function YJ(JJ) {
      return JJ.replace(/^\//, "")
    }

    function hJ(JJ) {
      return YJ((0, AJ.y)(JJ.name, "")).replace(/\/$/, "")
    }

    function DJ(JJ) {
      return JJ.typesVfsPath.slice(JJ.typesVfsPath.lastIndexOf("/") + 1)
    }

    function sJ(JJ) {
      return JSON.stringify({
        name: JJ.specifier,
        types: DJ(JJ)
      }, null, "\t") + "\n"
    }
    async function nJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const ZJ = [];
      for await (const [FJ, UJ] of JJ.entries()) {
        const JJ = cJ ? `${cJ}/${FJ}` : FJ;
        "directory" !== UJ.kind ? ZJ.push(JJ) : ZJ.push(...await nJ(UJ, JJ))
      }
      return ZJ
    }
    async function GJ(JJ, cJ, ZJ) {
      const FJ = hJ(cJ),
        UJ = await (0, qJ.n)(JJ, FJ);
      if (!UJ) return;
      const eJ = new Set([DJ(cJ), "package.json"]);
      if (ZJ)
        for (const qJ of Object.keys(cJ.files)) eJ.add(qJ);
      const XJ = await nJ(UJ),
        AJ = new Set;
      for (const hJ of XJ) {
        if (eJ.has(hJ)) continue;
        await (0, qJ.F)(JJ, `${FJ}/${hJ}`);
        const cJ = hJ.split("/");
        for (let JJ = 1; JJ < cJ.length; JJ++) AJ.add(cJ.slice(0, JJ).join("/"))
      }
      const jJ = [...AJ].sort(((JJ, cJ) => cJ.split("/").length - JJ.split("/").length));
      for (const hJ of jJ) try {
        await (0, qJ.F)(JJ, `${FJ}/${hJ}`)
      } catch (YJ) {
        if (YJ instanceof DOMException && "InvalidModificationError" === YJ.name) continue;
        throw YJ
      }
    }

    function fJ(JJ) {
      const cJ = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const FJ of Object.values(XJ.g)) cJ[FJ.specifier] = [`.${FJ.typesVfsPath}`];
      const ZJ = [];
      for (const FJ of JJ)
        for (const JJ of Object.keys(FJ.files)) ZJ.push(YJ((0, AJ.y)(FJ.name, JJ)));
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
          paths: cJ
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...ZJ]
      }, null, "\t") + "\n"
    }
    async function xJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const ZJ = new Set(cJ.map((JJ => JJ.name))),
        DJ = Object.values(XJ.g).flatMap((cJ => {
          const FJ = YJ(cJ.typesVfsPath),
            UJ = `${hJ(cJ)}/package.json`;
          return [...ZJ.has(cJ.name) ? Object.entries(cJ.files).map((ZJ => {
            let [FJ, UJ] = ZJ;
            return (0, qJ.J)(JJ, YJ((0, AJ.y)(cJ.name, FJ)), UJ)
          })) : [], (0, qJ.J)(JJ, FJ, cJ.types), (0, qJ.J)(JJ, UJ, sJ(cJ))]
        }));
      await Promise.all([(0, qJ.J)(JJ, "node_modules/@bloxd/index.d.ts", FJ.default), (0, qJ.J)(JJ, "node_modules/@bloxd/globals.d.ts", eJ.e), (0, qJ.J)(JJ, "node_modules/@bloxd/lib.d.ts", UJ.e), (0, qJ.J)(JJ, "node_modules/@bloxd/package.json", jJ), (0, qJ.J)(JJ, "tsconfig.json", fJ(cJ)), ...DJ]), await Promise.all(Object.values(XJ.g).map((cJ => GJ(JJ, cJ, ZJ.has(cJ.name)))))
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);