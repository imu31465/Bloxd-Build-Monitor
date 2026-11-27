export const id = 620;
export const ids = [620];
export const modules = {
  53667: (WW, iW, OW) => {
    OW.d(iW, {
      ensureLocalBloxdTypes: () => UW
    });
    var mW = OW(5506),
      EW = OW(53577),
      NW = OW(53569),
      PW = OW(38001),
      LW = OW(38010),
      cW = OW(38018);
    const wW = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function tW(WW) {
      return WW.replace(/^\//, "")
    }

    function ZW(WW) {
      return tW((0, LW.v)(WW.name, "")).replace(/\/$/, "")
    }

    function xW(WW) {
      return WW.typesVfsPath.slice(WW.typesVfsPath.lastIndexOf("/") + 1)
    }

    function lW(WW) {
      return JSON.stringify({
        name: WW.specifier,
        types: xW(WW)
      }, null, "\t") + "\n"
    }
    async function AW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const OW = [];
      for await (const [mW, EW] of WW.entries()) {
        const WW = iW ? `${iW}/${mW}` : mW;
        "directory" !== EW.kind ? OW.push(WW) : OW.push(...await AW(EW, WW))
      }
      return OW
    }
    async function bW(WW, iW, OW) {
      const mW = ZW(iW),
        EW = await (0, cW.i)(WW, mW);
      if (!EW) return;
      const NW = new Set([xW(iW), "package.json"]);
      if (OW)
        for (const cW of Object.keys(iW.files)) NW.add(cW);
      const PW = await AW(EW),
        LW = new Set;
      for (const ZW of PW) {
        if (NW.has(ZW)) continue;
        await (0, cW.C)(WW, `${mW}/${ZW}`);
        const iW = ZW.split("/");
        for (let WW = 1; WW < iW.length; WW++) LW.add(iW.slice(0, WW).join("/"))
      }
      const wW = [...LW].sort(((WW, iW) => iW.split("/").length - WW.split("/").length));
      for (const ZW of wW) try {
        await (0, cW.C)(WW, `${mW}/${ZW}`)
      } catch (tW) {
        if (tW instanceof DOMException && "InvalidModificationError" === tW.name) continue;
        throw tW
      }
    }

    function jW(WW) {
      const iW = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const mW of Object.values(PW.e)) iW[mW.specifier] = [`.${mW.typesVfsPath}`];
      const OW = [];
      for (const mW of WW)
        for (const WW of Object.keys(mW.files)) OW.push(tW((0, LW.v)(mW.name, WW)));
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
          paths: iW
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...OW]
      }, null, "\t") + "\n"
    }
    async function UW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const OW = new Set(iW.map((WW => WW.name))),
        xW = Object.values(PW.e).flatMap((iW => {
          const mW = tW(iW.typesVfsPath),
            EW = `${ZW(iW)}/package.json`;
          return [...OW.has(iW.name) ? Object.entries(iW.files).map((OW => {
            let [mW, EW] = OW;
            return (0, cW.K)(WW, tW((0, LW.v)(iW.name, mW)), EW)
          })) : [], (0, cW.K)(WW, mW, iW.types), (0, cW.K)(WW, EW, lW(iW))]
        }));
      await Promise.all([(0, cW.K)(WW, "node_modules/@bloxd/index.d.ts", mW.default), (0, cW.K)(WW, "node_modules/@bloxd/globals.d.ts", NW.e), (0, cW.K)(WW, "node_modules/@bloxd/lib.d.ts", EW.e), (0, cW.K)(WW, "node_modules/@bloxd/package.json", wW), (0, cW.K)(WW, "tsconfig.json", jW(iW)), ...xW]), await Promise.all(Object.values(PW.e).map((iW => bW(WW, iW, OW.has(iW.name)))))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);