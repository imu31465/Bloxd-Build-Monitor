export const id = 614;
export const ids = [614];
export const modules = {
  44881: (BB, OB, GB) => {
    GB.d(OB, {
      parseShaderPack: () => YB
    });

    function YB(BB) {
      var OB, GB;
      const YB = BB.get("shaderPackUrl"),
        DB = null !== (OB = BB.get("shaderPackMode")) && void 0 !== OB ? OB : "strict";
      if (null === YB) {
        if (BB.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== BB.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(BB) {
          return "strict" === BB || "allow" === BB
        }(DB)) throw new Error(`Unknown shaderPackMode "${DB}" - use strict or allow`);
      const QB = (null !== (GB = BB.get("variants")) && void 0 !== GB ? GB : "").split(",").find((BB => BB.trim().startsWith("liteShaderPack")));
      if (void 0 !== QB) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${QB.trim()}`);
      return {
        url: YB,
        mode: DB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);