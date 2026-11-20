export const id = 291;
export const ids = [291];
export const modules = {
  41230: (qq, Eq, gq) => {
    gq.d(Eq, {
      collectImportedWorldCodePluginNames: () => cq
    });
    var Yq = gq(36912),
      lq = gq(36906),
      Oq = gq(41144),
      mq = gq.n(Oq);

    function xq(qq) {
      return mq().isImportDeclaration(qq) && mq().isStringLiteral(qq.moduleSpecifier) && function(qq) {
        const Eq = qq.importClause;
        if (!Eq) return !0;
        if (Eq.isTypeOnly) return !1;
        const gq = Eq.namedBindings;
        return !(gq && !mq().isNamespaceImport(gq)) || !!Eq.name || gq.elements.some((qq => !qq.isTypeOnly))
      }(qq) || mq().isExportDeclaration(qq) && qq.moduleSpecifier && mq().isStringLiteral(qq.moduleSpecifier) && function(qq) {
        return !qq.isTypeOnly && (!qq.exportClause || !mq().isNamedExports(qq.exportClause) || 0 === qq.exportClause.elements.length || qq.exportClause.elements.some((qq => !qq.isTypeOnly)))
      }(qq) ? qq.moduleSpecifier.text : mq().isImportEqualsDeclaration(qq) && !qq.isTypeOnly && mq().isExternalModuleReference(qq.moduleReference) && qq.moduleReference.expression && mq().isStringLiteral(qq.moduleReference.expression) ? qq.moduleReference.expression.text : mq().isCallExpression(qq) && mq().isIdentifier(qq.expression) && "require" === qq.expression.text && 1 === qq.arguments.length && mq().isStringLiteral(qq.arguments[0]) ? qq.arguments[0].text : void 0
    }

    function Aq(qq, Eq, gq) {
      if (!Eq.startsWith("./") && !Eq.startsWith("../")) return;
      const lq = ((qq.includes("/") ? qq.slice(0, qq.lastIndexOf("/") + 1) : "") + Eq).split("/"),
        Oq = [];
      for (const Yq of lq)
        if ("" !== Yq && "." !== Yq)
          if (".." !== Yq) Oq.push(Yq);
          else {
            if (0 === Oq.length) return;
            Oq.pop()
          } const mq = Oq.join("/");
      for (const xq of [mq, `${mq}.ts`, `${mq}.js`])
        if (xq in gq && !(0, Yq.l)(xq)) return xq
    }

    function cq(qq) {
      const Eq = new Set,
        gq = (0, lq.b)(qq);
      if (!gq) return [];
      const Yq = [gq],
        Oq = new Set;
      for (; Yq.length > 0;) {
        const gq = Yq.pop();
        if (!gq || Oq.has(gq)) continue;
        Oq.add(gq);
        const cq = mq().createSourceFile(gq, qq[gq], mq().ScriptTarget.Latest, !1),
          uq = cq => {
            const Bq = xq(cq),
              Wq = Bq ? (0, lq.m)(Bq) : null;
            if (Wq) Eq.add(Wq);
            else if (Bq) {
              const Eq = Aq(gq, Bq, qq);
              Eq && !Oq.has(Eq) && Yq.push(Eq)
            }
            mq().forEachChild(cq, uq)
          };
        uq(cq)
      }
      return [...Eq].sort()
    }
  },
  41186: qq => {
    function Eq(qq) {
      var Eq = new Error("Cannot find module '" + qq + "'");
      throw Eq.code = "MODULE_NOT_FOUND", Eq
    }
    Eq.keys = () => [], Eq.resolve = Eq, Eq.id = 41186, qq.exports = Eq
  },
  41170: () => {},
  41153: () => {},
  41195: () => {},
  41162: () => {},
  41159: () => {},
  41146: () => {},
  41177: () => {}
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);