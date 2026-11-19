export const id = 290;
export const ids = [290];
export const modules = {
  40543: (YY, rY, DY) => {
    DY.d(rY, {
      collectImportedWorldCodePluginNames: () => aY
    });
    var FY = DY(36244),
      AY = DY(36241),
      IY = DY(40484),
      RY = DY.n(IY);

    function OY(YY) {
      return RY().isImportDeclaration(YY) && RY().isStringLiteral(YY.moduleSpecifier) && function(YY) {
        const rY = YY.importClause;
        if (!rY) return !0;
        if (rY.isTypeOnly) return !1;
        const DY = rY.namedBindings;
        return !(DY && !RY().isNamespaceImport(DY)) || !!rY.name || DY.elements.some((YY => !YY.isTypeOnly))
      }(YY) || RY().isExportDeclaration(YY) && YY.moduleSpecifier && RY().isStringLiteral(YY.moduleSpecifier) && function(YY) {
        return !YY.isTypeOnly && (!YY.exportClause || !RY().isNamedExports(YY.exportClause) || 0 === YY.exportClause.elements.length || YY.exportClause.elements.some((YY => !YY.isTypeOnly)))
      }(YY) ? YY.moduleSpecifier.text : RY().isImportEqualsDeclaration(YY) && !YY.isTypeOnly && RY().isExternalModuleReference(YY.moduleReference) && YY.moduleReference.expression && RY().isStringLiteral(YY.moduleReference.expression) ? YY.moduleReference.expression.text : RY().isCallExpression(YY) && RY().isIdentifier(YY.expression) && "require" === YY.expression.text && 1 === YY.arguments.length && RY().isStringLiteral(YY.arguments[0]) ? YY.arguments[0].text : void 0
    }

    function gY(YY, rY, DY) {
      if (!rY.startsWith("./") && !rY.startsWith("../")) return;
      const AY = ((YY.includes("/") ? YY.slice(0, YY.lastIndexOf("/") + 1) : "") + rY).split("/"),
        IY = [];
      for (const FY of AY)
        if ("" !== FY && "." !== FY)
          if (".." !== FY) IY.push(FY);
          else {
            if (0 === IY.length) return;
            IY.pop()
          } const RY = IY.join("/");
      for (const OY of [RY, `${RY}.ts`, `${RY}.js`])
        if (OY in DY && !(0, FY.k)(OY)) return OY
    }

    function aY(YY) {
      const rY = new Set,
        DY = (0, AY.c)(YY);
      if (!DY) return [];
      const FY = [DY],
        IY = new Set;
      for (; FY.length > 0;) {
        const DY = FY.pop();
        if (!DY || IY.has(DY)) continue;
        IY.add(DY);
        const aY = RY().createSourceFile(DY, YY[DY], RY().ScriptTarget.Latest, !1),
          vY = aY => {
            const uY = OY(aY),
              sY = uY ? (0, AY.p)(uY) : null;
            if (sY) rY.add(sY);
            else if (uY) {
              const rY = gY(DY, uY, YY);
              rY && !IY.has(rY) && FY.push(rY)
            }
            RY().forEachChild(aY, vY)
          };
        vY(aY)
      }
      return [...rY].sort()
    }
  },
  40521: YY => {
    function rY(YY) {
      var rY = new Error("Cannot find module '" + YY + "'");
      throw rY.code = "MODULE_NOT_FOUND", rY
    }
    rY.keys = () => [], rY.resolve = rY, rY.id = 40521, YY.exports = rY
  },
  40508: () => {},
  40497: () => {},
  40524: () => {},
  40506: () => {},
  40504: () => {},
  40493: () => {},
  40515: () => {}
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);