export const id = 291;
export const ids = [291];
export const modules = {
  40771: (vv, zv, Pv) => {
    Pv.d(zv, {
      collectImportedWorldCodePluginNames: () => Nv
    });
    var hv = Pv(36372),
      Sv = Pv(36369),
      ev = Pv(40697),
      gv = Pv.n(ev);

    function pv(vv) {
      return gv().isImportDeclaration(vv) && gv().isStringLiteral(vv.moduleSpecifier) && function(vv) {
        const zv = vv.importClause;
        if (!zv) return !0;
        if (zv.isTypeOnly) return !1;
        const Pv = zv.namedBindings;
        return !(Pv && !gv().isNamespaceImport(Pv)) || !!zv.name || Pv.elements.some((vv => !vv.isTypeOnly))
      }(vv) || gv().isExportDeclaration(vv) && vv.moduleSpecifier && gv().isStringLiteral(vv.moduleSpecifier) && function(vv) {
        return !vv.isTypeOnly && (!vv.exportClause || !gv().isNamedExports(vv.exportClause) || 0 === vv.exportClause.elements.length || vv.exportClause.elements.some((vv => !vv.isTypeOnly)))
      }(vv) ? vv.moduleSpecifier.text : gv().isImportEqualsDeclaration(vv) && !vv.isTypeOnly && gv().isExternalModuleReference(vv.moduleReference) && vv.moduleReference.expression && gv().isStringLiteral(vv.moduleReference.expression) ? vv.moduleReference.expression.text : gv().isCallExpression(vv) && gv().isIdentifier(vv.expression) && "require" === vv.expression.text && 1 === vv.arguments.length && gv().isStringLiteral(vv.arguments[0]) ? vv.arguments[0].text : void 0
    }

    function dv(vv, zv, Pv) {
      if (!zv.startsWith("./") && !zv.startsWith("../")) return;
      const Sv = ((vv.includes("/") ? vv.slice(0, vv.lastIndexOf("/") + 1) : "") + zv).split("/"),
        ev = [];
      for (const hv of Sv)
        if ("" !== hv && "." !== hv)
          if (".." !== hv) ev.push(hv);
          else {
            if (0 === ev.length) return;
            ev.pop()
          } const gv = ev.join("/");
      for (const pv of [gv, `${gv}.ts`, `${gv}.js`])
        if (pv in Pv && !(0, hv.j)(pv)) return pv
    }

    function Nv(vv) {
      const zv = new Set,
        Pv = (0, Sv.c)(vv);
      if (!Pv) return [];
      const hv = [Pv],
        ev = new Set;
      for (; hv.length > 0;) {
        const Pv = hv.pop();
        if (!Pv || ev.has(Pv)) continue;
        ev.add(Pv);
        const Nv = gv().createSourceFile(Pv, vv[Pv], gv().ScriptTarget.Latest, !1),
          lv = Nv => {
            const Tv = pv(Nv),
              Wv = Tv ? (0, Sv.o)(Tv) : null;
            if (Wv) zv.add(Wv);
            else if (Tv) {
              const zv = dv(Pv, Tv, vv);
              zv && !ev.has(zv) && hv.push(zv)
            }
            gv().forEachChild(Nv, lv)
          };
        lv(Nv)
      }
      return [...zv].sort()
    }
  },
  40729: vv => {
    function zv(vv) {
      var zv = new Error("Cannot find module '" + vv + "'");
      throw zv.code = "MODULE_NOT_FOUND", zv
    }
    zv.keys = () => [], zv.resolve = zv, zv.id = 40729, vv.exports = zv
  },
  40719: () => {},
  40708: () => {},
  40738: () => {},
  40715: () => {},
  40710: () => {},
  40701: () => {},
  40724: () => {}
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);