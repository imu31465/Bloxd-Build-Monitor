export const id = 280;
export const ids = [280];
export const modules = {
  40218: (BB, TB, dB) => {
    dB.d(TB, {
      collectImportedWorldCodePluginNames: () => gB
    });
    var VB = dB(35832),
      yB = dB(35826),
      pB = dB(40136),
      lB = dB.n(pB);

    function JB(BB) {
      return lB().isImportDeclaration(BB) && lB().isStringLiteral(BB.moduleSpecifier) && function(BB) {
        const TB = BB.importClause;
        if (!TB) return !0;
        if (TB.isTypeOnly) return !1;
        const dB = TB.namedBindings;
        return !(dB && !lB().isNamespaceImport(dB)) || !!TB.name || dB.elements.some((BB => !BB.isTypeOnly))
      }(BB) || lB().isExportDeclaration(BB) && BB.moduleSpecifier && lB().isStringLiteral(BB.moduleSpecifier) && function(BB) {
        return !BB.isTypeOnly && (!BB.exportClause || !lB().isNamedExports(BB.exportClause) || 0 === BB.exportClause.elements.length || BB.exportClause.elements.some((BB => !BB.isTypeOnly)))
      }(BB) ? BB.moduleSpecifier.text : lB().isImportEqualsDeclaration(BB) && !BB.isTypeOnly && lB().isExternalModuleReference(BB.moduleReference) && BB.moduleReference.expression && lB().isStringLiteral(BB.moduleReference.expression) ? BB.moduleReference.expression.text : lB().isCallExpression(BB) && lB().isIdentifier(BB.expression) && "require" === BB.expression.text && 1 === BB.arguments.length && lB().isStringLiteral(BB.arguments[0]) ? BB.arguments[0].text : void 0
    }

    function YB(BB, TB, dB) {
      if (!TB.startsWith("./") && !TB.startsWith("../")) return;
      const yB = ((BB.includes("/") ? BB.slice(0, BB.lastIndexOf("/") + 1) : "") + TB).split("/"),
        pB = [];
      for (const VB of yB)
        if ("" !== VB && "." !== VB)
          if (".." !== VB) pB.push(VB);
          else {
            if (0 === pB.length) return;
            pB.pop()
          } const lB = pB.join("/");
      for (const JB of [lB, `${lB}.ts`, `${lB}.js`])
        if (JB in dB && !(0, VB.p)(JB)) return JB
    }

    function gB(BB) {
      const TB = new Set,
        dB = (0, yB.c)(BB);
      if (!dB) return [];
      const VB = [dB],
        pB = new Set;
      for (; VB.length > 0;) {
        const dB = VB.pop();
        if (!dB || pB.has(dB)) continue;
        pB.add(dB);
        const gB = lB().createSourceFile(dB, BB[dB], lB().ScriptTarget.Latest, !1),
          oB = gB => {
            const kB = JB(gB),
              LB = kB ? (0, yB.p)(kB) : null;
            if (LB) TB.add(LB);
            else if (kB) {
              const TB = YB(dB, kB, BB);
              TB && !pB.has(TB) && VB.push(TB)
            }
            lB().forEachChild(gB, oB)
          };
        oB(gB)
      }
      return [...TB].sort()
    }
  },
  40174: BB => {
    function TB(BB) {
      var TB = new Error("Cannot find module '" + BB + "'");
      throw TB.code = "MODULE_NOT_FOUND", TB
    }
    TB.keys = () => [], TB.resolve = TB, TB.id = 40174, BB.exports = TB
  },
  40163: () => {},
  40142: () => {},
  40179: () => {},
  40155: () => {},
  40151: () => {},
  40140: () => {},
  40170: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);