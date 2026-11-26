export const id = 609;
export const ids = [609];
export const modules = {
  44375: (VV, eV, xV) => {
    xV.d(eV, {
      collectImportedWorldCodePluginNames: () => nV
    });
    var JV = xV(2688),
      YV = xV(38047),
      UV = xV(44314),
      yV = xV.n(UV);

    function pV(VV) {
      return yV().isImportDeclaration(VV) && yV().isStringLiteral(VV.moduleSpecifier) && function(VV) {
        const eV = VV.importClause;
        if (!eV) return !0;
        if (eV.isTypeOnly) return !1;
        const xV = eV.namedBindings;
        return !(xV && !yV().isNamespaceImport(xV)) || !!eV.name || xV.elements.some((VV => !VV.isTypeOnly))
      }(VV) || yV().isExportDeclaration(VV) && VV.moduleSpecifier && yV().isStringLiteral(VV.moduleSpecifier) && function(VV) {
        return !VV.isTypeOnly && (!VV.exportClause || !yV().isNamedExports(VV.exportClause) || 0 === VV.exportClause.elements.length || VV.exportClause.elements.some((VV => !VV.isTypeOnly)))
      }(VV) ? VV.moduleSpecifier.text : yV().isImportEqualsDeclaration(VV) && !VV.isTypeOnly && yV().isExternalModuleReference(VV.moduleReference) && VV.moduleReference.expression && yV().isStringLiteral(VV.moduleReference.expression) ? VV.moduleReference.expression.text : yV().isCallExpression(VV) && yV().isIdentifier(VV.expression) && "require" === VV.expression.text && 1 === VV.arguments.length && yV().isStringLiteral(VV.arguments[0]) ? VV.arguments[0].text : void 0
    }

    function QV(VV, eV, xV) {
      if (!eV.startsWith("./") && !eV.startsWith("../")) return;
      const YV = ((VV.includes("/") ? VV.slice(0, VV.lastIndexOf("/") + 1) : "") + eV).split("/"),
        UV = [];
      for (const JV of YV)
        if ("" !== JV && "." !== JV)
          if (".." !== JV) UV.push(JV);
          else {
            if (0 === UV.length) return;
            UV.pop()
          } const yV = UV.join("/");
      for (const pV of [yV, `${yV}.ts`, `${yV}.js`])
        if (pV in xV && !(0, JV.k)(pV)) return pV
    }

    function nV(VV) {
      const eV = new Set,
        xV = (0, YV.d)(VV);
      if (!xV) return [];
      const JV = [xV],
        UV = new Set;
      for (; JV.length > 0;) {
        const xV = JV.pop();
        if (!xV || UV.has(xV)) continue;
        UV.add(xV);
        const nV = yV().createSourceFile(xV, VV[xV], yV().ScriptTarget.Latest, !1),
          wV = nV => {
            const ZV = pV(nV),
              vV = ZV ? (0, YV.u)(ZV) : null;
            if (vV) eV.add(vV);
            else if (ZV) {
              const eV = QV(xV, ZV, VV);
              eV && !UV.has(eV) && JV.push(eV)
            }
            yV().forEachChild(nV, wV)
          };
        wV(nV)
      }
      return [...eV].sort()
    }
  },
  44341: VV => {
    function eV(VV) {
      var eV = new Error("Cannot find module '" + VV + "'");
      throw eV.code = "MODULE_NOT_FOUND", eV
    }
    eV.keys = () => [], eV.resolve = eV, eV.id = 44341, VV.exports = eV
  },
  44333: () => {},
  44319: () => {},
  44346: () => {},
  44329: () => {},
  44323: () => {},
  44316: () => {},
  44339: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);