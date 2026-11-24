export const id = 310;
export const ids = [310];
export const modules = {
  41771: (BB, IB, ZB) => {
    ZB.d(IB, {
      parseShaderPack: () => TB
    });

    function TB(BB) {
      var IB, ZB;
      const TB = BB.get("shaderPackUrl"),
        JB = null !== (IB = BB.get("shaderPackMode")) && void 0 !== IB ? IB : "strict";
      if (null === TB) {
        if (BB.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== BB.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(BB) {
          return "strict" === BB || "allow" === BB
        }(JB)) throw new Error(`Unknown shaderPackMode "${JB}" - use strict or allow`);
      const oB = (null !== (ZB = BB.get("variants")) && void 0 !== ZB ? ZB : "").split(",").find((BB => BB.trim().startsWith("liteShaderPack")));
      if (void 0 !== oB) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${oB.trim()}`);
      return {
        url: TB,
        mode: JB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);