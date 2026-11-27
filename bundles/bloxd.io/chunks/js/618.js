export const id = 618;
export const ids = [618];
export const modules = {
  53506: (RR, JR, GR) => {
    GR.d(JR, {
      collectImportedWorldCodePluginNames: () => fR
    });
    var yR = GR(3458),
      tR = GR(37976),
      uR = GR(53420),
      ZR = GR.n(uR);

    function qR(RR) {
      return ZR().isImportDeclaration(RR) && ZR().isStringLiteral(RR.moduleSpecifier) && function(RR) {
        const JR = RR.importClause;
        if (!JR) return !0;
        if (JR.isTypeOnly) return !1;
        const GR = JR.namedBindings;
        return !(GR && !ZR().isNamespaceImport(GR)) || !!JR.name || GR.elements.some((RR => !RR.isTypeOnly))
      }(RR) || ZR().isExportDeclaration(RR) && RR.moduleSpecifier && ZR().isStringLiteral(RR.moduleSpecifier) && function(RR) {
        return !RR.isTypeOnly && (!RR.exportClause || !ZR().isNamedExports(RR.exportClause) || 0 === RR.exportClause.elements.length || RR.exportClause.elements.some((RR => !RR.isTypeOnly)))
      }(RR) ? RR.moduleSpecifier.text : ZR().isImportEqualsDeclaration(RR) && !RR.isTypeOnly && ZR().isExternalModuleReference(RR.moduleReference) && RR.moduleReference.expression && ZR().isStringLiteral(RR.moduleReference.expression) ? RR.moduleReference.expression.text : ZR().isCallExpression(RR) && ZR().isIdentifier(RR.expression) && "require" === RR.expression.text && 1 === RR.arguments.length && ZR().isStringLiteral(RR.arguments[0]) ? RR.arguments[0].text : void 0
    }

    function iR(RR, JR, GR) {
      if (!JR.startsWith("./") && !JR.startsWith("../")) return;
      const tR = ((RR.includes("/") ? RR.slice(0, RR.lastIndexOf("/") + 1) : "") + JR).split("/"),
        uR = [];
      for (const yR of tR)
        if ("" !== yR && "." !== yR)
          if (".." !== yR) uR.push(yR);
          else {
            if (0 === uR.length) return;
            uR.pop()
          } const ZR = uR.join("/");
      for (const qR of [ZR, `${ZR}.ts`, `${ZR}.js`])
        if (qR in GR && !(0, yR.l)(qR)) return qR
    }

    function fR(RR) {
      const JR = new Set,
        GR = (0, tR.c)(RR);
      if (!GR) return [];
      const yR = [GR],
        uR = new Set;
      for (; yR.length > 0;) {
        const GR = yR.pop();
        if (!GR || uR.has(GR)) continue;
        uR.add(GR);
        const fR = ZR().createSourceFile(GR, RR[GR], ZR().ScriptTarget.Latest, !1),
          VR = fR => {
            const KR = qR(fR),
              wR = KR ? (0, tR.t)(KR) : null;
            if (wR) JR.add(wR);
            else if (KR) {
              const JR = iR(GR, KR, RR);
              JR && !uR.has(JR) && yR.push(JR)
            }
            ZR().forEachChild(fR, VR)
          };
        VR(fR)
      }
      return [...JR].sort()
    }
  },
  53474: RR => {
    function JR(RR) {
      var JR = new Error("Cannot find module '" + RR + "'");
      throw JR.code = "MODULE_NOT_FOUND", JR
    }
    JR.keys = () => [], JR.resolve = JR, JR.id = 53474, RR.exports = JR
  },
  53457: () => {},
  53433: () => {},
  53477: () => {},
  53449: () => {},
  53442: () => {},
  53429: () => {},
  53465: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);