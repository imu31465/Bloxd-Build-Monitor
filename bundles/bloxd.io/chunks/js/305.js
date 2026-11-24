export const id = 305;
export const ids = [305];
export const modules = {
  41767: (SS, HS, gS) => {
    gS.d(HS, {
      parseShaderPack: () => tS
    });

    function tS(SS) {
      var HS, gS;
      const tS = SS.get("shaderPackUrl"),
        bS = null !== (HS = SS.get("shaderPackMode")) && void 0 !== HS ? HS : "strict";
      if (null === tS) {
        if (SS.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== SS.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(SS) {
          return "strict" === SS || "allow" === SS
        }(bS)) throw new Error(`Unknown shaderPackMode "${bS}" - use strict or allow`);
      const XS = (null !== (gS = SS.get("variants")) && void 0 !== gS ? gS : "").split(",").find((SS => SS.trim().startsWith("liteShaderPack")));
      if (void 0 !== XS) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${XS.trim()}`);
      return {
        url: tS,
        mode: bS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);