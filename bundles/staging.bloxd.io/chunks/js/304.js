export const id = 304;
export const ids = [304];
export const modules = {
  41617: (TT, UT, mT) => {
    mT.d(UT, {
      collectImportedWorldCodePluginNames: () => kT
    });
    var WT = mT(2549),
      zT = mT(36955),
      MT = mT(41556),
      gT = mT.n(MT);

    function nT(TT) {
      return gT().isImportDeclaration(TT) && gT().isStringLiteral(TT.moduleSpecifier) && function(TT) {
        const UT = TT.importClause;
        if (!UT) return !0;
        if (UT.isTypeOnly) return !1;
        const mT = UT.namedBindings;
        return !(mT && !gT().isNamespaceImport(mT)) || !!UT.name || mT.elements.some((TT => !TT.isTypeOnly))
      }(TT) || gT().isExportDeclaration(TT) && TT.moduleSpecifier && gT().isStringLiteral(TT.moduleSpecifier) && function(TT) {
        return !TT.isTypeOnly && (!TT.exportClause || !gT().isNamedExports(TT.exportClause) || 0 === TT.exportClause.elements.length || TT.exportClause.elements.some((TT => !TT.isTypeOnly)))
      }(TT) ? TT.moduleSpecifier.text : gT().isImportEqualsDeclaration(TT) && !TT.isTypeOnly && gT().isExternalModuleReference(TT.moduleReference) && TT.moduleReference.expression && gT().isStringLiteral(TT.moduleReference.expression) ? TT.moduleReference.expression.text : gT().isCallExpression(TT) && gT().isIdentifier(TT.expression) && "require" === TT.expression.text && 1 === TT.arguments.length && gT().isStringLiteral(TT.arguments[0]) ? TT.arguments[0].text : void 0
    }

    function HT(TT, UT, mT) {
      if (!UT.startsWith("./") && !UT.startsWith("../")) return;
      const zT = ((TT.includes("/") ? TT.slice(0, TT.lastIndexOf("/") + 1) : "") + UT).split("/"),
        MT = [];
      for (const WT of zT)
        if ("" !== WT && "." !== WT)
          if (".." !== WT) MT.push(WT);
          else {
            if (0 === MT.length) return;
            MT.pop()
          } const gT = MT.join("/");
      for (const nT of [gT, `${gT}.ts`, `${gT}.js`])
        if (nT in mT && !(0, WT.m)(nT)) return nT
    }

    function kT(TT) {
      const UT = new Set,
        mT = (0, zT.d)(TT);
      if (!mT) return [];
      const WT = [mT],
        MT = new Set;
      for (; WT.length > 0;) {
        const mT = WT.pop();
        if (!mT || MT.has(mT)) continue;
        MT.add(mT);
        const kT = gT().createSourceFile(mT, TT[mT], gT().ScriptTarget.Latest, !1),
          jT = kT => {
            const lT = nT(kT),
              LT = lT ? (0, zT.q)(lT) : null;
            if (LT) UT.add(LT);
            else if (lT) {
              const UT = HT(mT, lT, TT);
              UT && !MT.has(UT) && WT.push(UT)
            }
            gT().forEachChild(kT, jT)
          };
        jT(kT)
      }
      return [...UT].sort()
    }
  },
  41584: TT => {
    function UT(TT) {
      var UT = new Error("Cannot find module '" + TT + "'");
      throw UT.code = "MODULE_NOT_FOUND", UT
    }
    UT.keys = () => [], UT.resolve = UT, UT.id = 41584, TT.exports = UT
  },
  41577: () => {},
  41565: () => {},
  41587: () => {},
  41573: () => {},
  41569: () => {},
  41559: () => {},
  41579: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);