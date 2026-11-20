export const id = 290;
export const ids = [290];
export const modules = {
  40875: (UU, RU, gU) => {
    gU.d(RU, {
      collectImportedWorldCodePluginNames: () => KU
    });
    var tU = gU(36413),
      pU = gU(36406),
      EU = gU(40803),
      PU = gU.n(EU);

    function TU(UU) {
      return PU().isImportDeclaration(UU) && PU().isStringLiteral(UU.moduleSpecifier) && function(UU) {
        const RU = UU.importClause;
        if (!RU) return !0;
        if (RU.isTypeOnly) return !1;
        const gU = RU.namedBindings;
        return !(gU && !PU().isNamespaceImport(gU)) || !!RU.name || gU.elements.some((UU => !UU.isTypeOnly))
      }(UU) || PU().isExportDeclaration(UU) && UU.moduleSpecifier && PU().isStringLiteral(UU.moduleSpecifier) && function(UU) {
        return !UU.isTypeOnly && (!UU.exportClause || !PU().isNamedExports(UU.exportClause) || 0 === UU.exportClause.elements.length || UU.exportClause.elements.some((UU => !UU.isTypeOnly)))
      }(UU) ? UU.moduleSpecifier.text : PU().isImportEqualsDeclaration(UU) && !UU.isTypeOnly && PU().isExternalModuleReference(UU.moduleReference) && UU.moduleReference.expression && PU().isStringLiteral(UU.moduleReference.expression) ? UU.moduleReference.expression.text : PU().isCallExpression(UU) && PU().isIdentifier(UU.expression) && "require" === UU.expression.text && 1 === UU.arguments.length && PU().isStringLiteral(UU.arguments[0]) ? UU.arguments[0].text : void 0
    }

    function qU(UU, RU, gU) {
      if (!RU.startsWith("./") && !RU.startsWith("../")) return;
      const pU = ((UU.includes("/") ? UU.slice(0, UU.lastIndexOf("/") + 1) : "") + RU).split("/"),
        EU = [];
      for (const tU of pU)
        if ("" !== tU && "." !== tU)
          if (".." !== tU) EU.push(tU);
          else {
            if (0 === EU.length) return;
            EU.pop()
          } const PU = EU.join("/");
      for (const TU of [PU, `${PU}.ts`, `${PU}.js`])
        if (TU in gU && !(0, tU.h)(TU)) return TU
    }

    function KU(UU) {
      const RU = new Set,
        gU = (0, pU.c)(UU);
      if (!gU) return [];
      const tU = [gU],
        EU = new Set;
      for (; tU.length > 0;) {
        const gU = tU.pop();
        if (!gU || EU.has(gU)) continue;
        EU.add(gU);
        const KU = PU().createSourceFile(gU, UU[gU], PU().ScriptTarget.Latest, !1),
          cU = KU => {
            const GU = TU(KU),
              jU = GU ? (0, pU.q)(GU) : null;
            if (jU) RU.add(jU);
            else if (GU) {
              const RU = qU(gU, GU, UU);
              RU && !EU.has(RU) && tU.push(RU)
            }
            PU().forEachChild(KU, cU)
          };
        cU(KU)
      }
      return [...RU].sort()
    }
  },
  40843: UU => {
    function RU(UU) {
      var RU = new Error("Cannot find module '" + UU + "'");
      throw RU.code = "MODULE_NOT_FOUND", RU
    }
    RU.keys = () => [], RU.resolve = RU, RU.id = 40843, UU.exports = RU
  },
  40835: () => {},
  40812: () => {},
  40847: () => {},
  40828: () => {},
  40820: () => {},
  40810: () => {},
  40837: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);