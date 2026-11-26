export const id = 606;
export const ids = [606];
export const modules = {
  44165: (UU, XU, zU) => {
    zU.d(XU, {
      collectImportedWorldCodePluginNames: () => DU
    });
    var cU = zU(2609),
      yU = zU(37579),
      QU = zU(44108),
      AU = zU.n(QU);

    function FU(UU) {
      return AU().isImportDeclaration(UU) && AU().isStringLiteral(UU.moduleSpecifier) && function(UU) {
        const XU = UU.importClause;
        if (!XU) return !0;
        if (XU.isTypeOnly) return !1;
        const zU = XU.namedBindings;
        return !(zU && !AU().isNamespaceImport(zU)) || !!XU.name || zU.elements.some((UU => !UU.isTypeOnly))
      }(UU) || AU().isExportDeclaration(UU) && UU.moduleSpecifier && AU().isStringLiteral(UU.moduleSpecifier) && function(UU) {
        return !UU.isTypeOnly && (!UU.exportClause || !AU().isNamedExports(UU.exportClause) || 0 === UU.exportClause.elements.length || UU.exportClause.elements.some((UU => !UU.isTypeOnly)))
      }(UU) ? UU.moduleSpecifier.text : AU().isImportEqualsDeclaration(UU) && !UU.isTypeOnly && AU().isExternalModuleReference(UU.moduleReference) && UU.moduleReference.expression && AU().isStringLiteral(UU.moduleReference.expression) ? UU.moduleReference.expression.text : AU().isCallExpression(UU) && AU().isIdentifier(UU.expression) && "require" === UU.expression.text && 1 === UU.arguments.length && AU().isStringLiteral(UU.arguments[0]) ? UU.arguments[0].text : void 0
    }

    function oU(UU, XU, zU) {
      if (!XU.startsWith("./") && !XU.startsWith("../")) return;
      const yU = ((UU.includes("/") ? UU.slice(0, UU.lastIndexOf("/") + 1) : "") + XU).split("/"),
        QU = [];
      for (const cU of yU)
        if ("" !== cU && "." !== cU)
          if (".." !== cU) QU.push(cU);
          else {
            if (0 === QU.length) return;
            QU.pop()
          } const AU = QU.join("/");
      for (const FU of [AU, `${AU}.ts`, `${AU}.js`])
        if (FU in zU && !(0, cU.j)(FU)) return FU
    }

    function DU(UU) {
      const XU = new Set,
        zU = (0, yU.e)(UU);
      if (!zU) return [];
      const cU = [zU],
        QU = new Set;
      for (; cU.length > 0;) {
        const zU = cU.pop();
        if (!zU || QU.has(zU)) continue;
        QU.add(zU);
        const DU = AU().createSourceFile(zU, UU[zU], AU().ScriptTarget.Latest, !1),
          EU = DU => {
            const YU = FU(DU),
              NU = YU ? (0, yU.p)(YU) : null;
            if (NU) XU.add(NU);
            else if (YU) {
              const XU = oU(zU, YU, UU);
              XU && !QU.has(XU) && cU.push(XU)
            }
            AU().forEachChild(DU, EU)
          };
        EU(DU)
      }
      return [...XU].sort()
    }
  },
  44134: UU => {
    function XU(UU) {
      var XU = new Error("Cannot find module '" + UU + "'");
      throw XU.code = "MODULE_NOT_FOUND", XU
    }
    XU.keys = () => [], XU.resolve = XU, XU.id = 44134, UU.exports = XU
  },
  44123: () => {},
  44113: () => {},
  44140: () => {},
  44120: () => {},
  44116: () => {},
  44111: () => {},
  44132: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);