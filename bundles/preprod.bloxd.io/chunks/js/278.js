export const id = 278;
export const ids = [278];
export const modules = {
  39912: (yb, bb, Wy) => {
    Wy.d(bb, {
      collectImportedWorldCodePluginNames: () => oy
    });
    var Uy = Wy(35604),
      hy = Wy(35595),
      fy = Wy(39846),
      Zy = Wy.n(fy);

    function cb(yb) {
      return Zy().isImportDeclaration(yb) && Zy().isStringLiteral(yb.moduleSpecifier) && function(yb) {
        const bb = yb.importClause;
        if (!bb) return !0;
        if (bb.isTypeOnly) return !1;
        const Wy = bb.namedBindings;
        return !(Wy && !Zy().isNamespaceImport(Wy)) || !!bb.name || Wy.elements.some((yb => !yb.isTypeOnly))
      }(yb) || Zy().isExportDeclaration(yb) && yb.moduleSpecifier && Zy().isStringLiteral(yb.moduleSpecifier) && function(yb) {
        return !yb.isTypeOnly && (!yb.exportClause || !Zy().isNamedExports(yb.exportClause) || 0 === yb.exportClause.elements.length || yb.exportClause.elements.some((yb => !yb.isTypeOnly)))
      }(yb) ? yb.moduleSpecifier.text : Zy().isImportEqualsDeclaration(yb) && !yb.isTypeOnly && Zy().isExternalModuleReference(yb.moduleReference) && yb.moduleReference.expression && Zy().isStringLiteral(yb.moduleReference.expression) ? yb.moduleReference.expression.text : Zy().isCallExpression(yb) && Zy().isIdentifier(yb.expression) && "require" === yb.expression.text && 1 === yb.arguments.length && Zy().isStringLiteral(yb.arguments[0]) ? yb.arguments[0].text : void 0
    }

    function Py(yb, bb, Wy) {
      if (!bb.startsWith("./") && !bb.startsWith("../")) return;
      const hy = ((yb.includes("/") ? yb.slice(0, yb.lastIndexOf("/") + 1) : "") + bb).split("/"),
        fy = [];
      for (const Uy of hy)
        if ("" !== Uy && "." !== Uy)
          if (".." !== Uy) fy.push(Uy);
          else {
            if (0 === fy.length) return;
            fy.pop()
          } const Zy = fy.join("/");
      for (const cb of [Zy, `${Zy}.ts`, `${Zy}.js`])
        if (cb in Wy && !(0, Uy.q)(cb)) return cb
    }

    function oy(yb) {
      const bb = new Set,
        Wy = (0, hy.b)(yb);
      if (!Wy) return [];
      const Uy = [Wy],
        fy = new Set;
      for (; Uy.length > 0;) {
        const Wy = Uy.pop();
        if (!Wy || fy.has(Wy)) continue;
        fy.add(Wy);
        const oy = Zy().createSourceFile(Wy, yb[Wy], Zy().ScriptTarget.Latest, !1),
          By = oy => {
            const Ky = cb(oy),
              ey = Ky ? (0, hy.n)(Ky) : null;
            if (ey) bb.add(ey);
            else if (Ky) {
              const bb = Py(Wy, Ky, yb);
              bb && !fy.has(bb) && Uy.push(bb)
            }
            Zy().forEachChild(oy, By)
          };
        By(oy)
      }
      return [...bb].sort()
    }
  },
  39878: yb => {
    function bb(yb) {
      var bb = new Error("Cannot find module '" + yb + "'");
      throw bb.code = "MODULE_NOT_FOUND", bb
    }
    bb.keys = () => [], bb.resolve = bb, bb.id = 39878, yb.exports = bb
  },
  39872: () => {},
  39855: () => {},
  39883: () => {},
  39869: () => {},
  39860: () => {},
  39849: () => {},
  39876: () => {}
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);