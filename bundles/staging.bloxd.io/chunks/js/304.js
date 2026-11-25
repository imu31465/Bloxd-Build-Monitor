export const id = 304;
export const ids = [304];
export const modules = {
  41902: (GG, bG, ZG) => {
    ZG.d(bG, {
      collectImportedWorldCodePluginNames: () => YG
    });
    var wG = ZG(2404),
      SG = ZG(37200),
      LG = ZG(41820),
      yG = ZG.n(LG);

    function kG(GG) {
      return yG().isImportDeclaration(GG) && yG().isStringLiteral(GG.moduleSpecifier) && function(GG) {
        const bG = GG.importClause;
        if (!bG) return !0;
        if (bG.isTypeOnly) return !1;
        const ZG = bG.namedBindings;
        return !(ZG && !yG().isNamespaceImport(ZG)) || !!bG.name || ZG.elements.some((GG => !GG.isTypeOnly))
      }(GG) || yG().isExportDeclaration(GG) && GG.moduleSpecifier && yG().isStringLiteral(GG.moduleSpecifier) && function(GG) {
        return !GG.isTypeOnly && (!GG.exportClause || !yG().isNamedExports(GG.exportClause) || 0 === GG.exportClause.elements.length || GG.exportClause.elements.some((GG => !GG.isTypeOnly)))
      }(GG) ? GG.moduleSpecifier.text : yG().isImportEqualsDeclaration(GG) && !GG.isTypeOnly && yG().isExternalModuleReference(GG.moduleReference) && GG.moduleReference.expression && yG().isStringLiteral(GG.moduleReference.expression) ? GG.moduleReference.expression.text : yG().isCallExpression(GG) && yG().isIdentifier(GG.expression) && "require" === GG.expression.text && 1 === GG.arguments.length && yG().isStringLiteral(GG.arguments[0]) ? GG.arguments[0].text : void 0
    }

    function UG(GG, bG, ZG) {
      if (!bG.startsWith("./") && !bG.startsWith("../")) return;
      const SG = ((GG.includes("/") ? GG.slice(0, GG.lastIndexOf("/") + 1) : "") + bG).split("/"),
        LG = [];
      for (const wG of SG)
        if ("" !== wG && "." !== wG)
          if (".." !== wG) LG.push(wG);
          else {
            if (0 === LG.length) return;
            LG.pop()
          } const yG = LG.join("/");
      for (const kG of [yG, `${yG}.ts`, `${yG}.js`])
        if (kG in ZG && !(0, wG.l)(kG)) return kG
    }

    function YG(GG) {
      const bG = new Set,
        ZG = (0, SG.b)(GG);
      if (!ZG) return [];
      const wG = [ZG],
        LG = new Set;
      for (; wG.length > 0;) {
        const ZG = wG.pop();
        if (!ZG || LG.has(ZG)) continue;
        LG.add(ZG);
        const YG = yG().createSourceFile(ZG, GG[ZG], yG().ScriptTarget.Latest, !1),
          VG = YG => {
            const pG = kG(YG),
              fG = pG ? (0, SG.s)(pG) : null;
            if (fG) bG.add(fG);
            else if (pG) {
              const bG = UG(ZG, pG, GG);
              bG && !LG.has(bG) && wG.push(bG)
            }
            yG().forEachChild(YG, VG)
          };
        VG(YG)
      }
      return [...bG].sort()
    }
  },
  41857: GG => {
    function bG(GG) {
      var bG = new Error("Cannot find module '" + GG + "'");
      throw bG.code = "MODULE_NOT_FOUND", bG
    }
    bG.keys = () => [], bG.resolve = bG, bG.id = 41857, GG.exports = bG
  },
  41844: () => {},
  41828: () => {},
  41863: () => {},
  41837: () => {},
  41833: () => {},
  41824: () => {},
  41853: () => {}
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);