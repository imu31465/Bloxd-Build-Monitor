export const id = 272;
export const ids = [272];
export const modules = {
  38963: (WW, RW, MW) => {
    MW.d(RW, {
      ensureLocalBloxdTypes: () => JW
    });
    var wW = MW(3729),
      CW = MW(38853),
      zR = MW(38844),
      AW = MW(35036),
      bR = MW(35045),
      yR = MW(35063);
    const NW = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function eW(WW) {
      return WW.replace(/^\//, "")
    }

    function BW(WW) {
      return eW((0, bR.s)(WW.name, "")).replace(/\/$/, "")
    }

    function tR(WW) {
      return WW.typesVfsPath.slice(WW.typesVfsPath.lastIndexOf("/") + 1)
    }

    function TW(WW) {
      return JSON.stringify({
        name: WW.specifier,
        types: tR(WW)
      }, null, "\t") + "\n"
    }
    async function gR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const MW = [];
      for await (const [wW, CW] of WW.entries()) {
        const WW = RW ? `${RW}/${wW}` : wW;
        "directory" !== CW.kind ? MW.push(WW) : MW.push(...await gR(CW, WW))
      }
      return MW
    }
    async function iR(WW, RW, MW) {
      const wW = BW(RW),
        CW = await (0, yR.j)(WW, wW);
      if (!CW) return;
      const zR = new Set([tR(RW), "package.json"]);
      if (MW)
        for (const yR of Object.keys(RW.files)) zR.add(yR);
      const AW = await gR(CW),
        bR = new Set;
      for (const BW of AW) {
        if (zR.has(BW)) continue;
        await (0, yR.B)(WW, `${wW}/${BW}`);
        const RW = BW.split("/");
        for (let WW = 1; WW < RW.length; WW++) bR.add(RW.slice(0, WW).join("/"))
      }
      const NW = [...bR].sort(((WW, RW) => RW.split("/").length - WW.split("/").length));
      for (const BW of NW) try {
        await (0, yR.B)(WW, `${wW}/${BW}`)
      } catch (eW) {
        if (eW instanceof DOMException && "InvalidModificationError" === eW.name) continue;
        throw eW
      }
    }

    function YW(WW) {
      const RW = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const wW of Object.values(AW.d)) RW[wW.specifier] = [`.${wW.typesVfsPath}`];
      const MW = [];
      for (const wW of WW)
        for (const WW of Object.keys(wW.files)) MW.push(eW((0, bR.s)(wW.name, WW)));
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
          paths: RW
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...MW]
      }, null, "\t") + "\n"
    }
    async function JW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const MW = new Set(RW.map((WW => WW.name))),
        tR = Object.values(AW.d).flatMap((RW => {
          const wW = eW(RW.typesVfsPath),
            CW = `${BW(RW)}/package.json`;
          return [...MW.has(RW.name) ? Object.entries(RW.files).map((MW => {
            let [wW, CW] = MW;
            return (0, yR.L)(WW, eW((0, bR.s)(RW.name, wW)), CW)
          })) : [], (0, yR.L)(WW, wW, RW.types), (0, yR.L)(WW, CW, TW(RW))]
        }));
      await Promise.all([(0, yR.L)(WW, "node_modules/@bloxd/index.d.ts", wW.default), (0, yR.L)(WW, "node_modules/@bloxd/globals.d.ts", zR.e), (0, yR.L)(WW, "node_modules/@bloxd/lib.d.ts", CW.b), (0, yR.L)(WW, "node_modules/@bloxd/package.json", NW), (0, yR.L)(WW, "tsconfig.json", YW(RW)), ...tR]), await Promise.all(Object.values(AW.d).map((RW => iR(WW, RW, MW.has(RW.name)))))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);