export const id = 299;
export const ids = [299];
export const modules = {
  41534: (mm, Tm, fm) => {
    fm.d(Tm, {
      collectImportedWorldCodePluginNames: () => im
    });
    var hm = fm(36964),
      Am = fm(36955),
      am = fm(41456),
      xm = fm.n(am);

    function wm(mm) {
      return xm().isImportDeclaration(mm) && xm().isStringLiteral(mm.moduleSpecifier) && function(mm) {
        const Tm = mm.importClause;
        if (!Tm) return !0;
        if (Tm.isTypeOnly) return !1;
        const fm = Tm.namedBindings;
        return !(fm && !xm().isNamespaceImport(fm)) || !!Tm.name || fm.elements.some((mm => !mm.isTypeOnly))
      }(mm) || xm().isExportDeclaration(mm) && mm.moduleSpecifier && xm().isStringLiteral(mm.moduleSpecifier) && function(mm) {
        return !mm.isTypeOnly && (!mm.exportClause || !xm().isNamedExports(mm.exportClause) || 0 === mm.exportClause.elements.length || mm.exportClause.elements.some((mm => !mm.isTypeOnly)))
      }(mm) ? mm.moduleSpecifier.text : xm().isImportEqualsDeclaration(mm) && !mm.isTypeOnly && xm().isExternalModuleReference(mm.moduleReference) && mm.moduleReference.expression && xm().isStringLiteral(mm.moduleReference.expression) ? mm.moduleReference.expression.text : xm().isCallExpression(mm) && xm().isIdentifier(mm.expression) && "require" === mm.expression.text && 1 === mm.arguments.length && xm().isStringLiteral(mm.arguments[0]) ? mm.arguments[0].text : void 0
    }

    function Dm(mm, Tm, fm) {
      if (!Tm.startsWith("./") && !Tm.startsWith("../")) return;
      const Am = ((mm.includes("/") ? mm.slice(0, mm.lastIndexOf("/") + 1) : "") + Tm).split("/"),
        am = [];
      for (const hm of Am)
        if ("" !== hm && "." !== hm)
          if (".." !== hm) am.push(hm);
          else {
            if (0 === am.length) return;
            am.pop()
          } const xm = am.join("/");
      for (const wm of [xm, `${xm}.ts`, `${xm}.js`])
        if (wm in fm && !(0, hm.m)(wm)) return wm
    }

    function im(mm) {
      const Tm = new Set,
        fm = (0, Am.e)(mm);
      if (!fm) return [];
      const hm = [fm],
        am = new Set;
      for (; hm.length > 0;) {
        const fm = hm.pop();
        if (!fm || am.has(fm)) continue;
        am.add(fm);
        const im = xm().createSourceFile(fm, mm[fm], xm().ScriptTarget.Latest, !1),
          Rm = im => {
            const pm = wm(im),
              Em = pm ? (0, Am.w)(pm) : null;
            if (Em) Tm.add(Em);
            else if (pm) {
              const Tm = Dm(fm, pm, mm);
              Tm && !am.has(Tm) && hm.push(Tm)
            }
            xm().forEachChild(im, Rm)
          };
        Rm(im)
      }
      return [...Tm].sort()
    }
  },
  41493: mm => {
    function Tm(mm) {
      var Tm = new Error("Cannot find module '" + mm + "'");
      throw Tm.code = "MODULE_NOT_FOUND", Tm
    }
    Tm.keys = () => [], Tm.resolve = Tm, Tm.id = 41493, mm.exports = Tm
  },
  41480: () => {},
  41462: () => {},
  41502: () => {},
  41478: () => {},
  41470: () => {},
  41458: () => {},
  41487: () => {}
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);