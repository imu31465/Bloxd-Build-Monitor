export const id = 609;
export const ids = [609];
export const modules = {
  44974: (HH, BH, LH) => {
    LH.d(BH, {
      collectImportedWorldCodePluginNames: () => CH
    });
    var AH = LH(2624),
      rH = LH(37724),
      SH = LH(44904),
      hH = LH.n(SH);

    function tH(HH) {
      return hH().isImportDeclaration(HH) && hH().isStringLiteral(HH.moduleSpecifier) && function(HH) {
        const BH = HH.importClause;
        if (!BH) return !0;
        if (BH.isTypeOnly) return !1;
        const LH = BH.namedBindings;
        return !(LH && !hH().isNamespaceImport(LH)) || !!BH.name || LH.elements.some((HH => !HH.isTypeOnly))
      }(HH) || hH().isExportDeclaration(HH) && HH.moduleSpecifier && hH().isStringLiteral(HH.moduleSpecifier) && function(HH) {
        return !HH.isTypeOnly && (!HH.exportClause || !hH().isNamedExports(HH.exportClause) || 0 === HH.exportClause.elements.length || HH.exportClause.elements.some((HH => !HH.isTypeOnly)))
      }(HH) ? HH.moduleSpecifier.text : hH().isImportEqualsDeclaration(HH) && !HH.isTypeOnly && hH().isExternalModuleReference(HH.moduleReference) && HH.moduleReference.expression && hH().isStringLiteral(HH.moduleReference.expression) ? HH.moduleReference.expression.text : hH().isCallExpression(HH) && hH().isIdentifier(HH.expression) && "require" === HH.expression.text && 1 === HH.arguments.length && hH().isStringLiteral(HH.arguments[0]) ? HH.arguments[0].text : void 0
    }

    function zH(HH, BH, LH) {
      if (!BH.startsWith("./") && !BH.startsWith("../")) return;
      const rH = ((HH.includes("/") ? HH.slice(0, HH.lastIndexOf("/") + 1) : "") + BH).split("/"),
        SH = [];
      for (const AH of rH)
        if ("" !== AH && "." !== AH)
          if (".." !== AH) SH.push(AH);
          else {
            if (0 === SH.length) return;
            SH.pop()
          } const hH = SH.join("/");
      for (const tH of [hH, `${hH}.ts`, `${hH}.js`])
        if (tH in LH && !(0, AH.p)(tH)) return tH
    }

    function CH(HH) {
      const BH = new Set,
        LH = (0, rH.d)(HH);
      if (!LH) return [];
      const AH = [LH],
        SH = new Set;
      for (; AH.length > 0;) {
        const LH = AH.pop();
        if (!LH || SH.has(LH)) continue;
        SH.add(LH);
        const CH = hH().createSourceFile(LH, HH[LH], hH().ScriptTarget.Latest, !1),
          EH = CH => {
            const XH = tH(CH),
              GH = XH ? (0, rH.m)(XH) : null;
            if (GH) BH.add(GH);
            else if (XH) {
              const BH = zH(LH, XH, HH);
              BH && !SH.has(BH) && AH.push(BH)
            }
            hH().forEachChild(CH, EH)
          };
        EH(CH)
      }
      return [...BH].sort()
    }
  },
  44939: HH => {
    function BH(HH) {
      var BH = new Error("Cannot find module '" + HH + "'");
      throw BH.code = "MODULE_NOT_FOUND", BH
    }
    BH.keys = () => [], BH.resolve = BH, BH.id = 44939, HH.exports = BH
  },
  44929: () => {},
  44918: () => {},
  44942: () => {},
  44926: () => {},
  44924: () => {},
  44909: () => {},
  44932: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);