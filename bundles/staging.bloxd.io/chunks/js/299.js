export const id = 299;
export const ids = [299];
export const modules = {
  41384: (DD, zD, wD) => {
    wD.d(zD, {
      collectImportedWorldCodePluginNames: () => gD
    });
    var pD = wD(36821),
      sD = wD(36819),
      KD = wD(41304),
      rD = wD.n(KD);

    function LD(DD) {
      return rD().isImportDeclaration(DD) && rD().isStringLiteral(DD.moduleSpecifier) && function(DD) {
        const zD = DD.importClause;
        if (!zD) return !0;
        if (zD.isTypeOnly) return !1;
        const wD = zD.namedBindings;
        return !(wD && !rD().isNamespaceImport(wD)) || !!zD.name || wD.elements.some((DD => !DD.isTypeOnly))
      }(DD) || rD().isExportDeclaration(DD) && DD.moduleSpecifier && rD().isStringLiteral(DD.moduleSpecifier) && function(DD) {
        return !DD.isTypeOnly && (!DD.exportClause || !rD().isNamedExports(DD.exportClause) || 0 === DD.exportClause.elements.length || DD.exportClause.elements.some((DD => !DD.isTypeOnly)))
      }(DD) ? DD.moduleSpecifier.text : rD().isImportEqualsDeclaration(DD) && !DD.isTypeOnly && rD().isExternalModuleReference(DD.moduleReference) && DD.moduleReference.expression && rD().isStringLiteral(DD.moduleReference.expression) ? DD.moduleReference.expression.text : rD().isCallExpression(DD) && rD().isIdentifier(DD.expression) && "require" === DD.expression.text && 1 === DD.arguments.length && rD().isStringLiteral(DD.arguments[0]) ? DD.arguments[0].text : void 0
    }

    function cD(DD, zD, wD) {
      if (!zD.startsWith("./") && !zD.startsWith("../")) return;
      const sD = ((DD.includes("/") ? DD.slice(0, DD.lastIndexOf("/") + 1) : "") + zD).split("/"),
        KD = [];
      for (const pD of sD)
        if ("" !== pD && "." !== pD)
          if (".." !== pD) KD.push(pD);
          else {
            if (0 === KD.length) return;
            KD.pop()
          } const rD = KD.join("/");
      for (const LD of [rD, `${rD}.ts`, `${rD}.js`])
        if (LD in wD && !(0, pD.i)(LD)) return LD
    }

    function gD(DD) {
      const zD = new Set,
        wD = (0, sD.e)(DD);
      if (!wD) return [];
      const pD = [wD],
        KD = new Set;
      for (; pD.length > 0;) {
        const wD = pD.pop();
        if (!wD || KD.has(wD)) continue;
        KD.add(wD);
        const gD = rD().createSourceFile(wD, DD[wD], rD().ScriptTarget.Latest, !1),
          RD = gD => {
            const AD = LD(gD),
              UD = AD ? (0, sD.r)(AD) : null;
            if (UD) zD.add(UD);
            else if (AD) {
              const zD = cD(wD, AD, DD);
              zD && !KD.has(zD) && pD.push(zD)
            }
            rD().forEachChild(gD, RD)
          };
        RD(gD)
      }
      return [...zD].sort()
    }
  },
  41345: DD => {
    function zD(DD) {
      var zD = new Error("Cannot find module '" + DD + "'");
      throw zD.code = "MODULE_NOT_FOUND", zD
    }
    zD.keys = () => [], zD.resolve = zD, zD.id = 41345, DD.exports = zD
  },
  41332: () => {},
  41315: () => {},
  41353: () => {},
  41327: () => {},
  41321: () => {},
  41310: () => {},
  41339: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);