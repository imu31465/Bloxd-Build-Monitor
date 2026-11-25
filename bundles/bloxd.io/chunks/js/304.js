export const id = 304;
export const ids = [304];
export const modules = {
  41507: (BB, IB, ZB) => {
    ZB.d(IB, {
      collectImportedWorldCodePluginNames: () => cB
    });
    var TB = ZB(2518),
      JB = ZB(36881),
      oB = ZB(41435),
      GB = ZB.n(oB);

    function vB(BB) {
      return GB().isImportDeclaration(BB) && GB().isStringLiteral(BB.moduleSpecifier) && function(BB) {
        const IB = BB.importClause;
        if (!IB) return !0;
        if (IB.isTypeOnly) return !1;
        const ZB = IB.namedBindings;
        return !(ZB && !GB().isNamespaceImport(ZB)) || !!IB.name || ZB.elements.some((BB => !BB.isTypeOnly))
      }(BB) || GB().isExportDeclaration(BB) && BB.moduleSpecifier && GB().isStringLiteral(BB.moduleSpecifier) && function(BB) {
        return !BB.isTypeOnly && (!BB.exportClause || !GB().isNamedExports(BB.exportClause) || 0 === BB.exportClause.elements.length || BB.exportClause.elements.some((BB => !BB.isTypeOnly)))
      }(BB) ? BB.moduleSpecifier.text : GB().isImportEqualsDeclaration(BB) && !BB.isTypeOnly && GB().isExternalModuleReference(BB.moduleReference) && BB.moduleReference.expression && GB().isStringLiteral(BB.moduleReference.expression) ? BB.moduleReference.expression.text : GB().isCallExpression(BB) && GB().isIdentifier(BB.expression) && "require" === BB.expression.text && 1 === BB.arguments.length && GB().isStringLiteral(BB.arguments[0]) ? BB.arguments[0].text : void 0
    }

    function kB(BB, IB, ZB) {
      if (!IB.startsWith("./") && !IB.startsWith("../")) return;
      const JB = ((BB.includes("/") ? BB.slice(0, BB.lastIndexOf("/") + 1) : "") + IB).split("/"),
        oB = [];
      for (const TB of JB)
        if ("" !== TB && "." !== TB)
          if (".." !== TB) oB.push(TB);
          else {
            if (0 === oB.length) return;
            oB.pop()
          } const GB = oB.join("/");
      for (const vB of [GB, `${GB}.ts`, `${GB}.js`])
        if (vB in ZB && !(0, TB.o)(vB)) return vB
    }

    function cB(BB) {
      const IB = new Set,
        ZB = (0, JB.b)(BB);
      if (!ZB) return [];
      const TB = [ZB],
        oB = new Set;
      for (; TB.length > 0;) {
        const ZB = TB.pop();
        if (!ZB || oB.has(ZB)) continue;
        oB.add(ZB);
        const cB = GB().createSourceFile(ZB, BB[ZB], GB().ScriptTarget.Latest, !1),
          nB = cB => {
            const hB = vB(cB),
              zB = hB ? (0, JB.p)(hB) : null;
            if (zB) IB.add(zB);
            else if (hB) {
              const IB = kB(ZB, hB, BB);
              IB && !oB.has(IB) && TB.push(IB)
            }
            GB().forEachChild(cB, nB)
          };
        nB(cB)
      }
      return [...IB].sort()
    }
  },
  41472: BB => {
    function IB(BB) {
      var IB = new Error("Cannot find module '" + BB + "'");
      throw IB.code = "MODULE_NOT_FOUND", IB
    }
    IB.keys = () => [], IB.resolve = IB, IB.id = 41472, BB.exports = IB
  },
  41465: () => {},
  41447: () => {},
  41478: () => {},
  41459: () => {},
  41451: () => {},
  41442: () => {},
  41468: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);