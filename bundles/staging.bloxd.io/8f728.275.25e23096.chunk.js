export const id = 275;
export const ids = [275];
export const modules = {
  39440: (cB, Bc, nc) => {
    nc.d(Bc, {
      collectImportedWorldCodePluginNames: () => Pc
    });
    var Vc = nc(35484),
      Ic = nc(35477),
      rB = nc(39363),
      uc = nc.n(rB);

    function sc(cB) {
      return uc().isImportDeclaration(cB) && uc().isStringLiteral(cB.moduleSpecifier) && function(cB) {
        const Bc = cB.importClause;
        if (!Bc) return !0;
        if (Bc.isTypeOnly) return !1;
        const nc = Bc.namedBindings;
        return !(nc && !uc().isNamespaceImport(nc)) || !!Bc.name || nc.elements.some((cB => !cB.isTypeOnly))
      }(cB) || uc().isExportDeclaration(cB) && cB.moduleSpecifier && uc().isStringLiteral(cB.moduleSpecifier) && function(cB) {
        return !cB.isTypeOnly && (!cB.exportClause || !uc().isNamedExports(cB.exportClause) || 0 === cB.exportClause.elements.length || cB.exportClause.elements.some((cB => !cB.isTypeOnly)))
      }(cB) ? cB.moduleSpecifier.text : uc().isImportEqualsDeclaration(cB) && !cB.isTypeOnly && uc().isExternalModuleReference(cB.moduleReference) && cB.moduleReference.expression && uc().isStringLiteral(cB.moduleReference.expression) ? cB.moduleReference.expression.text : uc().isCallExpression(cB) && uc().isIdentifier(cB.expression) && "require" === cB.expression.text && 1 === cB.arguments.length && uc().isStringLiteral(cB.arguments[0]) ? cB.arguments[0].text : void 0
    }

    function Mc(cB, Bc, nc) {
      if (!Bc.startsWith("./") && !Bc.startsWith("../")) return;
      const Ic = ((cB.includes("/") ? cB.slice(0, cB.lastIndexOf("/") + 1) : "") + Bc).split("/"),
        rB = [];
      for (const Vc of Ic)
        if ("" !== Vc && "." !== Vc)
          if (".." !== Vc) rB.push(Vc);
          else {
            if (0 === rB.length) return;
            rB.pop()
          } const uc = rB.join("/");
      for (const sc of [uc, `${uc}.ts`, `${uc}.js`])
        if (sc in nc && !(0, Vc.j)(sc)) return sc
    }

    function Pc(cB) {
      const Bc = new Set,
        nc = (0, Ic.c)(cB);
      if (!nc) return [];
      const Vc = [nc],
        rB = new Set;
      for (; Vc.length > 0;) {
        const nc = Vc.pop();
        if (!nc || rB.has(nc)) continue;
        rB.add(nc);
        const Pc = uc().createSourceFile(nc, cB[nc], uc().ScriptTarget.Latest, !1),
          qB = Pc => {
            const Oc = sc(Pc),
              Tc = Oc ? (0, Ic.t)(Oc) : null;
            if (Tc) Bc.add(Tc);
            else if (Oc) {
              const Bc = Mc(nc, Oc, cB);
              Bc && !rB.has(Bc) && Vc.push(Bc)
            }
            uc().forEachChild(Pc, qB)
          };
        qB(Pc)
      }
      return [...Bc].sort()
    }
  },
  39405: cB => {
    function Bc(cB) {
      var Bc = new Error("Cannot find module '" + cB + "'");
      throw Bc.code = "MODULE_NOT_FOUND", Bc
    }
    Bc.keys = () => [], Bc.resolve = Bc, Bc.id = 39405, cB.exports = Bc
  },
  39391: () => {},
  39372: () => {},
  39413: () => {},
  39382: () => {},
  39376: () => {},
  39370: () => {},
  39397: () => {}
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);