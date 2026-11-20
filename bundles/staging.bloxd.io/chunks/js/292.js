export const id = 292;
export const ids = [292];
export const modules = {
  40612: (bb, ab, Ub) => {
    Ub.d(ab, {
      ensureLocalBloxdTypes: () => yb
    });
    var Ab = Ub(4446),
      Mb = Ub(40483),
      Tb = Ub(40475),
      Eb = Ub(36188),
      Yb = Ub(36190),
      Bb = Ub(36201);
    const eb = JSON.stringify({
      name: "@bloxd",
      types: "index.d.ts"
    }, null, "\t") + "\n";

    function vb(bb) {
      return bb.replace(/^\//, "")
    }

    function Lb(bb) {
      return vb((0, Yb.u)(bb.name, "")).replace(/\/$/, "")
    }

    function Pb(bb) {
      return bb.typesVfsPath.slice(bb.typesVfsPath.lastIndexOf("/") + 1)
    }

    function Xb(bb) {
      return JSON.stringify({
        name: bb.specifier,
        types: Pb(bb)
      }, null, "\t") + "\n"
    }
    async function jb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const Ub = [];
      for await (const [Ab, Mb] of bb.entries()) {
        const bb = ab ? `${ab}/${Ab}` : Ab;
        "directory" !== Mb.kind ? Ub.push(bb) : Ub.push(...await jb(Mb, bb))
      }
      return Ub
    }
    async function Rb(bb, ab, Ub) {
      const Ab = Lb(ab),
        Mb = await (0, Bb.k)(bb, Ab);
      if (!Mb) return;
      const Tb = new Set([Pb(ab), "package.json"]);
      if (Ub)
        for (const Bb of Object.keys(ab.files)) Tb.add(Bb);
      const Eb = await jb(Mb),
        Yb = new Set;
      for (const Lb of Eb) {
        if (Tb.has(Lb)) continue;
        await (0, Bb.C)(bb, `${Ab}/${Lb}`);
        const ab = Lb.split("/");
        for (let bb = 1; bb < ab.length; bb++) Yb.add(ab.slice(0, bb).join("/"))
      }
      const eb = [...Yb].sort(((bb, ab) => ab.split("/").length - bb.split("/").length));
      for (const Lb of eb) try {
        await (0, Bb.C)(bb, `${Ab}/${Lb}`)
      } catch (vb) {
        if (vb instanceof DOMException && "InvalidModificationError" === vb.name) continue;
        throw vb
      }
    }

    function kb(bb) {
      const ab = {
        "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
      };
      for (const Ab of Object.values(Eb.c)) ab[Ab.specifier] = [`.${Ab.typesVfsPath}`];
      const Ub = [];
      for (const Ab of bb)
        for (const bb of Object.keys(Ab.files)) Ub.push(vb((0, Yb.u)(Ab.name, bb)));
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
          paths: ab
        },
        include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
        files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...Ub]
      }, null, "\t") + "\n"
    }
    async function yb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      const Ub = new Set(ab.map((bb => bb.name))),
        Pb = Object.values(Eb.c).flatMap((ab => {
          const Ab = vb(ab.typesVfsPath),
            Mb = `${Lb(ab)}/package.json`;
          return [...Ub.has(ab.name) ? Object.entries(ab.files).map((Ub => {
            let [Ab, Mb] = Ub;
            return (0, Bb.K)(bb, vb((0, Yb.u)(ab.name, Ab)), Mb)
          })) : [], (0, Bb.K)(bb, Ab, ab.types), (0, Bb.K)(bb, Mb, Xb(ab))]
        }));
      await Promise.all([(0, Bb.K)(bb, "node_modules/@bloxd/index.d.ts", Ab.default), (0, Bb.K)(bb, "node_modules/@bloxd/globals.d.ts", Tb.d), (0, Bb.K)(bb, "node_modules/@bloxd/lib.d.ts", Mb.e), (0, Bb.K)(bb, "node_modules/@bloxd/package.json", eb), (0, Bb.K)(bb, "tsconfig.json", kb(ab)), ...Pb]), await Promise.all(Object.values(Eb.c).map((ab => Rb(bb, ab, Ub.has(ab.name)))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);