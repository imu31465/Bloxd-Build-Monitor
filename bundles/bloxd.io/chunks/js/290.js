export const id = 290;
export const ids = [290];
export const modules = {
  40899: (bb, cb, sb) => {
    sb.d(cb, {
      collectImportedWorldCodePluginNames: () => Hb
    });
    var kb = sb(36434),
      Wb = sb(36430),
      ab = sb(40826),
      Tb = sb.n(ab);

    function Ub(bb) {
      return Tb().isImportDeclaration(bb) && Tb().isStringLiteral(bb.moduleSpecifier) && function(bb) {
        const cb = bb.importClause;
        if (!cb) return !0;
        if (cb.isTypeOnly) return !1;
        const sb = cb.namedBindings;
        return !(sb && !Tb().isNamespaceImport(sb)) || !!cb.name || sb.elements.some((bb => !bb.isTypeOnly))
      }(bb) || Tb().isExportDeclaration(bb) && bb.moduleSpecifier && Tb().isStringLiteral(bb.moduleSpecifier) && function(bb) {
        return !bb.isTypeOnly && (!bb.exportClause || !Tb().isNamedExports(bb.exportClause) || 0 === bb.exportClause.elements.length || bb.exportClause.elements.some((bb => !bb.isTypeOnly)))
      }(bb) ? bb.moduleSpecifier.text : Tb().isImportEqualsDeclaration(bb) && !bb.isTypeOnly && Tb().isExternalModuleReference(bb.moduleReference) && bb.moduleReference.expression && Tb().isStringLiteral(bb.moduleReference.expression) ? bb.moduleReference.expression.text : Tb().isCallExpression(bb) && Tb().isIdentifier(bb.expression) && "require" === bb.expression.text && 1 === bb.arguments.length && Tb().isStringLiteral(bb.arguments[0]) ? bb.arguments[0].text : void 0
    }

    function Ib(bb, cb, sb) {
      if (!cb.startsWith("./") && !cb.startsWith("../")) return;
      const Wb = ((bb.includes("/") ? bb.slice(0, bb.lastIndexOf("/") + 1) : "") + cb).split("/"),
        ab = [];
      for (const kb of Wb)
        if ("" !== kb && "." !== kb)
          if (".." !== kb) ab.push(kb);
          else {
            if (0 === ab.length) return;
            ab.pop()
          } const Tb = ab.join("/");
      for (const Ub of [Tb, `${Tb}.ts`, `${Tb}.js`])
        if (Ub in sb && !(0, kb.l)(Ub)) return Ub
    }

    function Hb(bb) {
      const cb = new Set,
        sb = (0, Wb.e)(bb);
      if (!sb) return [];
      const kb = [sb],
        ab = new Set;
      for (; kb.length > 0;) {
        const sb = kb.pop();
        if (!sb || ab.has(sb)) continue;
        ab.add(sb);
        const Hb = Tb().createSourceFile(sb, bb[sb], Tb().ScriptTarget.Latest, !1),
          fb = Hb => {
            const Mb = Ub(Hb),
              Xb = Mb ? (0, Wb.t)(Mb) : null;
            if (Xb) cb.add(Xb);
            else if (Mb) {
              const cb = Ib(sb, Mb, bb);
              cb && !ab.has(cb) && kb.push(cb)
            }
            Tb().forEachChild(Hb, fb)
          };
        fb(Hb)
      }
      return [...cb].sort()
    }
  },
  40861: bb => {
    function cb(bb) {
      var cb = new Error("Cannot find module '" + bb + "'");
      throw cb.code = "MODULE_NOT_FOUND", cb
    }
    cb.keys = () => [], cb.resolve = cb, cb.id = 40861, bb.exports = cb
  },
  40853: () => {},
  40836: () => {},
  40864: () => {},
  40847: () => {},
  40839: () => {},
  40830: () => {},
  40857: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);