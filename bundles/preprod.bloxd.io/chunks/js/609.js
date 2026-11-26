export const id = 609;
export const ids = [609];
export const modules = {
  44634: (BB, OB, GB) => {
    GB.d(OB, {
      collectImportedWorldCodePluginNames: () => JB
    });
    var YB = GB(2646),
      DB = GB(37547),
      QB = GB(44559),
      oB = GB.n(QB);

    function jB(BB) {
      return oB().isImportDeclaration(BB) && oB().isStringLiteral(BB.moduleSpecifier) && function(BB) {
        const OB = BB.importClause;
        if (!OB) return !0;
        if (OB.isTypeOnly) return !1;
        const GB = OB.namedBindings;
        return !(GB && !oB().isNamespaceImport(GB)) || !!OB.name || GB.elements.some((BB => !BB.isTypeOnly))
      }(BB) || oB().isExportDeclaration(BB) && BB.moduleSpecifier && oB().isStringLiteral(BB.moduleSpecifier) && function(BB) {
        return !BB.isTypeOnly && (!BB.exportClause || !oB().isNamedExports(BB.exportClause) || 0 === BB.exportClause.elements.length || BB.exportClause.elements.some((BB => !BB.isTypeOnly)))
      }(BB) ? BB.moduleSpecifier.text : oB().isImportEqualsDeclaration(BB) && !BB.isTypeOnly && oB().isExternalModuleReference(BB.moduleReference) && BB.moduleReference.expression && oB().isStringLiteral(BB.moduleReference.expression) ? BB.moduleReference.expression.text : oB().isCallExpression(BB) && oB().isIdentifier(BB.expression) && "require" === BB.expression.text && 1 === BB.arguments.length && oB().isStringLiteral(BB.arguments[0]) ? BB.arguments[0].text : void 0
    }

    function yB(BB, OB, GB) {
      if (!OB.startsWith("./") && !OB.startsWith("../")) return;
      const DB = ((BB.includes("/") ? BB.slice(0, BB.lastIndexOf("/") + 1) : "") + OB).split("/"),
        QB = [];
      for (const YB of DB)
        if ("" !== YB && "." !== YB)
          if (".." !== YB) QB.push(YB);
          else {
            if (0 === QB.length) return;
            QB.pop()
          } const oB = QB.join("/");
      for (const jB of [oB, `${oB}.ts`, `${oB}.js`])
        if (jB in GB && !(0, YB.k)(jB)) return jB
    }

    function JB(BB) {
      const OB = new Set,
        GB = (0, DB.e)(BB);
      if (!GB) return [];
      const YB = [GB],
        QB = new Set;
      for (; YB.length > 0;) {
        const GB = YB.pop();
        if (!GB || QB.has(GB)) continue;
        QB.add(GB);
        const JB = oB().createSourceFile(GB, BB[GB], oB().ScriptTarget.Latest, !1),
          MB = JB => {
            const PB = jB(JB),
              zB = PB ? (0, DB.t)(PB) : null;
            if (zB) OB.add(zB);
            else if (PB) {
              const OB = yB(GB, PB, BB);
              OB && !QB.has(OB) && YB.push(OB)
            }
            oB().forEachChild(JB, MB)
          };
        MB(JB)
      }
      return [...OB].sort()
    }
  },
  44604: BB => {
    function OB(BB) {
      var OB = new Error("Cannot find module '" + BB + "'");
      throw OB.code = "MODULE_NOT_FOUND", OB
    }
    OB.keys = () => [], OB.resolve = OB, OB.id = 44604, BB.exports = OB
  },
  44590: () => {},
  44575: () => {},
  44607: () => {},
  44587: () => {},
  44583: () => {},
  44566: () => {},
  44595: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);