export const id = 623;
export const ids = [623];
export const modules = {
  53767: (RR, JR, GR) => {
    GR.d(JR, {
      parseShaderPack: () => yR
    });

    function yR(RR) {
      var JR, GR;
      const yR = RR.get("shaderPackUrl"),
        tR = null !== (JR = RR.get("shaderPackMode")) && void 0 !== JR ? JR : "strict";
      if (null === yR) {
        if (RR.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== RR.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(RR) {
          return "strict" === RR || "allow" === RR
        }(tR)) throw new Error(`Unknown shaderPackMode "${tR}" - use strict or allow`);
      const uR = (null !== (GR = RR.get("variants")) && void 0 !== GR ? GR : "").split(",").find((RR => RR.trim().startsWith("liteShaderPack")));
      if (void 0 !== uR) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${uR.trim()}`);
      return {
        url: yR,
        mode: tR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);