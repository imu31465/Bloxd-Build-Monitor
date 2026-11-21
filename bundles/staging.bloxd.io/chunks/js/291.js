export const id = 291;
export const ids = [291];
export const modules = {
  41448: (dd, Jd, kd) => {
    kd.d(Jd, {
      collectImportedWorldCodePluginNames: () => Cd
    });
    var pd = kd(37041),
      Nd = kd(37035),
      Wd = kd(41373),
      Pd = kd.n(Wd);

    function Zd(dd) {
      return Pd().isImportDeclaration(dd) && Pd().isStringLiteral(dd.moduleSpecifier) && function(dd) {
        const Jd = dd.importClause;
        if (!Jd) return !0;
        if (Jd.isTypeOnly) return !1;
        const kd = Jd.namedBindings;
        return !(kd && !Pd().isNamespaceImport(kd)) || !!Jd.name || kd.elements.some((dd => !dd.isTypeOnly))
      }(dd) || Pd().isExportDeclaration(dd) && dd.moduleSpecifier && Pd().isStringLiteral(dd.moduleSpecifier) && function(dd) {
        return !dd.isTypeOnly && (!dd.exportClause || !Pd().isNamedExports(dd.exportClause) || 0 === dd.exportClause.elements.length || dd.exportClause.elements.some((dd => !dd.isTypeOnly)))
      }(dd) ? dd.moduleSpecifier.text : Pd().isImportEqualsDeclaration(dd) && !dd.isTypeOnly && Pd().isExternalModuleReference(dd.moduleReference) && dd.moduleReference.expression && Pd().isStringLiteral(dd.moduleReference.expression) ? dd.moduleReference.expression.text : Pd().isCallExpression(dd) && Pd().isIdentifier(dd.expression) && "require" === dd.expression.text && 1 === dd.arguments.length && Pd().isStringLiteral(dd.arguments[0]) ? dd.arguments[0].text : void 0
    }

    function gd(dd, Jd, kd) {
      if (!Jd.startsWith("./") && !Jd.startsWith("../")) return;
      const Nd = ((dd.includes("/") ? dd.slice(0, dd.lastIndexOf("/") + 1) : "") + Jd).split("/"),
        Wd = [];
      for (const pd of Nd)
        if ("" !== pd && "." !== pd)
          if (".." !== pd) Wd.push(pd);
          else {
            if (0 === Wd.length) return;
            Wd.pop()
          } const Pd = Wd.join("/");
      for (const Zd of [Pd, `${Pd}.ts`, `${Pd}.js`])
        if (Zd in kd && !(0, pd.j)(Zd)) return Zd
    }

    function Cd(dd) {
      const Jd = new Set,
        kd = (0, Nd.e)(dd);
      if (!kd) return [];
      const pd = [kd],
        Wd = new Set;
      for (; pd.length > 0;) {
        const kd = pd.pop();
        if (!kd || Wd.has(kd)) continue;
        Wd.add(kd);
        const Cd = Pd().createSourceFile(kd, dd[kd], Pd().ScriptTarget.Latest, !1),
          Kd = Cd => {
            const od = Zd(Cd),
              ld = od ? (0, Nd.w)(od) : null;
            if (ld) Jd.add(ld);
            else if (od) {
              const Jd = gd(kd, od, dd);
              Jd && !Wd.has(Jd) && pd.push(Jd)
            }
            Pd().forEachChild(Cd, Kd)
          };
        Kd(Cd)
      }
      return [...Jd].sort()
    }
  },
  41412: dd => {
    function Jd(dd) {
      var Jd = new Error("Cannot find module '" + dd + "'");
      throw Jd.code = "MODULE_NOT_FOUND", Jd
    }
    Jd.keys = () => [], Jd.resolve = Jd, Jd.id = 41412, dd.exports = Jd
  },
  41405: () => {},
  41385: () => {},
  41418: () => {},
  41399: () => {},
  41392: () => {},
  41381: () => {},
  41409: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);