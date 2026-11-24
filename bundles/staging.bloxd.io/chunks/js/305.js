export const id = 305;
export const ids = [305];
export const modules = {
  41650: (DD, zD, wD) => {
    wD.d(zD, {
      parseShaderPack: () => pD
    });

    function pD(DD) {
      var zD, wD;
      const pD = DD.get("shaderPackUrl"),
        sD = null !== (zD = DD.get("shaderPackMode")) && void 0 !== zD ? zD : "strict";
      if (null === pD) {
        if (DD.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== DD.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(DD) {
          return "strict" === DD || "allow" === DD
        }(sD)) throw new Error(`Unknown shaderPackMode "${sD}" - use strict or allow`);
      const KD = (null !== (wD = DD.get("variants")) && void 0 !== wD ? wD : "").split(",").find((DD => DD.trim().startsWith("liteShaderPack")));
      if (void 0 !== KD) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${KD.trim()}`);
      return {
        url: pD,
        mode: sD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);