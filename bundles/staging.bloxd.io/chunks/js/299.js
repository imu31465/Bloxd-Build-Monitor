export const id = 299;
export const ids = [299];
export const modules = {
  41483: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      collectImportedWorldCodePluginNames: () => qk
    });
    var Xk = Ik(36899),
      Tk = Ik(36891),
      ik = Ik(41403),
      yk = Ik.n(ik);

    function lk(kk) {
      return yk().isImportDeclaration(kk) && yk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
        const Fk = kk.importClause;
        if (!Fk) return !0;
        if (Fk.isTypeOnly) return !1;
        const Ik = Fk.namedBindings;
        return !(Ik && !yk().isNamespaceImport(Ik)) || !!Fk.name || Ik.elements.some((kk => !kk.isTypeOnly))
      }(kk) || yk().isExportDeclaration(kk) && kk.moduleSpecifier && yk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
        return !kk.isTypeOnly && (!kk.exportClause || !yk().isNamedExports(kk.exportClause) || 0 === kk.exportClause.elements.length || kk.exportClause.elements.some((kk => !kk.isTypeOnly)))
      }(kk) ? kk.moduleSpecifier.text : yk().isImportEqualsDeclaration(kk) && !kk.isTypeOnly && yk().isExternalModuleReference(kk.moduleReference) && kk.moduleReference.expression && yk().isStringLiteral(kk.moduleReference.expression) ? kk.moduleReference.expression.text : yk().isCallExpression(kk) && yk().isIdentifier(kk.expression) && "require" === kk.expression.text && 1 === kk.arguments.length && yk().isStringLiteral(kk.arguments[0]) ? kk.arguments[0].text : void 0
    }

    function ak(kk, Fk, Ik) {
      if (!Fk.startsWith("./") && !Fk.startsWith("../")) return;
      const Tk = ((kk.includes("/") ? kk.slice(0, kk.lastIndexOf("/") + 1) : "") + Fk).split("/"),
        ik = [];
      for (const Xk of Tk)
        if ("" !== Xk && "." !== Xk)
          if (".." !== Xk) ik.push(Xk);
          else {
            if (0 === ik.length) return;
            ik.pop()
          } const yk = ik.join("/");
      for (const lk of [yk, `${yk}.ts`, `${yk}.js`])
        if (lk in Ik && !(0, Xk.q)(lk)) return lk
    }

    function qk(kk) {
      const Fk = new Set,
        Ik = (0, Tk.e)(kk);
      if (!Ik) return [];
      const Xk = [Ik],
        ik = new Set;
      for (; Xk.length > 0;) {
        const Ik = Xk.pop();
        if (!Ik || ik.has(Ik)) continue;
        ik.add(Ik);
        const qk = yk().createSourceFile(Ik, kk[Ik], yk().ScriptTarget.Latest, !1),
          Lk = qk => {
            const tk = lk(qk),
              Zk = tk ? (0, Tk.v)(tk) : null;
            if (Zk) Fk.add(Zk);
            else if (tk) {
              const Fk = ak(Ik, tk, kk);
              Fk && !ik.has(Fk) && Xk.push(Fk)
            }
            yk().forEachChild(qk, Lk)
          };
        Lk(qk)
      }
      return [...Fk].sort()
    }
  },
  41452: kk => {
    function Fk(kk) {
      var Fk = new Error("Cannot find module '" + kk + "'");
      throw Fk.code = "MODULE_NOT_FOUND", Fk
    }
    Fk.keys = () => [], Fk.resolve = Fk, Fk.id = 41452, kk.exports = Fk
  },
  41439: () => {},
  41420: () => {},
  41457: () => {},
  41434: () => {},
  41426: () => {},
  41411: () => {},
  41446: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);