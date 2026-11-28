export const id = 619;
export const ids = [619];
export const modules = {
  53936: (dd, Od, md) => {
    md.d(Od, {
      collectImportedWorldCodePluginNames: () => vd
    });
    var Wd = md(3401),
      Fd = md(38413),
      Rd = md(53856),
      Xd = md.n(Rd);

    function Kd(dd) {
      return Xd().isImportDeclaration(dd) && Xd().isStringLiteral(dd.moduleSpecifier) && function(dd) {
        const Od = dd.importClause;
        if (!Od) return !0;
        if (Od.isTypeOnly) return !1;
        const md = Od.namedBindings;
        return !(md && !Xd().isNamespaceImport(md)) || !!Od.name || md.elements.some((dd => !dd.isTypeOnly))
      }(dd) || Xd().isExportDeclaration(dd) && dd.moduleSpecifier && Xd().isStringLiteral(dd.moduleSpecifier) && function(dd) {
        return !dd.isTypeOnly && (!dd.exportClause || !Xd().isNamedExports(dd.exportClause) || 0 === dd.exportClause.elements.length || dd.exportClause.elements.some((dd => !dd.isTypeOnly)))
      }(dd) ? dd.moduleSpecifier.text : Xd().isImportEqualsDeclaration(dd) && !dd.isTypeOnly && Xd().isExternalModuleReference(dd.moduleReference) && dd.moduleReference.expression && Xd().isStringLiteral(dd.moduleReference.expression) ? dd.moduleReference.expression.text : Xd().isCallExpression(dd) && Xd().isIdentifier(dd.expression) && "require" === dd.expression.text && 1 === dd.arguments.length && Xd().isStringLiteral(dd.arguments[0]) ? dd.arguments[0].text : void 0
    }

    function hd(dd, Od, md) {
      if (!Od.startsWith("./") && !Od.startsWith("../")) return;
      const Fd = ((dd.includes("/") ? dd.slice(0, dd.lastIndexOf("/") + 1) : "") + Od).split("/"),
        Rd = [];
      for (const Wd of Fd)
        if ("" !== Wd && "." !== Wd)
          if (".." !== Wd) Rd.push(Wd);
          else {
            if (0 === Rd.length) return;
            Rd.pop()
          } const Xd = Rd.join("/");
      for (const Kd of [Xd, `${Xd}.ts`, `${Xd}.js`])
        if (Kd in md && !(0, Wd.k)(Kd)) return Kd
    }

    function vd(dd) {
      const Od = new Set,
        md = (0, Fd.b)(dd);
      if (!md) return [];
      const Wd = [md],
        Rd = new Set;
      for (; Wd.length > 0;) {
        const md = Wd.pop();
        if (!md || Rd.has(md)) continue;
        Rd.add(md);
        const vd = Xd().createSourceFile(md, dd[md], Xd().ScriptTarget.Latest, !1),
          Qd = vd => {
            const td = Kd(vd),
              od = td ? (0, Fd.s)(td) : null;
            if (od) Od.add(od);
            else if (td) {
              const Od = hd(md, td, dd);
              Od && !Rd.has(Od) && Wd.push(Od)
            }
            Xd().forEachChild(vd, Qd)
          };
        Qd(vd)
      }
      return [...Od].sort()
    }
  },
  53898: dd => {
    function Od(dd) {
      var Od = new Error("Cannot find module '" + dd + "'");
      throw Od.code = "MODULE_NOT_FOUND", Od
    }
    Od.keys = () => [], Od.resolve = Od, Od.id = 53898, dd.exports = Od
  },
  53883: () => {},
  53868: () => {},
  53905: () => {},
  53878: () => {},
  53873: () => {},
  53861: () => {},
  53889: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);