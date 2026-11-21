export const id = 291;
export const ids = [291];
export const modules = {
  40876: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      collectImportedWorldCodePluginNames: () => mQ
    });
    var LQ = wQ(36483),
      qQ = wQ(36481),
      oQ = wQ(40792),
      DQ = wQ.n(oQ);

    function kQ(QQ) {
      return DQ().isImportDeclaration(QQ) && DQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
        const FQ = QQ.importClause;
        if (!FQ) return !0;
        if (FQ.isTypeOnly) return !1;
        const wQ = FQ.namedBindings;
        return !(wQ && !DQ().isNamespaceImport(wQ)) || !!FQ.name || wQ.elements.some((QQ => !QQ.isTypeOnly))
      }(QQ) || DQ().isExportDeclaration(QQ) && QQ.moduleSpecifier && DQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
        return !QQ.isTypeOnly && (!QQ.exportClause || !DQ().isNamedExports(QQ.exportClause) || 0 === QQ.exportClause.elements.length || QQ.exportClause.elements.some((QQ => !QQ.isTypeOnly)))
      }(QQ) ? QQ.moduleSpecifier.text : DQ().isImportEqualsDeclaration(QQ) && !QQ.isTypeOnly && DQ().isExternalModuleReference(QQ.moduleReference) && QQ.moduleReference.expression && DQ().isStringLiteral(QQ.moduleReference.expression) ? QQ.moduleReference.expression.text : DQ().isCallExpression(QQ) && DQ().isIdentifier(QQ.expression) && "require" === QQ.expression.text && 1 === QQ.arguments.length && DQ().isStringLiteral(QQ.arguments[0]) ? QQ.arguments[0].text : void 0
    }

    function vQ(QQ, FQ, wQ) {
      if (!FQ.startsWith("./") && !FQ.startsWith("../")) return;
      const qQ = ((QQ.includes("/") ? QQ.slice(0, QQ.lastIndexOf("/") + 1) : "") + FQ).split("/"),
        oQ = [];
      for (const LQ of qQ)
        if ("" !== LQ && "." !== LQ)
          if (".." !== LQ) oQ.push(LQ);
          else {
            if (0 === oQ.length) return;
            oQ.pop()
          } const DQ = oQ.join("/");
      for (const kQ of [DQ, `${DQ}.ts`, `${DQ}.js`])
        if (kQ in wQ && !(0, LQ.n)(kQ)) return kQ
    }

    function mQ(QQ) {
      const FQ = new Set,
        wQ = (0, qQ.b)(QQ);
      if (!wQ) return [];
      const LQ = [wQ],
        oQ = new Set;
      for (; LQ.length > 0;) {
        const wQ = LQ.pop();
        if (!wQ || oQ.has(wQ)) continue;
        oQ.add(wQ);
        const mQ = DQ().createSourceFile(wQ, QQ[wQ], DQ().ScriptTarget.Latest, !1),
          uQ = mQ => {
            const HQ = kQ(mQ),
              bQ = HQ ? (0, qQ.n)(HQ) : null;
            if (bQ) FQ.add(bQ);
            else if (HQ) {
              const FQ = vQ(wQ, HQ, QQ);
              FQ && !oQ.has(FQ) && LQ.push(FQ)
            }
            DQ().forEachChild(mQ, uQ)
          };
        uQ(mQ)
      }
      return [...FQ].sort()
    }
  },
  40832: QQ => {
    function FQ(QQ) {
      var FQ = new Error("Cannot find module '" + QQ + "'");
      throw FQ.code = "MODULE_NOT_FOUND", FQ
    }
    FQ.keys = () => [], FQ.resolve = FQ, FQ.id = 40832, QQ.exports = FQ
  },
  40818: () => {},
  40799: () => {},
  40838: () => {},
  40813: () => {},
  40807: () => {},
  40794: () => {},
  40824: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);