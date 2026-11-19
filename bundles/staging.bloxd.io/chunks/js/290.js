export const id = 290;
export const ids = [290];
export const modules = {
  40696: (zz, uz, bz) => {
    bz.d(uz, {
      collectImportedWorldCodePluginNames: () => Hz
    });
    var Ez = bz(36297),
      nz = bz(36294),
      iz = bz(40624),
      lz = bz.n(iz);

    function Mz(zz) {
      return lz().isImportDeclaration(zz) && lz().isStringLiteral(zz.moduleSpecifier) && function(zz) {
        const uz = zz.importClause;
        if (!uz) return !0;
        if (uz.isTypeOnly) return !1;
        const bz = uz.namedBindings;
        return !(bz && !lz().isNamespaceImport(bz)) || !!uz.name || bz.elements.some((zz => !zz.isTypeOnly))
      }(zz) || lz().isExportDeclaration(zz) && zz.moduleSpecifier && lz().isStringLiteral(zz.moduleSpecifier) && function(zz) {
        return !zz.isTypeOnly && (!zz.exportClause || !lz().isNamedExports(zz.exportClause) || 0 === zz.exportClause.elements.length || zz.exportClause.elements.some((zz => !zz.isTypeOnly)))
      }(zz) ? zz.moduleSpecifier.text : lz().isImportEqualsDeclaration(zz) && !zz.isTypeOnly && lz().isExternalModuleReference(zz.moduleReference) && zz.moduleReference.expression && lz().isStringLiteral(zz.moduleReference.expression) ? zz.moduleReference.expression.text : lz().isCallExpression(zz) && lz().isIdentifier(zz.expression) && "require" === zz.expression.text && 1 === zz.arguments.length && lz().isStringLiteral(zz.arguments[0]) ? zz.arguments[0].text : void 0
    }

    function tz(zz, uz, bz) {
      if (!uz.startsWith("./") && !uz.startsWith("../")) return;
      const nz = ((zz.includes("/") ? zz.slice(0, zz.lastIndexOf("/") + 1) : "") + uz).split("/"),
        iz = [];
      for (const Ez of nz)
        if ("" !== Ez && "." !== Ez)
          if (".." !== Ez) iz.push(Ez);
          else {
            if (0 === iz.length) return;
            iz.pop()
          } const lz = iz.join("/");
      for (const Mz of [lz, `${lz}.ts`, `${lz}.js`])
        if (Mz in bz && !(0, Ez.o)(Mz)) return Mz
    }

    function Hz(zz) {
      const uz = new Set,
        bz = (0, nz.c)(zz);
      if (!bz) return [];
      const Ez = [bz],
        iz = new Set;
      for (; Ez.length > 0;) {
        const bz = Ez.pop();
        if (!bz || iz.has(bz)) continue;
        iz.add(bz);
        const Hz = lz().createSourceFile(bz, zz[bz], lz().ScriptTarget.Latest, !1),
          Oz = Hz => {
            const pz = Mz(Hz),
              dz = pz ? (0, nz.r)(pz) : null;
            if (dz) uz.add(dz);
            else if (pz) {
              const uz = tz(bz, pz, zz);
              uz && !iz.has(uz) && Ez.push(uz)
            }
            lz().forEachChild(Hz, Oz)
          };
        Oz(Hz)
      }
      return [...uz].sort()
    }
  },
  40659: zz => {
    function uz(zz) {
      var uz = new Error("Cannot find module '" + zz + "'");
      throw uz.code = "MODULE_NOT_FOUND", uz
    }
    uz.keys = () => [], uz.resolve = uz, uz.id = 40659, zz.exports = uz
  },
  40649: () => {},
  40640: () => {},
  40666: () => {},
  40646: () => {},
  40642: () => {},
  40632: () => {},
  40651: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);