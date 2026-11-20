export const id = 291;
export const ids = [291];
export const modules = {
  41081: (TT, kT, cT) => {
    cT.d(kT, {
      collectImportedWorldCodePluginNames: () => xT
    });
    var lT = cT(36693),
      MT = cT(36687),
      KT = cT(41013),
      OT = cT.n(KT);

    function yT(TT) {
      return OT().isImportDeclaration(TT) && OT().isStringLiteral(TT.moduleSpecifier) && function(TT) {
        const kT = TT.importClause;
        if (!kT) return !0;
        if (kT.isTypeOnly) return !1;
        const cT = kT.namedBindings;
        return !(cT && !OT().isNamespaceImport(cT)) || !!kT.name || cT.elements.some((TT => !TT.isTypeOnly))
      }(TT) || OT().isExportDeclaration(TT) && TT.moduleSpecifier && OT().isStringLiteral(TT.moduleSpecifier) && function(TT) {
        return !TT.isTypeOnly && (!TT.exportClause || !OT().isNamedExports(TT.exportClause) || 0 === TT.exportClause.elements.length || TT.exportClause.elements.some((TT => !TT.isTypeOnly)))
      }(TT) ? TT.moduleSpecifier.text : OT().isImportEqualsDeclaration(TT) && !TT.isTypeOnly && OT().isExternalModuleReference(TT.moduleReference) && TT.moduleReference.expression && OT().isStringLiteral(TT.moduleReference.expression) ? TT.moduleReference.expression.text : OT().isCallExpression(TT) && OT().isIdentifier(TT.expression) && "require" === TT.expression.text && 1 === TT.arguments.length && OT().isStringLiteral(TT.arguments[0]) ? TT.arguments[0].text : void 0
    }

    function fT(TT, kT, cT) {
      if (!kT.startsWith("./") && !kT.startsWith("../")) return;
      const MT = ((TT.includes("/") ? TT.slice(0, TT.lastIndexOf("/") + 1) : "") + kT).split("/"),
        KT = [];
      for (const lT of MT)
        if ("" !== lT && "." !== lT)
          if (".." !== lT) KT.push(lT);
          else {
            if (0 === KT.length) return;
            KT.pop()
          } const OT = KT.join("/");
      for (const yT of [OT, `${OT}.ts`, `${OT}.js`])
        if (yT in cT && !(0, lT.l)(yT)) return yT
    }

    function xT(TT) {
      const kT = new Set,
        cT = (0, MT.b)(TT);
      if (!cT) return [];
      const lT = [cT],
        KT = new Set;
      for (; lT.length > 0;) {
        const cT = lT.pop();
        if (!cT || KT.has(cT)) continue;
        KT.add(cT);
        const xT = OT().createSourceFile(cT, TT[cT], OT().ScriptTarget.Latest, !1),
          IT = xT => {
            const AT = yT(xT),
              CT = AT ? (0, MT.q)(AT) : null;
            if (CT) kT.add(CT);
            else if (AT) {
              const kT = fT(cT, AT, TT);
              kT && !KT.has(kT) && lT.push(kT)
            }
            OT().forEachChild(xT, IT)
          };
        IT(xT)
      }
      return [...kT].sort()
    }
  },
  41051: TT => {
    function kT(TT) {
      var kT = new Error("Cannot find module '" + TT + "'");
      throw kT.code = "MODULE_NOT_FOUND", kT
    }
    kT.keys = () => [], kT.resolve = kT, kT.id = 41051, TT.exports = kT
  },
  41042: () => {},
  41025: () => {},
  41060: () => {},
  41036: () => {},
  41027: () => {},
  41021: () => {},
  41049: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);