export const id = 290;
export const ids = [290];
export const modules = {
  40591: (zz, tz, sz) => {
    sz.d(tz, {
      collectImportedWorldCodePluginNames: () => Uz
    });
    var Fz = sz(36283),
      Wz = sz(36274),
      Xz = sz(40527),
      Oz = sz.n(Xz);

    function oz(zz) {
      return Oz().isImportDeclaration(zz) && Oz().isStringLiteral(zz.moduleSpecifier) && function(zz) {
        const tz = zz.importClause;
        if (!tz) return !0;
        if (tz.isTypeOnly) return !1;
        const sz = tz.namedBindings;
        return !(sz && !Oz().isNamespaceImport(sz)) || !!tz.name || sz.elements.some((zz => !zz.isTypeOnly))
      }(zz) || Oz().isExportDeclaration(zz) && zz.moduleSpecifier && Oz().isStringLiteral(zz.moduleSpecifier) && function(zz) {
        return !zz.isTypeOnly && (!zz.exportClause || !Oz().isNamedExports(zz.exportClause) || 0 === zz.exportClause.elements.length || zz.exportClause.elements.some((zz => !zz.isTypeOnly)))
      }(zz) ? zz.moduleSpecifier.text : Oz().isImportEqualsDeclaration(zz) && !zz.isTypeOnly && Oz().isExternalModuleReference(zz.moduleReference) && zz.moduleReference.expression && Oz().isStringLiteral(zz.moduleReference.expression) ? zz.moduleReference.expression.text : Oz().isCallExpression(zz) && Oz().isIdentifier(zz.expression) && "require" === zz.expression.text && 1 === zz.arguments.length && Oz().isStringLiteral(zz.arguments[0]) ? zz.arguments[0].text : void 0
    }

    function vz(zz, tz, sz) {
      if (!tz.startsWith("./") && !tz.startsWith("../")) return;
      const Wz = ((zz.includes("/") ? zz.slice(0, zz.lastIndexOf("/") + 1) : "") + tz).split("/"),
        Xz = [];
      for (const Fz of Wz)
        if ("" !== Fz && "." !== Fz)
          if (".." !== Fz) Xz.push(Fz);
          else {
            if (0 === Xz.length) return;
            Xz.pop()
          } const Oz = Xz.join("/");
      for (const oz of [Oz, `${Oz}.ts`, `${Oz}.js`])
        if (oz in sz && !(0, Fz.r)(oz)) return oz
    }

    function Uz(zz) {
      const tz = new Set,
        sz = (0, Wz.b)(zz);
      if (!sz) return [];
      const Fz = [sz],
        Xz = new Set;
      for (; Fz.length > 0;) {
        const sz = Fz.pop();
        if (!sz || Xz.has(sz)) continue;
        Xz.add(sz);
        const Uz = Oz().createSourceFile(sz, zz[sz], Oz().ScriptTarget.Latest, !1),
          Kz = Uz => {
            const uz = oz(Uz),
              Nz = uz ? (0, Wz.q)(uz) : null;
            if (Nz) tz.add(Nz);
            else if (uz) {
              const tz = vz(sz, uz, zz);
              tz && !Xz.has(tz) && Fz.push(tz)
            }
            Oz().forEachChild(Uz, Kz)
          };
        Kz(Uz)
      }
      return [...tz].sort()
    }
  },
  40556: zz => {
    function tz(zz) {
      var tz = new Error("Cannot find module '" + zz + "'");
      throw tz.code = "MODULE_NOT_FOUND", tz
    }
    tz.keys = () => [], tz.resolve = tz, tz.id = 40556, zz.exports = tz
  },
  40551: () => {},
  40534: () => {},
  40564: () => {},
  40547: () => {},
  40540: () => {},
  40530: () => {},
  40553: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);