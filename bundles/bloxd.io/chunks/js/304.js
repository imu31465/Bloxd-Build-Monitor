export const id = 304;
export const ids = [304];
export const modules = {
  41580: (BB, jB, zB) => {
    zB.d(jB, {
      collectImportedWorldCodePluginNames: () => UB
    });
    var QB = zB(2509),
      nB = zB(36932),
      dB = zB(41506),
      IB = zB.n(dB);

    function NB(BB) {
      return IB().isImportDeclaration(BB) && IB().isStringLiteral(BB.moduleSpecifier) && function(BB) {
        const jB = BB.importClause;
        if (!jB) return !0;
        if (jB.isTypeOnly) return !1;
        const zB = jB.namedBindings;
        return !(zB && !IB().isNamespaceImport(zB)) || !!jB.name || zB.elements.some((BB => !BB.isTypeOnly))
      }(BB) || IB().isExportDeclaration(BB) && BB.moduleSpecifier && IB().isStringLiteral(BB.moduleSpecifier) && function(BB) {
        return !BB.isTypeOnly && (!BB.exportClause || !IB().isNamedExports(BB.exportClause) || 0 === BB.exportClause.elements.length || BB.exportClause.elements.some((BB => !BB.isTypeOnly)))
      }(BB) ? BB.moduleSpecifier.text : IB().isImportEqualsDeclaration(BB) && !BB.isTypeOnly && IB().isExternalModuleReference(BB.moduleReference) && BB.moduleReference.expression && IB().isStringLiteral(BB.moduleReference.expression) ? BB.moduleReference.expression.text : IB().isCallExpression(BB) && IB().isIdentifier(BB.expression) && "require" === BB.expression.text && 1 === BB.arguments.length && IB().isStringLiteral(BB.arguments[0]) ? BB.arguments[0].text : void 0
    }

    function uB(BB, jB, zB) {
      if (!jB.startsWith("./") && !jB.startsWith("../")) return;
      const nB = ((BB.includes("/") ? BB.slice(0, BB.lastIndexOf("/") + 1) : "") + jB).split("/"),
        dB = [];
      for (const QB of nB)
        if ("" !== QB && "." !== QB)
          if (".." !== QB) dB.push(QB);
          else {
            if (0 === dB.length) return;
            dB.pop()
          } const IB = dB.join("/");
      for (const NB of [IB, `${IB}.ts`, `${IB}.js`])
        if (NB in zB && !(0, QB.l)(NB)) return NB
    }

    function UB(BB) {
      const jB = new Set,
        zB = (0, nB.e)(BB);
      if (!zB) return [];
      const QB = [zB],
        dB = new Set;
      for (; QB.length > 0;) {
        const zB = QB.pop();
        if (!zB || dB.has(zB)) continue;
        dB.add(zB);
        const UB = IB().createSourceFile(zB, BB[zB], IB().ScriptTarget.Latest, !1),
          aB = UB => {
            const pB = NB(UB),
              rB = pB ? (0, nB.y)(pB) : null;
            if (rB) jB.add(rB);
            else if (pB) {
              const jB = uB(zB, pB, BB);
              jB && !dB.has(jB) && QB.push(jB)
            }
            IB().forEachChild(UB, aB)
          };
        aB(UB)
      }
      return [...jB].sort()
    }
  },
  41551: BB => {
    function jB(BB) {
      var jB = new Error("Cannot find module '" + BB + "'");
      throw jB.code = "MODULE_NOT_FOUND", jB
    }
    jB.keys = () => [], jB.resolve = jB, jB.id = 41551, BB.exports = jB
  },
  41535: () => {},
  41518: () => {},
  41553: () => {},
  41526: () => {},
  41521: () => {},
  41509: () => {},
  41543: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);