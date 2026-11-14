export const id = 270;
export const ids = [270];
export const modules = {
  39343: (FF, WF, SF) => {
    SF.d(WF, {
      collectImportedWorldCodePluginNames: () => PF
    });
    var CF = SF(35350),
      AF = SF(35347),
      uF = SF(39263),
      hF = SF.n(uF);

    function bW(FF) {
      return hF().isImportDeclaration(FF) && hF().isStringLiteral(FF.moduleSpecifier) && function(FF) {
        const WF = FF.importClause;
        if (!WF) return !0;
        if (WF.isTypeOnly) return !1;
        const SF = WF.namedBindings;
        return !(SF && !hF().isNamespaceImport(SF)) || !!WF.name || SF.elements.some((FF => !FF.isTypeOnly))
      }(FF) || hF().isExportDeclaration(FF) && FF.moduleSpecifier && hF().isStringLiteral(FF.moduleSpecifier) && function(FF) {
        return !FF.isTypeOnly && (!FF.exportClause || !hF().isNamedExports(FF.exportClause) || 0 === FF.exportClause.elements.length || FF.exportClause.elements.some((FF => !FF.isTypeOnly)))
      }(FF) ? FF.moduleSpecifier.text : hF().isImportEqualsDeclaration(FF) && !FF.isTypeOnly && hF().isExternalModuleReference(FF.moduleReference) && FF.moduleReference.expression && hF().isStringLiteral(FF.moduleReference.expression) ? FF.moduleReference.expression.text : hF().isCallExpression(FF) && hF().isIdentifier(FF.expression) && "require" === FF.expression.text && 1 === FF.arguments.length && hF().isStringLiteral(FF.arguments[0]) ? FF.arguments[0].text : void 0
    }

    function dF(FF, WF, SF) {
      if (!WF.startsWith("./") && !WF.startsWith("../")) return;
      const AF = ((FF.includes("/") ? FF.slice(0, FF.lastIndexOf("/") + 1) : "") + WF).split("/"),
        uF = [];
      for (const CF of AF)
        if ("" !== CF && "." !== CF)
          if (".." !== CF) uF.push(CF);
          else {
            if (0 === uF.length) return;
            uF.pop()
          } const hF = uF.join("/");
      for (const bW of [hF, `${hF}.ts`, `${hF}.js`])
        if (bW in SF && !(0, CF.j)(bW)) return bW
    }

    function PF(FF) {
      const WF = new Set,
        SF = (0, AF.d)(FF);
      if (!SF) return [];
      const CF = [SF],
        uF = new Set;
      for (; CF.length > 0;) {
        const SF = CF.pop();
        if (!SF || uF.has(SF)) continue;
        uF.add(SF);
        const PF = hF().createSourceFile(SF, FF[SF], hF().ScriptTarget.Latest, !1),
          RF = PF => {
            const iW = bW(PF),
              eF = iW ? (0, AF.s)(iW) : null;
            if (eF) WF.add(eF);
            else if (iW) {
              const WF = dF(SF, iW, FF);
              WF && !uF.has(WF) && CF.push(WF)
            }
            hF().forEachChild(PF, RF)
          };
        RF(PF)
      }
      return [...WF].sort()
    }
  },
  39305: FF => {
    function WF(FF) {
      var WF = new Error("Cannot find module '" + FF + "'");
      throw WF.code = "MODULE_NOT_FOUND", WF
    }
    WF.keys = () => [], WF.resolve = WF, WF.id = 39305, FF.exports = WF
  },
  39288: () => {},
  39275: () => {},
  39310: () => {},
  39286: () => {},
  39278: () => {},
  39268: () => {},
  39297: () => {}
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);