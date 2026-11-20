export const id = 290;
export const ids = [290];
export const modules = {
  40908: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      collectImportedWorldCodePluginNames: () => dk
    });
    var Rk = Bk(36536),
      tk = Bk(36527),
      ak = Bk(40827),
      Xk = Bk.n(ak);

    function bk(kk) {
      return Xk().isImportDeclaration(kk) && Xk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
        const Fk = kk.importClause;
        if (!Fk) return !0;
        if (Fk.isTypeOnly) return !1;
        const Bk = Fk.namedBindings;
        return !(Bk && !Xk().isNamespaceImport(Bk)) || !!Fk.name || Bk.elements.some((kk => !kk.isTypeOnly))
      }(kk) || Xk().isExportDeclaration(kk) && kk.moduleSpecifier && Xk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
        return !kk.isTypeOnly && (!kk.exportClause || !Xk().isNamedExports(kk.exportClause) || 0 === kk.exportClause.elements.length || kk.exportClause.elements.some((kk => !kk.isTypeOnly)))
      }(kk) ? kk.moduleSpecifier.text : Xk().isImportEqualsDeclaration(kk) && !kk.isTypeOnly && Xk().isExternalModuleReference(kk.moduleReference) && kk.moduleReference.expression && Xk().isStringLiteral(kk.moduleReference.expression) ? kk.moduleReference.expression.text : Xk().isCallExpression(kk) && Xk().isIdentifier(kk.expression) && "require" === kk.expression.text && 1 === kk.arguments.length && Xk().isStringLiteral(kk.arguments[0]) ? kk.arguments[0].text : void 0
    }

    function wk(kk, Fk, Bk) {
      if (!Fk.startsWith("./") && !Fk.startsWith("../")) return;
      const tk = ((kk.includes("/") ? kk.slice(0, kk.lastIndexOf("/") + 1) : "") + Fk).split("/"),
        ak = [];
      for (const Rk of tk)
        if ("" !== Rk && "." !== Rk)
          if (".." !== Rk) ak.push(Rk);
          else {
            if (0 === ak.length) return;
            ak.pop()
          } const Xk = ak.join("/");
      for (const bk of [Xk, `${Xk}.ts`, `${Xk}.js`])
        if (bk in Bk && !(0, Rk.k)(bk)) return bk
    }

    function dk(kk) {
      const Fk = new Set,
        Bk = (0, tk.c)(kk);
      if (!Bk) return [];
      const Rk = [Bk],
        ak = new Set;
      for (; Rk.length > 0;) {
        const Bk = Rk.pop();
        if (!Bk || ak.has(Bk)) continue;
        ak.add(Bk);
        const dk = Xk().createSourceFile(Bk, kk[Bk], Xk().ScriptTarget.Latest, !1),
          sk = dk => {
            const Vk = bk(dk),
              Jk = Vk ? (0, tk.v)(Vk) : null;
            if (Jk) Fk.add(Jk);
            else if (Vk) {
              const Fk = wk(Bk, Vk, kk);
              Fk && !ak.has(Fk) && Rk.push(Fk)
            }
            Xk().forEachChild(dk, sk)
          };
        sk(dk)
      }
      return [...Fk].sort()
    }
  },
  40868: kk => {
    function Fk(kk) {
      var Fk = new Error("Cannot find module '" + kk + "'");
      throw Fk.code = "MODULE_NOT_FOUND", Fk
    }
    Fk.keys = () => [], Fk.resolve = Fk, Fk.id = 40868, kk.exports = Fk
  },
  40862: () => {},
  40841: () => {},
  40877: () => {},
  40858: () => {},
  40850: () => {},
  40833: () => {},
  40864: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);