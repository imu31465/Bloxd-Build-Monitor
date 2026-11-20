export const id = 290;
export const ids = [290];
export const modules = {
  41071: (uu, Ru, yu) => {
    yu.d(Ru, {
      collectImportedWorldCodePluginNames: () => Xu
    });
    var Eu = yu(36632),
      Ku = yu(36625),
      Qu = yu(41006),
      mu = yu.n(Qu);

    function Ju(uu) {
      return mu().isImportDeclaration(uu) && mu().isStringLiteral(uu.moduleSpecifier) && function(uu) {
        const Ru = uu.importClause;
        if (!Ru) return !0;
        if (Ru.isTypeOnly) return !1;
        const yu = Ru.namedBindings;
        return !(yu && !mu().isNamespaceImport(yu)) || !!Ru.name || yu.elements.some((uu => !uu.isTypeOnly))
      }(uu) || mu().isExportDeclaration(uu) && uu.moduleSpecifier && mu().isStringLiteral(uu.moduleSpecifier) && function(uu) {
        return !uu.isTypeOnly && (!uu.exportClause || !mu().isNamedExports(uu.exportClause) || 0 === uu.exportClause.elements.length || uu.exportClause.elements.some((uu => !uu.isTypeOnly)))
      }(uu) ? uu.moduleSpecifier.text : mu().isImportEqualsDeclaration(uu) && !uu.isTypeOnly && mu().isExternalModuleReference(uu.moduleReference) && uu.moduleReference.expression && mu().isStringLiteral(uu.moduleReference.expression) ? uu.moduleReference.expression.text : mu().isCallExpression(uu) && mu().isIdentifier(uu.expression) && "require" === uu.expression.text && 1 === uu.arguments.length && mu().isStringLiteral(uu.arguments[0]) ? uu.arguments[0].text : void 0
    }

    function Nu(uu, Ru, yu) {
      if (!Ru.startsWith("./") && !Ru.startsWith("../")) return;
      const Ku = ((uu.includes("/") ? uu.slice(0, uu.lastIndexOf("/") + 1) : "") + Ru).split("/"),
        Qu = [];
      for (const Eu of Ku)
        if ("" !== Eu && "." !== Eu)
          if (".." !== Eu) Qu.push(Eu);
          else {
            if (0 === Qu.length) return;
            Qu.pop()
          } const mu = Qu.join("/");
      for (const Ju of [mu, `${mu}.ts`, `${mu}.js`])
        if (Ju in yu && !(0, Eu.p)(Ju)) return Ju
    }

    function Xu(uu) {
      const Ru = new Set,
        yu = (0, Ku.d)(uu);
      if (!yu) return [];
      const Eu = [yu],
        Qu = new Set;
      for (; Eu.length > 0;) {
        const yu = Eu.pop();
        if (!yu || Qu.has(yu)) continue;
        Qu.add(yu);
        const Xu = mu().createSourceFile(yu, uu[yu], mu().ScriptTarget.Latest, !1),
          Vu = Xu => {
            const ru = Ju(Xu),
              Bu = ru ? (0, Ku.r)(ru) : null;
            if (Bu) Ru.add(Bu);
            else if (ru) {
              const Ru = Nu(yu, ru, uu);
              Ru && !Qu.has(Ru) && Eu.push(Ru)
            }
            mu().forEachChild(Xu, Vu)
          };
        Vu(Xu)
      }
      return [...Ru].sort()
    }
  },
  41042: uu => {
    function Ru(uu) {
      var Ru = new Error("Cannot find module '" + uu + "'");
      throw Ru.code = "MODULE_NOT_FOUND", Ru
    }
    Ru.keys = () => [], Ru.resolve = Ru, Ru.id = 41042, uu.exports = Ru
  },
  41034: () => {},
  41015: () => {},
  41046: () => {},
  41025: () => {},
  41019: () => {},
  41009: () => {},
  41038: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);