export const id = 292;
export const ids = [292];
export const modules = {
  40547: (YY, rY, DY) => {
    DY.d(rY, {
      ensureLocalBloxdTypes: () => WY
    });
    var FY = DY(4340),
      AY = DY(40466),
      IY = DY(40457),
      RY = DY(36237),
      OY = DY(36241),
      gY = DY(36254);
    const aY = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function vY(YY) {
      return YY.replace(/^\//, "")
    }

    function uY(YY) {
      return vY((0, OY.q)(YY.name, "")).replace(/\/$/, "")
    }

    function sY(YY) {
      return YY.typesVfsPath.slice(YY.typesVfsPath.lastIndexOf("/") + 1)
    }

    function iY(YY) {
      return JSON.stringify({
        name: YY.specifier,
        types: sY(YY)
      }, null, "\t") + "\n"
    }
    async function yY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const DY = [];
      for await (const [FY, AY] of YY.entries()) {
        const YY = rY ? `${rY}/${FY}` : FY;
        "directory" !== AY.kind ? DY.push(YY) : DY.push(...await yY(AY, YY))
      }
      return DY
    }
    async function QY(YY, rY, DY) {
      const FY = uY(rY),
        AY = await (0, gY.i)(YY, FY);
      if (!AY) return;
      const IY = new Set([sY(rY), "package.json"]);
      if (DY)
        for (const gY of Object.keys(rY.files)) IY.add(gY);
      const RY = await yY(AY),
        OY = new Set;
      for (const uY of RY) {
        if (IY.has(uY)) continue;
        await (0, gY.D)(YY, `${FY}/${uY}`);
        const rY = uY.split("/");
        for (let YY = 1; YY < rY.length; YY++) OY.add(rY.slice(0, YY).join("/"))
      }
      const aY = [...OY].sort(((YY, rY) => rY.split("/").length - YY.split("/").length));
      for (const uY of aY) try {
        await (0, gY.D)(YY, `${FY}/${uY}`)
      } catch (vY) {
        if (vY instanceof DOMException && "InvalidModificationError" === vY.name) continue;
        throw vY
      }
    }

    function oY(YY) {
      const rY = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const FY of Object.values(RY.f)) rY[FY.specifier] = [`.${FY.typesVfsPath}`];
      const DY = [];
      for (const FY of YY)
        for (const YY of Object.keys(FY.files)) DY.push(vY((0, OY.q)(FY.name, YY)));
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
          paths: rY
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...DY]
      }, null, "\t") + "\n"
    }
    async function WY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const DY = new Set(rY.map((YY => YY.name))),
        sY = Object.values(RY.f).flatMap((rY => {
          const FY = vY(rY.typesVfsPath),
            AY = `${uY(rY)}/package.json`;
          return [...DY.has(rY.name) ? Object.entries(rY.files).map((DY => {
            let [FY, AY] = DY;
            return (0, gY.L)(YY, vY((0, OY.q)(rY.name, FY)), AY)
          })) : [], (0, gY.L)(YY, FY, rY.types), (0, gY.L)(YY, AY, iY(rY))]
        }));
      await Promise.all([(0, gY.L)(YY, "node_modules/@bloxd/index.d.ts", FY.default), (0, gY.L)(YY, "node_modules/@bloxd/globals.d.ts", IY.b), (0, gY.L)(YY, "node_modules/@bloxd/lib.d.ts", AY.e), (0, gY.L)(YY, "node_modules/@bloxd/package.json", aY), (0, gY.L)(YY, "tsconfig.json", oY(rY)), ...sY]), await Promise.all(Object.values(RY.f).map((rY => QY(YY, rY, DY.has(rY.name)))))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);