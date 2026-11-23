export const id = 299;
export const ids = [299];
export const modules = {
  41282: (CC, zC, ZC) => {
    ZC.d(zC, {
      collectImportedWorldCodePluginNames: () => qC
    });
    var QC = ZC(36725),
      wC = ZC(36721),
      bC = ZC(41203),
      nC = ZC.n(bC);

    function fC(CC) {
      return nC().isImportDeclaration(CC) && nC().isStringLiteral(CC.moduleSpecifier) && function(CC) {
        const zC = CC.importClause;
        if (!zC) return !0;
        if (zC.isTypeOnly) return !1;
        const ZC = zC.namedBindings;
        return !(ZC && !nC().isNamespaceImport(ZC)) || !!zC.name || ZC.elements.some((CC => !CC.isTypeOnly))
      }(CC) || nC().isExportDeclaration(CC) && CC.moduleSpecifier && nC().isStringLiteral(CC.moduleSpecifier) && function(CC) {
        return !CC.isTypeOnly && (!CC.exportClause || !nC().isNamedExports(CC.exportClause) || 0 === CC.exportClause.elements.length || CC.exportClause.elements.some((CC => !CC.isTypeOnly)))
      }(CC) ? CC.moduleSpecifier.text : nC().isImportEqualsDeclaration(CC) && !CC.isTypeOnly && nC().isExternalModuleReference(CC.moduleReference) && CC.moduleReference.expression && nC().isStringLiteral(CC.moduleReference.expression) ? CC.moduleReference.expression.text : nC().isCallExpression(CC) && nC().isIdentifier(CC.expression) && "require" === CC.expression.text && 1 === CC.arguments.length && nC().isStringLiteral(CC.arguments[0]) ? CC.arguments[0].text : void 0
    }

    function oC(CC, zC, ZC) {
      if (!zC.startsWith("./") && !zC.startsWith("../")) return;
      const wC = ((CC.includes("/") ? CC.slice(0, CC.lastIndexOf("/") + 1) : "") + zC).split("/"),
        bC = [];
      for (const QC of wC)
        if ("" !== QC && "." !== QC)
          if (".." !== QC) bC.push(QC);
          else {
            if (0 === bC.length) return;
            bC.pop()
          } const nC = bC.join("/");
      for (const fC of [nC, `${nC}.ts`, `${nC}.js`])
        if (fC in ZC && !(0, QC.q)(fC)) return fC
    }

    function qC(CC) {
      const zC = new Set,
        ZC = (0, wC.b)(CC);
      if (!ZC) return [];
      const QC = [ZC],
        bC = new Set;
      for (; QC.length > 0;) {
        const ZC = QC.pop();
        if (!ZC || bC.has(ZC)) continue;
        bC.add(ZC);
        const qC = nC().createSourceFile(ZC, CC[ZC], nC().ScriptTarget.Latest, !1),
          FC = qC => {
            const WC = fC(qC),
              NC = WC ? (0, wC.p)(WC) : null;
            if (NC) zC.add(NC);
            else if (WC) {
              const zC = oC(ZC, WC, CC);
              zC && !bC.has(zC) && QC.push(zC)
            }
            nC().forEachChild(qC, FC)
          };
        FC(qC)
      }
      return [...zC].sort()
    }
  },
  41242: CC => {
    function zC(CC) {
      var zC = new Error("Cannot find module '" + CC + "'");
      throw zC.code = "MODULE_NOT_FOUND", zC
    }
    zC.keys = () => [], zC.resolve = zC, zC.id = 41242, CC.exports = zC
  },
  41232: () => {},
  41216: () => {},
  41244: () => {},
  41226: () => {},
  41222: () => {},
  41207: () => {},
  41237: () => {}
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);