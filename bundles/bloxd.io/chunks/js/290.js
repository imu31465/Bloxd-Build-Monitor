export const id = 290;
export const ids = [290];
export const modules = {
  40604: (bb, ab, Ub) => {
    Ub.d(ab, {
      collectImportedWorldCodePluginNames: () => eb
    });
    var Ab = Ub(36195),
      Mb = Ub(36190),
      Tb = Ub(40505),
      Eb = Ub.n(Tb);

    function Yb(bb) {
      return Eb().isImportDeclaration(bb) && Eb().isStringLiteral(bb.moduleSpecifier) && function(bb) {
        const ab = bb.importClause;
        if (!ab) return !0;
        if (ab.isTypeOnly) return !1;
        const Ub = ab.namedBindings;
        return !(Ub && !Eb().isNamespaceImport(Ub)) || !!ab.name || Ub.elements.some((bb => !bb.isTypeOnly))
      }(bb) || Eb().isExportDeclaration(bb) && bb.moduleSpecifier && Eb().isStringLiteral(bb.moduleSpecifier) && function(bb) {
        return !bb.isTypeOnly && (!bb.exportClause || !Eb().isNamedExports(bb.exportClause) || 0 === bb.exportClause.elements.length || bb.exportClause.elements.some((bb => !bb.isTypeOnly)))
      }(bb) ? bb.moduleSpecifier.text : Eb().isImportEqualsDeclaration(bb) && !bb.isTypeOnly && Eb().isExternalModuleReference(bb.moduleReference) && bb.moduleReference.expression && Eb().isStringLiteral(bb.moduleReference.expression) ? bb.moduleReference.expression.text : Eb().isCallExpression(bb) && Eb().isIdentifier(bb.expression) && "require" === bb.expression.text && 1 === bb.arguments.length && Eb().isStringLiteral(bb.arguments[0]) ? bb.arguments[0].text : void 0
    }

    function Bb(bb, ab, Ub) {
      if (!ab.startsWith("./") && !ab.startsWith("../")) return;
      const Mb = ((bb.includes("/") ? bb.slice(0, bb.lastIndexOf("/") + 1) : "") + ab).split("/"),
        Tb = [];
      for (const Ab of Mb)
        if ("" !== Ab && "." !== Ab)
          if (".." !== Ab) Tb.push(Ab);
          else {
            if (0 === Tb.length) return;
            Tb.pop()
          } const Eb = Tb.join("/");
      for (const Yb of [Eb, `${Eb}.ts`, `${Eb}.js`])
        if (Yb in Ub && !(0, Ab.o)(Yb)) return Yb
    }

    function eb(bb) {
      const ab = new Set,
        Ub = (0, Mb.c)(bb);
      if (!Ub) return [];
      const Ab = [Ub],
        Tb = new Set;
      for (; Ab.length > 0;) {
        const Ub = Ab.pop();
        if (!Ub || Tb.has(Ub)) continue;
        Tb.add(Ub);
        const eb = Eb().createSourceFile(Ub, bb[Ub], Eb().ScriptTarget.Latest, !1),
          vb = eb => {
            const Lb = Yb(eb),
              Pb = Lb ? (0, Mb.s)(Lb) : null;
            if (Pb) ab.add(Pb);
            else if (Lb) {
              const ab = Bb(Ub, Lb, bb);
              ab && !Tb.has(ab) && Ab.push(ab)
            }
            Eb().forEachChild(eb, vb)
          };
        vb(eb)
      }
      return [...ab].sort()
    }
  },
  40563: bb => {
    function ab(bb) {
      var ab = new Error("Cannot find module '" + bb + "'");
      throw ab.code = "MODULE_NOT_FOUND", ab
    }
    ab.keys = () => [], ab.resolve = ab, ab.id = 40563, bb.exports = ab
  },
  40545: () => {},
  40523: () => {},
  40570: () => {},
  40540: () => {},
  40532: () => {},
  40514: () => {},
  40554: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);