export const id = 305;
export const ids = [305];
export const modules = {
  41758: (mm, Tm, fm) => {
    fm.d(Tm, {
      parseShaderPack: () => hm
    });

    function hm(mm) {
      var Tm, fm;
      const hm = mm.get("shaderPackUrl"),
        Am = null !== (Tm = mm.get("shaderPackMode")) && void 0 !== Tm ? Tm : "strict";
      if (null === hm) {
        if (mm.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== mm.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(mm) {
          return "strict" === mm || "allow" === mm
        }(Am)) throw new Error(`Unknown shaderPackMode "${Am}" - use strict or allow`);
      const am = (null !== (fm = mm.get("variants")) && void 0 !== fm ? fm : "").split(",").find((mm => mm.trim().startsWith("liteShaderPack")));
      if (void 0 !== am) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${am.trim()}`);
      return {
        url: hm,
        mode: Am
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);