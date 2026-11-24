export const id = 310;
export const ids = [310];
export const modules = {
  42011: (tt, et, Vt) => {
    Vt.d(et, {
      parseShaderPack: () => Ot
    });

    function Ot(tt) {
      var et, Vt;
      const Ot = tt.get("shaderPackUrl"),
        qt = null !== (et = tt.get("shaderPackMode")) && void 0 !== et ? et : "strict";
      if (null === Ot) {
        if (tt.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== tt.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(tt) {
          return "strict" === tt || "allow" === tt
        }(qt)) throw new Error(`Unknown shaderPackMode "${qt}" - use strict or allow`);
      const Dt = (null !== (Vt = tt.get("variants")) && void 0 !== Vt ? Vt : "").split(",").find((tt => tt.trim().startsWith("liteShaderPack")));
      if (void 0 !== Dt) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Dt.trim()}`);
      return {
        url: Ot,
        mode: qt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);