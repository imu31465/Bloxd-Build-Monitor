export const id = 310;
export const ids = [310];
export const modules = {
  41888: (TT, UT, mT) => {
    mT.d(UT, {
      parseShaderPack: () => WT
    });

    function WT(TT) {
      var UT, mT;
      const WT = TT.get("shaderPackUrl"),
        zT = null !== (UT = TT.get("shaderPackMode")) && void 0 !== UT ? UT : "strict";
      if (null === WT) {
        if (TT.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== TT.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(TT) {
          return "strict" === TT || "allow" === TT
        }(zT)) throw new Error(`Unknown shaderPackMode "${zT}" - use strict or allow`);
      const MT = (null !== (mT = TT.get("variants")) && void 0 !== mT ? mT : "").split(",").find((TT => TT.trim().startsWith("liteShaderPack")));
      if (void 0 !== MT) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${MT.trim()}`);
      return {
        url: WT,
        mode: zT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);