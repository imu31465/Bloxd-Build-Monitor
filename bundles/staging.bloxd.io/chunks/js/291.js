export const id = 291;
export const ids = [291];
export const modules = {
  40928: (bb, ub, hb) => {
    hb.d(ub, {
      collectImportedWorldCodePluginNames: () => Sb
    });
    var Bb = hb(36504),
      Ob = hb(36502),
      Gb = hb(40858),
      Ub = hb.n(Gb);

    function Lb(bb) {
      return Ub().isImportDeclaration(bb) && Ub().isStringLiteral(bb.moduleSpecifier) && function(bb) {
        const ub = bb.importClause;
        if (!ub) return !0;
        if (ub.isTypeOnly) return !1;
        const hb = ub.namedBindings;
        return !(hb && !Ub().isNamespaceImport(hb)) || !!ub.name || hb.elements.some((bb => !bb.isTypeOnly))
      }(bb) || Ub().isExportDeclaration(bb) && bb.moduleSpecifier && Ub().isStringLiteral(bb.moduleSpecifier) && function(bb) {
        return !bb.isTypeOnly && (!bb.exportClause || !Ub().isNamedExports(bb.exportClause) || 0 === bb.exportClause.elements.length || bb.exportClause.elements.some((bb => !bb.isTypeOnly)))
      }(bb) ? bb.moduleSpecifier.text : Ub().isImportEqualsDeclaration(bb) && !bb.isTypeOnly && Ub().isExternalModuleReference(bb.moduleReference) && bb.moduleReference.expression && Ub().isStringLiteral(bb.moduleReference.expression) ? bb.moduleReference.expression.text : Ub().isCallExpression(bb) && Ub().isIdentifier(bb.expression) && "require" === bb.expression.text && 1 === bb.arguments.length && Ub().isStringLiteral(bb.arguments[0]) ? bb.arguments[0].text : void 0
    }

    function Yb(bb, ub, hb) {
      if (!ub.startsWith("./") && !ub.startsWith("../")) return;
      const Ob = ((bb.includes("/") ? bb.slice(0, bb.lastIndexOf("/") + 1) : "") + ub).split("/"),
        Gb = [];
      for (const Bb of Ob)
        if ("" !== Bb && "." !== Bb)
          if (".." !== Bb) Gb.push(Bb);
          else {
            if (0 === Gb.length) return;
            Gb.pop()
          } const Ub = Gb.join("/");
      for (const Lb of [Ub, `${Ub}.ts`, `${Ub}.js`])
        if (Lb in hb && !(0, Bb.j)(Lb)) return Lb
    }

    function Sb(bb) {
      const ub = new Set,
        hb = (0, Ob.d)(bb);
      if (!hb) return [];
      const Bb = [hb],
        Gb = new Set;
      for (; Bb.length > 0;) {
        const hb = Bb.pop();
        if (!hb || Gb.has(hb)) continue;
        Gb.add(hb);
        const Sb = Ub().createSourceFile(hb, bb[hb], Ub().ScriptTarget.Latest, !1),
          ab = Sb => {
            const Hb = Lb(Sb),
              wb = Hb ? (0, Ob.q)(Hb) : null;
            if (wb) ub.add(wb);
            else if (Hb) {
              const ub = Yb(hb, Hb, bb);
              ub && !Gb.has(ub) && Bb.push(ub)
            }
            Ub().forEachChild(Sb, ab)
          };
        ab(Sb)
      }
      return [...ub].sort()
    }
  },
  40893: bb => {
    function ub(bb) {
      var ub = new Error("Cannot find module '" + bb + "'");
      throw ub.code = "MODULE_NOT_FOUND", ub
    }
    ub.keys = () => [], ub.resolve = ub, ub.id = 40893, bb.exports = ub
  },
  40887: () => {},
  40874: () => {},
  40900: () => {},
  40884: () => {},
  40882: () => {},
  40865: () => {},
  40889: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);