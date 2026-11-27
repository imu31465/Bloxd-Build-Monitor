export const id = 609;
export const ids = [609];
export const modules = {
  44675: (ee, ie, He) => {
    He.d(ie, {
      collectImportedWorldCodePluginNames: () => Je
    });
    var ye = He(2523),
      be = He(37689),
      Me = He(44595),
      Ke = He.n(Me);

    function Ue(ee) {
      return Ke().isImportDeclaration(ee) && Ke().isStringLiteral(ee.moduleSpecifier) && function(ee) {
        const ie = ee.importClause;
        if (!ie) return !0;
        if (ie.isTypeOnly) return !1;
        const He = ie.namedBindings;
        return !(He && !Ke().isNamespaceImport(He)) || !!ie.name || He.elements.some((ee => !ee.isTypeOnly))
      }(ee) || Ke().isExportDeclaration(ee) && ee.moduleSpecifier && Ke().isStringLiteral(ee.moduleSpecifier) && function(ee) {
        return !ee.isTypeOnly && (!ee.exportClause || !Ke().isNamedExports(ee.exportClause) || 0 === ee.exportClause.elements.length || ee.exportClause.elements.some((ee => !ee.isTypeOnly)))
      }(ee) ? ee.moduleSpecifier.text : Ke().isImportEqualsDeclaration(ee) && !ee.isTypeOnly && Ke().isExternalModuleReference(ee.moduleReference) && ee.moduleReference.expression && Ke().isStringLiteral(ee.moduleReference.expression) ? ee.moduleReference.expression.text : Ke().isCallExpression(ee) && Ke().isIdentifier(ee.expression) && "require" === ee.expression.text && 1 === ee.arguments.length && Ke().isStringLiteral(ee.arguments[0]) ? ee.arguments[0].text : void 0
    }

    function Fe(ee, ie, He) {
      if (!ie.startsWith("./") && !ie.startsWith("../")) return;
      const be = ((ee.includes("/") ? ee.slice(0, ee.lastIndexOf("/") + 1) : "") + ie).split("/"),
        Me = [];
      for (const ye of be)
        if ("" !== ye && "." !== ye)
          if (".." !== ye) Me.push(ye);
          else {
            if (0 === Me.length) return;
            Me.pop()
          } const Ke = Me.join("/");
      for (const Ue of [Ke, `${Ke}.ts`, `${Ke}.js`])
        if (Ue in He && !(0, ye.n)(Ue)) return Ue
    }

    function Je(ee) {
      const ie = new Set,
        He = (0, be.c)(ee);
      if (!He) return [];
      const ye = [He],
        Me = new Set;
      for (; ye.length > 0;) {
        const He = ye.pop();
        if (!He || Me.has(He)) continue;
        Me.add(He);
        const Je = Ke().createSourceFile(He, ee[He], Ke().ScriptTarget.Latest, !1),
          oe = Je => {
            const Re = Ue(Je),
              ke = Re ? (0, be.u)(Re) : null;
            if (ke) ie.add(ke);
            else if (Re) {
              const ie = Fe(He, Re, ee);
              ie && !Me.has(ie) && ye.push(ie)
            }
            Ke().forEachChild(Je, oe)
          };
        oe(Je)
      }
      return [...ie].sort()
    }
  },
  44637: ee => {
    function ie(ee) {
      var ie = new Error("Cannot find module '" + ee + "'");
      throw ie.code = "MODULE_NOT_FOUND", ie
    }
    ie.keys = () => [], ie.resolve = ie, ie.id = 44637, ee.exports = ie
  },
  44628: () => {},
  44606: () => {},
  44641: () => {},
  44619: () => {},
  44613: () => {},
  44600: () => {},
  44634: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);