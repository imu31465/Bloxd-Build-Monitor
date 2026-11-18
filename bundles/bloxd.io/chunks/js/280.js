export const id = 280;
export const ids = [280];
export const modules = {
  40219: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      collectImportedWorldCodePluginNames: () => jJ
    });
    var FJ = ZJ(35886),
      UJ = ZJ(35882),
      eJ = ZJ(40138),
      XJ = ZJ.n(eJ);

    function AJ(JJ) {
      return XJ().isImportDeclaration(JJ) && XJ().isStringLiteral(JJ.moduleSpecifier) && function(JJ) {
        const cJ = JJ.importClause;
        if (!cJ) return !0;
        if (cJ.isTypeOnly) return !1;
        const ZJ = cJ.namedBindings;
        return !(ZJ && !XJ().isNamespaceImport(ZJ)) || !!cJ.name || ZJ.elements.some((JJ => !JJ.isTypeOnly))
      }(JJ) || XJ().isExportDeclaration(JJ) && JJ.moduleSpecifier && XJ().isStringLiteral(JJ.moduleSpecifier) && function(JJ) {
        return !JJ.isTypeOnly && (!JJ.exportClause || !XJ().isNamedExports(JJ.exportClause) || 0 === JJ.exportClause.elements.length || JJ.exportClause.elements.some((JJ => !JJ.isTypeOnly)))
      }(JJ) ? JJ.moduleSpecifier.text : XJ().isImportEqualsDeclaration(JJ) && !JJ.isTypeOnly && XJ().isExternalModuleReference(JJ.moduleReference) && JJ.moduleReference.expression && XJ().isStringLiteral(JJ.moduleReference.expression) ? JJ.moduleReference.expression.text : XJ().isCallExpression(JJ) && XJ().isIdentifier(JJ.expression) && "require" === JJ.expression.text && 1 === JJ.arguments.length && XJ().isStringLiteral(JJ.arguments[0]) ? JJ.arguments[0].text : void 0
    }

    function qJ(JJ, cJ, ZJ) {
      if (!cJ.startsWith("./") && !cJ.startsWith("../")) return;
      const UJ = ((JJ.includes("/") ? JJ.slice(0, JJ.lastIndexOf("/") + 1) : "") + cJ).split("/"),
        eJ = [];
      for (const FJ of UJ)
        if ("" !== FJ && "." !== FJ)
          if (".." !== FJ) eJ.push(FJ);
          else {
            if (0 === eJ.length) return;
            eJ.pop()
          } const XJ = eJ.join("/");
      for (const AJ of [XJ, `${XJ}.ts`, `${XJ}.js`])
        if (AJ in ZJ && !(0, FJ.p)(AJ)) return AJ
    }

    function jJ(JJ) {
      const cJ = new Set,
        ZJ = (0, UJ.e)(JJ);
      if (!ZJ) return [];
      const FJ = [ZJ],
        eJ = new Set;
      for (; FJ.length > 0;) {
        const ZJ = FJ.pop();
        if (!ZJ || eJ.has(ZJ)) continue;
        eJ.add(ZJ);
        const jJ = XJ().createSourceFile(ZJ, JJ[ZJ], XJ().ScriptTarget.Latest, !1),
          YJ = jJ => {
            const hJ = AJ(jJ),
              DJ = hJ ? (0, UJ.u)(hJ) : null;
            if (DJ) cJ.add(DJ);
            else if (hJ) {
              const cJ = qJ(ZJ, hJ, JJ);
              cJ && !eJ.has(cJ) && FJ.push(cJ)
            }
            XJ().forEachChild(jJ, YJ)
          };
        YJ(jJ)
      }
      return [...cJ].sort()
    }
  },
  40177: JJ => {
    function cJ(JJ) {
      var cJ = new Error("Cannot find module '" + JJ + "'");
      throw cJ.code = "MODULE_NOT_FOUND", cJ
    }
    cJ.keys = () => [], cJ.resolve = cJ, cJ.id = 40177, JJ.exports = cJ
  },
  40165: () => {},
  40149: () => {},
  40183: () => {},
  40161: () => {},
  40155: () => {},
  40142: () => {},
  40169: () => {}
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);