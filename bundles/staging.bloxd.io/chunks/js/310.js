export const id = 310;
export const ids = [310];
export const modules = {
  42193: (GG, bG, ZG) => {
    ZG.d(bG, {
      parseShaderPack: () => wG
    });

    function wG(GG) {
      var bG, ZG;
      const wG = GG.get("shaderPackUrl"),
        SG = null !== (bG = GG.get("shaderPackMode")) && void 0 !== bG ? bG : "strict";
      if (null === wG) {
        if (GG.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== GG.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(GG) {
          return "strict" === GG || "allow" === GG
        }(SG)) throw new Error(`Unknown shaderPackMode "${SG}" - use strict or allow`);
      const LG = (null !== (ZG = GG.get("variants")) && void 0 !== ZG ? ZG : "").split(",").find((GG => GG.trim().startsWith("liteShaderPack")));
      if (void 0 !== LG) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${LG.trim()}`);
      return {
        url: wG,
        mode: SG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);