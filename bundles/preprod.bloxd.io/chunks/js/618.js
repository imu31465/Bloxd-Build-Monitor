export const id = 618;
export const ids = [618];
export const modules = {
  53663: (WW, iW, OW) => {
    OW.d(iW, {
      collectImportedWorldCodePluginNames: () => wW
    });
    var mW = OW(3327),
      EW = OW(38010),
      NW = OW(53597),
      PW = OW.n(NW);

    function LW(WW) {
      return PW().isImportDeclaration(WW) && PW().isStringLiteral(WW.moduleSpecifier) && function(WW) {
        const iW = WW.importClause;
        if (!iW) return !0;
        if (iW.isTypeOnly) return !1;
        const OW = iW.namedBindings;
        return !(OW && !PW().isNamespaceImport(OW)) || !!iW.name || OW.elements.some((WW => !WW.isTypeOnly))
      }(WW) || PW().isExportDeclaration(WW) && WW.moduleSpecifier && PW().isStringLiteral(WW.moduleSpecifier) && function(WW) {
        return !WW.isTypeOnly && (!WW.exportClause || !PW().isNamedExports(WW.exportClause) || 0 === WW.exportClause.elements.length || WW.exportClause.elements.some((WW => !WW.isTypeOnly)))
      }(WW) ? WW.moduleSpecifier.text : PW().isImportEqualsDeclaration(WW) && !WW.isTypeOnly && PW().isExternalModuleReference(WW.moduleReference) && WW.moduleReference.expression && PW().isStringLiteral(WW.moduleReference.expression) ? WW.moduleReference.expression.text : PW().isCallExpression(WW) && PW().isIdentifier(WW.expression) && "require" === WW.expression.text && 1 === WW.arguments.length && PW().isStringLiteral(WW.arguments[0]) ? WW.arguments[0].text : void 0
    }

    function cW(WW, iW, OW) {
      if (!iW.startsWith("./") && !iW.startsWith("../")) return;
      const EW = ((WW.includes("/") ? WW.slice(0, WW.lastIndexOf("/") + 1) : "") + iW).split("/"),
        NW = [];
      for (const mW of EW)
        if ("" !== mW && "." !== mW)
          if (".." !== mW) NW.push(mW);
          else {
            if (0 === NW.length) return;
            NW.pop()
          } const PW = NW.join("/");
      for (const LW of [PW, `${PW}.ts`, `${PW}.js`])
        if (LW in OW && !(0, mW.i)(LW)) return LW
    }

    function wW(WW) {
      const iW = new Set,
        OW = (0, EW.d)(WW);
      if (!OW) return [];
      const mW = [OW],
        NW = new Set;
      for (; mW.length > 0;) {
        const OW = mW.pop();
        if (!OW || NW.has(OW)) continue;
        NW.add(OW);
        const wW = PW().createSourceFile(OW, WW[OW], PW().ScriptTarget.Latest, !1),
          tW = wW => {
            const ZW = LW(wW),
              xW = ZW ? (0, EW.r)(ZW) : null;
            if (xW) iW.add(xW);
            else if (ZW) {
              const iW = cW(OW, ZW, WW);
              iW && !NW.has(iW) && mW.push(iW)
            }
            PW().forEachChild(wW, tW)
          };
        tW(wW)
      }
      return [...iW].sort()
    }
  },
  53629: WW => {
    function iW(WW) {
      var iW = new Error("Cannot find module '" + WW + "'");
      throw iW.code = "MODULE_NOT_FOUND", iW
    }
    iW.keys = () => [], iW.resolve = iW, iW.id = 53629, WW.exports = iW
  },
  53613: () => {},
  53603: () => {},
  53631: () => {},
  53609: () => {},
  53605: () => {},
  53601: () => {},
  53622: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);