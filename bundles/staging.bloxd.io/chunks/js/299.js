export const id = 299;
export const ids = [299];
export const modules = {
  41495: (SS, HS, gS) => {
    gS.d(HS, {
      collectImportedWorldCodePluginNames: () => uS
    });
    var tS = gS(36887),
      bS = gS(36882),
      XS = gS(41409),
      xS = gS.n(XS);

    function NS(SS) {
      return xS().isImportDeclaration(SS) && xS().isStringLiteral(SS.moduleSpecifier) && function(SS) {
        const HS = SS.importClause;
        if (!HS) return !0;
        if (HS.isTypeOnly) return !1;
        const gS = HS.namedBindings;
        return !(gS && !xS().isNamespaceImport(gS)) || !!HS.name || gS.elements.some((SS => !SS.isTypeOnly))
      }(SS) || xS().isExportDeclaration(SS) && SS.moduleSpecifier && xS().isStringLiteral(SS.moduleSpecifier) && function(SS) {
        return !SS.isTypeOnly && (!SS.exportClause || !xS().isNamedExports(SS.exportClause) || 0 === SS.exportClause.elements.length || SS.exportClause.elements.some((SS => !SS.isTypeOnly)))
      }(SS) ? SS.moduleSpecifier.text : xS().isImportEqualsDeclaration(SS) && !SS.isTypeOnly && xS().isExternalModuleReference(SS.moduleReference) && SS.moduleReference.expression && xS().isStringLiteral(SS.moduleReference.expression) ? SS.moduleReference.expression.text : xS().isCallExpression(SS) && xS().isIdentifier(SS.expression) && "require" === SS.expression.text && 1 === SS.arguments.length && xS().isStringLiteral(SS.arguments[0]) ? SS.arguments[0].text : void 0
    }

    function qS(SS, HS, gS) {
      if (!HS.startsWith("./") && !HS.startsWith("../")) return;
      const bS = ((SS.includes("/") ? SS.slice(0, SS.lastIndexOf("/") + 1) : "") + HS).split("/"),
        XS = [];
      for (const tS of bS)
        if ("" !== tS && "." !== tS)
          if (".." !== tS) XS.push(tS);
          else {
            if (0 === XS.length) return;
            XS.pop()
          } const xS = XS.join("/");
      for (const NS of [xS, `${xS}.ts`, `${xS}.js`])
        if (NS in gS && !(0, tS.n)(NS)) return NS
    }

    function uS(SS) {
      const HS = new Set,
        gS = (0, bS.e)(SS);
      if (!gS) return [];
      const tS = [gS],
        XS = new Set;
      for (; tS.length > 0;) {
        const gS = tS.pop();
        if (!gS || XS.has(gS)) continue;
        XS.add(gS);
        const uS = xS().createSourceFile(gS, SS[gS], xS().ScriptTarget.Latest, !1),
          IS = uS => {
            const fS = NS(uS),
              kS = fS ? (0, bS.q)(fS) : null;
            if (kS) HS.add(kS);
            else if (fS) {
              const HS = qS(gS, fS, SS);
              HS && !XS.has(HS) && tS.push(HS)
            }
            xS().forEachChild(uS, IS)
          };
        IS(uS)
      }
      return [...HS].sort()
    }
  },
  41449: SS => {
    function HS(SS) {
      var HS = new Error("Cannot find module '" + SS + "'");
      throw HS.code = "MODULE_NOT_FOUND", HS
    }
    HS.keys = () => [], HS.resolve = HS, HS.id = 41449, SS.exports = HS
  },
  41438: () => {},
  41421: () => {},
  41451: () => {},
  41434: () => {},
  41428: () => {},
  41412: () => {},
  41443: () => {}
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);