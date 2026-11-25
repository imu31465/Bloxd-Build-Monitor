export const id = 308;
export const ids = [308];
export const modules = {
  41718: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      collectImportedWorldCodePluginNames: () => PQ
    });
    var wQ = XQ(2531),
      qQ = XQ(37158),
      TQ = XQ(41631),
      zQ = XQ.n(TQ);

    function sQ(QQ) {
      return zQ().isImportDeclaration(QQ) && zQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
        const WQ = QQ.importClause;
        if (!WQ) return !0;
        if (WQ.isTypeOnly) return !1;
        const XQ = WQ.namedBindings;
        return !(XQ && !zQ().isNamespaceImport(XQ)) || !!WQ.name || XQ.elements.some((QQ => !QQ.isTypeOnly))
      }(QQ) || zQ().isExportDeclaration(QQ) && QQ.moduleSpecifier && zQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
        return !QQ.isTypeOnly && (!QQ.exportClause || !zQ().isNamedExports(QQ.exportClause) || 0 === QQ.exportClause.elements.length || QQ.exportClause.elements.some((QQ => !QQ.isTypeOnly)))
      }(QQ) ? QQ.moduleSpecifier.text : zQ().isImportEqualsDeclaration(QQ) && !QQ.isTypeOnly && zQ().isExternalModuleReference(QQ.moduleReference) && QQ.moduleReference.expression && zQ().isStringLiteral(QQ.moduleReference.expression) ? QQ.moduleReference.expression.text : zQ().isCallExpression(QQ) && zQ().isIdentifier(QQ.expression) && "require" === QQ.expression.text && 1 === QQ.arguments.length && zQ().isStringLiteral(QQ.arguments[0]) ? QQ.arguments[0].text : void 0
    }

    function FQ(QQ, WQ, XQ) {
      if (!WQ.startsWith("./") && !WQ.startsWith("../")) return;
      const qQ = ((QQ.includes("/") ? QQ.slice(0, QQ.lastIndexOf("/") + 1) : "") + WQ).split("/"),
        TQ = [];
      for (const wQ of qQ)
        if ("" !== wQ && "." !== wQ)
          if (".." !== wQ) TQ.push(wQ);
          else {
            if (0 === TQ.length) return;
            TQ.pop()
          } const zQ = TQ.join("/");
      for (const sQ of [zQ, `${zQ}.ts`, `${zQ}.js`])
        if (sQ in XQ && !(0, wQ.l)(sQ)) return sQ
    }

    function PQ(QQ) {
      const WQ = new Set,
        XQ = (0, qQ.c)(QQ);
      if (!XQ) return [];
      const wQ = [XQ],
        TQ = new Set;
      for (; wQ.length > 0;) {
        const XQ = wQ.pop();
        if (!XQ || TQ.has(XQ)) continue;
        TQ.add(XQ);
        const PQ = zQ().createSourceFile(XQ, QQ[XQ], zQ().ScriptTarget.Latest, !1),
          gQ = PQ => {
            const JQ = sQ(PQ),
              rQ = JQ ? (0, qQ.q)(JQ) : null;
            if (rQ) WQ.add(rQ);
            else if (JQ) {
              const WQ = FQ(XQ, JQ, QQ);
              WQ && !TQ.has(WQ) && wQ.push(WQ)
            }
            zQ().forEachChild(PQ, gQ)
          };
        gQ(PQ)
      }
      return [...WQ].sort()
    }
  },
  41671: QQ => {
    function WQ(QQ) {
      var WQ = new Error("Cannot find module '" + QQ + "'");
      throw WQ.code = "MODULE_NOT_FOUND", WQ
    }
    WQ.keys = () => [], WQ.resolve = WQ, WQ.id = 41671, QQ.exports = WQ
  },
  41663: () => {},
  41643: () => {},
  41680: () => {},
  41660: () => {},
  41652: () => {},
  41635: () => {},
  41668: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);