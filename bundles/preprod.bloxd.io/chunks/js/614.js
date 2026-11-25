export const id = 614;
export const ids = [614];
export const modules = {
  44396: (MM, rM, iM) => {
    iM.d(rM, {
      parseShaderPack: () => OM
    });

    function OM(MM) {
      var rM, iM;
      const OM = MM.get("shaderPackUrl"),
        SM = null !== (rM = MM.get("shaderPackMode")) && void 0 !== rM ? rM : "strict";
      if (null === OM) {
        if (MM.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== MM.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(MM) {
          return "strict" === MM || "allow" === MM
        }(SM)) throw new Error(`Unknown shaderPackMode "${SM}" - use strict or allow`);
      const jM = (null !== (iM = MM.get("variants")) && void 0 !== iM ? iM : "").split(",").find((MM => MM.trim().startsWith("liteShaderPack")));
      if (void 0 !== jM) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${jM.trim()}`);
      return {
        url: OM,
        mode: SM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);