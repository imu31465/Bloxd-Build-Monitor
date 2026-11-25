export const id = 314;
export const ids = [314];
export const modules = {
  41991: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      parseShaderPack: () => wQ
    });

    function wQ(QQ) {
      var WQ, XQ;
      const wQ = QQ.get("shaderPackUrl"),
        qQ = null !== (WQ = QQ.get("shaderPackMode")) && void 0 !== WQ ? WQ : "strict";
      if (null === wQ) {
        if (QQ.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== QQ.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(QQ) {
          return "strict" === QQ || "allow" === QQ
        }(qQ)) throw new Error(`Unknown shaderPackMode "${qQ}" - use strict or allow`);
      const TQ = (null !== (XQ = QQ.get("variants")) && void 0 !== XQ ? XQ : "").split(",").find((QQ => QQ.trim().startsWith("liteShaderPack")));
      if (void 0 !== TQ) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${TQ.trim()}`);
      return {
        url: wQ,
        mode: qQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);