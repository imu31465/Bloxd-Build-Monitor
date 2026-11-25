export const id = 304;
export const ids = [304];
export const modules = {
  41728: (tt, et, Vt) => {
    Vt.d(et, {
      collectImportedWorldCodePluginNames: () => Ht
    });
    var Ot = Vt(2495),
      qt = Vt(37093),
      Dt = Vt(41639),
      mt = Vt.n(Dt);

    function dt(tt) {
      return mt().isImportDeclaration(tt) && mt().isStringLiteral(tt.moduleSpecifier) && function(tt) {
        const et = tt.importClause;
        if (!et) return !0;
        if (et.isTypeOnly) return !1;
        const Vt = et.namedBindings;
        return !(Vt && !mt().isNamespaceImport(Vt)) || !!et.name || Vt.elements.some((tt => !tt.isTypeOnly))
      }(tt) || mt().isExportDeclaration(tt) && tt.moduleSpecifier && mt().isStringLiteral(tt.moduleSpecifier) && function(tt) {
        return !tt.isTypeOnly && (!tt.exportClause || !mt().isNamedExports(tt.exportClause) || 0 === tt.exportClause.elements.length || tt.exportClause.elements.some((tt => !tt.isTypeOnly)))
      }(tt) ? tt.moduleSpecifier.text : mt().isImportEqualsDeclaration(tt) && !tt.isTypeOnly && mt().isExternalModuleReference(tt.moduleReference) && tt.moduleReference.expression && mt().isStringLiteral(tt.moduleReference.expression) ? tt.moduleReference.expression.text : mt().isCallExpression(tt) && mt().isIdentifier(tt.expression) && "require" === tt.expression.text && 1 === tt.arguments.length && mt().isStringLiteral(tt.arguments[0]) ? tt.arguments[0].text : void 0
    }

    function jt(tt, et, Vt) {
      if (!et.startsWith("./") && !et.startsWith("../")) return;
      const qt = ((tt.includes("/") ? tt.slice(0, tt.lastIndexOf("/") + 1) : "") + et).split("/"),
        Dt = [];
      for (const Ot of qt)
        if ("" !== Ot && "." !== Ot)
          if (".." !== Ot) Dt.push(Ot);
          else {
            if (0 === Dt.length) return;
            Dt.pop()
          } const mt = Dt.join("/");
      for (const dt of [mt, `${mt}.ts`, `${mt}.js`])
        if (dt in Vt && !(0, Ot.r)(dt)) return dt
    }

    function Ht(tt) {
      const et = new Set,
        Vt = (0, qt.d)(tt);
      if (!Vt) return [];
      const Ot = [Vt],
        Dt = new Set;
      for (; Ot.length > 0;) {
        const Vt = Ot.pop();
        if (!Vt || Dt.has(Vt)) continue;
        Dt.add(Vt);
        const Ht = mt().createSourceFile(Vt, tt[Vt], mt().ScriptTarget.Latest, !1),
          Xt = Ht => {
            const Qt = dt(Ht),
              lt = Qt ? (0, qt.o)(Qt) : null;
            if (lt) et.add(lt);
            else if (Qt) {
              const et = jt(Vt, Qt, tt);
              et && !Dt.has(et) && Ot.push(et)
            }
            mt().forEachChild(Ht, Xt)
          };
        Xt(Ht)
      }
      return [...et].sort()
    }
  },
  41685: tt => {
    function et(tt) {
      var et = new Error("Cannot find module '" + tt + "'");
      throw et.code = "MODULE_NOT_FOUND", et
    }
    et.keys = () => [], et.resolve = et, et.id = 41685, tt.exports = et
  },
  41669: () => {},
  41648: () => {},
  41692: () => {},
  41660: () => {},
  41651: () => {},
  41645: () => {},
  41677: () => {}
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);