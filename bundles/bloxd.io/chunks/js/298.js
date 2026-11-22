export const id = 298;
export const ids = [298];
export const modules = {
  41050: (kk, ek, ik) => {
    ik.d(ek, {
      collectImportedWorldCodePluginNames: () => mk
    });
    var Dk = ik(36463),
      fk = ik(36454),
      Sk = ik(40972),
      bk = ik.n(Sk);

    function rk(kk) {
      return bk().isImportDeclaration(kk) && bk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
        const ek = kk.importClause;
        if (!ek) return !0;
        if (ek.isTypeOnly) return !1;
        const ik = ek.namedBindings;
        return !(ik && !bk().isNamespaceImport(ik)) || !!ek.name || ik.elements.some((kk => !kk.isTypeOnly))
      }(kk) || bk().isExportDeclaration(kk) && kk.moduleSpecifier && bk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
        return !kk.isTypeOnly && (!kk.exportClause || !bk().isNamedExports(kk.exportClause) || 0 === kk.exportClause.elements.length || kk.exportClause.elements.some((kk => !kk.isTypeOnly)))
      }(kk) ? kk.moduleSpecifier.text : bk().isImportEqualsDeclaration(kk) && !kk.isTypeOnly && bk().isExternalModuleReference(kk.moduleReference) && kk.moduleReference.expression && bk().isStringLiteral(kk.moduleReference.expression) ? kk.moduleReference.expression.text : bk().isCallExpression(kk) && bk().isIdentifier(kk.expression) && "require" === kk.expression.text && 1 === kk.arguments.length && bk().isStringLiteral(kk.arguments[0]) ? kk.arguments[0].text : void 0
    }

    function Pk(kk, ek, ik) {
      if (!ek.startsWith("./") && !ek.startsWith("../")) return;
      const fk = ((kk.includes("/") ? kk.slice(0, kk.lastIndexOf("/") + 1) : "") + ek).split("/"),
        Sk = [];
      for (const Dk of fk)
        if ("" !== Dk && "." !== Dk)
          if (".." !== Dk) Sk.push(Dk);
          else {
            if (0 === Sk.length) return;
            Sk.pop()
          } const bk = Sk.join("/");
      for (const rk of [bk, `${bk}.ts`, `${bk}.js`])
        if (rk in ik && !(0, Dk.t)(rk)) return rk
    }

    function mk(kk) {
      const ek = new Set,
        ik = (0, fk.c)(kk);
      if (!ik) return [];
      const Dk = [ik],
        Sk = new Set;
      for (; Dk.length > 0;) {
        const ik = Dk.pop();
        if (!ik || Sk.has(ik)) continue;
        Sk.add(ik);
        const mk = bk().createSourceFile(ik, kk[ik], bk().ScriptTarget.Latest, !1),
          Mk = mk => {
            const Kk = rk(mk),
              xk = Kk ? (0, fk.p)(Kk) : null;
            if (xk) ek.add(xk);
            else if (Kk) {
              const ek = Pk(ik, Kk, kk);
              ek && !Sk.has(ek) && Dk.push(ek)
            }
            bk().forEachChild(mk, Mk)
          };
        Mk(mk)
      }
      return [...ek].sort()
    }
  },
  41012: kk => {
    function ek(kk) {
      var ek = new Error("Cannot find module '" + kk + "'");
      throw ek.code = "MODULE_NOT_FOUND", ek
    }
    ek.keys = () => [], ek.resolve = ek, ek.id = 41012, kk.exports = ek
  },
  40998: () => {},
  40982: () => {},
  41015: () => {},
  40994: () => {},
  40985: () => {},
  40974: () => {},
  41003: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);