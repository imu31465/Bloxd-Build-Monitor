export const id = 611;
export const ids = [611];
export const modules = {
  44381: (VV, eV, xV) => {
    xV.d(eV, {
      ensureLocalBloxdTypes: () => BV
    });
    var JV = xV(5259),
      YV = xV(44299),
      UV = xV(44295),
      yV = xV(38041),
      pV = xV(38047),
      QV = xV(38054);
    const nV = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function wV(VV) {
      return VV.replace(/^\//, "")
    }

    function ZV(VV) {
      return wV((0, pV.v)(VV.name, "")).replace(/\/$/, "")
    }

    function vV(VV) {
      return VV.typesVfsPath.slice(VV.typesVfsPath.lastIndexOf("/") + 1)
    }

    function rV(VV) {
      return JSON.stringify({
        name: VV.specifier,
        types: vV(VV)
      }, null, "\t") + "\n"
    }
    async function kV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const xV = [];
      for await (const [JV, YV] of VV.entries()) {
        const VV = eV ? `${eV}/${JV}` : JV;
        "directory" !== YV.kind ? xV.push(VV) : xV.push(...await kV(YV, VV))
      }
      return xV
    }
    async function bV(VV, eV, xV) {
      const JV = ZV(eV),
        YV = await (0, QV.j)(VV, JV);
      if (!YV) return;
      const UV = new Set([vV(eV), "package.json"]);
      if (xV)
        for (const QV of Object.keys(eV.files)) UV.add(QV);
      const yV = await kV(YV),
        pV = new Set;
      for (const ZV of yV) {
        if (UV.has(ZV)) continue;
        await (0, QV.E)(VV, `${JV}/${ZV}`);
        const eV = ZV.split("/");
        for (let VV = 1; VV < eV.length; VV++) pV.add(eV.slice(0, VV).join("/"))
      }
      const nV = [...pV].sort(((VV, eV) => eV.split("/").length - VV.split("/").length));
      for (const ZV of nV) try {
        await (0, QV.E)(VV, `${JV}/${ZV}`)
      } catch (wV) {
        if (wV instanceof DOMException && "InvalidModificationError" === wV.name) continue;
        throw wV
      }
    }

    function EV(VV) {
      const eV = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const JV of Object.values(yV.e)) eV[JV.specifier] = [`.${JV.typesVfsPath}`];
      const xV = [];
      for (const JV of VV)
        for (const VV of Object.keys(JV.files)) xV.push(wV((0, pV.v)(JV.name, VV)));
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
          paths: eV
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...xV]
      }, null, "\t") + "\n"
    }
    async function BV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const xV = new Set(eV.map((VV => VV.name))),
        vV = Object.values(yV.e).flatMap((eV => {
          const JV = wV(eV.typesVfsPath),
            YV = `${ZV(eV)}/package.json`;
          return [...xV.has(eV.name) ? Object.entries(eV.files).map((xV => {
            let [JV, YV] = xV;
            return (0, QV.I)(VV, wV((0, pV.v)(eV.name, JV)), YV)
          })) : [], (0, QV.I)(VV, JV, eV.types), (0, QV.I)(VV, YV, rV(eV))]
        }));
      await Promise.all([(0, QV.I)(VV, "node_modules/@bloxd/index.d.ts", JV.default), (0, QV.I)(VV, "node_modules/@bloxd/globals.d.ts", UV.d), (0, QV.I)(VV, "node_modules/@bloxd/lib.d.ts", YV.d), (0, QV.I)(VV, "node_modules/@bloxd/package.json", nV), (0, QV.I)(VV, "tsconfig.json", EV(eV)), ...vV]), await Promise.all(Object.values(yV.e).map((eV => bV(VV, eV, xV.has(eV.name)))))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);