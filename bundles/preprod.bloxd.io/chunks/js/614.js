export const id = 614;
export const ids = [614];
export const modules = {
  45226: (HH, BH, LH) => {
    LH.d(BH, {
      parseShaderPack: () => AH
    });

    function AH(HH) {
      var BH, LH;
      const AH = HH.get("shaderPackUrl"),
        rH = null !== (BH = HH.get("shaderPackMode")) && void 0 !== BH ? BH : "strict";
      if (null === AH) {
        if (HH.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== HH.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(HH) {
          return "strict" === HH || "allow" === HH
        }(rH)) throw new Error(`Unknown shaderPackMode "${rH}" - use strict or allow`);
      const SH = (null !== (LH = HH.get("variants")) && void 0 !== LH ? LH : "").split(",").find((HH => HH.trim().startsWith("liteShaderPack")));
      if (void 0 !== SH) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${SH.trim()}`);
      return {
        url: AH,
        mode: rH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);