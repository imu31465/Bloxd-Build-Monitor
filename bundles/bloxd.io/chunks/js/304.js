export const id = 304;
export const ids = [304];
export const modules = {
  41753: (uu, Eu, ju) => {
    ju.d(Eu, {
      collectImportedWorldCodePluginNames: () => fu
    });
    var su = ju(2541),
      Uu = ju(37257),
      Zu = ju(41649),
      Xu = ju.n(Zu);

    function lu(uu) {
      return Xu().isImportDeclaration(uu) && Xu().isStringLiteral(uu.moduleSpecifier) && function(uu) {
        const Eu = uu.importClause;
        if (!Eu) return !0;
        if (Eu.isTypeOnly) return !1;
        const ju = Eu.namedBindings;
        return !(ju && !Xu().isNamespaceImport(ju)) || !!Eu.name || ju.elements.some((uu => !uu.isTypeOnly))
      }(uu) || Xu().isExportDeclaration(uu) && uu.moduleSpecifier && Xu().isStringLiteral(uu.moduleSpecifier) && function(uu) {
        return !uu.isTypeOnly && (!uu.exportClause || !Xu().isNamedExports(uu.exportClause) || 0 === uu.exportClause.elements.length || uu.exportClause.elements.some((uu => !uu.isTypeOnly)))
      }(uu) ? uu.moduleSpecifier.text : Xu().isImportEqualsDeclaration(uu) && !uu.isTypeOnly && Xu().isExternalModuleReference(uu.moduleReference) && uu.moduleReference.expression && Xu().isStringLiteral(uu.moduleReference.expression) ? uu.moduleReference.expression.text : Xu().isCallExpression(uu) && Xu().isIdentifier(uu.expression) && "require" === uu.expression.text && 1 === uu.arguments.length && Xu().isStringLiteral(uu.arguments[0]) ? uu.arguments[0].text : void 0
    }

    function qu(uu, Eu, ju) {
      if (!Eu.startsWith("./") && !Eu.startsWith("../")) return;
      const Uu = ((uu.includes("/") ? uu.slice(0, uu.lastIndexOf("/") + 1) : "") + Eu).split("/"),
        Zu = [];
      for (const su of Uu)
        if ("" !== su && "." !== su)
          if (".." !== su) Zu.push(su);
          else {
            if (0 === Zu.length) return;
            Zu.pop()
          } const Xu = Zu.join("/");
      for (const lu of [Xu, `${Xu}.ts`, `${Xu}.js`])
        if (lu in ju && !(0, su.i)(lu)) return lu
    }

    function fu(uu) {
      const Eu = new Set,
        ju = (0, Uu.d)(uu);
      if (!ju) return [];
      const su = [ju],
        Zu = new Set;
      for (; su.length > 0;) {
        const ju = su.pop();
        if (!ju || Zu.has(ju)) continue;
        Zu.add(ju);
        const fu = Xu().createSourceFile(ju, uu[ju], Xu().ScriptTarget.Latest, !1),
          Cu = fu => {
            const bu = lu(fu),
              cu = bu ? (0, Uu.u)(bu) : null;
            if (cu) Eu.add(cu);
            else if (bu) {
              const Eu = qu(ju, bu, uu);
              Eu && !Zu.has(Eu) && su.push(Eu)
            }
            Xu().forEachChild(fu, Cu)
          };
        Cu(fu)
      }
      return [...Eu].sort()
    }
  },
  41707: uu => {
    function Eu(uu) {
      var Eu = new Error("Cannot find module '" + uu + "'");
      throw Eu.code = "MODULE_NOT_FOUND", Eu
    }
    Eu.keys = () => [], Eu.resolve = Eu, Eu.id = 41707, uu.exports = Eu
  },
  41691: () => {},
  41667: () => {},
  41715: () => {},
  41683: () => {},
  41676: () => {},
  41658: () => {},
  41700: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);