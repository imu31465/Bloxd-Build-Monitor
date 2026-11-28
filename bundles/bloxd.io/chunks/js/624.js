export const id = 624;
export const ids = [624];
export const modules = {
  53970: (bb, wb, Mb) => {
    Mb.d(wb, {
      parseShaderPack: () => eb
    });

    function eb(bb) {
      var wb, Mb;
      const eb = bb.get("shaderPackUrl"),
        Hb = null !== (wb = bb.get("shaderPackMode")) && void 0 !== wb ? wb : "strict";
      if (null === eb) {
        if (bb.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== bb.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(bb) {
          return "strict" === bb || "allow" === bb
        }(Hb)) throw new Error(`Unknown shaderPackMode "${Hb}" - use strict or allow`);
      const pb = (null !== (Mb = bb.get("variants")) && void 0 !== Mb ? Mb : "").split(",").find((bb => bb.trim().startsWith("liteShaderPack")));
      if (void 0 !== pb) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${pb.trim()}`);
      return {
        url: eb,
        mode: Hb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);