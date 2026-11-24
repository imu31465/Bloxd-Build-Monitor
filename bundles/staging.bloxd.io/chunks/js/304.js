export const id = 304;
export const ids = [304];
export const modules = {
  41728: (pp, ip, cp) => {
    cp.d(ip, {
      collectImportedWorldCodePluginNames: () => Yp
    });
    var Op = cp(2487),
      op = cp(37055),
      Ip = cp(41647),
      Sp = cp.n(Ip);

    function xp(pp) {
      return Sp().isImportDeclaration(pp) && Sp().isStringLiteral(pp.moduleSpecifier) && function(pp) {
        const ip = pp.importClause;
        if (!ip) return !0;
        if (ip.isTypeOnly) return !1;
        const cp = ip.namedBindings;
        return !(cp && !Sp().isNamespaceImport(cp)) || !!ip.name || cp.elements.some((pp => !pp.isTypeOnly))
      }(pp) || Sp().isExportDeclaration(pp) && pp.moduleSpecifier && Sp().isStringLiteral(pp.moduleSpecifier) && function(pp) {
        return !pp.isTypeOnly && (!pp.exportClause || !Sp().isNamedExports(pp.exportClause) || 0 === pp.exportClause.elements.length || pp.exportClause.elements.some((pp => !pp.isTypeOnly)))
      }(pp) ? pp.moduleSpecifier.text : Sp().isImportEqualsDeclaration(pp) && !pp.isTypeOnly && Sp().isExternalModuleReference(pp.moduleReference) && pp.moduleReference.expression && Sp().isStringLiteral(pp.moduleReference.expression) ? pp.moduleReference.expression.text : Sp().isCallExpression(pp) && Sp().isIdentifier(pp.expression) && "require" === pp.expression.text && 1 === pp.arguments.length && Sp().isStringLiteral(pp.arguments[0]) ? pp.arguments[0].text : void 0
    }

    function Lp(pp, ip, cp) {
      if (!ip.startsWith("./") && !ip.startsWith("../")) return;
      const op = ((pp.includes("/") ? pp.slice(0, pp.lastIndexOf("/") + 1) : "") + ip).split("/"),
        Ip = [];
      for (const Op of op)
        if ("" !== Op && "." !== Op)
          if (".." !== Op) Ip.push(Op);
          else {
            if (0 === Ip.length) return;
            Ip.pop()
          } const Sp = Ip.join("/");
      for (const xp of [Sp, `${Sp}.ts`, `${Sp}.js`])
        if (xp in cp && !(0, Op.m)(xp)) return xp
    }

    function Yp(pp) {
      const ip = new Set,
        cp = (0, op.d)(pp);
      if (!cp) return [];
      const Op = [cp],
        Ip = new Set;
      for (; Op.length > 0;) {
        const cp = Op.pop();
        if (!cp || Ip.has(cp)) continue;
        Ip.add(cp);
        const Yp = Sp().createSourceFile(cp, pp[cp], Sp().ScriptTarget.Latest, !1),
          Dp = Yp => {
            const Ap = xp(Yp),
              Pp = Ap ? (0, op.q)(Ap) : null;
            if (Pp) ip.add(Pp);
            else if (Ap) {
              const ip = Lp(cp, Ap, pp);
              ip && !Ip.has(ip) && Op.push(ip)
            }
            Sp().forEachChild(Yp, Dp)
          };
        Dp(Yp)
      }
      return [...ip].sort()
    }
  },
  41688: pp => {
    function ip(pp) {
      var ip = new Error("Cannot find module '" + pp + "'");
      throw ip.code = "MODULE_NOT_FOUND", ip
    }
    ip.keys = () => [], ip.resolve = ip, ip.id = 41688, pp.exports = ip
  },
  41672: () => {},
  41659: () => {},
  41695: () => {},
  41666: () => {},
  41661: () => {},
  41653: () => {},
  41681: () => {}
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);