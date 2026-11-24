export const id = 310;
export const ids = [310];
export const modules = {
  41996: (pp, ip, cp) => {
    cp.d(ip, {
      parseShaderPack: () => Op
    });

    function Op(pp) {
      var ip, cp;
      const Op = pp.get("shaderPackUrl"),
        op = null !== (ip = pp.get("shaderPackMode")) && void 0 !== ip ? ip : "strict";
      if (null === Op) {
        if (pp.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== pp.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(pp) {
          return "strict" === pp || "allow" === pp
        }(op)) throw new Error(`Unknown shaderPackMode "${op}" - use strict or allow`);
      const Ip = (null !== (cp = pp.get("variants")) && void 0 !== cp ? cp : "").split(",").find((pp => pp.trim().startsWith("liteShaderPack")));
      if (void 0 !== Ip) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Ip.trim()}`);
      return {
        url: Op,
        mode: op
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);