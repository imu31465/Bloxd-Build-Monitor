export const id = 619;
export const ids = [619];
export const modules = {
  54043: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      collectImportedWorldCodePluginNames: () => Er
    });
    var Zr = Qr(3396),
      Wr = Qr(38339),
      ar = Qr(53957),
      jr = Qr.n(ar);

    function Ir(rr) {
      return jr().isImportDeclaration(rr) && jr().isStringLiteral(rr.moduleSpecifier) && function(rr) {
        const Sr = rr.importClause;
        if (!Sr) return !0;
        if (Sr.isTypeOnly) return !1;
        const Qr = Sr.namedBindings;
        return !(Qr && !jr().isNamespaceImport(Qr)) || !!Sr.name || Qr.elements.some((rr => !rr.isTypeOnly))
      }(rr) || jr().isExportDeclaration(rr) && rr.moduleSpecifier && jr().isStringLiteral(rr.moduleSpecifier) && function(rr) {
        return !rr.isTypeOnly && (!rr.exportClause || !jr().isNamedExports(rr.exportClause) || 0 === rr.exportClause.elements.length || rr.exportClause.elements.some((rr => !rr.isTypeOnly)))
      }(rr) ? rr.moduleSpecifier.text : jr().isImportEqualsDeclaration(rr) && !rr.isTypeOnly && jr().isExternalModuleReference(rr.moduleReference) && rr.moduleReference.expression && jr().isStringLiteral(rr.moduleReference.expression) ? rr.moduleReference.expression.text : jr().isCallExpression(rr) && jr().isIdentifier(rr.expression) && "require" === rr.expression.text && 1 === rr.arguments.length && jr().isStringLiteral(rr.arguments[0]) ? rr.arguments[0].text : void 0
    }

    function fr(rr, Sr, Qr) {
      if (!Sr.startsWith("./") && !Sr.startsWith("../")) return;
      const Wr = ((rr.includes("/") ? rr.slice(0, rr.lastIndexOf("/") + 1) : "") + Sr).split("/"),
        ar = [];
      for (const Zr of Wr)
        if ("" !== Zr && "." !== Zr)
          if (".." !== Zr) ar.push(Zr);
          else {
            if (0 === ar.length) return;
            ar.pop()
          } const jr = ar.join("/");
      for (const Ir of [jr, `${jr}.ts`, `${jr}.js`])
        if (Ir in Qr && !(0, Zr.n)(Ir)) return Ir
    }

    function Er(rr) {
      const Sr = new Set,
        Qr = (0, Wr.b)(rr);
      if (!Qr) return [];
      const Zr = [Qr],
        ar = new Set;
      for (; Zr.length > 0;) {
        const Qr = Zr.pop();
        if (!Qr || ar.has(Qr)) continue;
        ar.add(Qr);
        const Er = jr().createSourceFile(Qr, rr[Qr], jr().ScriptTarget.Latest, !1),
          pr = Er => {
            const xr = Ir(Er),
              mr = xr ? (0, Wr.q)(xr) : null;
            if (mr) Sr.add(mr);
            else if (xr) {
              const Sr = fr(Qr, xr, rr);
              Sr && !ar.has(Sr) && Zr.push(Sr)
            }
            jr().forEachChild(Er, pr)
          };
        pr(Er)
      }
      return [...Sr].sort()
    }
  },
  54007: rr => {
    function Sr(rr) {
      var Sr = new Error("Cannot find module '" + rr + "'");
      throw Sr.code = "MODULE_NOT_FOUND", Sr
    }
    Sr.keys = () => [], Sr.resolve = Sr, Sr.id = 54007, rr.exports = Sr
  },
  53995: () => {},
  53972: () => {},
  54009: () => {},
  53989: () => {},
  53980: () => {},
  53966: () => {},
  54002: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);