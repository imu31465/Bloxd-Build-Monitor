export const id = 290;
export const ids = [290];
export const modules = {
  40299: (TT, oT, IT) => {
    IT.d(oT, {
      collectImportedWorldCodePluginNames: () => FT
    });
    var iT = IT(35823),
      zT = IT(35815),
      kT = IT(40215),
      WT = IT.n(kT);

    function XT(TT) {
      return WT().isImportDeclaration(TT) && WT().isStringLiteral(TT.moduleSpecifier) && function(TT) {
        const oT = TT.importClause;
        if (!oT) return !0;
        if (oT.isTypeOnly) return !1;
        const IT = oT.namedBindings;
        return !(IT && !WT().isNamespaceImport(IT)) || !!oT.name || IT.elements.some((TT => !TT.isTypeOnly))
      }(TT) || WT().isExportDeclaration(TT) && TT.moduleSpecifier && WT().isStringLiteral(TT.moduleSpecifier) && function(TT) {
        return !TT.isTypeOnly && (!TT.exportClause || !WT().isNamedExports(TT.exportClause) || 0 === TT.exportClause.elements.length || TT.exportClause.elements.some((TT => !TT.isTypeOnly)))
      }(TT) ? TT.moduleSpecifier.text : WT().isImportEqualsDeclaration(TT) && !TT.isTypeOnly && WT().isExternalModuleReference(TT.moduleReference) && TT.moduleReference.expression && WT().isStringLiteral(TT.moduleReference.expression) ? TT.moduleReference.expression.text : WT().isCallExpression(TT) && WT().isIdentifier(TT.expression) && "require" === TT.expression.text && 1 === TT.arguments.length && WT().isStringLiteral(TT.arguments[0]) ? TT.arguments[0].text : void 0
    }

    function BT(TT, oT, IT) {
      if (!oT.startsWith("./") && !oT.startsWith("../")) return;
      const zT = ((TT.includes("/") ? TT.slice(0, TT.lastIndexOf("/") + 1) : "") + oT).split("/"),
        kT = [];
      for (const iT of zT)
        if ("" !== iT && "." !== iT)
          if (".." !== iT) kT.push(iT);
          else {
            if (0 === kT.length) return;
            kT.pop()
          } const WT = kT.join("/");
      for (const XT of [WT, `${WT}.ts`, `${WT}.js`])
        if (XT in IT && !(0, iT.o)(XT)) return XT
    }

    function FT(TT) {
      const oT = new Set,
        IT = (0, zT.c)(TT);
      if (!IT) return [];
      const iT = [IT],
        kT = new Set;
      for (; iT.length > 0;) {
        const IT = iT.pop();
        if (!IT || kT.has(IT)) continue;
        kT.add(IT);
        const FT = WT().createSourceFile(IT, TT[IT], WT().ScriptTarget.Latest, !1),
          ST = FT => {
            const DT = XT(FT),
              LT = DT ? (0, zT.m)(DT) : null;
            if (LT) oT.add(LT);
            else if (DT) {
              const oT = BT(IT, DT, TT);
              oT && !kT.has(oT) && iT.push(oT)
            }
            WT().forEachChild(FT, ST)
          };
        ST(FT)
      }
      return [...oT].sort()
    }
  },
  40257: TT => {
    function oT(TT) {
      var oT = new Error("Cannot find module '" + TT + "'");
      throw oT.code = "MODULE_NOT_FOUND", oT
    }
    oT.keys = () => [], oT.resolve = oT, oT.id = 40257, TT.exports = oT
  },
  40247: () => {},
  40227: () => {},
  40265: () => {},
  40240: () => {},
  40236: () => {},
  40223: () => {},
  40251: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);