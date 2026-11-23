export const id = 305;
export const ids = [305];
export const modules = {
  41563: (CC, zC, ZC) => {
    ZC.d(zC, {
      parseShaderPack: () => QC
    });

    function QC(CC) {
      var zC, ZC;
      const QC = CC.get("shaderPackUrl"),
        wC = null !== (zC = CC.get("shaderPackMode")) && void 0 !== zC ? zC : "strict";
      if (null === QC) {
        if (CC.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== CC.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(CC) {
          return "strict" === CC || "allow" === CC
        }(wC)) throw new Error(`Unknown shaderPackMode "${wC}" - use strict or allow`);
      const bC = (null !== (ZC = CC.get("variants")) && void 0 !== ZC ? ZC : "").split(",").find((CC => CC.trim().startsWith("liteShaderPack")));
      if (void 0 !== bC) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${bC.trim()}`);
      return {
        url: QC,
        mode: wC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);