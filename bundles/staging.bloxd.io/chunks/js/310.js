export const id = 310;
export const ids = [310];
export const modules = {
  41834: (BB, jB, zB) => {
    zB.d(jB, {
      parseShaderPack: () => QB
    });

    function QB(BB) {
      var jB, zB;
      const QB = BB.get("shaderPackUrl"),
        nB = null !== (jB = BB.get("shaderPackMode")) && void 0 !== jB ? jB : "strict";
      if (null === QB) {
        if (BB.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== BB.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(BB) {
          return "strict" === BB || "allow" === BB
        }(nB)) throw new Error(`Unknown shaderPackMode "${nB}" - use strict or allow`);
      const dB = (null !== (zB = BB.get("variants")) && void 0 !== zB ? zB : "").split(",").find((BB => BB.trim().startsWith("liteShaderPack")));
      if (void 0 !== dB) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${dB.trim()}`);
      return {
        url: QB,
        mode: nB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);