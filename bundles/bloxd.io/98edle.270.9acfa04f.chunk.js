export const id = 270;
export const ids = [270];
export const modules = {
  38960: (WW, RW, MW) => {
    MW.d(RW, {
      collectImportedWorldCodePluginNames: () => NW
    });
    var wW = MW(35047),
      CW = MW(35045),
      zR = MW(38872),
      AW = MW.n(zR);

    function bR(WW) {
      return AW().isImportDeclaration(WW) && AW().isStringLiteral(WW.moduleSpecifier) && function(WW) {
        const RW = WW.importClause;
        if (!RW) return !0;
        if (RW.isTypeOnly) return !1;
        const MW = RW.namedBindings;
        return !(MW && !AW().isNamespaceImport(MW)) || !!RW.name || MW.elements.some((WW => !WW.isTypeOnly))
      }(WW) || AW().isExportDeclaration(WW) && WW.moduleSpecifier && AW().isStringLiteral(WW.moduleSpecifier) && function(WW) {
        return !WW.isTypeOnly && (!WW.exportClause || !AW().isNamedExports(WW.exportClause) || 0 === WW.exportClause.elements.length || WW.exportClause.elements.some((WW => !WW.isTypeOnly)))
      }(WW) ? WW.moduleSpecifier.text : AW().isImportEqualsDeclaration(WW) && !WW.isTypeOnly && AW().isExternalModuleReference(WW.moduleReference) && WW.moduleReference.expression && AW().isStringLiteral(WW.moduleReference.expression) ? WW.moduleReference.expression.text : AW().isCallExpression(WW) && AW().isIdentifier(WW.expression) && "require" === WW.expression.text && 1 === WW.arguments.length && AW().isStringLiteral(WW.arguments[0]) ? WW.arguments[0].text : void 0
    }

    function yR(WW, RW, MW) {
      if (!RW.startsWith("./") && !RW.startsWith("../")) return;
      const CW = ((WW.includes("/") ? WW.slice(0, WW.lastIndexOf("/") + 1) : "") + RW).split("/"),
        zR = [];
      for (const wW of CW)
        if ("" !== wW && "." !== wW)
          if (".." !== wW) zR.push(wW);
          else {
            if (0 === zR.length) return;
            zR.pop()
          } const AW = zR.join("/");
      for (const bR of [AW, `${AW}.ts`, `${AW}.js`])
        if (bR in MW && !(0, wW.l)(bR)) return bR
    }

    function NW(WW) {
      const RW = new Set,
        MW = (0, CW.b)(WW);
      if (!MW) return [];
      const wW = [MW],
        zR = new Set;
      for (; wW.length > 0;) {
        const MW = wW.pop();
        if (!MW || zR.has(MW)) continue;
        zR.add(MW);
        const NW = AW().createSourceFile(MW, WW[MW], AW().ScriptTarget.Latest, !1),
          eW = NW => {
            const BW = bR(NW),
              tR = BW ? (0, CW.r)(BW) : null;
            if (tR) RW.add(tR);
            else if (BW) {
              const RW = yR(MW, BW, WW);
              RW && !zR.has(RW) && wW.push(RW)
            }
            AW().forEachChild(NW, eW)
          };
        eW(NW)
      }
      return [...RW].sort()
    }
  },
  38911: WW => {
    function RW(WW) {
      var RW = new Error("Cannot find module '" + WW + "'");
      throw RW.code = "MODULE_NOT_FOUND", RW
    }
    RW.keys = () => [], RW.resolve = RW, RW.id = 38911, WW.exports = RW
  },
  38898: () => {},
  38880: () => {},
  38920: () => {},
  38895: () => {},
  38886: () => {},
  38878: () => {},
  38905: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);