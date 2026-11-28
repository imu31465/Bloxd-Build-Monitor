export const id = 619;
export const ids = [619];
export const modules = {
  53689: (bb, wb, Mb) => {
    Mb.d(wb, {
      collectImportedWorldCodePluginNames: () => Lb
    });
    var eb = Mb(3500),
      Hb = Mb(38077),
      pb = Mb(53610),
      Vb = Mb.n(pb);

    function gb(bb) {
      return Vb().isImportDeclaration(bb) && Vb().isStringLiteral(bb.moduleSpecifier) && function(bb) {
        const wb = bb.importClause;
        if (!wb) return !0;
        if (wb.isTypeOnly) return !1;
        const Mb = wb.namedBindings;
        return !(Mb && !Vb().isNamespaceImport(Mb)) || !!wb.name || Mb.elements.some((bb => !bb.isTypeOnly))
      }(bb) || Vb().isExportDeclaration(bb) && bb.moduleSpecifier && Vb().isStringLiteral(bb.moduleSpecifier) && function(bb) {
        return !bb.isTypeOnly && (!bb.exportClause || !Vb().isNamedExports(bb.exportClause) || 0 === bb.exportClause.elements.length || bb.exportClause.elements.some((bb => !bb.isTypeOnly)))
      }(bb) ? bb.moduleSpecifier.text : Vb().isImportEqualsDeclaration(bb) && !bb.isTypeOnly && Vb().isExternalModuleReference(bb.moduleReference) && bb.moduleReference.expression && Vb().isStringLiteral(bb.moduleReference.expression) ? bb.moduleReference.expression.text : Vb().isCallExpression(bb) && Vb().isIdentifier(bb.expression) && "require" === bb.expression.text && 1 === bb.arguments.length && Vb().isStringLiteral(bb.arguments[0]) ? bb.arguments[0].text : void 0
    }

    function lb(bb, wb, Mb) {
      if (!wb.startsWith("./") && !wb.startsWith("../")) return;
      const Hb = ((bb.includes("/") ? bb.slice(0, bb.lastIndexOf("/") + 1) : "") + wb).split("/"),
        pb = [];
      for (const eb of Hb)
        if ("" !== eb && "." !== eb)
          if (".." !== eb) pb.push(eb);
          else {
            if (0 === pb.length) return;
            pb.pop()
          } const Vb = pb.join("/");
      for (const gb of [Vb, `${Vb}.ts`, `${Vb}.js`])
        if (gb in Mb && !(0, eb.o)(gb)) return gb
    }

    function Lb(bb) {
      const wb = new Set,
        Mb = (0, Hb.e)(bb);
      if (!Mb) return [];
      const eb = [Mb],
        pb = new Set;
      for (; eb.length > 0;) {
        const Mb = eb.pop();
        if (!Mb || pb.has(Mb)) continue;
        pb.add(Mb);
        const Lb = Vb().createSourceFile(Mb, bb[Mb], Vb().ScriptTarget.Latest, !1),
          Ib = Lb => {
            const Ob = gb(Lb),
              Ub = Ob ? (0, Hb.u)(Ob) : null;
            if (Ub) wb.add(Ub);
            else if (Ob) {
              const wb = lb(Mb, Ob, bb);
              wb && !pb.has(wb) && eb.push(wb)
            }
            Vb().forEachChild(Lb, Ib)
          };
        Ib(Lb)
      }
      return [...wb].sort()
    }
  },
  53654: bb => {
    function wb(bb) {
      var wb = new Error("Cannot find module '" + bb + "'");
      throw wb.code = "MODULE_NOT_FOUND", wb
    }
    wb.keys = () => [], wb.resolve = wb, wb.id = 53654, bb.exports = wb
  },
  53640: () => {},
  53625: () => {},
  53661: () => {},
  53638: () => {},
  53632: () => {},
  53618: () => {},
  53647: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);