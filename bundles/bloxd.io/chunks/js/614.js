export const id = 614;
export const ids = [614];
export const modules = {
  44636: (VV, eV, xV) => {
    xV.d(eV, {
      parseShaderPack: () => JV
    });

    function JV(VV) {
      var eV, xV;
      const JV = VV.get("shaderPackUrl"),
        YV = null !== (eV = VV.get("shaderPackMode")) && void 0 !== eV ? eV : "strict";
      if (null === JV) {
        if (VV.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== VV.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(VV) {
          return "strict" === VV || "allow" === VV
        }(YV)) throw new Error(`Unknown shaderPackMode "${YV}" - use strict or allow`);
      const UV = (null !== (xV = VV.get("variants")) && void 0 !== xV ? xV : "").split(",").find((VV => VV.trim().startsWith("liteShaderPack")));
      if (void 0 !== UV) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${UV.trim()}`);
      return {
        url: JV,
        mode: YV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);