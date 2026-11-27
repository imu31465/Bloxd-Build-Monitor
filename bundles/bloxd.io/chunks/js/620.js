export const id = 620;
export const ids = [620];
export const modules = {
  53508: (RR, JR, GR) => {
    GR.d(JR, {
      ensureLocalBloxdTypes: () => nR
    });
    var yR = GR(5650),
      tR = GR(53388),
      uR = GR(53382),
      ZR = GR(37967),
      qR = GR(37976),
      iR = GR(37988);
    const fR = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function VR(RR) {
      return RR.replace(/^\//, "")
    }

    function KR(RR) {
      return VR((0, qR.w)(RR.name, "")).replace(/\/$/, "")
    }

    function wR(RR) {
      return RR.typesVfsPath.slice(RR.typesVfsPath.lastIndexOf("/") + 1)
    }

    function rR(RR) {
      return JSON.stringify({
        name: RR.specifier,
        types: wR(RR)
      }, null, "\t") + "\n"
    }
    async function eR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const GR = [];
      for await (const [yR, tR] of RR.entries()) {
        const RR = JR ? `${JR}/${yR}` : yR;
        "directory" !== tR.kind ? GR.push(RR) : GR.push(...await eR(tR, RR))
      }
      return GR
    }
    async function aR(RR, JR, GR) {
      const yR = KR(JR),
        tR = await (0, iR.l)(RR, yR);
      if (!tR) return;
      const uR = new Set([wR(JR), "package.json"]);
      if (GR)
        for (const iR of Object.keys(JR.files)) uR.add(iR);
      const ZR = await eR(tR),
        qR = new Set;
      for (const KR of ZR) {
        if (uR.has(KR)) continue;
        await (0, iR.E)(RR, `${yR}/${KR}`);
        const JR = KR.split("/");
        for (let RR = 1; RR < JR.length; RR++) qR.add(JR.slice(0, RR).join("/"))
      }
      const fR = [...qR].sort(((RR, JR) => JR.split("/").length - RR.split("/").length));
      for (const KR of fR) try {
        await (0, iR.E)(RR, `${yR}/${KR}`)
      } catch (VR) {
        if (VR instanceof DOMException && "InvalidModificationError" === VR.name) continue;
        throw VR
      }
    }

    function LR(RR) {
      const JR = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const yR of Object.values(ZR.i)) JR[yR.specifier] = [`.${yR.typesVfsPath}`];
      const GR = [];
      for (const yR of RR)
        for (const RR of Object.keys(yR.files)) GR.push(VR((0, qR.w)(yR.name, RR)));
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
          paths: JR
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...GR]
      }, null, "\t") + "\n"
    }
    async function nR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const GR = new Set(JR.map((RR => RR.name))),
        wR = Object.values(ZR.i).flatMap((JR => {
          const yR = VR(JR.typesVfsPath),
            tR = `${KR(JR)}/package.json`;
          return [...GR.has(JR.name) ? Object.entries(JR.files).map((GR => {
            let [yR, tR] = GR;
            return (0, iR.N)(RR, VR((0, qR.w)(JR.name, yR)), tR)
          })) : [], (0, iR.N)(RR, yR, JR.types), (0, iR.N)(RR, tR, rR(JR))]
        }));
      await Promise.all([(0, iR.N)(RR, "node_modules/@bloxd/index.d.ts", yR.default), (0, iR.N)(RR, "node_modules/@bloxd/globals.d.ts", uR.d), (0, iR.N)(RR, "node_modules/@bloxd/lib.d.ts", tR.b), (0, iR.N)(RR, "node_modules/@bloxd/package.json", fR), (0, iR.N)(RR, "tsconfig.json", LR(JR)), ...wR]), await Promise.all(Object.values(ZR.i).map((JR => aR(RR, JR, GR.has(JR.name)))))
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);