export const id = 624;
export const ids = [624];
export const modules = {
  54166: (dd, Od, md) => {
    md.d(Od, {
      parseShaderPack: () => Wd
    });

    function Wd(dd) {
      var Od, md;
      const Wd = dd.get("shaderPackUrl"),
        Fd = null !== (Od = dd.get("shaderPackMode")) && void 0 !== Od ? Od : "strict";
      if (null === Wd) {
        if (dd.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== dd.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(dd) {
          return "strict" === dd || "allow" === dd
        }(Fd)) throw new Error(`Unknown shaderPackMode "${Fd}" - use strict or allow`);
      const Rd = (null !== (md = dd.get("variants")) && void 0 !== md ? md : "").split(",").find((dd => dd.trim().startsWith("liteShaderPack")));
      if (void 0 !== Rd) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Rd.trim()}`);
      return {
        url: Wd,
        mode: Fd
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);