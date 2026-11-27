export const id = 623;
export const ids = [623];
export const modules = {
  53924: (WW, iW, OW) => {
    OW.d(iW, {
      parseShaderPack: () => mW
    });

    function mW(WW) {
      var iW, OW;
      const mW = WW.get("shaderPackUrl"),
        EW = null !== (iW = WW.get("shaderPackMode")) && void 0 !== iW ? iW : "strict";
      if (null === mW) {
        if (WW.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== WW.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(WW) {
          return "strict" === WW || "allow" === WW
        }(EW)) throw new Error(`Unknown shaderPackMode "${EW}" - use strict or allow`);
      const NW = (null !== (OW = WW.get("variants")) && void 0 !== OW ? OW : "").split(",").find((WW => WW.trim().startsWith("liteShaderPack")));
      if (void 0 !== NW) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${NW.trim()}`);
      return {
        url: mW,
        mode: EW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);