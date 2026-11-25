export const id = 609;
export const ids = [609];
export const modules = {
  44141: (MM, rM, iM) => {
    iM.d(rM, {
      collectImportedWorldCodePluginNames: () => QM
    });
    var OM = iM(2638),
      SM = iM(37802),
      jM = iM(44073),
      aM = iM.n(jM);

    function PM(MM) {
      return aM().isImportDeclaration(MM) && aM().isStringLiteral(MM.moduleSpecifier) && function(MM) {
        const rM = MM.importClause;
        if (!rM) return !0;
        if (rM.isTypeOnly) return !1;
        const iM = rM.namedBindings;
        return !(iM && !aM().isNamespaceImport(iM)) || !!rM.name || iM.elements.some((MM => !MM.isTypeOnly))
      }(MM) || aM().isExportDeclaration(MM) && MM.moduleSpecifier && aM().isStringLiteral(MM.moduleSpecifier) && function(MM) {
        return !MM.isTypeOnly && (!MM.exportClause || !aM().isNamedExports(MM.exportClause) || 0 === MM.exportClause.elements.length || MM.exportClause.elements.some((MM => !MM.isTypeOnly)))
      }(MM) ? MM.moduleSpecifier.text : aM().isImportEqualsDeclaration(MM) && !MM.isTypeOnly && aM().isExternalModuleReference(MM.moduleReference) && MM.moduleReference.expression && aM().isStringLiteral(MM.moduleReference.expression) ? MM.moduleReference.expression.text : aM().isCallExpression(MM) && aM().isIdentifier(MM.expression) && "require" === MM.expression.text && 1 === MM.arguments.length && aM().isStringLiteral(MM.arguments[0]) ? MM.arguments[0].text : void 0
    }

    function nM(MM, rM, iM) {
      if (!rM.startsWith("./") && !rM.startsWith("../")) return;
      const SM = ((MM.includes("/") ? MM.slice(0, MM.lastIndexOf("/") + 1) : "") + rM).split("/"),
        jM = [];
      for (const OM of SM)
        if ("" !== OM && "." !== OM)
          if (".." !== OM) jM.push(OM);
          else {
            if (0 === jM.length) return;
            jM.pop()
          } const aM = jM.join("/");
      for (const PM of [aM, `${aM}.ts`, `${aM}.js`])
        if (PM in iM && !(0, OM.k)(PM)) return PM
    }

    function QM(MM) {
      const rM = new Set,
        iM = (0, SM.d)(MM);
      if (!iM) return [];
      const OM = [iM],
        jM = new Set;
      for (; OM.length > 0;) {
        const iM = OM.pop();
        if (!iM || jM.has(iM)) continue;
        jM.add(iM);
        const QM = aM().createSourceFile(iM, MM[iM], aM().ScriptTarget.Latest, !1),
          zM = QM => {
            const LM = PM(QM),
              mM = LM ? (0, SM.u)(LM) : null;
            if (mM) rM.add(mM);
            else if (LM) {
              const rM = nM(iM, LM, MM);
              rM && !jM.has(rM) && OM.push(rM)
            }
            aM().forEachChild(QM, zM)
          };
        zM(QM)
      }
      return [...rM].sort()
    }
  },
  44110: MM => {
    function rM(MM) {
      var rM = new Error("Cannot find module '" + MM + "'");
      throw rM.code = "MODULE_NOT_FOUND", rM
    }
    rM.keys = () => [], rM.resolve = rM, rM.id = 44110, MM.exports = rM
  },
  44103: () => {},
  44081: () => {},
  44112: () => {},
  44094: () => {},
  44089: () => {},
  44076: () => {},
  44107: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);