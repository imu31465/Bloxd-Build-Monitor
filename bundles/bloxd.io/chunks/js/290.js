export const id = 290;
export const ids = [290];
export const modules = {
  40534: (DD, CD, cD) => {
    cD.d(CD, {
      collectImportedWorldCodePluginNames: () => wD
    });
    var ID = cD(36216),
      pD = cD(36213),
      iD = cD(40459),
      fD = cD.n(iD);

    function bD(DD) {
      return fD().isImportDeclaration(DD) && fD().isStringLiteral(DD.moduleSpecifier) && function(DD) {
        const CD = DD.importClause;
        if (!CD) return !0;
        if (CD.isTypeOnly) return !1;
        const cD = CD.namedBindings;
        return !(cD && !fD().isNamespaceImport(cD)) || !!CD.name || cD.elements.some((DD => !DD.isTypeOnly))
      }(DD) || fD().isExportDeclaration(DD) && DD.moduleSpecifier && fD().isStringLiteral(DD.moduleSpecifier) && function(DD) {
        return !DD.isTypeOnly && (!DD.exportClause || !fD().isNamedExports(DD.exportClause) || 0 === DD.exportClause.elements.length || DD.exportClause.elements.some((DD => !DD.isTypeOnly)))
      }(DD) ? DD.moduleSpecifier.text : fD().isImportEqualsDeclaration(DD) && !DD.isTypeOnly && fD().isExternalModuleReference(DD.moduleReference) && DD.moduleReference.expression && fD().isStringLiteral(DD.moduleReference.expression) ? DD.moduleReference.expression.text : fD().isCallExpression(DD) && fD().isIdentifier(DD.expression) && "require" === DD.expression.text && 1 === DD.arguments.length && fD().isStringLiteral(DD.arguments[0]) ? DD.arguments[0].text : void 0
    }

    function QD(DD, CD, cD) {
      if (!CD.startsWith("./") && !CD.startsWith("../")) return;
      const pD = ((DD.includes("/") ? DD.slice(0, DD.lastIndexOf("/") + 1) : "") + CD).split("/"),
        iD = [];
      for (const ID of pD)
        if ("" !== ID && "." !== ID)
          if (".." !== ID) iD.push(ID);
          else {
            if (0 === iD.length) return;
            iD.pop()
          } const fD = iD.join("/");
      for (const bD of [fD, `${fD}.ts`, `${fD}.js`])
        if (bD in cD && !(0, ID.k)(bD)) return bD
    }

    function wD(DD) {
      const CD = new Set,
        cD = (0, pD.d)(DD);
      if (!cD) return [];
      const ID = [cD],
        iD = new Set;
      for (; ID.length > 0;) {
        const cD = ID.pop();
        if (!cD || iD.has(cD)) continue;
        iD.add(cD);
        const wD = fD().createSourceFile(cD, DD[cD], fD().ScriptTarget.Latest, !1),
          SD = wD => {
            const BD = bD(wD),
              yD = BD ? (0, pD.t)(BD) : null;
            if (yD) CD.add(yD);
            else if (BD) {
              const CD = QD(cD, BD, DD);
              CD && !iD.has(CD) && ID.push(CD)
            }
            fD().forEachChild(wD, SD)
          };
        SD(wD)
      }
      return [...CD].sort()
    }
  },
  40503: DD => {
    function CD(DD) {
      var CD = new Error("Cannot find module '" + DD + "'");
      throw CD.code = "MODULE_NOT_FOUND", CD
    }
    CD.keys = () => [], CD.resolve = CD, CD.id = 40503, DD.exports = CD
  },
  40494: () => {},
  40475: () => {},
  40505: () => {},
  40488: () => {},
  40482: () => {},
  40466: () => {},
  40498: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);